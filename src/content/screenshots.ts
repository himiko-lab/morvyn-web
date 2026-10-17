import type { Locale } from "./index";
import type { Dictionary, FeatureKey } from "./types";
import available from "./screenshots.json";

/**
 * Tangkapan layar aplikasi di dalam bingkai ponsel.
 *
 * Satu untuk hero (`home`, layar Beranda aplikasi) dan satu per menu, dengan
 * nama berkas sama dengan kunci menunya: `public/screenshots/<bahasa>/<kunci>.webp`.
 * Sumber resolusi penuhnya ada di `design/screenshots/`; cara membuat ulang
 * WebP-nya ada di README.
 */
export type ScreenshotKey = FeatureKey | "home";

/** Bahasa cadangan: set berbahasa Inggris sudah lengkap kesembilannya. */
const fallbackLocale: Locale = "en";

/**
 * Daftar tangkapan layar yang SUDAH ADA per bahasa, dibaca dari
 * `screenshots.json`.
 *
 * Bukan sakelar satu folder sekaligus: tangkapan layar Indonesia boleh datang
 * satu per satu. Kunci yang belum tercantum di daftar `id` tetap memakai
 * versi Inggrisnya, jadi tidak pernah ada bingkai yang gambarnya rusak.
 *
 * Daftarnya JSON, bukan konstanta TypeScript, karena `scripts/check-screenshots.mjs`
 * ikut membacanya sebelum build dan menggagalkan build bila ada nama yang
 * tercantum tapi berkasnya tidak ada.
 */
const localized: Record<Locale, readonly string[]> = available;

export function screenshotSrc(locale: Locale, key: ScreenshotKey): string {
  const folder = localized[locale].includes(key) ? locale : fallbackLocale;
  return `/screenshots/${folder}/${key}.webp`;
}

/**
 * Ukuran piksel setiap WebP di `public/screenshots/`, sesuai perintah `cwebp`
 * di `scripts/make-screenshots.sh`. Dipakai data terstruktur, yang
 * menyebutkan ukuran gambarnya.
 */
export const screenshotSize = { width: 720, height: 1560 } as const;

/**
 * Keterangan satu tangkapan layar: sama dengan teks alt-nya di halaman, supaya
 * data terstruktur dan gambar yang tampil tidak pernah menyebut hal berbeda.
 */
export function screenshotCaption(dict: Dictionary, key: ScreenshotKey): string {
  return key === "home"
    ? dict.hero.mockupAlt
    : dict.featureMockupAlt.replace("{name}", dict.features[key].name);
}
