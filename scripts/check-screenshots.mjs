// Dijalankan otomatis sebelum `npm run build` (skrip `prebuild`).
//
// Memastikan setiap tangkapan layar yang dicantumkan di
// src/content/screenshots.json benar-benar ada di public/screenshots/, dan
// gambar Open Graph halaman fitur ada di public/og/. Tanpa pemeriksaan ini,
// berkas yang lupa dibuat tetap lolos build dan baru ketahuan sebagai gambar
// rusak di situs yang sudah tayang.

import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(
  readFileSync(join(root, "src/content/screenshots.json"), "utf8"),
);

const missing = [];
for (const [locale, keys] of Object.entries(manifest)) {
  for (const key of keys) {
    const file = join("public/screenshots", locale, `${key}.webp`);
    if (!existsSync(join(root, file))) missing.push(file);
  }
}

// Gambar Open Graph: satu per menu per bahasa. Daftar menunya diambil dari
// set Inggris, yang selalu lengkap, tanpa "home" (beranda punya og-*.png).
const features = manifest.en.filter((key) => key !== "home");
const missingOg = [];
for (const locale of Object.keys(manifest)) {
  for (const key of features) {
    const file = join("public/og", locale, `${key}.jpg`);
    if (!existsSync(join(root, file))) missingOg.push(file);
  }
}

if (missing.length > 0) {
  console.error(
    "Tangkapan layar tercantum di src/content/screenshots.json tapi berkasnya tidak ada:",
  );
  for (const file of missing) console.error(`  - ${file}`);
  console.error(
    "Buat berkasnya (lihat scripts/make-screenshots.sh) atau hapus namanya dari daftar.",
  );
}

if (missingOg.length > 0) {
  console.error("Gambar Open Graph halaman fitur tidak ada:");
  for (const file of missingOg) console.error(`  - ${file}`);
  console.error("Buat dengan: node --no-warnings scripts/make-og-features.mjs");
}

if (missing.length > 0 || missingOg.length > 0) process.exit(1);

const counts = Object.entries(manifest)
  .map(([locale, keys]) => `${locale}: ${keys.length}`)
  .join(", ");
console.log(`Tangkapan layar lengkap (${counts}), gambar Open Graph fitur lengkap.`);
