// Menambahkan rilis Morvyn terbaru di Google Play ke src/content/releases.json.
//
//   PLAY_SERVICE_ACCOUNT_JSON='{...}' node scripts/sync-play-release.mjs
//   node scripts/sync-play-release.mjs --from-file contoh-track.json --dry-run
//
// Dijalankan setiap hari oleh .github/workflows/sync-play-release.yml.
//
// Yang dilakukan:
// 1. Masuk ke Google Play Developer API dengan akun layanan (kuncinya dari
//    variabel lingkungan PLAY_SERVICE_ACCOUNT_JSON, yang di GitHub disimpan
//    sebagai secret, tidak pernah di repositori).
// 2. Membaca jalur produksi: rilis yang sedang tayang, nomor versinya, dan
//    teks "Yang baru" per bahasa. Untuk itu Play mewajibkan membuka sebuah
//    "edit"; edit itu dihapus lagi tanpa pernah di-commit, jadi TIDAK ADA
//    yang berubah di Play Console.
// 3. Kalau versionCode-nya belum ada di releases.json, menambah satu entri
//    di urutan teratas. Kalau sudah ada, tidak melakukan apa-apa.
//
// Yang dianggap "tayang": rilis berstatus `completed` (sudah sampai ke semua
// pengguna) atau `inProgress` (peluncuran bertahap). Draf dan rilis yang
// dihentikan (`halted`) diabaikan.
//
// Nomor versi (mis. 1.7.0) diambil dari NAMA rilis di Play Console, yang
// bawaannya berbentuk "40 (1.7.0)". Play API tidak menyediakan versionName
// dengan cara lain. Kalau nama rilisnya diganti tanpa nomor versi, skrip ini
// berhenti dengan pesan galat alih-alih menebak.
//
// Hanya memakai modul bawaan Node (fetch, crypto), tanpa dependensi.

import { createSign } from "node:crypto";
import { appendFileSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const releasesFile = join(root, "src/content/releases.json");
const packageName = "com.himikolab.morvyn";
const api = `https://androidpublisher.googleapis.com/androidpublisher/v3/applications/${packageName}`;

// --- Bagian murni: dipakai juga oleh uji dengan --from-file -------------

/** Rilis tayang dengan versionCode tertinggi di jalur produksi. */
export function pickLiveRelease(track) {
  const live = (track.releases ?? []).filter(
    (release) => release.status === "completed" || release.status === "inProgress",
  );
  if (live.length === 0) return null;
  const top = (release) => Math.max(...(release.versionCodes ?? ["0"]).map(Number));
  return live.sort((a, b) => top(b) - top(a))[0];
}

/** Teks "Yang baru" untuk satu bahasa situs, dari daftar bahasa Play. */
function notesFor(release, locale) {
  const notes = release.releaseNotes ?? [];
  const matches =
    locale === "id"
      ? notes.filter((n) => ["id", "in", "id-ID"].includes(n.language))
      : notes.filter((n) => n.language?.toLowerCase().startsWith("en"));
  // en-US didahulukan bila ada beberapa varian Inggris.
  const chosen = matches.find((n) => n.language === "en-US") ?? matches[0];
  return chosen?.text?.trim() ?? "";
}

/** Entri releases.json dari satu rilis Play. */
export function toEntry(release, addedIso) {
  const versionCode = Math.max(...release.versionCodes.map(Number));
  const version = release.name?.match(/\d+\.\d+(?:\.\d+)*/)?.[0];
  if (!version) {
    throw new Error(
      `Nama rilis Play "${release.name}" tidak memuat nomor versi (mis. "${versionCode} (1.7.0)"). ` +
        "Ubah nama rilisnya di Play Console, atau tambahkan entrinya dengan tangan.",
    );
  }
  const id = notesFor(release, "id");
  const en = notesFor(release, "en");
  const missing = [!id && "Indonesia", !en && "Inggris"].filter(Boolean);
  if (missing.length) {
    throw new Error(
      `Rilis ${version} (${versionCode}) belum punya teks "Yang baru" dalam bahasa ${missing.join(" dan ")} di Play. ` +
        "Situs butuh keduanya. Tambahkan di Play Console, atau tambahkan entrinya dengan tangan.",
    );
  }
  return { version, versionCode, addedIso, notes: { id, en } };
}

/** Menambah entri di urutan teratas bila versionCode-nya baru. */
export function mergeRelease(data, entry) {
  const known = data.releases.some((r) => r.versionCode === entry.versionCode);
  const newest = Math.max(...data.releases.map((r) => r.versionCode));
  if (known || entry.versionCode < newest) return { changed: false, data };
  return { changed: true, data: { ...data, releases: [entry, ...data.releases] } };
}

/** Tanggal hari ini menurut WIB, bentuk YYYY-MM-DD. */
function todayJakarta() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Jakarta" }).format(new Date());
}

// --- Bagian jaringan ------------------------------------------------------

const b64url = (input) => Buffer.from(input).toString("base64url");

async function accessToken(key) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(
    JSON.stringify({
      iss: key.client_email,
      scope: "https://www.googleapis.com/auth/androidpublisher",
      aud: key.token_uri ?? "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    }),
  );
  const signature = createSign("RSA-SHA256")
    .update(`${header}.${claims}`)
    .sign(key.private_key, "base64url");

  const response = await fetch(key.token_uri ?? "https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${header}.${claims}.${signature}`,
    }),
  });
  if (!response.ok) {
    throw new Error(`Gagal masuk dengan akun layanan (${response.status}): ${await response.text()}`);
  }
  return (await response.json()).access_token;
}

async function call(token, method, path) {
  const response = await fetch(`${api}${path}`, {
    method,
    headers: { Authorization: `Bearer ${token}` },
  });
  if (response.status === 401 || response.status === 403) {
    throw new Error(
      `Play API menolak akses (${response.status}). Periksa bahwa akun layanan sudah diundang di ` +
        "Play Console, Pengguna dan izin, dengan akses ke aplikasi Morvyn, dan bahwa " +
        `Google Play Android Developer API sudah diaktifkan. Balasan: ${await response.text()}`,
    );
  }
  if (!response.ok) throw new Error(`${method} ${path} gagal (${response.status}): ${await response.text()}`);
  return response.status === 204 ? null : response.json();
}

async function fetchProductionTrack() {
  const raw = process.env.PLAY_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error("PLAY_SERVICE_ACCOUNT_JSON kosong. Simpan kunci akun layanan sebagai secret di GitHub.");
  const token = await accessToken(JSON.parse(raw));
  const edit = await call(token, "POST", "/edits");
  try {
    return await call(token, "GET", `/edits/${edit.id}/tracks/production`);
  } finally {
    // Edit hanya dipakai untuk membaca. Dihapus supaya tidak menggantung
    // di Play Console; tidak ada yang pernah di-commit.
    await call(token, "DELETE", `/edits/${edit.id}`).catch(() => {});
  }
}

// --- Jalankan -------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const fromFile = args.includes("--from-file") ? args[args.indexOf("--from-file") + 1] : null;
  const dryRun = args.includes("--dry-run");

  const track = fromFile ? JSON.parse(readFileSync(fromFile, "utf8")) : await fetchProductionTrack();
  const release = pickLiveRelease(track);
  if (!release) {
    console.log("Tidak ada rilis tayang di jalur produksi. Tidak ada yang diubah.");
    return;
  }

  const entry = toEntry(release, todayJakarta());
  const data = JSON.parse(readFileSync(releasesFile, "utf8"));
  const result = mergeRelease(data, entry);

  if (!result.changed) {
    console.log(`Versi tayang ${entry.version} (${entry.versionCode}) sudah ada di releases.json.`);
    return;
  }

  console.log(`Versi baru di Play: ${entry.version} (${entry.versionCode}).`);
  if (dryRun) {
    console.log(JSON.stringify(entry, null, 2));
    return;
  }
  writeFileSync(releasesFile, `${JSON.stringify(result.data, null, 2)}\n`);
  console.log("releases.json diperbarui.");

  // Diteruskan ke langkah berikutnya di workflow GitHub.
  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(process.env.GITHUB_OUTPUT, `version=${entry.version}\nversion_code=${entry.versionCode}\n`);
  }
}

// pathToFileURL, bukan "file://" + path: alamat repo ini mengandung spasi,
// yang di import.meta.url tertulis %20.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}
