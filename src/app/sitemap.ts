import type { MetadataRoute } from "next";
import { homeUpdatedIso, localeTag, localeUrl, locales, screenshotSrc, site } from "@/content";
import { featurePageUpdatedIso, featurePath } from "@/content/featurePages";
import { pageKeys, pagePath, pageUpdatedIso, type PageKey } from "@/content/pages";
import { legalEffectiveIso, legalKinds, legalPath } from "@/content/legal";
import { featureOrder } from "@/components/featureIcons";

// Situs ini diekspor statis, jadi berkasnya dibuat sekali saat build. Tanpa
// baris ini Next menganggapnya rute dinamis dan `output: "export"` gagal.
export const dynamic = "force-static";

/**
 * Peta situs untuk Google Search Console.
 *
 * Tiga puluh alamat: beranda, delapan halaman fitur, empat halaman tambahan
 * (PDF dan Pindai, Widget, Catatan Rilis, Kontak), dan dua halaman hukum,
 * masing-masing dalam dua bahasa. Semuanya ditarik dari daftar `locales`,
 * `featureOrder`, `pageKeys`, dan `legalKinds`, jadi kalau nanti ada bahasa,
 * menu, halaman, atau dokumen baru, peta ini ikut bertambah sendiri alih-alih
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
 * - Beranda memakai `homeUpdatedIso` di `content/site.ts`, yang diperbarui
 *   dengan tangan hanya saat teks berandanya benar-benar berubah.
 * - Halaman fitur memakai `featurePageUpdatedIso`, satu tanggal per menu,
 *   dengan aturan yang sama. Halaman tambahan memakai `pageUpdatedIso`.
 *
 * Beranda dan halaman fitur juga menyebut tangkapan layar yang dimuatnya
 * (`<image:image>`), supaya gambar-gambar itu ditemukan untuk Google Gambar
 * tanpa menunggu Google merender halamannya. Yang didaftarkan HANYA gambar
 * yang memang tampil di halaman itu: beranda kesembilannya, halaman fitur
 * gambar menunya sendiri. Halaman hukum tidak memuat tangkapan layar, jadi
 * tidak menyebut apa pun.
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
    lastModified: homeUpdatedIso,
    changeFrequency: "monthly",
    priority: locale === "id" ? 1 : 0.9,
    alternates: { languages: homeLanguages },
    images: (["home", ...featureOrder] as const).map(
      (key) => `${site.url}${screenshotSrc(locale, key)}`,
    ),
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

  // Prioritasnya di antara beranda dan halaman hukum: inilah halaman yang
  // menjawab pencarian per menu, misalnya "aplikasi catatan dengan PDF".
  const features: MetadataRoute.Sitemap = featureOrder.flatMap((key) => {
    const languages = {
      ...Object.fromEntries(
        locales.map((locale) => [localeTag[locale], `${site.url}${featurePath(key, locale)}`]),
      ),
      "x-default": `${site.url}${featurePath(key, "id")}`,
    };

    return locales.map((locale) => ({
      url: `${site.url}${featurePath(key, locale)}`,
      lastModified: featurePageUpdatedIso[key],
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages },
      images: [`${site.url}${screenshotSrc(locale, key)}`],
    }));
  });

  // Halaman PDF dan Widget setingkat halaman fitur. Catatan Rilis dan Kontak
  // di bawahnya: berguna bagi yang mencarinya, tapi bukan halaman yang ingin
  // muncul lebih dulu daripada beranda. Belum ada yang memuat tangkapan
  // layar, jadi tidak ada `images`.
  const pagePriority: Record<PageKey, number> = {
    pdf: 0.7,
    widgets: 0.7,
    releaseNotes: 0.5,
    contact: 0.4,
  };

  const pages: MetadataRoute.Sitemap = pageKeys.flatMap((key) => {
    const languages = {
      ...Object.fromEntries(
        locales.map((locale) => [localeTag[locale], `${site.url}${pagePath[key][locale]}`]),
      ),
      "x-default": `${site.url}${pagePath[key].id}`,
    };

    return locales.map((locale) => ({
      url: `${site.url}${pagePath[key][locale]}`,
      lastModified: pageUpdatedIso[key],
      changeFrequency: "monthly" as const,
      priority: pagePriority[key],
      alternates: { languages },
    }));
  });

  return [...home, ...features, ...pages, ...legal];
}
