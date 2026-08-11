import { id } from "./id";
import { en } from "./en";
import { site } from "./site";
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

/** Kode bahasa lengkap untuk atribut hreflang dan `inLanguage`. */
export const localeTag: Record<Locale, string> = {
  id: "id-ID",
  en: "en-US",
};

/** Alamat lengkap halaman sebuah bahasa. Selalu berakhiran garis miring,
 *  mengikuti `trailingSlash: true` di next.config.ts — canonical yang beda
 *  garis miring dengan URL sebenarnya dianggap dua halaman oleh Google. */
export function localeUrl(locale: Locale): string {
  return locale === "id" ? `${site.url}/` : `${site.url}/en/`;
}

/**
 * Daftar tanya jawab yang benar-benar tampil di halaman.
 *
 * Selama aplikasinya belum terbit, "Kapan Morvyn bisa diunduh?" disisipkan
 * paling atas, karena itu yang pertama ditanyakan orang begitu melihat
 * lencana "Segera di Google Play".
 *
 * Dipakai bersama oleh bagian Tanya Jawab dan data terstruktur FAQPage.
 * Kalau keduanya menyusun daftarnya sendiri-sendiri, markup dan teks yang
 * terlihat bisa berbeda isi, dan itu justru yang dianggap menyesatkan Google.
 */
export function faqItems(dict: Dictionary): { q: string; a: string }[] {
  return site.playStoreLive
    ? dict.faq.items
    : [dict.comingSoon.faq, ...dict.faq.items];
}

/**
 * Tujuan setiap tombol unduh di situs ini.
 *
 * Selama aplikasinya belum terbit, semuanya mengarah ke blok penjelasan di
 * halaman yang sama alih-alih ke Play Store yang masih membalas 404. Ditulis
 * sekali di sini supaya header, hero, dan blok ajakan tidak bisa berbeda
 * pendapat soal ke mana tombolnya menuju.
 */
export const downloadHref = site.playStoreLive ? site.playStoreUrl : "#unduh";

/** Tautan ke luar butuh target dan rel; tautan jangkar dalam halaman tidak. */
export const downloadIsExternal = site.playStoreLive;

/**
 * Gambar yang tampil saat tautannya dibagikan. Dua berkas, karena teks di
 * dalam gambarnya ikut berbahasa halaman itu. Ada di `public/`.
 */
export function ogImagePath(locale: Locale): string {
  return locale === "id" ? "/og-id.png" : "/og-en.png";
}

export type { Dictionary, FeatureCopy, FeatureKey } from "./types";
export { site, newsSources, socialLinks, sameAsUrls } from "./site";
