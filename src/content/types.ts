/**
 * Bentuk salinan teks situs.
 *
 * `id.ts` dan `en.ts` sama-sama harus memenuhi bentuk ini. Kalau satu bahasa
 * ketinggalan sebuah kunci, `npm run build` gagal — jadi terjemahan tidak bisa
 * diam-diam tertinggal.
 */

export type FeatureKey =
  | "notes"
  | "finance"
  | "agenda"
  | "news"
  | "habits"
  | "weather"
  | "calendar";

export interface FeatureCopy {
  /** Nama menu seperti yang tampil di aplikasi. */
  name: string;
  /** Judul bagian saat fitur dibahas panjang. */
  tagline: string;
  /** Satu kalimat untuk kartu ringkas di grid. */
  short: string;
  /** Paragraf untuk bagian pembahasan panjang. */
  body: string;
  /** Tiga poin pendukung. */
  points: string[];
}

export interface Dictionary {
  meta: {
    /**
     * Isi tag <title>. Ditulis untuk hasil pencarian, bukan untuk suasana:
     * kata yang benar-benar diketik orang lebih dulu, nama merek di depannya.
     * Usahakan di bawah 60 karakter supaya tidak dipotong Google.
     */
    title: string;
    /**
     * Judul yang tampil saat tautannya dibagikan (Open Graph). Di sini
     * taglinenya boleh mengambil alih — yang membaca sudah melihat gambar dan
     * lambangnya, jadi kata kunci tidak lagi jadi tugas judul.
     */
    ogTitle: string;
    /** Sekitar 150-160 karakter; lebih dari itu dipotong di hasil pencarian. */
    description: string;
    localeName: string;
    localeShort: string;
    /** Teks alternatif gambar Open Graph. */
    ogImageAlt: string;
  };
  nav: {
    features: string;
    connected: string;
    how: string;
    faq: string;
    download: string;
    openMenu: string;
    closeMenu: string;
    switchTo: string;
    toggleTheme: string;
  };
  hero: {
    eyebrow: string;
    /** Dua baris — baris kedua diberi gradien biru→ungu. */
    headline: [string, string];
    body: string;
    primaryCta: string;
    secondaryCta: string;
    iosNote: string;
    mockupAlt: string;
  };
  /**
   * Teks alternatif mockup di bagian pembahasan fitur. `{name}` diganti nama
   * menunya saat dipakai — lihat `FeatureDetails.tsx`.
   */
  featureMockupAlt: string;
  stats: { value: string; label: string; detail: string }[];
  overview: { eyebrow: string; title: string; body: string };
  features: Record<FeatureKey, FeatureCopy>;
  connected: {
    eyebrow: string;
    title: string;
    body: string;
    noteTitle: string;
    noteLines: [string, string, string];
    linkLabels: { agenda: string; finance: string; habits: string };
  };
  how: {
    eyebrow: string;
    title: string;
    steps: { title: string; body: string }[];
  };
  news: { eyebrow: string; title: string; body: string };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  cta: { title: string; body: string; button: string; iosNote: string };
  footer: {
    tagline: string;
    productHeading: string;
    aboutHeading: string;
    /** Judul di atas deretan ikon media sosial. */
    followHeading: string;
    privacy: string;
    terms: string;
    contact: string;
    rights: string;
  };
}
