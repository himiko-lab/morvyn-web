// Membuat favicon PNG dan ICO dari src/app/icon.svg.
//
//   node scripts/make-icons.mjs
//
// Menulis ke src/app/, tempat Next.js memungut berkas ikon dengan sendirinya
// dan memasang tag <link>-nya di setiap halaman:
//
//   favicon.ico    16, 32, dan 48 px dalam satu berkas. Tempat cadangan yang
//                  dicari banyak layanan (aplikasi chat, perayap, peramban
//                  lama) kalau tidak membaca tag <link> di HTML.
//   icon.png       192 x 192, transparan. Kelipatan 48 px, syarat favicon di
//                  hasil Google Search. Juga untuk layanan yang tidak bisa
//                  membaca SVG, termasuk layanan favicon Google yang dipakai
//                  YouTube dan Gmail.
//   apple-icon.png 180 x 180, latar putih dan bantalan. iPhone mengisi bagian
//                  transparan dengan hitam saat situs disimpan ke layar utama,
//                  jadi latarnya dibuat sendiri di sini.
//
// icon.svg sendiri tetap dipakai peramban modern, karena tajam di ukuran apa
// pun. Jalankan ulang skrip ini setiap kali icon.svg berubah.
//
// Butuh rsvg-convert (brew install librsvg).

import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const appDir = join(root, "src/app");
const source = join(appDir, "icon.svg");
const work = mkdtempSync(join(tmpdir(), "morvyn-icons-"));

function render(svgFile, size, out) {
  execFileSync("rsvg-convert", ["-w", String(size), "-h", String(size), svgFile, "-o", out]);
  return readFileSync(out);
}

try {
  // icon.png: lambang apa adanya, transparan.
  writeFileSync(join(appDir, "icon.png"), render(source, 192, join(work, "icon.png")));

  // apple-icon.png: lambang di atas latar putih, dengan bantalan 14% tiap
  // sisi supaya tidak terpotong sudut membulat yang dipasang iOS.
  const pad = 1024 * 0.14;
  const inner = readFileSync(source, "utf8")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/^<svg[^>]*>/, `<svg x="${pad}" y="${pad}" width="${1024 - pad * 2}" height="${1024 - pad * 2}" viewBox="0 0 1024 1024">`);
  const apple = join(work, "apple.svg");
  writeFileSync(
    apple,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><rect width="1024" height="1024" fill="#FFFFFF"/>${inner}</svg>`,
  );
  writeFileSync(join(appDir, "apple-icon.png"), render(apple, 180, join(work, "apple.png")));

  // favicon.ico: format ICO dengan isi PNG, didukung semua peramban sejak
  // Windows Vista. Kepala 6 byte, lalu satu entri 16 byte per ukuran, lalu
  // data PNG-nya berurutan.
  const sizes = [16, 32, 48];
  const pngs = sizes.map((size) => render(source, size, join(work, `f${size}.png`)));
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // dicadangkan
  header.writeUInt16LE(1, 2); // jenis: ikon
  header.writeUInt16LE(sizes.length, 4);
  let offset = 6 + 16 * sizes.length;
  const entries = sizes.map((size, i) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size, 0); // lebar
    entry.writeUInt8(size, 1); // tinggi
    entry.writeUInt8(0, 2); // jumlah warna palet: tidak ada
    entry.writeUInt8(0, 3); // dicadangkan
    entry.writeUInt16LE(1, 4); // bidang warna
    entry.writeUInt16LE(32, 6); // bit per piksel
    entry.writeUInt32LE(pngs[i].length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += pngs[i].length;
    return entry;
  });
  writeFileSync(join(appDir, "favicon.ico"), Buffer.concat([header, ...entries, ...pngs]));

  console.log("Ditulis src/app/favicon.ico (16, 32, 48), icon.png (192), apple-icon.png (180).");
} finally {
  rmSync(work, { recursive: true, force: true });
}
