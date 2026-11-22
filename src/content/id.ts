import type { Dictionary } from "./types";

/**
 * Salinan bahasa Indonesia.
 *
 * Berpasangan dengan `en.ts`: keduanya memakai bentuk `Dictionary` yang sama,
 * jadi TypeScript akan protes kalau salah satu bahasa ketinggalan sebuah kunci.
 */
export const id: Dictionary = {
  meta: {
    title: "Morvyn: Catatan, Keuangan, dan Agenda dalam Satu Aplikasi",
    ogTitle: "Morvyn, satu ruang tenang untuk seluruh harimu",
    description:
      "Morvyn menyatukan catatan, keuangan, agenda, kebiasaan, cuaca, kalender, gempa, dan berita dari 29 portal dalam satu aplikasi Android. Gratis di Google Play.",
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
    eyebrow: "Delapan kebutuhan harian, satu aplikasi",
    headline: ["Satu ruang tenang untuk", "seluruh harimu"],
    body: "Catatan, keuangan, agenda, kebiasaan, cuaca, kalender, berita, dan info gempa. Semuanya ada di Morvyn, aplikasi Android buatan Himiko Lab, dan semuanya bisa saling terhubung.",
    primaryCta: "Unduh di Google Play",
    secondaryCta: "Lihat fiturnya",
    iosNote: "Saat ini hanya untuk Android",
    mockupAlt: "Tampilan Beranda aplikasi Morvyn",
  },

  featureMockupAlt: "Tampilan menu {name} di aplikasi Morvyn",

  stats: [
    { value: "8", label: "fitur inti", detail: "dalam satu aplikasi" },
    { value: "29", label: "sumber berita", detail: "nasional & internasional" },
    { value: "2", label: "bahasa", detail: "Indonesia & Inggris" },
  ],

  overview: {
    eyebrow: "Isi aplikasinya",
    title: "Delapan menu yang menutupi hari biasa",
    body: "Bukan delapan aplikasi terpisah yang kebetulan digabung. Delapan menu yang tahu satu sama lain.",
  },

  features: {
    notes: {
      name: "Catatan",
      tagline: "Catatan yang tidak berhenti jadi catatan",
      short: "Teks, daftar centang, gambar, PDF, dan tautan ke menu lain di Morvyn.",
      body: "Tulis catatan biasa, susun jadi daftar poin atau daftar centang, atau kaitkan langsung ke agenda, transaksi, dan kebiasaanmu. Catatan juga bisa memuat gambar, coretan tangan, rumus matematika, dan lampiran PDF lengkap dengan pembacanya. Dokumen bisa dipindai menjadi PDF. Satu catatan rapat bisa sekalian menyimpan tugas turunannya.",
      points: [
        "Teks bebas, daftar poin, dan daftar centang dalam satu editor",
        "Gambar, coretan tangan, rumus matematika, dan lampiran PDF dengan pembacanya",
        "Tautkan satu catatan ke agenda, keuangan, atau kebiasaan",
        "Kategori catatan dan pencarian cepat ke seluruh catatan",
        "Widget Catatan: daftar centang bisa dicentang langsung dari layar utama",
      ],
    },
    finance: {
      name: "Keuangan",
      tagline: "Tahu ke mana uangmu pergi",
      short: "Pemasukan, pengeluaran, beberapa dompet, grafik, dan nilai tukar mata uang.",
      body: "Catat pemasukan dan pengeluaran di beberapa dompet, misalnya tunai, rekening, dan dompet digital, lalu pindahkan saldo di antaranya. Lihat polanya lewat grafik, dan periksa nilai tukar mata uang tanpa perlu pindah aplikasi.",
      points: [
        "Beberapa dompet dan pindah saldo antardompet",
        "Grafik pemasukan dan pengeluaran",
        "Utang & Piutang, dengan cicilan dan pengingat jatuh tempo",
        "Nilai tukar mata uang yang diperbarui",
        "Tombol sembunyikan saldo, berlaku juga di widget Keuangan",
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
        "Nada alarm dari lagu atau audio milikmu sendiri",
        "Widget Agenda: tugas bisa dicentang langsung dari layar utama",
      ],
    },
    news: {
      name: "Berita",
      tagline: "Kabar dunia dari 29 sumber",
      short: "Dari ANTARA dan detikcom sampai BBC, Al Jazeera, dan The Guardian.",
      body: "Dua puluh sembilan portal nasional dan internasional dikumpulkan jadi satu, dikelompokkan per kategori, dan terus diperbarui.",
      points: [
        "29 portal nasional dan internasional",
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
        "Widget Kebiasaan di layar utama ponselmu",
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
        "Prakiraan 24 jam yang bisa digeser, dan widget Cuaca",
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
    earthquake: {
      name: "Gempa",
      tagline: "Info gempa terbaru, bukan peringatan dini",
      short: "Info gempa terbaru dari BMKG atau USGS. Bukan peringatan dini.",
      body: "Morvyn menampilkan info gempa terbaru, dari BMKG kalau kamu di Indonesia dan dari U.S. Geological Survey kalau kamu di luar Indonesia. Bila izin lokasi kamu berikan, jarak gempanya dihitung dari lokasimu. Ini info gempa, bukan peringatan dini.",
      points: [
        "Sumber BMKG di Indonesia, U.S. Geological Survey di luar Indonesia",
        "Jarak gempa dari lokasimu, bila izin lokasi diberikan",
        "Notifikasi yang bisa diatur: radius, magnitudo minimal, gempa besar, dan potensi tsunami dari BMKG",
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
        body: "Tidak semua orang butuh delapan-delapannya. Pakai yang relevan, sisanya tidak akan mengganggu.",
      },
      {
        title: "Hubungkan catatan ke sisa harimu",
        body: "Begitu catatan tersambung ke agenda dan keuangan, kamu berhenti mengetik hal yang sama dua kali.",
      },
    ],
    video: {
      heading: "Lihat Morvyn dalam 90 detik",
      body: "Video perkenalan singkat yang menyusuri semua menu Morvyn, dan memperlihatkan tampilannya di ponsel, ponsel lipat, dan tablet.",
      playLabel: "Putar video Introducing Morvyn",
      note: "Video diputar dari YouTube setelah kamu menekan tombol putar.",
    },
  },

  news: {
    eyebrow: "Sumber berita",
    title: "Dua puluh sembilan portal, satu halaman",
    body: "Daftar lengkap portal yang masuk ke menu Berita.",
  },

  faq: {
    eyebrow: "Tanya jawab",
    title: "Yang biasanya ditanyakan",
    items: [
      {
        q: "Apakah Morvyn tersedia untuk iPhone?",
        a: "Belum. Saat ini Morvyn hanya untuk Android.",
      },
      {
        q: "Bahasa apa saja yang didukung?",
        a: "Indonesia dan Inggris. Morvyn mengikuti bahasa yang dipakai ponselmu, termasuk untuk sapaan di Beranda dan notifikasi harian.",
      },
      {
        q: "Dari mana berita-beritanya diambil?",
        a: "Dari 29 portal nasional dan internasional, di antaranya ANTARA, detikcom, CNN Indonesia, Tempo, Republika, BBC, Al Jazeera, The Guardian, dan The New York Times.",
      },
      {
        q: "Apakah Morvyn bisa membuka dan memindai PDF?",
        a: "Bisa. Morvyn membuka PDF dari perangkat, dari aplikasi lain lewat \"Buka dengan\", atau dari catatan, dan memindai dokumen kertas dengan kamera menjadi PDF. Teks di PDF hasil pindaian dikenali di ponsel tanpa internet, sehingga bisa dipilih, disalin, dan dicari.",
        link: { label: "Selengkapnya tentang PDF dan pindai", href: "/fitur/pdf/" },
      },
      {
        q: "Apakah catatan bisa dikunci?",
        a: "Bisa. Catatan dikunci dengan kunci layar ponselmu: PIN, pola, atau sidik jari. Judulnya tetap terlihat di daftar.",
        link: { label: "Selengkapnya tentang Catatan", href: "/fitur/catatan/" },
      },
      {
        q: "Apakah Morvyn punya widget?",
        a: "Punya, lima widget layar utama: Keuangan, Agenda, Catatan, Kebiasaan, dan Cuaca. Dari sana kamu bisa melihat saldo, menambah transaksi, dan mencentang tugas tanpa membuka aplikasi.",
        link: { label: "Selengkapnya tentang widget", href: "/fitur/widget/" },
      },
      {
        q: "Apakah Morvyn bisa dipakai di tablet dan ponsel lipat?",
        a: "Bisa. Di tablet lanskap, Catatan, Agenda, Kalender, Kebiasaan, Gempa, serta Utang & Piutang tampil dua panel, dan di layar lebar navigasinya pindah ke samping. Isian formulir dan catatan tidak hilang saat layar diputar atau ponsel dilipat, dan alarm punya mode tabletop untuk ponsel lipat yang setengah terbuka.",
      },
      {
        q: "Apakah saya harus memakai semua fiturnya?",
        a: "Tidak. Delapan menu itu berdiri sendiri-sendiri. Kalau kamu hanya butuh Catatan dan Agenda, sisanya tinggal dibiarkan.",
      },
      {
        q: "Bagaimana Morvyn menentukan cuaca saya?",
        a: "Dari lokasi perangkatmu, sehingga perkiraannya untuk tempat kamu berada, bukan rata-rata satu kota.",
      },
      {
        q: "Data apa yang dikirim Morvyn?",
        a: "Isi catatan, keuangan, agenda, dan kebiasaanmu tetap di perangkatmu. Morvyn mengirim statistik menu yang dibuka dan laporan crash ke pengembang lewat Google. Keduanya selalu menyala, dan tidak ada iklan. Rinciannya ada di Kebijakan Privasi.",
        link: { label: "Baca Kebijakan Privasi", href: "/privasi/" },
      },
    ],
  },

  cta: {
    title: "Rapikan harimu mulai hari ini",
    body: "Morvyn tersedia gratis di Google Play.",
    button: "Unduh di Google Play",
    iosNote: "Saat ini hanya untuk Android",
  },

  appFeatureList: [
    "Catatan dengan teks berformat, gambar, tautan web, coretan tangan, dan rumus matematika",
    "Kunci catatan dengan kunci layar ponsel",
    "Ekspor catatan ke PDF atau Markdown",
    "Pindai dokumen kertas dengan kamera menjadi PDF",
    "Pembaca PDF dengan OCR di perangkat, penanda halaman, atur halaman, dan kompres",
    "Pembaca Markdown, teks, dan model 3D (GLB, glTF, STL, OBJ)",
    "Jadwal sekali atau berulang, tugas dengan sub-tugas, prioritas, dan tenggat",
    "Alarm dan pengingat dengan layar alarm penuh dan tunda",
    "Kalender bulanan, dengan sinkronisasi dua arah Google Kalender yang opsional",
    "Keuangan dengan saldo per dompet, pindah dana, ringkasan bulanan, grafik pekanan, dan kurs",
    "Utang dan piutang dengan cicilan, tanda terlambat, dan pengingat jatuh tempo",
    "Nada alarm dari lagu atau audio sendiri, dan alarm untuk jadwal",
    "Tampilan dua panel di tablet lanskap dan dukungan ponsel lipat",
    "Widget layar utama: Keuangan, Agenda, Catatan, Kebiasaan, dan Cuaca",
    "Kebiasaan dengan cincin progres dan hitungan beruntun",
    "Cuaca dengan prakiraan 24 jam yang bisa digeser",
    "Info gempa dari BMKG dan USGS",
    "Berita dari 29 portal",
    "Cadangan opsional ke Google Drive milik pengguna",
    "Mode terang dan gelap",
    "Bahasa Indonesia dan Inggris",
    "Gratis, tanpa iklan",
  ],

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
