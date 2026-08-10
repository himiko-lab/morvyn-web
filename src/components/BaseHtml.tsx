import { Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "@/app/globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

/**
 * Dijalankan sebelum halaman digambar, supaya mode gelap tidak berkedip putih
 * sepersekian detik saat memuat. Sengaja dibungkus try/catch: kalau
 * localStorage diblokir (mode penyamaran), situs tetap jalan dengan mode terang.
 */
const themeScript = `
(function () {
  var root = document.documentElement;
  // Menandai bahwa JavaScript hidup. Animasi muncul-saat-digulir hanya
  // menyembunyikan elemen kalau kelas ini ada, jadi bila skrip gagal dimuat,
  // halaman tampil utuh alih-alih kosong. Lihat .js .reveal di globals.css.
  root.classList.add("js");
  try {
    var saved = localStorage.getItem("morvyn-theme");
    var system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    root.dataset.theme = saved || system;
  } catch (e) {
    root.dataset.theme = "light";
  }
})();
`;

/**
 * Kerangka <html> yang dipakai kedua bahasa.
 *
 * Ada dua root layout di situs ini — `(id)/layout.tsx` dan `(en)/layout.tsx` —
 * semata-mata supaya atribut `lang` benar di masing-masing bahasa. Selain nilai
 * `lang` itu, isinya sama, jadi disatukan di sini.
 */
export function BaseHtml({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    // suppressHydrationWarning: data-theme sengaja diubah skrip di atas sebelum
    // React sempat menghidrasi, jadi selisih atribut ini memang diharapkan.
    // Kelas font dipasang di <html>, bukan <body>: --font-sans dideklarasikan
    // di :root, jadi --font-jakarta harus sudah ada di tingkat itu juga.
    <html lang={lang} className={jakarta.variable} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element --
          Saran aturan ini (`next/head`) hanya berlaku untuk Pages Router. Di
          App Router, <head> di dalam root layout memang cara yang benar, dan
          skrip tema harus ada di sini: ditaruh di <body> ia jalan setelah
          gambar pertama, sehingga mode gelap sempat berkedip putih. */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
