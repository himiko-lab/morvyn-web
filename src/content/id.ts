import type { Dictionary } from "./types";

/**
 * Salinan bahasa Indonesia.
 *
 * Berpasangan dengan `en.ts` — keduanya memakai bentuk `Dictionary` yang sama,
 * jadi TypeScript akan protes kalau salah satu bahasa ketinggalan sebuah kunci.
 */
export const id: Dictionary = {
  meta: {
    title: "Morvyn: Catatan, Keuangan, dan Agenda dalam Satu Aplikasi",
    ogTitle: "Morvyn, satu ruang tenang untuk seluruh harimu",
    description:
      "Morvyn menyatukan catatan, keuangan, agenda, kebiasaan, cuaca, kalender, dan berita dari 27 portal dalam satu aplikasi Android. Gratis di Google Play.",
    localeName: "Indonesia",
    localeShort: "ID",
    ogImageAlt: "Morvyn, satu ruang tenang untuk seluruh harimu",
  },

  nav: {
    features: "Fitur",
    connected: "Terhubung",
    how: "Cara pakai",
    faq: "Tanya jawab",
    download: "Unduh",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    switchTo: "Ganti ke Bahasa Inggris",
    toggleTheme: "Ganti mode terang/gelap",
  },

  hero: {
    eyebrow: "Tujuh kebutuhan harian, satu aplikasi",
    headline: ["Satu ruang tenang untuk", "seluruh harimu"],
    body: "Catatan, keuangan, agenda, kebiasaan, cuaca, kalender, dan berita. Semuanya ada di Morvyn, dan semuanya bisa saling terhubung.",
    primaryCta: "Unduh di Google Play",
    secondaryCta: "Lihat fiturnya",
    iosNote: "Versi iOS sedang disiapkan",
    mockupAlt: "Tampilan Beranda aplikasi Morvyn",
  },

  featureMockupAlt: "Tampilan menu {name} di aplikasi Morvyn",

  stats: [
    { value: "7", label: "fitur inti", detail: "dalam satu aplikasi" },
    { value: "27", label: "sumber berita", detail: "nasional & internasional" },
    { value: "2", label: "bahasa", detail: "Indonesia & Inggris" },
  ],

  overview: {
    eyebrow: "Isi aplikasinya",
    title: "Tujuh menu yang menutupi hari biasa",
    body: "Bukan tujuh aplikasi terpisah yang kebetulan digabung. Tujuh menu yang tahu satu sama lain.",
  },

  features: {
    notes: {
      name: "Catatan",
      tagline: "Catatan yang tidak berhenti jadi catatan",
      short: "Teks bebas, daftar poin, dan tautan ke menu lain di Morvyn.",
      body: "Tulis catatan biasa, susun jadi daftar poin, atau kaitkan langsung ke agenda, transaksi, dan kebiasaanmu. Satu catatan rapat bisa sekalian menyimpan tugas turunannya.",
      points: [
        "Teks bebas dan daftar poin dalam satu editor",
        "Tautkan satu catatan ke agenda, keuangan, atau kebiasaan",
        "Cari cepat ke seluruh catatan",
      ],
    },
    finance: {
      name: "Keuangan",
      tagline: "Tahu ke mana uangmu pergi",
      short: "Pemasukan, pengeluaran, grafik, dan nilai tukar mata uang.",
      body: "Catat pemasukan dan pengeluaran, lihat polanya lewat grafik, lalu periksa nilai tukar mata uang tanpa perlu pindah aplikasi.",
      points: [
        "Grafik pemasukan dan pengeluaran",
        "Kategori pengeluaran yang bisa disesuaikan",
        "Nilai tukar mata uang yang diperbarui",
      ],
    },
    agenda: {
      name: "Agenda",
      tagline: "Alarm, acara, dan tugas dalam satu daftar",
      short: "Bangun tepat waktu, hadir tepat waktu, selesai tepat waktu.",
      body: "Alarm untuk bangun, jadwal acara supaya tidak terlewat, dan daftar tugas untuk yang masih tertunda. Semuanya diatur dari satu tempat.",
      points: [
        "Alarm dengan pola pengulangan",
        "Jadwal acara beserta pengingatnya",
        "Daftar tugas dengan tenggat waktu",
      ],
    },
    news: {
      name: "Berita",
      tagline: "Kabar dunia dari 27 sumber",
      short: "Dari ANTARA dan detikcom sampai BBC, Al Jazeera, dan The Guardian.",
      body: "Dua puluh tujuh portal nasional dan internasional dikumpulkan jadi satu, dikelompokkan per kategori, dan terus diperbarui.",
      points: [
        "27 portal nasional dan internasional",
        "Kategori bisnis, olahraga, dan teknologi",
        "Diperbarui terus sepanjang hari",
      ],
    },
    habits: {
      name: "Kebiasaan",
      tagline: "Kebiasaan kecil yang benar-benar jalan",
      short: "Tentukan targetnya, Morvyn yang mengingatkan dan menghitung.",
      body: "Minum air delapan kali sehari, olahraga tiga kali seminggu, membaca setiap malam. Tentukan targetnya sekali, sisanya Morvyn yang menghitung.",
      points: [
        "Target harian atau hanya di hari tertentu",
        "Hitungan rentetan hari yang terlihat jelas",
        "Pengingat yang bisa diatur sendiri",
      ],
    },
    weather: {
      name: "Cuaca",
      tagline: "Cuaca untuk lokasimu, bukan kota sebelah",
      short: "Perkiraan terbaru berdasarkan lokasi yang akurat.",
      body: "Perkiraan cuaca terbaru berdasarkan lokasi presisi, supaya rencana harimu tidak dibatalkan hujan yang tidak terbaca.",
      points: [
        "Lokasi akurat, bukan perkiraan tingkat kota",
        "Perkiraan per jam dan beberapa hari ke depan",
        "Tampil berdampingan dengan agenda harimu",
      ],
    },
    calendar: {
      name: "Kalender",
      tagline: "Satu bulan penuh dalam sekali lihat",
      short: "Kalender lengkap dengan tugas dan acara di tanggalnya.",
      body: "Kalender utuh yang sudah berisi daftar tugas dan jadwal acara di tanggalnya masing-masing, jadi tidak perlu membuka menu lain untuk tahu tanggal 17 sibuk atau tidak.",
      points: [
        "Tampilan bulanan yang utuh",
        "Tugas dan acara menempel di tanggalnya",
        "Langsung tersambung ke Agenda",
      ],
    },
  },

  connected: {
    eyebrow: "Yang membedakan",
    title: "Catatanmu tahu isi harimu",
    body: "Di kebanyakan aplikasi, catatan hanyalah kotak teks. Di Morvyn, satu catatan bisa menautkan tugas di Agenda, pengeluaran di Keuangan, dan target di Kebiasaan. Buka catatannya, seluruh konteksnya ikut terbuka.",
    noteTitle: "Rapat tim Senin",
    noteLines: [
      "Kirim proposal sebelum Jumat",
      "Bayar langganan alat desain",
      "Rutin lapor progres tiap pagi",
    ],
    linkLabels: {
      agenda: "Jadi tugas di Agenda",
      finance: "Jadi catatan di Keuangan",
      habits: "Jadi target di Kebiasaan",
    },
  },

  how: {
    eyebrow: "Cara pakai",
    title: "Tiga langkah, lalu selesai",
    steps: [
      {
        title: "Unduh dan pilih bahasa",
        body: "Morvyn mengikuti bahasa ponselmu, Indonesia atau Inggris, dan bisa diganti kapan saja.",
      },
      {
        title: "Nyalakan menu yang kamu perlu",
        body: "Tidak semua orang butuh tujuh-tujuhnya. Pakai yang relevan, sisanya tidak akan mengganggu.",
      },
      {
        title: "Hubungkan catatan ke sisa harimu",
        body: "Begitu catatan tersambung ke agenda dan keuangan, kamu berhenti mengetik hal yang sama dua kali.",
      },
    ],
  },

  news: {
    eyebrow: "Sumber berita",
    title: "Dua puluh tujuh portal, satu halaman",
    body: "Daftar lengkap portal yang masuk ke menu Berita.",
  },

  faq: {
    eyebrow: "Tanya jawab",
    title: "Yang biasanya ditanyakan",
    items: [
      {
        q: "Apakah Morvyn tersedia untuk iPhone?",
        a: "Belum. Segera hadir.",
      },
      {
        q: "Bahasa apa saja yang didukung?",
        a: "Indonesia dan Inggris. Morvyn mengikuti bahasa yang dipakai ponselmu, termasuk untuk sapaan di Beranda dan notifikasi harian.",
      },
      {
        q: "Dari mana berita-beritanya diambil?",
        a: "Dari 27 portal nasional dan internasional, di antaranya ANTARA, detikcom, CNN Indonesia, Tempo, Republika, BBC, Al Jazeera, The Guardian, dan The New York Times.",
      },
      {
        q: "Apakah saya harus memakai semua fiturnya?",
        a: "Tidak. Tujuh menu itu berdiri sendiri-sendiri. Kalau kamu hanya butuh Catatan dan Agenda, sisanya tinggal dibiarkan.",
      },
      {
        q: "Bagaimana Morvyn menentukan cuaca saya?",
        a: "Dari lokasi perangkatmu, sehingga perkiraannya untuk tempat kamu berada, bukan rata-rata satu kota.",
      },
    ],
  },

  cta: {
    title: "Rapikan harimu mulai hari ini",
    body: "Morvyn tersedia gratis di Google Play.",
    button: "Unduh di Google Play",
    iosNote: "Versi iOS sedang disiapkan",
  },

  comingSoon: {
    badge: "Segera di Google Play",
    navLabel: "Segera",
    title: "Morvyn segera hadir",
    body: "Aplikasinya sedang dirampungkan sebelum masuk Google Play. Ikuti kabarnya, nanti kami beri tahu begitu sudah bisa diunduh.",
    followHeading: "Ikuti kabarnya",
    faq: {
      q: "Kapan Morvyn bisa diunduh?",
      a: "Belum ada tanggal pastinya. Aplikasinya sedang dirampungkan sebelum masuk Google Play, dan pengumumannya akan lewat akun media sosial Himiko Lab.",
    },
  },

  footer: {
    tagline: "Satu ruang tenang untuk seluruh harimu.",
    productHeading: "Produk",
    aboutHeading: "Tentang",
    followHeading: "Ikuti kami",
    privacy: "Kebijakan Privasi",
    terms: "Ketentuan Layanan",
    contact: "Kontak",
    rights: "Hak cipta dilindungi.",
  },
};
