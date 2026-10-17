// Dijalankan otomatis sebelum `npm run build` (skrip `prebuild`).
//
// Memastikan setiap tangkapan layar yang dicantumkan di
// src/content/screenshots.json benar-benar ada di public/screenshots/. Tanpa
// pemeriksaan ini, nama yang dicantumkan tapi berkasnya lupa dibuat tetap lolos
// build dan baru ketahuan sebagai gambar rusak di situs yang sudah tayang.

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

if (missing.length > 0) {
  console.error(
    "Tangkapan layar tercantum di src/content/screenshots.json tapi berkasnya tidak ada:",
  );
  for (const file of missing) console.error(`  - ${file}`);
  console.error(
    "Buat berkasnya (lihat scripts/make-screenshots.sh) atau hapus namanya dari daftar.",
  );
  process.exit(1);
}

const counts = Object.entries(manifest)
  .map(([locale, keys]) => `${locale}: ${keys.length}`)
  .join(", ");
console.log(`Tangkapan layar lengkap (${counts}).`);
