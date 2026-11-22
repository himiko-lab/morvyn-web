import data from "./releases.json";
import type { Locale } from "./index";

/**
 * Riwayat versi Morvyn, dibaca dari `releases.json`.
 *
 * Berkas JSON itu SATU-SATUNYA tempat versi aplikasi ditulis di situs ini.
 * Dari sanalah halaman Catatan Rilis, `softwareVersion` di data terstruktur,
 * dan kalimat "Versi terkini" berasal. Menambah versi baru cukup dengan
 * menambah satu entri di urutan paling atas; tidak ada berkas lain yang
 * perlu disentuh.
 *
 * `notes` berisi teks "Yang baru" persis seperti di Google Play, per bahasa:
 * baris berawalan "• " menjadi butir, baris lain menjadi paragraf. Bentuk ini
 * sengaja disamakan dengan Play supaya teksnya bisa disalin apa adanya,
 * dengan tangan maupun oleh otomatisasi.
 *
 * `addedIso` adalah tanggal entri itu masuk ke situs, bukan tanggal rilis di
 * Play (yang tidak diketahui). Dipakai hanya untuk `lastmod` peta situs, dan
 * sengaja TIDAK ditampilkan sebagai tanggal rilis.
 *
 * Versi yang tidak pernah sampai ke pengguna (mis. 1.5.0 dengan versionCode
 * 37, yang ditarik karena masalah manifest) tidak dicantumkan.
 */
export interface Release {
  version: string;
  versionCode: number;
  addedIso: string;
  notes: Record<Locale, string>;
}

export const releases: Release[] = data.releases;

/**
 * Jumlah versi yang tampil terbuka di halaman Catatan Rilis. Versi yang lebih
 * lama tetap ada, terlipat di bawah tombol "Versi sebelumnya".
 */
export const releasesShown = 10;

/** Versi terbaru, yaitu entri pertama. */
export const appVersion = releases[0].version;

/** Tanggal terakhir Catatan Rilis berubah, untuk `lastmod` peta situs. */
export const releasesUpdatedIso = releases
  .map((release) => release.addedIso)
  .sort()
  .at(-1)!;

const bullet = /^[•*-]\s*/;

/**
 * Baris pembuka umum seperti "Yang baru di Morvyn 1.4.0:" tidak ikut tampil:
 * nomor versinya sudah menjadi judul bagiannya. Pembuka yang bermakna, mis.
 * "Baru: Utang & Piutang di Keuangan", tetap tampil.
 */
const genericIntro = /^(yang baru di morvyn|what's new in morvyn)\b.*:?$/i;

/** Teks "Yang baru" satu versi, dipecah jadi paragraf dan butir. */
export function releaseBody(release: Release, locale: Locale) {
  const lines = release.notes[locale]
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  return {
    paragraphs: lines.filter((line) => !bullet.test(line) && !genericIntro.test(line)),
    points: lines.filter((line) => bullet.test(line)).map((line) => line.replace(bullet, "")),
  };
}
