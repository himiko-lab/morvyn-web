/**
 * Bentuk salinan halaman tambahan: PDF dan Pindai, Widget, Catatan Rilis, dan
 * Kontak.
 *
 * Halaman-halaman ini bukan menu aplikasi, jadi tidak masuk `FeatureKey`:
 * "delapan menu" di seluruh situs tetap delapan, dan tidak ada yang perlu
 * tangkapan layar atau gambar bagikan sendiri. Bentuknya sengaja mirip
 * `FeaturePageCopy` supaya kerangka halamannya bisa serupa.
 *
 * Setiap klaim tentang aplikasi di sini harus cocok dengan aplikasinya.
 * Kalau ragu, lebih baik tidak ditulis.
 */
export type PageKey = "pdf" | "widgets" | "releaseNotes" | "contact";

/** Tautan di bawah satu bagian. `href` dalam situs diawali garis miring. */
export interface PageLink {
  label: string;
  href: string;
}

export interface PageSection {
  heading: string;
  paragraphs: string[];
  points?: string[];
  links?: PageLink[];
}

export interface PageCopy {
  /** Nama pendek: remah roti, footer, dan kartu di beranda. */
  name: string;
  /** Satu kalimat untuk kartu di beranda. */
  short: string;
  /** Label kecil di atas judul. */
  eyebrow: string;
  /** Isi <title>, di bawah 60 karakter. */
  title: string;
  /** Deskripsi meta, sekitar 140-160 karakter. */
  description: string;
  h1: string;
  lead: string;
  sections: PageSection[];
  /**
   * Bagian tambahan yang tampil terlipat di bawah `sections`, di balik satu
   * tombol. Dipakai Catatan Rilis untuk versi lama. Isinya tetap ada di HTML,
   * jadi tetap terbaca mesin pencari.
   */
  collapsed?: { label: string; sections: PageSection[] };
  /** Bila ada, tampil utuh di halaman dan ikut jadi `FAQPage`. */
  faq?: { q: string; a: string }[];
}
