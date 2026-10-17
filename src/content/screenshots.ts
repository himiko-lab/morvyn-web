import type { Locale } from "./index";
import type { FeatureKey } from "./types";

/**
 * Tangkapan layar aplikasi di dalam bingkai ponsel beranda.
 *
 * Satu untuk hero (`home`, layar Beranda aplikasi) dan satu per menu, dengan
 * nama berkas sama dengan kunci menunya: `public/screenshots/<bahasa>/<kunci>.webp`.
 * Sumber resolusi penuhnya ada di `design/screenshots/`; cara membuat ulang
 * WebP-nya ada di README.
 */
export type ScreenshotKey = FeatureKey | "home";

/**
 * Folder gambar per bahasa.
 *
 * SEMENTARA: belum ada tangkapan layar berbahasa Indonesia, jadi beranda
 * Indonesia memakai set berbahasa Inggris. Begitu ada, taruh di
 * `public/screenshots/id/` dengan nama berkas yang sama, lalu ganti `id` di
 * bawah menjadi "/screenshots/id". Tidak ada yang lain yang perlu diubah.
 */
const folder: Record<Locale, string> = {
  id: "/screenshots/en",
  en: "/screenshots/en",
};

export function screenshotSrc(locale: Locale, key: ScreenshotKey): string {
  return `${folder[locale]}/${key}.webp`;
}
