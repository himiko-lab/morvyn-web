import type { FeatureKey, Locale } from "@/content";
import { featurePagesId } from "./id";
import { featurePagesEn } from "./en";
import type { FeaturePageCopy, FeaturePageUi } from "./types";

const pages: Record<Locale, Record<FeatureKey, FeaturePageCopy>> = {
  id: featurePagesId,
  en: featurePagesEn,
};

/**
 * Tanggal terakhir isi halaman fitur berubah, dipakai sebagai `lastmod` di
 * peta situs. Sama aturannya dengan `homeUpdatedIso`: perbarui hanya saat
 * teksnya benar-benar berubah, bukan setiap deploy.
 */
export const featurePagesUpdatedIso = "2026-10-17";

export function getFeaturePage(key: FeatureKey, locale: Locale): FeaturePageCopy {
  return pages[locale][key];
}

/**
 * Alamat halaman satu menu, lengkap dengan garis miring penutup
 * (`trailingSlash: true`). Indonesia di `/fitur/<menu>/`, Inggris di
 * `/en/features/<menu>/`, dengan nama menu dalam bahasa halamannya: alamat
 * itu ikut terbaca di hasil pencarian, dan "catatan" yang dicari orang
 * Indonesia, bukan "notes".
 */
export function featurePath(key: FeatureKey, locale: Locale): string {
  const slug = pages[locale][key].slug;
  return locale === "id" ? `/fitur/${slug}/` : `/en/features/${slug}/`;
}

/**
 * Gambar Open Graph satu halaman fitur: tangkapan layar menunya di dalam
 * bingkai ponsel, beserta nama dan taglinenya. Dibuat oleh
 * `scripts/make-og-features.mjs` dan diberi nama menurut kunci menunya, bukan
 * slug, supaya kedua bahasa memakai nama berkas yang sama.
 */
export function featureOgImagePath(key: FeatureKey, locale: Locale): string {
  return `/og/${locale}/${key}.jpg`;
}

/** Kebalikan dari `slug`, untuk rute dinamis. */
export function featureKeyFromSlug(locale: Locale, slug: string): FeatureKey | undefined {
  const entry = Object.entries(pages[locale]).find(([, page]) => page.slug === slug);
  return entry?.[0] as FeatureKey | undefined;
}

/** Seluruh slug satu bahasa, untuk `generateStaticParams`. */
export function featureSlugs(locale: Locale): string[] {
  return Object.values(pages[locale]).map((page) => page.slug);
}

export const featurePageUi: Record<Locale, FeaturePageUi> = {
  id: {
    home: "Beranda",
    eyebrow: "Fitur Morvyn",
    faqHeading: "Tanya jawab",
    relatedHeading: "Menu lain di Morvyn",
    relatedBody: "Delapan menu, satu aplikasi. Pakai yang kamu perlu, sisanya tidak akan mengganggu.",
    learnMore: "Selengkapnya tentang {name}",
  },
  en: {
    home: "Home",
    eyebrow: "Morvyn features",
    faqHeading: "Questions and answers",
    relatedHeading: "More menus in Morvyn",
    relatedBody: "Eight menus, one app. Use the ones you need and the rest stay out of the way.",
    learnMore: "More about {name}",
  },
};

export type { FeaturePageCopy, FeaturePageUi, FeatureSection } from "./types";
