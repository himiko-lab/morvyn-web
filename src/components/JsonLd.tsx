import { featureOrder } from "./featureIcons";
import {
  getDictionary,
  localeTag,
  localeUrl,
  ogImagePath,
  sameAsUrls,
  site,
  type Locale,
} from "@/content";

/**
 * Data terstruktur schema.org untuk satu halaman.
 *
 * Tag meta biasa hanya memberi tahu Google *kalimat* apa yang harus
 * ditampilkan. Blok ini memberi tahu *apa* isi halamannya: bahwa Morvyn adalah
 * aplikasi Android gratis, bahwa penerbitnya Himiko Lab, dan bahwa akun
 * Instagram serta TikTok itu milik penerbit yang sama. Tanpa ini semuanya
 * hanya bisa ditebak dari teks.
 *
 * Semuanya dibangun dari kamus yang sama dengan yang dipakai halamannya, jadi
 * markup dan teks yang terlihat tidak bisa jadi berbeda isi — itu justru yang
 * dianggap menyesatkan oleh Google.
 *
 * Sengaja TIDAK ada `aggregateRating` atau `downloadCount`: belum ada
 * angkanya, dan mengarang nilai di sini bisa membuat situs kena sanksi.
 */
export function JsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const pageUrl = localeUrl(locale);
  const lang = localeTag[locale];

  const organizationId = `${site.publisherUrl}/#organization`;
  const websiteId = `${site.url}/#website`;
  const appId = `${site.url}/#app`;

  const graph = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: site.publisher,
      url: site.publisherUrl,
      email: site.contactEmail,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/logo-morvyn.svg`,
      },
      // Inilah yang menghubungkan situs dengan akun media sosialnya.
      sameAs: sameAsUrls,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${site.url}/`,
      name: site.name,
      description: dict.meta.description,
      inLanguage: Object.values(localeTag),
      publisher: { "@id": organizationId },
    },
    {
      "@type": "MobileApplication",
      "@id": appId,
      name: site.name,
      description: dict.meta.description,
      url: `${site.url}/`,
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Android",
      inLanguage: Object.values(localeTag),
      installUrl: site.playStoreUrl,
      downloadUrl: site.playStoreUrl,
      featureList: featureOrder.map((key) => dict.features[key].name),
      publisher: { "@id": organizationId },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      // Dua tipe sekaligus, bukan dua simpul terpisah: halaman ini memang satu
      // halaman yang kebetulan memuat daftar tanya jawab. Dipecah jadi dua
      // simpul dengan URL sama, keduanya jadi rancu siapa yang mewakili URL itu.
      "@type": ["WebPage", "FAQPage"],
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: dict.meta.title,
      description: dict.meta.description,
      inLanguage: lang,
      isPartOf: { "@id": websiteId },
      about: { "@id": appId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${site.url}${ogImagePath(locale)}`,
        width: 1200,
        height: 630,
      },
      mainEntity: dict.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph })
    // Sebuah "</script>" di dalam teks tanya jawab akan menutup tag ini lebih
    // awal dan sisanya bocor sebagai HTML. Menyandikan "<" mencegahnya, dan
    // JSON tetap sah karena < memang cara menulis "<" di JSON.
    .replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
