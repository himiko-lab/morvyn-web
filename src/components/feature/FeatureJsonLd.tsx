import {
  getDictionary,
  localeTag,
  localeUrl,
  screenshotSrc,
  site,
  type FeatureKey,
  type Locale,
} from "@/content";
import { featurePageUi, featurePath, getFeaturePage } from "@/content/featurePages";

/**
 * Data terstruktur satu halaman fitur.
 *
 * Simpul aplikasi, situs, dan penerbitnya tidak ditulis ulang di sini: semuanya
 * sudah dinyatakan lengkap di beranda (`JsonLd.tsx`), dan halaman ini cukup
 * menunjuknya lewat `@id` yang sama. Menulis ulang simpul yang sama di enam
 * belas halaman hanya membuka peluang isinya saling berbeda.
 *
 * Remah rotinya dua tingkat, persis seperti yang terlihat di halaman:
 * Beranda, lalu nama menu.
 */
export function FeatureJsonLd({ featureKey, locale }: { featureKey: FeatureKey; locale: Locale }) {
  const dict = getDictionary(locale);
  const page = getFeaturePage(featureKey, locale);
  const ui = featurePageUi[locale];
  const url = `${site.url}${featurePath(featureKey, locale)}`;

  const graph = [
    {
      "@type": ["WebPage", "FAQPage"],
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
        url: `${site.url}${screenshotSrc(locale, featureKey)}`,
      },
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui.home, item: localeUrl(locale) },
        { "@type": "ListItem", position: 2, name: dict.features[featureKey].name, item: url },
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
