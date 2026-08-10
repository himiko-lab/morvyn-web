/**
 * Nilai-nilai yang perlu diganti sekali saja, lalu dipakai di seluruh situs.
 *
 * GANTI SEBELUM TAYANG — lihat README bagian "Yang masih perlu diisi".
 */
export const site = {
  name: "Morvyn",

  /** Dipakai untuk metadata Open Graph dan canonical URL. */
  url: "https://himikolab.com/morvyn",

  /**
   * PLACEHOLDER. Ganti dengan URL Play Store yang sebenarnya, bentuknya:
   * https://play.google.com/store/apps/details?id=com.namapaket.morvyn
   */
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.himikolab.morvyn",

  /** PLACEHOLDER. Kosongkan string ini kalau belum ada alamat email resmi. */
  contactEmail: "",

  /** Ditampilkan di footer. */
  publisher: "Himiko Lab",
} as const;

/**
 * Portal berita yang masuk ke menu Berita, disalin persis dari daftar sah di
 * `REMOTE_CONFIG_MORVYN.md`. Penulisannya memang tidak seragam — `detikcom`,
 * `detik inet`, dan `detik Finance` ditulis huruf kecil di sumbernya, dan itu
 * dipertahankan di sini supaya cocok dengan yang ada di aplikasi.
 */
export const newsSources = [
  "ABC News",
  "ANTARA",
  "ANTARA Ekonomi",
  "ANTARA Olahraga",
  "ANTARA Tekno",
  "Al Jazeera",
  "BBC",
  "BBC Indonesia",
  "CNA",
  "CNBC Indonesia",
  "CNN Indonesia",
  "CNN Olahraga",
  "France 24",
  "JPNN",
  "New York Times",
  "Okezone",
  "Republika",
  "SCMP",
  "Sindonews",
  "Tempo",
  "Tempo Bisnis",
  "Tempo Bola",
  "The Guardian",
  "The Independent",
  "detik Finance",
  "detik inet",
  "detikcom",
] as const;
