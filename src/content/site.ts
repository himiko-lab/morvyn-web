/**
 * Nilai-nilai yang perlu diganti sekali saja, lalu dipakai di seluruh situs.
 *
 * GANTI SEBELUM TAYANG — lihat README bagian "Yang masih perlu diisi".
 */
export const site = {
  name: "Morvyn",

  /**
   * Dipakai untuk metadata Open Graph dan canonical URL.
   * Harus sama dengan isi `public/CNAME`, kalau tidak canonical-nya menunjuk
   * ke alamat yang salah.
   */
  url: "https://morvyn.himikolab.my.id",

  /**
   * PLACEHOLDER. Ganti dengan URL Play Store yang sebenarnya, bentuknya:
   * https://play.google.com/store/apps/details?id=com.namapaket.morvyn
   */
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
   */
  playStoreLive: false,

  /** Kosongkan string ini kalau alamatnya dicabut dan belum ada gantinya. */
  contactEmail: "hi@himikolab.my.id",

  /** Ditampilkan di footer. */
  publisher: "Himiko Lab",

  /** Situs resmi penerbit. Dipakai di footer dan di `sameAs` data terstruktur. */
  publisherUrl: "https://www.himikolab.my.id",

  /**
   * Kode verifikasi Google Search Console, metode "HTML tag" — isi bagian
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
 * Akun resmi Himiko Lab.
 *
 * Dipakai dua kali dari satu sumber: sebagai deretan ikon di footer, dan
 * sebagai `sameAs` pada data terstruktur Organization. Yang kedua itu cara
 * Google diberi tahu bahwa akun-akun ini satu pemilik dengan situsnya —
 * kalau daftarnya cuma ada di footer, hubungan itu hanya tertebak.
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
 * Alamat yang layak masuk `sameAs`: harus halaman profil yang bisa dibuka,
 * jadi `mailto:` tidak ikut.
 */
export const sameAsUrls = socialLinks
  .filter((link) => link.key !== "email")
  .map((link) => link.href);

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
