import { id } from "./id";
import { en } from "./en";
import type { Dictionary } from "./types";

export type Locale = "id" | "en";

export const locales: Locale[] = ["id", "en"];

/** Bahasa yang dipakai di `/`. Bahasa lain tinggal di `/en`. */
export const defaultLocale: Locale = "id";

const dictionaries: Record<Locale, Dictionary> = { id, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Alamat halaman yang sama dalam bahasa lain. */
export function altLocale(locale: Locale): Locale {
  return locale === "id" ? "en" : "id";
}

/** `/` untuk Indonesia, `/en` untuk Inggris. */
export function localeHref(locale: Locale): string {
  return locale === "id" ? "/" : "/en";
}

export type { Dictionary, FeatureCopy, FeatureKey } from "./types";
export { site, newsSources } from "./site";
