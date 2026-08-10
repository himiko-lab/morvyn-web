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
    title: string;
    description: string;
    localeName: string;
    localeShort: string;
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
    privacy: string;
    terms: string;
    contact: string;
    rights: string;
  };
}
