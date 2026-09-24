import type { MetadataRoute } from "next";
import { localeTag, localeUrl, locales, site } from "@/content";
import { legalEffectiveIso, legalKinds, legalPath } from "@/content/legal";

// Situs ini diekspor statis, jadi berkasnya dibuat sekali saat build. Tanpa
// baris ini Next menganggapnya rute dinamis dan `output: "export"` gagal.
export const dynamic = "force-static";

/**
 * Peta situs untuk Google Search Console.
 *
 * Enam alamat: beranda dan dua halaman hukum, masing-masing dalam dua bahasa.
 * Semuanya ditarik dari daftar `locales` dan `legalKinds`, jadi kalau nanti ada
 * bahasa ketiga atau dokumen ketiga, peta ini ikut bertambah sendiri alih-alih
 * diam-diam ketinggalan.
 *
 * Tiap entri menyebut versi bahasa lainnya lewat `alternates`. Itu memberi
 * tahu Google bahwa `/` dan `/en/` adalah halaman yang sama dalam dua bahasa,
 * bukan dua halaman yang isinya kebetulan mirip, yang tanpa penjelasan bisa
 * dinilai sebagai konten kembar. Dua halaman hukum berlaku sama, dan di sana
 * risikonya lebih besar: isinya memang sangat mirip satu sama lain.
 *
 * Prioritas halaman hukum sengaja rendah. Bukan berarti tidak penting (Google
 * Play mewajibkannya dan verifikasi OAuth memeriksanya), tapi bukan halaman
 * yang ingin muncul lebih dulu daripada beranda di hasil pencarian.
 *
 * `lastmod` hanya dicetak kalau tanggalnya jujur. Google memakainya selama
 * nilainya terbukti akurat, dan mengabaikannya begitu sering meleset. Dulu
 * semua entri diisi waktu build, sehingga setiap deploy membuat keenam
 * halaman tampak baru berubah walaupun isinya sama persis.
 *
 * - Halaman hukum memakai `legalEffectiveIso`, tanggal yang memang ikut
 *   diperbarui setiap kali isi dokumennya berubah.
 * - Beranda tidak punya tanggal seperti itu, jadi `lastmod`-nya sengaja
 *   tidak ada. Tanpa `lastmod`, Google menjadwalkan kunjungannya sendiri.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const homeLanguages = {
    ...Object.fromEntries(
      locales.map((locale) => [localeTag[locale], localeUrl(locale)]),
    ),
    "x-default": `${site.url}/`,
  };

  const home: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: localeUrl(locale),
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
      lastModified: legalEffectiveIso[kind],
      // Halaman hukum berubah jarang, dan setiap perubahannya diumumkan
      // sendiri di halamannya lewat tanggal berlaku.
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: { languages },
    }));
  });

  return [...home, ...legal];
}
