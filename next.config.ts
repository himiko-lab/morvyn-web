import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ekspor statis ke folder `out/` — GitHub Pages hanya menyajikan berkas
  // diam, tidak menjalankan server Node. Situs ini memang tidak butuh server:
  // kedua halamannya sudah dirender penuh saat build.
  output: "export",

  // Wajib menyertai output: "export". Pengoptimal gambar bawaan Next butuh
  // server yang mengubah ukuran gambar saat diminta, dan itu tidak ada di
  // Pages. Tanpa baris ini, `npm run build` gagal begitu ada <Image>.
  images: { unoptimized: true },

  // Menghasilkan out/en/index.html, bukan out/en.html. Dengan begitu URL
  // "/en" pasti ketemu di GitHub Pages tanpa bergantung pada apakah servernya
  // mau menebak akhiran .html sendiri.
  trailingSlash: true,

  // Tidak ada basePath: situs disajikan di akar subdomain
  // morvyn.himikolab.my.id. Kalau suatu saat pindah ke project page
  // (himiko-lab.github.io/morvyn-web), tambahkan:
  //   basePath: "/morvyn-web",

  // Next 16 menuliskan AGENTS.md dan CLAUDE.md ke akar proyek setiap kali
  // dijalankan. Proyek ini tidak memakainya, dan berkas yang muncul kembali
  // sendiri setiap `npm run dev` cuma bikin bingung — jadi dimatikan.
  agentRules: false,
};

export default nextConfig;
