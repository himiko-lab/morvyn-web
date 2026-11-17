// Membuat gambar bingkai ponsel dari model 3D.
//
//   node scripts/render-phone-frame.mjs
//
// Membaca design/mockup/galaxy-s24-sm-s921b-ds.glb, merendernya tampak depan
// di Chrome tanpa kepala (three.js, lihat render-phone-frame.html), lalu
// menulis:
//
//   public/phone-frame/frame-640.webp dan frame-960.webp
//       Ponsel dengan area layar bening. Tangkapan layar ditaruh di bawahnya
//       oleh PhoneFrame.tsx.
//   src/components/phoneFrameGeometry.json
//       Ukuran gambar dan posisi layar dalam persen, dibaca PhoneFrame.tsx.
//   design/mockup/phone-frame.png
//       Versi PNG resolusi penuh, untuk scripts/make-og-features.mjs
//       (rsvg-convert tidak membaca WebP). Tidak ikut disajikan.
//
// Model 3D-nya sendiri tidak ikut disajikan ke pengunjung: memuat model 4 MB
// dan WebGL di setiap bingkai akan membuat beranda (sembilan bingkai) berat,
// dan halaman-halaman ini sengaja terbaca tanpa menunggu skrip apa pun.
//
// Jalankan ulang setiap kali modelnya diganti. Butuh Google Chrome, cwebp
// (brew install webp), dan devDependency three.

import { execFileSync, spawn } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const model = "/design/mockup/galaxy-s24-sm-s921b-ds.glb";
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const renderWidth = 1200;
const outputWidths = [640, 960];

if (!existsSync(chrome)) throw new Error(`Google Chrome tidak ditemukan di ${chrome}`);

const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".glb": "model/gltf-binary",
};

const work = mkdtempSync(join(tmpdir(), "phone-frame-"));
let finish;
const finished = new Promise((resolve, reject) => {
  finish = { resolve, reject };
});

// Server kecil: menyajikan berkas dari repo (hanya yang dibutuhkan halaman
// render), dan menerima hasil render lewat POST /__out/<nama>.
const server = createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://x").pathname);

  if (req.method === "POST" && path.startsWith("/__out/")) {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => {
      const name = path.slice("/__out/".length);
      const body = Buffer.concat(chunks);
      res.end();
      if (name === "error") finish.reject(new Error(body.toString()));
      else if (name === "done") finish.resolve();
      else writeFileSync(join(work, name), body);
    });
    return;
  }

  const allowed = ["/scripts/render-phone-frame.html", model];
  if (!allowed.includes(path) && !path.startsWith("/node_modules/three/")) {
    res.statusCode = 404;
    return res.end();
  }
  const file = normalize(join(root, path));
  if (!file.startsWith(root) || !existsSync(file)) {
    res.statusCode = 404;
    return res.end();
  }
  res.setHeader("Content-Type", types[extname(file)] ?? "application/octet-stream");
  res.end(readFileSync(file));
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();
const url = `http://127.0.0.1:${port}/scripts/render-phone-frame.html?width=${renderWidth}&model=${encodeURIComponent(model)}`;

const browser = spawn(
  chrome,
  [
    "--headless=new",
    "--disable-gpu-sandbox",
    "--use-angle=metal",
    "--enable-unsafe-swiftshader",
    `--user-data-dir=${join(work, "profile")}`,
    "--no-first-run",
    url,
  ],
  { stdio: "ignore" },
);

const timeout = setTimeout(() => finish.reject(new Error("Render tidak selesai dalam 60 detik.")), 60_000);

try {
  await finished;
} finally {
  clearTimeout(timeout);
  browser.kill();
  server.close();
}

const outDir = join(root, "public/phone-frame");
mkdirSync(outDir, { recursive: true });
for (const width of outputWidths) {
  const out = join(outDir, `frame-${width}.webp`);
  execFileSync("cwebp", ["-quiet", "-q", "88", "-alpha_q", "100", "-resize", String(width), "0", join(work, "frame.png"), "-o", out]);
  console.log(`Ditulis ${out.slice(root.length + 1)}`);
}

copyFileSync(join(work, "frame.png"), join(root, "design/mockup/phone-frame.png"));
console.log("Ditulis design/mockup/phone-frame.png");

const geometry = JSON.parse(readFileSync(join(work, "geometry.json"), "utf8"));
const json = {
  // Rasio gambar bingkai: tinggi dibagi lebar.
  aspect: Number((geometry.height / geometry.width).toFixed(5)),
  screen: geometry.screen,
};
writeFileSync(join(root, "src/components/phoneFrameGeometry.json"), `${JSON.stringify(json, null, 2)}\n`);
console.log("Ditulis src/components/phoneFrameGeometry.json", json);

rmSync(work, { recursive: true, force: true });
