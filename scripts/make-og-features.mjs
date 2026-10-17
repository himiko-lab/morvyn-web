// Membuat gambar Open Graph untuk keenam belas halaman fitur.
//
//   node --no-warnings scripts/make-og-features.mjs
//
// Hasilnya public/og/<bahasa>/<menu>.jpg, 1200x630: latar gradien merek,
// lambang Morvyn, nama menu, tagline dan kalimat ringkasnya, serta tangkapan
// layar menu itu di dalam bingkai ponsel. Itulah yang tampil saat tautan
// /fitur/gempa/ dibagikan di WhatsApp atau media sosial, alih-alih gambar
// beranda yang sama untuk semua halaman.
//
// Teksnya dibaca langsung dari src/content/id.ts dan en.ts, dan tangkapan
// layarnya mengikuti src/content/screenshots.json (versi Indonesia bila sudah
// ada, versi Inggris bila belum). Jalankan ulang setiap kali tagline, kalimat
// ringkas, atau tangkapan layar berubah.
//
// Butuh rsvg-convert (brew install librsvg), sips (bawaan macOS), dan font
// Plus Jakarta Sans terpasang di sistem: rsvg-convert memakai font sistem,
// bukan font web situs.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const { id } = await import(join(root, "src/content/id.ts"));
const { en } = await import(join(root, "src/content/en.ts"));
const manifest = JSON.parse(readFileSync(join(root, "src/content/screenshots.json"), "utf8"));

const dictionaries = { id, en };
const keys = ["notes", "finance", "agenda", "news", "habits", "weather", "calendar", "earthquake"];

const W = 1200;
const H = 630;
const FONT = "Plus Jakarta Sans, Avenir Next, Helvetica Neue, Arial, sans-serif";

// Lebar huruf rata-rata Plus Jakarta Sans tebal, dalam satuan em. SVG tidak
// bisa membungkus teks sendiri, jadi baris dipatah dengan perkiraan ini.
const EM_BOLD = 0.56;
const EM_REGULAR = 0.5;

function escapeXml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrap(text, fontSize, maxWidth, em) {
  const maxChars = Math.floor(maxWidth / (fontSize * em));
  const lines = [];
  let line = "";
  for (const word of text.split(" ")) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/** Ukuran judul terbesar yang masih muat dalam tiga baris. */
function fitHeadline(text, maxWidth) {
  for (const size of [60, 56, 52, 48, 44]) {
    const lines = wrap(text, size, maxWidth, EM_BOLD);
    if (lines.length <= 3) return { size, lines };
  }
  return { size: 44, lines: wrap(text, 44, maxWidth, EM_BOLD) };
}

function screenshotFile(locale, key) {
  const folder = manifest[locale]?.includes(key) ? locale : "en";
  for (const ext of ["jpg", "jpeg", "png"]) {
    const file = join(root, "design/screenshots", folder, `${key}.${ext}`);
    if (existsSync(file)) return file;
  }
  throw new Error(`Sumber tangkapan layar ${folder}/${key} tidak ada di design/screenshots/`);
}

// Lambang Morvyn, sama persis dengan design/og-id.svg (versi putih).
const logo = `
  <svg x="80" y="66" width="78" height="69" viewBox="0 0 10468 9226">
    <g transform="translate(-3305.608748,-23623)">
      <path d="M11688.596,31900C11688.596,29299.587 6100.629,23623.149 4228.596,23623C2356.564,23622.906 3559.896,32847.405 5803.93,32848C6984.44,32848 8539.263,31423 8539.263,31423C8539.263,31423 10094.304,32848 11274.596,32848C11615.81,32848.499 11688.554,32327.89 11688.596,31900Z" fill="#FFFFFF" fill-opacity="0.92"/>
    </g>
    <g transform="matrix(-1,0,0,1,13229.238145,-23623)">
      <path d="M11144.917,31900C11144.917,29299.587 5556.95,23623.149 3684.917,23623C1812.885,23622.906 3016.217,32847.405 5260.251,32848C6440.761,32848 7995.584,31423 7995.584,31423C7995.584,31423 9550.625,32848 10730.917,32848C11072.131,32848.499 11144.875,32327.89 11144.917,31900Z" fill="#FFFFFF" fill-opacity="0.72"/>
    </g>
    <g transform="translate(-3099.67909,-23623)">
      <path d="M8333.333,28854C8452.039,28853.998 8459.389,29207.711 8742.718,29491.041C9026.047,29774.37 9383.001,29823.411 9383,29938C9383.001,30052.589 9026.047,30101.63 8742.718,30384.959C8459.389,30668.289 8452.039,31022.002 8333.333,31022C8214.627,31022.002 8207.278,30668.289 7923.949,30384.959C7640.62,30101.63 7283.666,30052.589 7283.667,29938C7283.666,29823.411 7640.62,29774.37 7923.949,29491.041C8207.278,29207.711 8214.627,28853.998 8333.333,28854Z" fill="#078DFB"/>
    </g>
  </svg>`;

function buildSvg(locale, key) {
  const feature = dictionaries[locale].features[key];
  const image = readFileSync(screenshotFile(locale, key)).toString("base64");

  const textWidth = 620;
  const headline = fitHeadline(feature.tagline, textWidth);
  const lead = wrap(feature.short, 27, textWidth, EM_REGULAR).slice(0, 2);

  // Bingkai ponsel dengan perbandingan yang sama seperti PhoneFrame.tsx:
  // lengkung 16.18%, bingkai 2.21%, celah 1.1%, lengkung layar 13.82% dari
  // lebarnya. Ujung bawahnya sengaja terpotong tepi gambar.
  const pw = 300;
  const ph = (pw * 19.5) / 9;
  const px = 830;
  const py = 72;
  const inset = pw * (0.0221 + 0.011);
  const sx = px + inset;
  const sy = py + inset;
  const sw = pw - inset * 2;
  const sh = ph - inset * 2;
  const cam = sw * 0.05;

  const chipWidth = Math.round(feature.name.length * 26 * EM_BOLD + 48);
  const headlineTop = 322;
  const lineHeight = Math.round(headline.size * 1.14);
  const leadTop = headlineTop + (headline.lines.length - 1) * lineHeight + 62;

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#078DFB"/>
      <stop offset="100%" stop-color="#4D61F9"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.14" r="0.7">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="22"/>
    </filter>
    <clipPath id="screen">
      <rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" rx="${pw * 0.1382}"/>
    </clipPath>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${logo}
  <text x="174" y="118" font-family="${FONT}" font-size="44" font-weight="800" fill="#FFFFFF" letter-spacing="-1">Morvyn</text>

  <rect x="80" y="192" width="${chipWidth}" height="48" rx="24" fill="#FFFFFF" fill-opacity="0.18"/>
  <text x="${80 + chipWidth / 2}" y="225" text-anchor="middle" font-family="${FONT}" font-size="26" font-weight="700" fill="#FFFFFF">${escapeXml(feature.name)}</text>

  ${headline.lines
    .map(
      (line, i) =>
        `<text x="80" y="${headlineTop + i * lineHeight}" font-family="${FONT}" font-size="${headline.size}" font-weight="800" fill="#FFFFFF" letter-spacing="-1.4">${escapeXml(line)}</text>`,
    )
    .join("\n  ")}

  ${lead
    .map(
      (line, i) =>
        `<text x="80" y="${leadTop + i * 38}" font-family="${FONT}" font-size="27" font-weight="500" fill="#FFFFFF" fill-opacity="0.85">${escapeXml(line)}</text>`,
    )
    .join("\n  ")}

  <rect x="${px + 10}" y="${py + 26}" width="${pw}" height="${ph}" rx="${pw * 0.1618}" fill="#0B1A4A" fill-opacity="0.45" filter="url(#shadow)"/>
  <rect x="${px}" y="${py}" width="${pw}" height="${ph}" rx="${pw * 0.1618}" fill="#1A2232"/>
  <rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" rx="${pw * 0.1382}" fill="#FFFFFF"/>
  <image x="${sx}" y="${sy}" width="${sw}" height="${sh}" preserveAspectRatio="xMidYMin slice" clip-path="url(#screen)" xlink:href="data:image/jpeg;base64,${image}"/>
  <circle cx="${sx + sw / 2}" cy="${sy + sh * 0.017 + cam / 2}" r="${cam / 2}" fill="#0B1220"/>
</svg>`;
}

const work = mkdtempSync(join(tmpdir(), "morvyn-og-"));
try {
  for (const locale of Object.keys(dictionaries)) {
    const outDir = join(root, "public/og", locale);
    mkdirSync(outDir, { recursive: true });

    for (const key of keys) {
      const svg = join(work, `${locale}-${key}.svg`);
      const png = join(work, `${locale}-${key}.png`);
      const jpg = join(outDir, `${key}.jpg`);

      writeFileSync(svg, buildSvg(locale, key));
      execFileSync("rsvg-convert", ["-w", String(W), "-h", String(H), svg, "-o", png]);
      // JPEG, bukan PNG: isinya foto layar, dan PNG-nya empat kali lebih
      // berat tanpa beda yang terlihat. JPEG juga didukung semua platform
      // yang membaca Open Graph, tidak seperti WebP.
      execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "84", png, "--out", jpg], {
        stdio: "ignore",
      });
      console.log(`dibuat  public/og/${locale}/${key}.jpg`);
    }
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
