/**
 * Nilai-nilai yang perlu diganti sekali saja, lalu dipakai di seluruh situs.
 *
 * GANTI SEBELUM TAYANG, lihat README bagian "Yang masih perlu diisi".
 */
export const site = {
  name: "Morvyn",

  /**
   * Dipakai untuk metadata Open Graph dan canonical URL.
   * Harus sama dengan isi `public/CNAME`, kalau tidak canonical-nya menunjuk
   * ke alamat yang salah.
   */
  url: "https://morvyn.himikolab.my.id",

  /** Alamat Morvyn di Google Play, dari nama paket `com.himikolab.morvyn`. */
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.himikolab.morvyn",

  /**
   * SATU SAKELAR UNTUK SELURUH SITUS. Setel `true` begitu aplikasinya benar-
   * benar bisa dibuka di Google Play, lalu deploy. Tidak ada lagi yang perlu
   * diubah: tombol unduh di header, hero, blok ajakan, dan footer ikut hidup
   * sendiri, begitu pula `offers` dan `downloadUrl` di data terstruktur.
   *
   * Selama `false`, tidak satu pun tautan menuju Play Store dicetak. Alasannya
   * bukan sekadar rapi: alamat itu masih membalas 404, dan halaman yang
   * mengajak mengunduh sesuatu yang belum ada merugikan dua kali sekaligus.
   * Pengunjung sampai di halaman kosong, dan Google melihat halaman promosi
   * yang tombol utamanya mati, salah satu sebab kenapa `morvyn.himikolab.my.id`
   * berstatus "di-crawl, saat ini tidak diindeks".
   *
   * Periksa dulu sebelum menyalakannya:
   *   curl -sI -o /dev/null -w '%{http_code}\n' "$PLAY_STORE_URL"
   *
   * Dinyalakan 14 Oktober 2026 atas keputusan pemilik. Saat itu alamatnya
   * masih membalas 404; kalau lama tetap begitu, kembalikan ke `false`.
   */
  playStoreLive: true,

  /** Kosongkan string ini kalau alamatnya dicabut dan belum ada gantinya. */
  contactEmail: "hi@himikolab.my.id",

  /** Ditampilkan di footer. */
  publisher: "Himiko Lab",

  /**
   * Situs resmi penerbit. Dipakai di footer dan halaman Kontak.
   *
   * Tanpa `www`: alamat berawalan `www` dialihkan (301) ke sini, dan
   * canonical situs itu sendiri juga menunjuk ke sini. Menautkan alamat yang
   * dialihkan membuat setiap tautan melewati satu lompatan yang tidak perlu.
   */
  publisherUrl: "https://himikolab.my.id",

  /**
   * Kode verifikasi Google Search Console, metode "HTML tag": isi bagian
   * `content="..."`-nya saja, bukan seluruh tagnya. Kalau dibiarkan kosong,
   * tag itu tidak ikut dicetak sama sekali.
   *
   * Domain ini memakai Cloudflare, jadi verifikasi lewat data DNS TXT
   * sebenarnya lebih mudah dan berlaku untuk seluruh subdomain sekaligus.
   * Slot ini disediakan kalau nanti lebih memilih cara HTML tag.
   */
  googleSiteVerification: "",
} as const;

/**
 * Tanggal terakhir isi beranda berubah, dipakai sebagai `lastmod` beranda di
 * peta situs. Perbarui HANYA saat teks beranda (`id.ts`/`en.ts`), tangkapan
 * layarnya, atau daftar portal di bawah benar-benar berubah, bukan setiap deploy: Google memakai
 * `lastmod` selama nilainya terbukti akurat, dan mengabaikannya begitu sering
 * meleset.
 */
export const homeUpdatedIso = "2026-11-22";

/**
 * Versi aplikasi terkini, diambil dari entri teratas `releases.json`. Jangan
 * ditulis ulang di sini: menambah versi baru cukup di berkas itu.
 */
export { appVersion } from "./releases";

/**
 * Akun resmi Himiko Lab, sebagai deretan ikon di footer.
 *
 * `sameAs` pada data terstruktur punya daftarnya sendiri di `organization`
 * di bawah, yang disalin persis dari situs Himiko Lab.
 *
 * `label` sengaja tidak diterjemahkan: nama platform sama di kedua bahasa.
 */
export const socialLinks = [
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/himiko.lab",
  },
  {
    key: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@himiko.lab",
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@HimikoLab",
  },
  {
    // Subdomain `id.`, bukan `www.`, bukan karena pembacanya orang Indonesia:
    // itulah yang dinyatakan Pinterest sendiri sebagai canonical, bahkan saat
    // halamannya diambil lewat www. Memakai www di `sameAs` berarti menunjuk
    // alamat yang pemiliknya sendiri bilang bukan yang utama.
    key: "pinterest",
    label: "Pinterest",
    href: "https://id.pinterest.com/labhimiko/",
  },
  {
    // Halaman ini belum punya nama pengguna, jadi alamatnya masih bentuk
    // `profile.php?id=`. Itu memang alamat sah yang dipakai Facebook sendiri
    // selama username-nya belum diatur; kalau nanti sudah ada, alamat pendek
    // itulah yang harus dipakai di sini.
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593282388390",
  },
  {
    key: "x",
    label: "X",
    href: "https://x.com/HimikoLab",
  },
  {
    // `threads.com`, bukan `threads.net`: alamat lamanya dialihkan ke sini dan
    // inilah yang dinyatakan Threads sebagai canonical.
    key: "threads",
    label: "Threads",
    href: "https://www.threads.com/@himiko.lab",
  },
  { key: "website", label: site.publisher, href: site.publisherUrl },
  { key: "email", label: site.contactEmail, href: `mailto:${site.contactEmail}` },
] as const;

/**
 * Halaman pengembang Himiko Lab di Google Play, ikut masuk `sameAs` di bawah.
 * Diambil dari tautan nama pengembang di halaman Morvyn di Play.
 *
 * Bentuk `dev?id=<angka>`, bukan `developer?id=<nama>`: angkanya tetap walau
 * nama pengembangnya diganti, sedangkan bentuk bernama ikut berubah.
 */
export const playDeveloperUrl: string =
  "https://play.google.com/store/apps/dev?id=5875924293723204317";

/**
 * Simpul `Organization` Himiko Lab untuk data terstruktur.
 *
 * SUMBER UTAMANYA SITUS HIMIKO LAB (https://himikolab.my.id/), bukan berkas
 * ini. Kedua situs menyatakan simpul yang sama lewat `@id` yang sama, dan dua
 * pernyataan yang berbeda isi tentang satu `@id` membuat Google harus memilih
 * sendiri mana yang benar. Karena itu setiap nilai di sini disalin persis
 * dari sana, termasuk hal kecil seperti garis miring di akhir `url` dan
 * ada-tidaknya `www` di alamat media sosial. Kalau situs Himiko Lab berubah,
 * yang di sini menyusul; jangan sebaliknya.
 *
 * `sameAs` sengaja TIDAK lagi diturunkan dari `socialLinks`: daftar itu
 * melayani ikon footer, memuat situs penerbit sendiri (yang bukan "profil
 * lain" dan tidak boleh ada di `sameAs`), dan penulisan alamatnya boleh
 * berbeda dari yang dipakai situs sumber.
 */
export const organization = {
  id: "https://himikolab.my.id/#organization",
  name: "Himiko Lab",
  alternateName: ["HimikoLab"],
  url: "https://himikolab.my.id/",
  logo: { url: "https://himikolab.my.id/favicon.png", width: 512, height: 512 },
  image: "https://himikolab.my.id/og-image.png",
  description:
    "Studio aplikasi digital yang membangun aplikasi harian, pengembang aplikasi Morvyn.",
  email: "hi@himikolab.my.id",
  slogan: "Explore Beyond. Build Within.",
  contactPoint: {
    contactType: "customer support",
    email: "hi@himikolab.my.id",
    url: "https://himikolab.my.id/kontak/",
    availableLanguage: ["id", "en"],
  },
  sameAs: [
    "https://www.instagram.com/himiko.lab",
    "https://www.tiktok.com/@himiko.lab",
    "https://www.threads.com/@himiko.lab",
    "https://id.pinterest.com/labhimiko/",
    "https://www.youtube.com/@HimikoLab",
    "https://www.facebook.com/profile.php?id=61593282388390",
    "https://x.com/HimikoLab",
    ...(playDeveloperUrl ? [playDeveloperUrl] : []),
  ],
} as const;

/**
 * Portal berita yang masuk ke menu Berita, disalin persis dari daftar sah di
 * `REMOTE_CONFIG_MORVYN.md`. Penulisannya memang tidak seragam: `detikcom`,
 * `detik inet`, dan `detik Finance` ditulis huruf kecil di sumbernya, dan itu
 * dipertahankan di sini supaya cocok dengan yang ada di aplikasi.
 */
export const newsSources = [
  "ABC News",
  "ANTARA",
  "ANTARA Ekonomi",
  "ANTARA English",
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
  "Tempo English",
  "The Guardian",
  "The Independent",
  "detik Finance",
  "detik inet",
  "detikcom",
] as const;
