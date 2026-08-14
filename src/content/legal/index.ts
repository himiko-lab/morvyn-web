import type { Locale } from "@/content";
import { privacyId } from "./privacy-id";
import { privacyEn } from "./privacy-en";
import { termsId } from "./terms-id";
import { termsEn } from "./terms-en";
import type { LegalDocument } from "./types";

/** Dua dokumen, masing-masing dalam dua bahasa. */
export type LegalKind = "privacy" | "terms";

export const legalKinds: LegalKind[] = ["privacy", "terms"];

/**
 * Alamat tiap dokumen per bahasa.
 *
 * Ditulis lengkap dengan garis miring penutup, mengikuti `trailingSlash: true`
 * di next.config.ts. Ini bukan soal rapi-rapian: canonical yang berbeda garis
 * miring dengan URL sebenarnya dihitung Google sebagai dua halaman.
 *
 * Alamat Indonesianya berbahasa Indonesia (`/privasi`, `/ketentuan`) karena
 * itulah yang didaftarkan ke Google Cloud Console dan Play Console. JANGAN
 * diubah setelah didaftarkan — pengajuan verifikasi OAuth menunjuk URL persis,
 * dan alamat yang berpindah membatalkan pemeriksaan yang sudah berjalan.
 */
export const legalPath: Record<LegalKind, Record<Locale, string>> = {
  privacy: { id: "/privasi/", en: "/en/privacy/" },
  terms: { id: "/ketentuan/", en: "/en/terms/" },
};

const documents: Record<LegalKind, Record<Locale, LegalDocument>> = {
  privacy: { id: privacyId, en: privacyEn },
  terms: { id: termsId, en: termsEn },
};

export function getLegalDocument(kind: LegalKind, locale: Locale): LegalDocument {
  return documents[kind][locale];
}

/** Dokumen pasangannya — dipakai untuk tautan silang di kaki halaman. */
export function otherLegalKind(kind: LegalKind): LegalKind {
  return kind === "privacy" ? "terms" : "privacy";
}

/**
 * Tanggal berlaku dalam bentuk yang dibaca mesin, untuk atribut
 * `<time datetime>`. Bentuk yang dibaca manusia ada di tiap dokumen, karena
 * penulisannya berbeda antarbahasa.
 *
 * Diperbarui bersama `effectiveDate` di keempat berkas dokumen setiap kali
 * isinya berubah.
 */
export const legalEffectiveIso = "2026-08-14";

/**
 * Teks kerangka halaman — yang di luar isi dokumen itu sendiri.
 *
 * Ditaruh di sini, bukan di `Dictionary`, karena semuanya hanya dipakai oleh
 * halaman hukum. Bentuk `Record<Locale, ...>`-nya tetap menjaga aturan yang
 * sama seperti Dictionary: satu bahasa tidak bisa diam-diam ketinggalan satu
 * kunci tanpa `npm run build` ikut gagal.
 */
export const legalUi: Record<
  Locale,
  {
    /** Remah roti di atas judul. */
    home: string;
    /** Judul di atas blok tautan silang di kaki halaman. */
    alsoHeading: string;
    /** Ajakan menghubungi, di kaki halaman. */
    contactHeading: string;
    contactBody: string;
    /** Label tombol kembali ke atas. */
    backToTop: string;
  }
> = {
  id: {
    home: "Beranda",
    alsoHeading: "Baca juga",
    contactHeading: "Ada yang ingin ditanyakan?",
    contactBody:
      "Kirim saja email. Pertanyaan soal privasi, data, atau ketentuan pemakaian dijawab langsung oleh pengembangnya.",
    backToTop: "Kembali ke atas",
  },
  en: {
    home: "Home",
    alsoHeading: "Read next",
    contactHeading: "Anything you want to ask?",
    contactBody:
      "Just send an email. Questions about privacy, data, or these terms are answered by the developer directly.",
    backToTop: "Back to top",
  },
};

export type { LegalBlock, LegalDocument, LegalSection } from "./types";
