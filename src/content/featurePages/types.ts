/**
 * Bentuk salinan satu halaman fitur (`/fitur/<menu>/` dan
 * `/en/features/<menu>/`).
 *
 * Isinya sengaja lebih dalam daripada bagian fitur di beranda. Halaman yang
 * cuma mengulang tiga kalimat beranda akan dinilai Google sebagai salinan
 * tipis, dan justru itu yang membuatnya tidak diindeks. Setiap klaim di sini
 * harus bisa ditelusuri ke perilaku aplikasi yang sebenarnya, yaitu yang juga
 * tertulis di Kebijakan Privasi: halaman fitur yang menjanjikan lebih dari
 * aplikasinya sama merugikannya dengan kebijakan yang begitu.
 */
export interface FeaturePageCopy {
  /** Segmen URL, mis. `catatan` untuk `/fitur/catatan/`. */
  slug: string;
  /** Isi <title>. Nama menu dan kata yang dicari orang; di bawah 60 karakter. */
  title: string;
  /** Deskripsi meta, sekitar 140-160 karakter. */
  description: string;
  h1: string;
  /** Paragraf pembuka di bawah judul. */
  lead: string;
  sections: FeatureSection[];
  /** Tampil utuh di halaman dan ikut jadi data terstruktur FAQPage. */
  faq: { q: string; a: string }[];
}

export interface FeatureSection {
  heading: string;
  paragraphs: string[];
  points?: string[];
}

/** Teks kerangka halaman fitur, di luar isi tiap menu. */
export interface FeaturePageUi {
  /** Remah roti paling kiri. */
  home: string;
  /** Label di atas judul, mis. "Fitur Morvyn". */
  eyebrow: string;
  faqHeading: string;
  relatedHeading: string;
  relatedBody: string;
  /** Tautan dari beranda ke halaman fitur. `{name}` diganti nama menunya. */
  learnMore: string;
}
