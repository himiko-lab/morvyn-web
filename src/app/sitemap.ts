import type { MetadataRoute } from "next";
import { localeTag, localeUrl, locales, site } from "@/content";

// Situs ini diekspor statis, jadi berkasnya dibuat sekali saat build. Tanpa
// baris ini Next menganggapnya rute dinamis dan `output: "export"` gagal.
export const dynamic = "force-static";

/**
 * Peta situs untuk Google Search Console.
 *
 * Cuma dua alamat, dan keduanya ditarik dari daftar `locales` — kalau nanti
 * ada bahasa ketiga, peta ini ikut bertambah sendiri alih-alih diam-diam
 * ketinggalan.
 *
 * Tiap entri menyebut versi bahasa lainnya lewat `alternates`. Itu memberi
 * tahu Google bahwa `/` dan `/en/` adalah halaman yang sama dalam dua bahasa,
 * bukan dua halaman yang isinya kebetulan mirip — yang tanpa penjelasan bisa
 * dinilai sebagai konten kembar.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(
      locales.map((locale) => [localeTag[locale], localeUrl(locale)]),
    ),
    "x-default": `${site.url}/`,
  };

  return locales.map((locale) => ({
    url: localeUrl(locale),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "id" ? 1 : 0.9,
    alternates: { languages },
  }));
}
