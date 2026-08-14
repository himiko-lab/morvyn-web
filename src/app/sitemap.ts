import type { MetadataRoute } from "next";
import { localeTag, localeUrl, locales, site } from "@/content";
import { legalKinds, legalPath } from "@/content/legal";

// Situs ini diekspor statis, jadi berkasnya dibuat sekali saat build. Tanpa
// baris ini Next menganggapnya rute dinamis dan `output: "export"` gagal.
export const dynamic = "force-static";

/**
 * Peta situs untuk Google Search Console.
 *
 * Enam alamat: beranda dan dua halaman hukum, masing-masing dalam dua bahasa.
 * Semuanya ditarik dari daftar `locales` dan `legalKinds` — kalau nanti ada
 * bahasa ketiga atau dokumen ketiga, peta ini ikut bertambah sendiri alih-alih
 * diam-diam ketinggalan.
 *
 * Tiap entri menyebut versi bahasa lainnya lewat `alternates`. Itu memberi
 * tahu Google bahwa `/` dan `/en/` adalah halaman yang sama dalam dua bahasa,
 * bukan dua halaman yang isinya kebetulan mirip — yang tanpa penjelasan bisa
 * dinilai sebagai konten kembar. Dua halaman hukum berlaku sama, dan di sana
 * risikonya lebih besar: isinya memang sangat mirip satu sama lain.
 *
 * Prioritas halaman hukum sengaja rendah. Bukan berarti tidak penting — Google
 * Play mewajibkannya dan verifikasi OAuth memeriksanya — tapi bukan halaman
 * yang ingin muncul lebih dulu daripada beranda di hasil pencarian.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const homeLanguages = {
    ...Object.fromEntries(
      locales.map((locale) => [localeTag[locale], localeUrl(locale)]),
    ),
    "x-default": `${site.url}/`,
  };

  const home: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: localeUrl(locale),
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "id" ? 1 : 0.9,
    alternates: { languages: homeLanguages },
  }));

  const legal: MetadataRoute.Sitemap = legalKinds.flatMap((kind) => {
    const languages = {
      ...Object.fromEntries(
        locales.map((locale) => [
          localeTag[locale],
          `${site.url}${legalPath[kind][locale]}`,
        ]),
      ),
      "x-default": `${site.url}${legalPath[kind].id}`,
    };

    return locales.map((locale) => ({
      url: `${site.url}${legalPath[kind][locale]}`,
      lastModified,
      // Halaman hukum berubah jarang, dan setiap perubahannya diumumkan
      // sendiri di halamannya lewat tanggal berlaku.
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: { languages },
    }));
  });

  return [...home, ...legal];
}
