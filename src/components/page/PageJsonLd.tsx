import { localeTag, localeUrl, ogImagePath, site, type Locale } from "@/content";
import { featurePageUi } from "@/content/featurePages";
import { getPage, pagePath, type PageKey } from "@/content/pages";

/**
 * Data terstruktur satu halaman tambahan, mengikuti `FeatureJsonLd`.
 *
 * Simpul aplikasi, situs, dan penerbit tidak ditulis ulang: halaman ini
 * menunjuk yang ada di beranda lewat `@id` yang sama. Tipenya `WebPage`,
 * ditambah `FAQPage` hanya bila halamannya memang memuat tanya jawab, dan
 * `ContactPage` untuk halaman Kontak. Remah rotinya dua tingkat, persis
 * seperti yang terlihat di halaman.
 */
export function PageJsonLd({ pageKey, locale }: { pageKey: PageKey; locale: Locale }) {
  const page = getPage(pageKey, locale);
  const url = `${site.url}${pagePath[pageKey][locale]}`;

  const type = page.faq
    ? ["WebPage", "FAQPage"]
    : pageKey === "contact"
      ? "ContactPage"
      : "WebPage";

  const graph = [
    {
      "@type": type,
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: localeTag[locale],
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#app` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${site.url}${ogImagePath(locale)}`,
        width: 1200,
        height: 630,
      },
      ...(page.faq
        ? {
            mainEntity: page.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }
        : {}),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: featurePageUi[locale].home,
          item: localeUrl(locale),
        },
        { "@type": "ListItem", position: 2, name: page.name, item: url },
      ],
    },
  ];

  // Lihat JsonLd.tsx: "<" disandikan supaya teks apa pun tidak bisa menutup
  // tag <script> lebih awal.
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
    /</g,
    "\\u003c",
  );

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
