import type { Locale } from "@/content";
import { pagesId } from "./id";
import { pagesEn } from "./en";
import type { PageCopy, PageKey } from "./types";

const pages: Record<Locale, Record<PageKey, PageCopy>> = {
  id: pagesId,
  en: pagesEn,
};

/** Urutan di peta situs dan footer. */
export const pageKeys: PageKey[] = ["pdf", "widgets", "releaseNotes", "contact"];

/**
 * Dua halaman yang membahas kemampuan aplikasi. Keduanya tampil di samping
 * delapan menu: di kisi fitur beranda dan di kolom Produk footer.
 */
export const featureLikePageKeys: PageKey[] = ["pdf", "widgets"];

/**
 * Alamat tiap halaman per bahasa, lengkap dengan garis miring penutup
 * (`trailingSlash: true`). Alamatnya berbahasa halamannya, seperti halaman
 * fitur dan halaman hukum. JANGAN diubah setelah tayang: alamat yang sudah
 * diindeks dan ditautkan orang akan mati.
 */
export const pagePath: Record<PageKey, Record<Locale, string>> = {
  pdf: { id: "/fitur/pdf/", en: "/en/features/pdf/" },
  widgets: { id: "/fitur/widget/", en: "/en/features/widgets/" },
  releaseNotes: { id: "/catatan-rilis/", en: "/en/release-notes/" },
  contact: { id: "/kontak/", en: "/en/contact/" },
};

/**
 * Tanggal terakhir isi tiap halaman berubah, untuk `lastmod` di peta situs.
 * Perbarui hanya halaman yang teksnya benar-benar berubah, bukan setiap
 * deploy. Catatan Rilis berubah setiap kali ada versi baru.
 */
export const pageUpdatedIso: Record<PageKey, string> = {
  pdf: "2026-11-17",
  widgets: "2026-11-17",
  releaseNotes: "2026-11-17",
  contact: "2026-11-17",
};

export function getPage(key: PageKey, locale: Locale): PageCopy {
  return pages[locale][key];
}

export type { PageCopy, PageKey, PageLink, PageSection } from "./types";
