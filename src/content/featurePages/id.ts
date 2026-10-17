import type { FeatureKey } from "../types";
import type { FeaturePageCopy } from "./types";

/**
 * Halaman fitur, bahasa Indonesia.
 *
 * Berpasangan dengan `en.ts`. Sapaannya "kamu", sama dengan beranda, bukan
 * "Anda" seperti di halaman hukum: ini halaman perkenalan, bukan dokumen.
 *
 * Setiap klaim teknis di sini (sumber data, apa yang dikirim, apa yang
 * disimpan) diambil dari Kebijakan Privasi. Kalau perilaku aplikasi berubah,
 * kebijakannya diubah dulu, lalu halaman ini menyusul.
 */
export const featurePagesId: Record<FeatureKey, FeaturePageCopy> = {
  notes: {
    slug: "catatan",
    title: "Catatan Morvyn: Daftar Centang, PDF, dan Coretan Tangan",
    description:
      "Menu Catatan di Morvyn: teks, daftar centang, gambar, coretan tangan, rumus matematika, lampiran PDF, dan pindai dokumen. Bisa ditautkan ke agenda dan keuangan.",
    h1: "Catatan di Morvyn: teks, PDF, dan coretan dalam satu tempat",
    lead: "Catatan adalah menu yang paling membedakan Morvyn. Satu catatan bisa berisi teks, daftar centang, gambar, coretan tangan, rumus matematika, dan lampiran PDF, lalu tersambung ke tugas, transaksi, dan kebiasaanmu.",
    sections: [
      {
        heading: "Satu editor untuk semua jenis catatan",
        paragraphs: [
          "Tidak perlu memilih jenis catatan di awal. Mulai dengan teks bebas, ubah sebagian jadi daftar poin, lalu jadikan sisanya daftar centang saat ternyata itu daftar belanja.",
          "Gambar bisa ditempel langsung di antara teks. Untuk yang lebih cepat digambar daripada diketik, ada coretan tangan dengan pena, dan Morvyn mengingat warna pena yang terakhir kamu pakai. Rumus matematika juga bisa ditulis di dalam catatan.",
        ],
        points: [
          "Teks bebas, daftar poin, dan daftar centang dalam satu editor",
          "Gambar dan coretan tangan di dalam catatan",
          "Rumus matematika",
          "Kategori buatan sendiri, urutan, dan saringan catatan",
          "Pencarian cepat ke seluruh catatan",
        ],
      },
      {
        heading: "Lampiran PDF, lengkap dengan pembacanya",
        paragraphs: [
          "PDF bisa dilampirkan ke catatan dan dibaca langsung di Morvyn, tanpa pindah ke aplikasi lain. Posisi bacanya diingat, jadi membuka PDF yang sama besok langsung kembali ke halaman terakhir.",
          "Dokumen kertas bisa dipindai dengan kamera menjadi PDF, lewat pemindai dokumen ML Kit dari Google. Hasilnya tersimpan sebagai PDF di catatan. Pembaca PDF-nya lalu mengenali teks pada halaman hasil pindaian, sehingga teksnya bisa dicari dan diseleksi. Pengenalan teks itu berjalan di ponselmu sendiri, dengan model untuk huruf Latin, Mandarin, Jepang, Korea, dan Dewanagari.",
        ],
      },
      {
        heading: "Catatan yang tersambung ke sisa harimu",
        paragraphs: [
          "Di kebanyakan aplikasi, catatan hanyalah kotak teks. Di Morvyn, satu catatan bisa ditautkan ke tugas di Agenda, transaksi di Keuangan, dan target di Kebiasaan.",
          "Contohnya catatan rapat. Tugas yang muncul dari rapat itu jadi tugas di Agenda, langganan yang harus dibayar jadi catatan di Keuangan, dan kebiasaan lapor progres tiap pagi jadi target di Kebiasaan. Buka catatannya, seluruh konteksnya ikut terbuka.",
        ],
      },
      {
        heading: "Widget dan pemulihan",
        paragraphs: [
          "Widget Catatan menampilkan catatan pilihanmu di layar utama ponsel, dan daftar centangnya bisa dicentang dari sana tanpa membuka aplikasi.",
          "Catatan yang terhapus tidak langsung hilang. Morvyn menyimpannya 7 hari supaya bisa dipulihkan, lalu membuangnya otomatis.",
        ],
      },
      {
        heading: "Isi catatanmu tetap di ponselmu",
        paragraphs: [
          "Morvyn tidak punya server sendiri. Catatan, gambar, coretan, dan PDF disimpan di dalam perangkatmu, dan di Google Drive milikmu sendiri hanya bila kamu menyalakan pencadangan. Himiko Lab tidak dapat membaca isi catatan siapa pun.",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah catatan saya dikirim ke server?",
        a: "Tidak. Catatan disimpan di perangkatmu. Bila kamu menyalakan pencadangan, salinannya disimpan di folder data aplikasi di Google Drive milikmu sendiri, yang tidak bisa diakses Himiko Lab.",
      },
      {
        q: "Bisakah Morvyn memindai dokumen menjadi PDF?",
        a: "Bisa. Pemindai dokumen mengubah foto dokumen menjadi PDF yang tersimpan di catatan, dan teks di halamannya dikenali di ponselmu sehingga bisa dicari.",
      },
      {
        q: "Catatan yang terhapus bisa dikembalikan?",
        a: "Bisa, selama 7 hari sejak dihapus. Setelah itu catatannya dibuang otomatis.",
      },
    ],
  },

  finance: {
    slug: "keuangan",
    title: "Keuangan Morvyn: Catat Pengeluaran di Banyak Dompet",
    description:
      "Menu Keuangan di Morvyn: catat pemasukan dan pengeluaran di beberapa dompet, pindah saldo, lihat grafik, cek kurs mata uang, dan sembunyikan saldo di widget.",
    h1: "Keuangan di Morvyn: tahu ke mana uangmu pergi",
    lead: "Catat pemasukan dan pengeluaran di beberapa dompet sekaligus, misalnya tunai, rekening, dan dompet digital. Morvyn merangkumnya jadi grafik, dan nilai tukar mata uang bisa dicek tanpa pindah aplikasi.",
    sections: [
      {
        heading: "Beberapa dompet, satu gambaran",
        paragraphs: [
          "Uang jarang tinggal di satu tempat. Buat dompet untuk setiap tempatnya, lalu catat setiap transaksi di dompet yang benar. Saat uang berpindah, misalnya tarik tunai dari rekening, pindahkan saldonya antardompet supaya angkanya tetap cocok.",
          "Tampilan kartu saldo bisa diganti motifnya, dan format angka serta mata uang utamanya diatur di Pengaturan.",
        ],
        points: [
          "Beberapa dompet dan pindah saldo antardompet",
          "Kategori pemasukan dan pengeluaran yang bisa disesuaikan",
          "Grafik untuk melihat pola pengeluaran",
          "Layar tambah transaksi cepat",
        ],
      },
      {
        heading: "Tempat transaksi, kalau kamu mau",
        paragraphs: [
          "Setiap transaksi bisa diberi keterangan tempat, dan kolom itu bisa diisi dari posisimu saat itu. Yang disimpan adalah nama tempatnya, atau koordinat bila nama tempat tidak tersedia. Izin lokasinya opsional.",
        ],
      },
      {
        heading: "Kurs mata uang",
        paragraphs: [
          "Nilai tukar mata uang diambil dari open.er-api.com dan bisa dicek langsung dari menu Keuangan. Yang dikirim ke sana hanya permintaan nilai tukar, tanpa data keuanganmu.",
        ],
      },
      {
        heading: "Sembunyikan saldo, juga di widget",
        paragraphs: [
          "Membuka aplikasi keuangan di tempat umum tidak harus memperlihatkan saldo ke orang di sebelah. Tombol sembunyikan saldo menutup angkanya, dan setelan itu juga berlaku di widget Keuangan di layar utama ponsel.",
          "Transaksi yang terhapus disimpan 7 hari supaya bisa dipulihkan, lalu dibuang otomatis.",
        ],
      },
      {
        heading: "Tersambung ke Catatan",
        paragraphs: [
          "Sebuah transaksi bisa ditautkan dari catatan. Catatan rapat yang menyebut langganan alat desain, misalnya, bisa langsung menyimpan pengeluarannya di Keuangan.",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah Morvyn terhubung ke rekening bank atau dompet digital?",
        a: "Tidak. Morvyn mencatat transaksi yang kamu masukkan sendiri. Tidak ada sambungan ke bank, dompet digital, atau layanan pembayaran mana pun.",
      },
      {
        q: "Apakah data keuangan saya dikirim ke mana-mana?",
        a: "Tidak. Nominal, kategori, nama dompet, dan catatan transaksi disimpan di perangkatmu, dan di Google Drive milikmu sendiri hanya bila pencadangan dinyalakan.",
      },
      {
        q: "Dari mana nilai tukar mata uangnya?",
        a: "Dari open.er-api.com. Morvyn hanya meminta nilai tukarnya, tanpa mengirim data apa pun tentang keuanganmu.",
      },
    ],
  },

  agenda: {
    slug: "agenda",
    title: "Agenda Morvyn: Alarm, Jadwal Acara, dan Daftar Tugas",
    description:
      "Menu Agenda di Morvyn menyatukan alarm berulang, jadwal acara beserta pengingatnya, dan daftar tugas bertenggat. Bisa sinkron dengan Google Calendar.",
    h1: "Agenda di Morvyn: alarm, acara, dan tugas dalam satu daftar",
    lead: "Alarm untuk bangun, jadwal acara supaya tidak terlewat, dan daftar tugas untuk yang masih tertunda. Ketiganya biasanya tersebar di tiga aplikasi; di Morvyn semuanya diatur dari satu tempat.",
    sections: [
      {
        heading: "Alarm yang benar-benar berbunyi",
        paragraphs: [
          "Alarm bisa diatur dengan pola pengulangan, jadi tidak perlu dibuat ulang setiap hari. Morvyn menjadwalkannya ke sistem Android pada waktu yang tepat, menampilkan layar alarm penuh, bergetar, dan membangunkan layar saat berbunyi.",
          "Setelah ponsel dimatikan lalu dinyalakan kembali, pengingat dan alarm dipasang ulang dengan sendirinya.",
        ],
        points: [
          "Alarm dengan pola pengulangan",
          "Layar alarm penuh, getar, dan membangunkan layar",
          "Dipasang ulang otomatis setelah ponsel menyala kembali",
        ],
      },
      {
        heading: "Acara dan tugas",
        paragraphs: [
          "Jadwal acara dicatat beserta pengingatnya, sedangkan tugas punya tenggat waktu. Keduanya otomatis muncul di menu Kalender pada tanggalnya, jadi satu bulan penuh bisa dilihat sekaligus.",
          "Widget Agenda menampilkan agenda hari ini di layar utama ponsel, dan tugasnya bisa dicentang dari sana.",
        ],
      },
      {
        heading: "Sinkronisasi dengan Google Calendar",
        paragraphs: [
          "Kalau jadwalmu sudah ada di Google Calendar, Morvyn bisa menyinkronkannya dua arah: acara dari Google Calendar ditarik ke Morvyn, dan acara yang kamu buat atau ubah di Morvyn dikirim ke sana. Sinkronisasinya opsional, mati secara bawaan, dan hanya menyentuh satu kalender yang kamu pilih sendiri.",
        ],
      },
      {
        heading: "Tugas yang lahir dari catatan",
        paragraphs: [
          "Tugas bisa dibuat dari catatan. Catatan rapat Senin yang berisi \"kirim proposal sebelum Jumat\" bisa langsung menjadi tugas bertenggat di Agenda, tanpa mengetik ulang.",
          "Jadwal, tugas, dan alarm yang terhapus disimpan 7 hari supaya bisa dipulihkan.",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah alarm tetap berbunyi kalau Morvyn tidak sedang dibuka?",
        a: "Ya. Alarm dijadwalkan ke sistem Android pada waktu yang tepat, dan dipasang ulang otomatis setelah ponsel dinyalakan kembali.",
      },
      {
        q: "Bisakah Agenda disinkronkan dengan Google Calendar?",
        a: "Bisa, dua arah, untuk satu kalender yang kamu pilih. Fitur ini opsional dan mati secara bawaan, dan butuh masuk dengan akun Google lebih dulu.",
      },
      {
        q: "Apa bedanya Agenda dan Kalender?",
        a: "Agenda tempat membuat dan mengatur alarm, acara, dan tugas. Kalender menampilkan acara dan tugas itu pada tanggalnya dalam tampilan bulanan.",
      },
    ],
  },

  news: {
    slug: "berita",
    title: "Berita Morvyn: 29 Portal Berita dalam Satu Aplikasi",
    description:
      "Menu Berita di Morvyn mengumpulkan 29 portal nasional dan internasional, dari ANTARA, detikcom, dan Tempo sampai BBC dan Al Jazeera, dikelompokkan per kategori.",
    h1: "Berita di Morvyn: 29 portal nasional dan internasional",
    lead: "Kabar dari dua puluh sembilan portal berita dikumpulkan jadi satu, dikelompokkan per kategori, dan terus diperbarui sepanjang hari. Dari ANTARA dan detikcom sampai BBC, Al Jazeera, dan The Guardian.",
    sections: [
      {
        heading: "Portal yang masuk",
        paragraphs: [
          "Portal Indonesia di antaranya ANTARA, detikcom, CNN Indonesia, CNBC Indonesia, Tempo, Republika, Sindonews, Okezone, dan JPNN. Dari luar negeri ada BBC, BBC Indonesia, Al Jazeera, The Guardian, The New York Times, The Independent, ABC News, France 24, CNA, dan South China Morning Post. Daftar lengkapnya ada di beranda.",
          "Beberapa portal hadir dalam beberapa rubrik, misalnya ANTARA Ekonomi, Tempo Bola, dan detik inet, sehingga berita bisnis, olahraga, dan teknologi punya kategorinya sendiri.",
        ],
        points: [
          "29 portal nasional dan internasional",
          "Kategori bisnis, olahraga, dan teknologi",
          "Diperbarui sepanjang hari",
        ],
      },
      {
        heading: "Pilih sendiri portalnya",
        paragraphs: [
          "Tidak semua orang membaca semua portal. Pilih yang kamu ikuti, sisanya tidak akan tampil. Kalau tidak butuh berita sama sekali, menu Berita bisa dimatikan.",
          "Berita yang ingin dibaca nanti bisa disimpan, dan riwayat bacaanmu tersimpan di perangkatmu sendiri.",
        ],
      },
      {
        heading: "Langsung dari penerbitnya",
        paragraphs: [
          "Morvyn tidak menulis atau menyunting berita. Menu Berita mengambil umpan RSS langsung dari situs tiap penerbit, tanpa server perantara. Judul dan isinya tetap milik penerbit masing-masing.",
        ],
      },
    ],
    faq: [
      {
        q: "Bisakah saya memilih portal berita yang tampil?",
        a: "Bisa. Pilih portal yang ingin kamu ikuti di pengaturan Berita. Menu Berita juga bisa dimatikan seluruhnya.",
      },
      {
        q: "Apakah Morvyn menulis beritanya sendiri?",
        a: "Tidak. Beritanya diambil lewat umpan RSS langsung dari situs penerbitnya, dan tetap milik penerbit itu.",
      },
      {
        q: "Apakah riwayat bacaan saya dikirim ke Himiko Lab?",
        a: "Tidak. Berita yang kamu simpan dan riwayat bacaanmu disimpan di perangkatmu sendiri.",
      },
    ],
  },

  habits: {
    slug: "kebiasaan",
    title: "Kebiasaan Morvyn: Pelacak Kebiasaan dan Rentetan Hari",
    description:
      "Menu Kebiasaan di Morvyn: tentukan target harian atau hanya di hari tertentu, atur pengingatnya, dan lihat rentetan hari. Lengkap dengan widget layar utama.",
    h1: "Kebiasaan di Morvyn: kebiasaan kecil yang benar-benar jalan",
    lead: "Minum air delapan kali sehari, olahraga tiga kali seminggu, membaca setiap malam. Tentukan targetnya sekali, sisanya Morvyn yang mengingatkan dan menghitung.",
    sections: [
      {
        heading: "Target yang sesuai jadwalmu",
        paragraphs: [
          "Tidak semua kebiasaan harus dilakukan setiap hari. Target bisa berlaku harian, atau hanya di hari-hari tertentu, misalnya olahraga setiap Senin, Rabu, dan Jumat.",
          "Pengingatnya diatur sendiri per kebiasaan, supaya datang di jam yang masuk akal untuk kebiasaan itu.",
        ],
        points: [
          "Target harian atau hanya di hari tertentu",
          "Pengingat yang bisa diatur sendiri",
          "Hitungan rentetan hari yang terlihat jelas",
          "Widget Kebiasaan di layar utama ponsel",
        ],
      },
      {
        heading: "Rentetan hari yang terlihat",
        paragraphs: [
          "Setiap kali kebiasaan dicentang, rentetan harinya bertambah. Angka itu sederhana, tapi justru itulah yang membuat orang enggan memutusnya.",
          "Widget Kebiasaan menaruh kebiasaanmu di layar utama ponsel, jadi kamu tidak perlu ingat untuk membuka aplikasinya dulu.",
        ],
      },
      {
        heading: "Tersambung ke Catatan",
        paragraphs: [
          "Sebuah target bisa dibuat dari catatan. Kesepakatan \"rutin lapor progres tiap pagi\" di catatan rapat bisa langsung menjadi target di Kebiasaan.",
          "Seperti menu lain, data kebiasaanmu disimpan di perangkatmu sendiri dan tidak dikirim ke Himiko Lab.",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah kebiasaan harus dilakukan setiap hari?",
        a: "Tidak. Target bisa berlaku setiap hari atau hanya di hari-hari yang kamu pilih.",
      },
      {
        q: "Apakah ada widget Kebiasaan?",
        a: "Ada. Widget Kebiasaan menampilkan kebiasaanmu di layar utama ponsel.",
      },
      {
        q: "Apakah data kebiasaan saya dikirim ke server?",
        a: "Tidak. Data kebiasaan disimpan di perangkatmu, dan di Google Drive milikmu sendiri hanya bila pencadangan dinyalakan.",
      },
    ],
  },

  weather: {
    slug: "cuaca",
    title: "Cuaca Morvyn: Perkiraan Cuaca per Jam Sesuai Lokasimu",
    description:
      "Menu Cuaca di Morvyn menampilkan perkiraan per jam dan beberapa hari ke depan untuk lokasi presisimu, bukan rata-rata satu kota. Data dari Open-Meteo.",
    h1: "Cuaca di Morvyn: untuk lokasimu, bukan kota sebelah",
    lead: "Perkiraan cuaca terbaru berdasarkan lokasi presisi, per jam dan untuk beberapa hari ke depan, supaya rencana harimu tidak dibatalkan hujan yang tidak terbaca.",
    sections: [
      {
        heading: "Lokasi presisi, bukan rata-rata kota",
        paragraphs: [
          "Cuaca di satu ujung kota bisa berbeda dengan ujung lainnya. Morvyn memakai koordinat ponselmu, sehingga perkiraannya untuk tempat kamu berada.",
          "Datanya berasal dari Open-Meteo, dengan OpenWeather sebagai cadangan. Saat kamu berpindah lebih dari sekitar 3 km, cuacanya disegarkan untuk posisi baru itu.",
        ],
        points: [
          "Perkiraan per jam dan beberapa hari ke depan",
          "Lokasi presisi, bukan perkiraan tingkat kota",
          "Satuan suhu bisa diatur",
          "Kartu info gempa terbaru di layar Cuaca",
        ],
      },
      {
        heading: "Berdampingan dengan harimu",
        paragraphs: [
          "Cuaca juga tampil di Beranda Morvyn, di samping agenda hari ini. Kalau hari ini ada acara di luar dan sore nanti hujan, keduanya terlihat di satu layar.",
          "Layar Cuaca juga memuat kartu kecil berisi info gempa terbaru dari menu Gempa.",
        ],
      },
      {
        heading: "Izin lokasi yang secukupnya",
        paragraphs: [
          "Izin lokasi bersifat opsional, dan Morvyn tidak meminta izin lokasi latar. Koordinatmu dikirim ke penyedia data cuaca hanya sebagai bagian dari permintaan cuaca, tidak disimpan di server mana pun oleh Morvyn, dan tidak dikaitkan dengan identitasmu.",
        ],
      },
    ],
    faq: [
      {
        q: "Dari mana data cuaca Morvyn?",
        a: "Dari Open-Meteo, dengan OpenWeather sebagai cadangan.",
      },
      {
        q: "Apakah Morvyn melacak lokasi saya di latar belakang?",
        a: "Tidak. Morvyn tidak meminta izin lokasi latar. Izin lokasinya sendiri opsional.",
      },
      {
        q: "Bisakah satuan suhunya diganti?",
        a: "Bisa, lewat Pengaturan di dalam aplikasi.",
      },
    ],
  },

  calendar: {
    slug: "kalender",
    title: "Kalender Morvyn: Tugas dan Acara dalam Tampilan Bulanan",
    description:
      "Menu Kalender di Morvyn menampilkan satu bulan penuh dengan tugas dan acara di tanggalnya. Tersambung ke Agenda dan bisa sinkron dengan Google Calendar.",
    h1: "Kalender di Morvyn: satu bulan penuh dalam sekali lihat",
    lead: "Kalender utuh yang sudah berisi daftar tugas dan jadwal acara di tanggalnya masing-masing, jadi tidak perlu membuka menu lain untuk tahu tanggal 17 sibuk atau tidak.",
    sections: [
      {
        heading: "Tugas dan acara menempel di tanggalnya",
        paragraphs: [
          "Setiap acara dan tugas yang kamu buat di Agenda otomatis muncul di Kalender pada tanggalnya. Tidak ada yang perlu dimasukkan dua kali.",
        ],
        points: [
          "Tampilan bulanan yang utuh",
          "Tugas dan acara menempel di tanggalnya",
          "Langsung tersambung ke Agenda",
          "Sinkronisasi dua arah dengan Google Calendar, opsional",
        ],
      },
      {
        heading: "Sinkronisasi dengan Google Calendar",
        paragraphs: [
          "Bila kamu menyalakannya, Morvyn membaca dan menulis acara pada satu kalender Google yang kamu pilih sendiri. Acara dari Google Calendar ikut tampil di Kalender Morvyn, dan acara yang kamu buat di Morvyn dikirim ke kalender Google itu.",
          "Sinkronisasinya opsional dan mati secara bawaan. Memutus sambungannya dari Pengaturan menghapus acara asal Google dari Morvyn, sekaligus menghapus dari Google Calendar salinan jadwal yang dibuat Morvyn. Acara yang kamu buat sendiri di Google Calendar tidak disentuh.",
        ],
      },
      {
        heading: "Tidak lewat server siapa pun",
        paragraphs: [
          "Data kalender hanya bergerak antara ponselmu dan Google. Morvyn tidak punya server, jadi tidak ada salinan jadwalmu di pihak Himiko Lab.",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah Morvyn membaca semua kalender Google saya?",
        a: "Tidak. Sinkronisasi hanya menyentuh satu kalender yang kamu pilih sendiri.",
      },
      {
        q: "Apa yang terjadi kalau sinkronisasi Google Calendar diputus?",
        a: "Acara asal Google dihapus dari Morvyn, dan salinan jadwal yang dibuat Morvyn dihapus dari Google Calendar. Acara yang kamu buat sendiri di Google Calendar tetap ada.",
      },
      {
        q: "Apakah Kalender bisa dipakai tanpa akun Google?",
        a: "Bisa. Sinkronisasi Google Calendar opsional; tanpa itu, Kalender tetap menampilkan acara dan tugas dari Agenda.",
      },
    ],
  },

  earthquake: {
    slug: "gempa",
    title: "Info Gempa Morvyn: Data BMKG dan USGS di Ponselmu",
    description:
      "Menu Gempa di Morvyn menampilkan info gempa terbaru dari BMKG di Indonesia dan USGS di luar Indonesia, dengan jarak dari lokasimu. Bukan peringatan dini.",
    h1: "Info gempa di Morvyn: data BMKG dan USGS, bukan peringatan dini",
    lead: "Morvyn menampilkan info gempa terbaru, dari BMKG kalau kamu di Indonesia dan dari U.S. Geological Survey kalau kamu di luar Indonesia. Bila izin lokasi kamu berikan, jarak gempanya dihitung dari lokasimu.",
    sections: [
      {
        heading: "Info gempa, bukan peringatan dini",
        paragraphs: [
          "Menu ini menampilkan gempa yang sudah terjadi dan sudah dilaporkan lembaga resminya. Morvyn tidak memperkirakan gempa dan tidak memberi peringatan sebelum guncangan datang. Untuk keadaan darurat, ikuti arahan BMKG dan pihak berwenang setempat.",
        ],
      },
      {
        heading: "BMKG di Indonesia, USGS di luar Indonesia",
        paragraphs: [
          "Di Indonesia datanya dari BMKG, dan di luar Indonesia dari U.S. Geological Survey. Morvyn mengunduh berkas data mereka secara utuh, termasuk gambar peta guncangan, dan tidak mengirim posisimu sama sekali kepada keduanya.",
          "Negaramu ditentukan di ponsel, berurutan dari posisi terakhir yang diketahui, negara jaringan seluler, kode negara router Wi-Fi di sekitar, lalu bahasa ponsel. Tidak satu pun memakai alamat IP, jadi VPN tidak mengubah sumber datanya.",
        ],
      },
      {
        heading: "Jarak dari lokasimu",
        paragraphs: [
          "Bila izin lokasi diberikan, jarak setiap gempa dihitung di ponselmu sendiri. Lokasi perkiraan sudah cukup, dan izinnya tetap opsional.",
          "Salinan data gempa terakhir disimpan di perangkat, jadi menunya tetap berisi saat kamu sedang luring.",
        ],
        points: [
          "Sumber BMKG di Indonesia, U.S. Geological Survey di luar Indonesia",
          "Jarak gempa dihitung di ponsel, bila izin lokasi diberikan",
          "Tetap berisi saat luring",
        ],
      },
      {
        heading: "Notifikasi yang bisa diatur",
        paragraphs: [
          "Notifikasi info gempa bisa dimatikan atau diatur: radius dari lokasimu, magnitudo minimal, gempa besar, dan potensi tsunami dari BMKG. Pemeriksaan di latar berjalan sekitar tiap 15 menit dengan posisi yang sudah tersimpan, tanpa membaca lokasi baru.",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah Morvyn memberi peringatan dini gempa?",
        a: "Tidak. Morvyn menampilkan info gempa yang sudah terjadi dari BMKG atau USGS. Untuk keadaan darurat, ikuti arahan BMKG dan pihak berwenang setempat.",
      },
      {
        q: "Apakah posisi saya dikirim ke BMKG atau USGS?",
        a: "Tidak. Morvyn mengunduh data gempa mereka secara utuh, lalu menghitung jaraknya di ponselmu.",
      },
      {
        q: "Bisakah notifikasi gempa diatur?",
        a: "Bisa: radius, magnitudo minimal, gempa besar, dan potensi tsunami dari BMKG. Notifikasinya juga bisa dimatikan.",
      },
    ],
  },
};
