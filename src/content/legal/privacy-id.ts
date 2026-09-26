import type { LegalDocument } from "./types";

/**
 * Kebijakan Privasi, Bahasa Indonesia.
 *
 * Disusun dari perilaku aplikasi yang sebenarnya, bukan dari template. Kalau
 * suatu fitur berubah, YANG DIUBAH DULU adalah berkas ini: kebijakan yang
 * menjanjikan sesuatu yang tidak lagi benar lebih merugikan daripada tidak
 * ada kebijakan sama sekali, dan itu juga yang paling cepat menggagalkan
 * verifikasi OAuth.
 *
 * Dua hal yang tidak boleh hilang dari berkas ini:
 *
 * 1. Bagian `google-api-policy`. Verifikasi OAuth untuk scope sensitif
 *    (`drive.appdata`, `calendar.events`) hampir selalu ditolak kalau
 *    pernyataan kepatuhan dan Limited Use tidak tercantum eksplisit beserta
 *    tautan ke halaman kebijakan Google.
 * 2. Nama aplikasi yang ditulis persis "Morvyn", harus sama dengan yang
 *    terdaftar di layar persetujuan OAuth.
 *
 * Versi Inggrisnya di `privacy-en.ts` harus punya `id` bagian yang sama persis.
 */
export const privacyId: LegalDocument = {
  title: "Kebijakan Privasi",
  description:
    "Cara Morvyn menangani data Anda: tetap di perangkat kecuali Anda menyalakan pencadangan. Tanpa iklan, tanpa analitik, dan semua fitur Google opsional.",
  lead: "Morvyn adalah aplikasi Android buatan Himiko Lab. Halaman ini menjelaskan data apa yang ditangani aplikasi, ke mana perginya, dan, sama pentingnya, apa yang tidak dilakukannya.",
  effectiveLabel: "Berlaku sejak",
  effectiveDate: "26 September 2026",

  summaryHeading: "Ringkasnya",
  summary: [
    "**Morvyn tidak punya server.** Himiko Lab tidak dapat melihat isi catatan, jadwal, keuangan, maupun kebiasaan siapa pun. Bila Anda masuk dengan Google, satu-satunya yang kami pegang adalah catatan masuk untuk akun Anda, dan Anda dapat menghapusnya sendiri dari dalam aplikasi.",
    "Seluruh data Anda disimpan **di dalam perangkat Anda sendiri**, dan di Akun Google milik Anda sendiri hanya bila Anda menyalakan pencadangan.",
    "**Tidak ada analitik, tidak ada iklan, tidak ada SDK pelacak.** Tidak ada data yang dijual atau dibagikan. SDK Google yang dipakai Morvyn memang mengirim data teknis terbatas ke Google, dirinci di bagian \"Notifikasi, konfigurasi aplikasi, dan layanan Google lain\".",
    "Masuk dengan Google, pencadangan ke Google Drive, dan sinkronisasi Google Calendar semuanya **opsional**: Morvyn tetap utuh tanpa satu pun di antaranya.",
  ],

  tocHeading: "Isi halaman ini",

  sections: [
    {
      id: "pengelola",
      title: "Siapa yang mengelola Morvyn",
      blocks: [
        {
          kind: "p",
          text: "Morvyn adalah aplikasi Android dengan nama paket `com.himikolab.morvyn`, dikembangkan dan diterbitkan oleh Himiko Lab.",
        },
        {
          kind: "defs",
          items: [
            { term: "Nama aplikasi", text: "Morvyn" },
            { term: "Pengembang", text: "Himiko Lab" },
            {
              term: "Beranda aplikasi",
              text: "[morvyn.himikolab.my.id](https://morvyn.himikolab.my.id)",
            },
            {
              term: "Kontak",
              text: "[hi@himikolab.my.id](mailto:hi@himikolab.my.id)",
            },
          ],
        },
      ],
    },

    {
      id: "prinsip",
      title: "Prinsip utama: tanpa server, tanpa pelacakan",
      blocks: [
        {
          kind: "p",
          text: "**Morvyn tidak punya server sendiri.** Himiko Lab tidak memiliki basis data berisi isi aplikasi Anda dan tidak dapat melihat isi catatan, jadwal, keuangan, maupun kebiasaan siapa pun. Seluruh data pengguna disimpan di dalam perangkat memakai basis data lokal (Room/SQLite), dan di Akun Google milik Anda sendiri hanya bila Anda menyalakan pencadangan.",
        },
        {
          kind: "p",
          text: "**Ada satu pengecualian: catatan masuk.** Saat Anda masuk dengan Google, Firebase Authentication membuat akun di proyek Firebase milik Himiko Lab yang berisi alamat email, nama tampilan, URL foto profil Google, pengenal pengguna (UID), serta tanggal akun dibuat dan terakhir masuk. Himiko Lab dapat melihat daftar akun itu di konsol Firebase. Isinya tidak memuat satu pun isi aplikasi Anda, dan Anda dapat menghapusnya sendiri dari dalam Morvyn: lihat bagian \"Menghapus akun\".",
        },
        {
          kind: "p",
          text: "**Tidak ada pelacakan sama sekali.** Aplikasi ini tidak memakai Google Analytics, Firebase Analytics, Crashlytics, SDK iklan, maupun SDK pelacak pihak ketiga lain. Tidak ada profil perilaku yang dibangun, dan tidak ada data yang dijual atau dibagikan untuk keperluan iklan. SDK Google yang dipakai untuk masuk, notifikasi, konfigurasi, dan pemindai dokumen memang mengirim data teknis terbatas ke Google, masing-masing sesuai dokumentasinya sendiri: rinciannya ada di bagian \"Notifikasi, konfigurasi aplikasi, dan layanan Google lain\".",
        },
      ],
    },

    {
      id: "data-perangkat",
      title: "Data yang disimpan di perangkat Anda",
      blocks: [
        {
          kind: "p",
          text: "Morvyn menyimpan isinya di basis data lokal di dalam perangkat Anda. Yang tersimpan di sana:",
        },
        {
          kind: "list",
          items: [
            "Catatan",
            "Tugas",
            "Jadwal dan agenda",
            "Kebiasaan (habit)",
            "Catatan keuangan beserta kategorinya",
            "Alarm dan pengingat",
            "Berita yang Anda simpan",
            "Riwayat bacaan berita",
            "Catatan cuaca",
            "Riwayat penghapusan: item Jadwal dan Tugas yang Anda hapus disimpan 7 hari agar bisa dipulihkan, lalu dibuang otomatis",
            "Lampiran catatan: gambar, berkas PDF, hasil pindaian dokumen yang disimpan sebagai PDF, dan coretan",
            "Nama dan foto profil Anda",
            "Tempat pada catatan transaksi keuangan, bila Anda mengisinya dari posisi Anda (lihat bagian \"Lokasi, cuaca, dan tempat\")",
            "Data gempa: posisi terakhir yang diketahui, setelan notifikasi gempa, dan salinan data gempa terakhir (lihat bagian \"Info gempa\")",
          ],
        },
        {
          kind: "p",
          text: "Semuanya lokal, selain cadangan milik Anda sendiri. Tidak satu pun dari daftar di atas yang dikirim ke Himiko Lab.",
        },
      ],
    },

    {
      id: "masuk",
      title: "Masuk dengan Google",
      blocks: [
        {
          kind: "p",
          text: "Morvyn memakai **Firebase Authentication** untuk fitur Masuk dengan Google. Gunanya hanya satu: membuktikan bahwa akun yang meminta pencadangan memang milik Anda. Ini syarat fitur pencadangan.",
        },
        {
          kind: "p",
          text: "Masuk berarti membuat akun di proyek Firebase milik Himiko Lab. Akun itu berisi alamat email, nama tampilan, URL foto profil Google, pengenal pengguna (UID), serta tanggal akun dibuat dan terakhir masuk. Firebase Authentication juga mengumpulkan alamat IP Anda, untuk keamanan dan pencegahan penyalahgunaan, sebagaimana disebut dalam dokumentasi pengungkapan data Firebase.",
        },
        {
          kind: "p",
          text: "Akun itu dapat Anda hapus sendiri dari dalam aplikasi kapan saja: lihat bagian \"Menghapus akun\".",
        },
        {
          kind: "p",
          text: "Bersifat **opsional**. Morvyn tetap dapat dipakai sepenuhnya tanpa pernah masuk.",
        },
      ],
    },

    {
      id: "drive",
      title: "Pencadangan ke Google Drive",
      blocks: [
        {
          kind: "p",
          text: "Pencadangan bersifat **opsional** dan memakai scope `drive.appdata`. Berkas cadangan disimpan di folder data aplikasi milik Anda sendiri di Google Drive Anda.",
        },
        {
          kind: "p",
          text: "Cadangan juga memuat berkas PDF di Catatan Anda, yang disimpan di folder data aplikasi yang sama.",
        },
        {
          kind: "p",
          text: "Folder itu tersembunyi dari aplikasi lain, dan **Himiko Lab tidak punya akses ke sana**. Anda dapat menghapus isinya sendiri kapan saja lewat pengaturan Google Drive.",
        },
      ],
    },

    {
      id: "kalender",
      title: "Sinkronisasi Google Calendar",
      blocks: [
        {
          kind: "p",
          text: "Sinkronisasi kalender memakai scope `calendar.events`. Sifatnya dua arah, **opsional**, dan **mati secara bawaan**.",
        },
        {
          kind: "p",
          text: "Bila Anda menyalakannya, Morvyn **membaca dan menulis acara** pada satu kalender yang Anda pilih sendiri. Acara yang ditarik dari Google Calendar disimpan **di perangkat Anda** (dan di cadangan milik Anda sendiri, bila Anda menyalakan pencadangan); acara yang Anda buat atau ubah di Morvyn dikirim ke kalender Google Anda.",
        },
        {
          kind: "p",
          text: "Data kalender **tidak pernah dikirim ke pihak mana pun selain Google**, dan tidak pernah melewati server Himiko Lab, sekali lagi karena server itu tidak ada.",
        },
        {
          kind: "p",
          text: "Anda dapat memutus sambungan ini kapan saja dari Pengaturan di dalam Morvyn, dan mencabut izinnya dari halaman [Izin Pihak Ketiga di Akun Google](https://myaccount.google.com/permissions) milik Anda.",
        },
      ],
    },

    {
      id: "firebase",
      title: "Notifikasi, konfigurasi aplikasi, dan layanan Google lain",
      blocks: [
        {
          kind: "defs",
          items: [
            {
              term: "Firebase Cloud Messaging",
              text: "Mengirim notifikasi pengumuman dari pengembang. Perangkat berlangganan sebuah topik; sistem ini tidak dipakai untuk mengidentifikasi orang per orang. Untuk langganan topik itu, versi aplikasi ikut dikirim.",
            },
            {
              term: "Firebase Remote Config",
              text: "Mengambil nilai konfigurasi aplikasi. Untuk menentukan nilai mana yang berlaku, layanan ini mengirim kode negara, kode bahasa, zona waktu, versi platform dan sistem operasi, Firebase App ID, nama paket, serta versi SDK.",
            },
            {
              term: "Firebase Installations",
              text: "Dipakai oleh kedua layanan di atas. Layanan ini membuat pengenal per-instalasi (FID). Menurut Firebase, FID tidak mengidentifikasi orang atau perangkat secara unik.",
            },
            {
              term: "Pembaruan dalam aplikasi Google Play",
              text: "Morvyn menanyakan ke Play Store apakah ada versi yang lebih baru. Nilai versi minimum pembandingnya diambil dari Remote Config.",
            },
            {
              term: "ML Kit Document Scanner",
              text: "Menjalankan fitur Pindai dokumen, lewat Google Play services. Menurut halaman pengungkapan data ML Kit, SDK ini mengirim info perangkat (pabrikan, model, versi sistem operasi), info aplikasi (nama paket, versi), pengenal per-instalasi, metrik kinerja, konfigurasi API, dan kode galat ke Google, untuk diagnostik dan analitik penggunaan, terenkripsi dengan HTTPS dan tidak diteruskan ke pihak ketiga. Hasil pindaiannya sendiri disimpan di perangkat Anda, sebagai PDF di Catatan.",
            },
          ],
        },
      ],
    },

    {
      id: "google-api-policy",
      title: "Kepatuhan terhadap Kebijakan Data Pengguna Layanan Google API",
      blocks: [
        {
          kind: "p",
          text: "Penggunaan dan pemindahan data yang diterima Morvyn dari Google API mematuhi [Kebijakan Data Pengguna Layanan Google API](https://developers.google.com/terms/api-services-user-data-policy), **termasuk persyaratan Penggunaan Terbatas (Limited Use)**.",
        },
        {
          kind: "p",
          text: "Dalam praktiknya, untuk data yang diperoleh lewat scope `drive.appdata` dan `calendar.events`:",
        },
        {
          kind: "list",
          items: [
            "Data itu hanya dipakai untuk menyediakan fitur yang terlihat langsung oleh Anda, yaitu pencadangan dan sinkronisasi kalender yang Anda nyalakan sendiri.",
            "Data itu tidak dipindahkan ke pihak mana pun. Tidak ada perantara yang dilewati, karena Morvyn tidak punya server.",
            "Data itu tidak dipakai untuk iklan, dan tidak dipakai untuk membangun profil apa pun.",
            "Tidak ada manusia yang membacanya. Himiko Lab tidak punya jalan teknis ke sana: berkas cadangan berada di folder tersembunyi milik Anda di Drive, dan data kalender tidak pernah keluar dari perangkat Anda selain menuju kalender Google Anda sendiri atau cadangan milik Anda sendiri, bila Anda menyalakannya.",
          ],
        },
      ],
    },

    {
      id: "perlindungan",
      title: "Cara data Anda dilindungi",
      blocks: [
        {
          kind: "p",
          text: "**Enkripsi saat dikirim.** Seluruh komunikasi antara Morvyn dan layanan Google (Google Sign-In, Google Drive, Google Calendar, Firebase) memakai HTTPS dengan enkripsi TLS.",
        },
        {
          kind: "p",
          text: "**Penyimpanan di perangkat.** Data Anda berada di penyimpanan privat aplikasi Morvyn, yang dijaga sandbox Android agar tidak bisa diakses aplikasi lain. Pada perangkat yang memakai kunci layar, Android juga mengenkripsi penyimpanan ini.",
        },
        {
          kind: "p",
          text: "**Token akses Google.** Morvyn tidak menyimpan kata sandi Google Anda maupun token akses jangka panjang. Token berumur pendek diminta dari Google Play services hanya saat pencadangan atau sinkronisasi kalender berjalan, dan hanya dipakai untuk permintaan itu.",
        },
        {
          kind: "p",
          text: "**Pencadangan Google Drive.** Cadangan hanya ditulis ke folder data aplikasi tersembunyi di Drive Anda (scope `drive.appdata`). Morvyn tidak dapat melihat atau mengubah berkas lain mana pun di Drive Anda. Google mengenkripsi berkas-berkas itu saat tersimpan.",
        },
        {
          kind: "p",
          text: "**Cadangan sistem Android.** Bila cadangan Android menyala, database lokal dan pengaturan Morvyn dapat ikut masuk ke cadangan perangkat di Akun Google Anda. Morvyn hanya mengizinkan cadangan ini bila perangkat memakai kunci layar, agar Android dapat mengenkripsinya secara end-to-end dengan kredensial kunci layar Anda. Sesi masuk Anda tidak pernah ikut dicadangkan.",
        },
        {
          kind: "p",
          text: "**Hak akses seminimal mungkin.** Morvyn hanya meminta dua scope Google, `drive.appdata` dan `calendar.events`, dan hanya setelah Anda menyalakan fitur yang bersangkutan. Akses kalender dibatasi pada satu kalender yang Anda pilih.",
        },
        {
          kind: "p",
          text: "**Masa simpan.** Acara yang ditarik dari Google Calendar tetap ada di perangkat Anda sampai Anda menghapusnya atau memutus sambungan Google Calendar dari Pengaturan Morvyn, yang menghapusnya dari Morvyn. Mematikan sinkronisasi hanya menjedanya. Berkas cadangan tetap berada di Drive Anda sampai Anda menghapusnya. Memutus sambungan Morvyn tidak menghapusnya; lihat \"Cara menghapus data Anda\". Menghapus akun dari dalam Morvyn memang menghapus seluruh cadangan Morvyn di Drive Anda: lihat bagian \"Menghapus akun\". Karena Himiko Lab tidak punya server, tidak ada salinan di pihak kami untuk disimpan atau dihapus.",
        },
      ],
    },

    {
      id: "lokasi",
      title: "Lokasi, cuaca, dan tempat",
      blocks: [
        {
          kind: "p",
          text: "Morvyn meminta izin lokasi (`ACCESS_FINE_LOCATION` / `ACCESS_COARSE_LOCATION`) untuk tiga fitur. **Tidak ada izin lokasi latar** (`ACCESS_BACKGROUND_LOCATION`), dan izinnya sendiri tetap **opsional**.",
        },
        {
          kind: "defs",
          items: [
            {
              term: "Cuaca",
              text: "Koordinat lintang dan bujur dikirim langsung ke penyedia data cuaca sebagai bagian dari permintaan: `api.open-meteo.com` ([Open-Meteo](https://open-meteo.com/)), dengan `api.openweathermap.org` ([OpenWeather](https://openweathermap.org/)) sebagai cadangan.",
            },
            {
              term: "Tempat pada catatan keuangan",
              text: "Di Keuangan, kolom tempat transaksi dapat Anda isi dari posisi Anda. Yang disimpan di catatan itu adalah nama tempatnya, atau koordinat bila nama tempat tidak tersedia, dan ikut masuk cadangan bersama sisa catatannya.",
            },
            {
              term: "Gempa",
              text: "Posisi terakhir yang diketahui dipakai untuk menghitung jarak gempa dan menentukan sumber data mana yang dibaca. Bagian berikutnya menjelaskannya lengkap.",
            },
            {
              term: "Geocoder",
              text: "Untuk mengubah koordinat menjadi nama tempat (Cuaca, Beranda, Keuangan) atau kode negara (Gempa), Morvyn memakai layanan geocoder sistem Android. Pada ponsel dengan Google Play services, layanan itu dilayani Google, jadi koordinatnya sampai ke Google.",
            },
          ],
        },
        {
          kind: "p",
          text: "Koordinat itu **tidak disimpan di server mana pun oleh Morvyn**, dan tidak dikaitkan dengan identitas Anda. Menolak izinnya membuat cuaca, tempat transaksi, dan jarak gempa tidak mengambil lokasi Anda secara otomatis.",
        },
      ],
    },

    {
      id: "earthquake",
      title: "Info gempa",
      blocks: [
        {
          kind: "p",
          text: "Morvyn punya menu Gempa, kartu kecil di layar Cuaca, dan notifikasi \"Info gempa\". Sifatnya **info gempa, bukan peringatan dini**.",
        },
        {
          kind: "p",
          text: "Datanya berasal dari **BMKG** (`data.bmkg.go.id`) untuk pengguna di Indonesia, dan dari **U.S. Geological Survey** (`earthquake.usgs.gov`) untuk pengguna di luar Indonesia. Morvyn mengunduh berkas data mereka secara utuh, termasuk gambar peta guncangan, dan **tidak mengirim posisi Anda sama sekali**. Kedua lembaga itu hanya melihat permintaan biasa, yaitu alamat IP dan informasi permintaan biasa, persis seperti penerbit berita.",
        },
        {
          kind: "p",
          text: "Jarak gempa dihitung **di perangkat Anda**, dari posisi terakhir yang didapat layar Cuaca atau Beranda. Posisi itu tetap di perangkat Anda: tidak dikirim ke BMKG maupun USGS, tidak ikut cadangan sistem Android, dan tidak ikut cadangan Drive.",
        },
        {
          kind: "p",
          text: "Sumber mana yang dibaca ditentukan negara Anda, dan Morvyn menentukannya dengan urutan berikut:",
        },
        {
          kind: "list",
          items: [
            "Geocoder sistem, atas posisi terakhir yang diketahui.",
            "Negara jaringan seluler Anda.",
            "Kode negara yang disiarkan router Wi-Fi di sekitar. Ini hanya dibaca bila izin lokasi presisi diberikan dan layanan lokasi menyala, hanya saat aplikasi terbuka, dan disimpan di perangkat paling lama 3 hari.",
            "Setelan bahasa ponsel Anda.",
          ],
        },
        {
          kind: "p",
          text: "Tidak satu pun dari cara itu memakai alamat IP, jadi VPN tidak mengubahnya, dan semuanya diproses di perangkat Anda.",
        },
        {
          kind: "p",
          text: "Pemeriksaan di latar sekitar tiap 15 menit memakai posisi dan negara yang sudah tersimpan; pemeriksaan itu tidak membaca lokasi baru. Salinan data gempa terakhir disimpan di perangkat Anda, dan tidak diikutkan ke cadangan, supaya menunya tetap berisi saat Anda luring.",
        },
        {
          kind: "p",
          text: "Notifikasinya dapat dimatikan dan diatur di menu Gempa: radius, magnitudo minimal, gempa besar, dan potensi tsunami dari BMKG.",
        },
      ],
    },

    {
      id: "berita",
      title: "Berita",
      blocks: [
        {
          kind: "p",
          text: "Fitur berita mengambil umpan RSS **langsung dari situs penerbitnya**, tanpa perantara. Artinya penerbit tersebut dapat melihat permintaan yang datang dari perangkat Anda (alamat IP dan informasi permintaan biasa), sebagaimana bila Anda membuka situs mereka lewat peramban.",
        },
        {
          kind: "p",
          text: "Catatan berperilaku sama untuk tautan. Bila sebuah catatan memuat tautan ke suatu situs, Morvyn mengambil ikon (favicon) situs itu **langsung dari situsnya**, tanpa layanan pihak ketiga di tengah, sehingga situs itu melihat permintaan yang datang dari perangkat Anda (alamat IP dan informasi permintaan biasa) persis seperti penerbit berita.",
        },
        {
          kind: "p",
          text: "Penerbit yang dihubungi antara lain Detik, Antara, CNN Indonesia, CNBC Indonesia, Tempo, Republika, Sindonews, Okezone, JPNN, BBC, The Guardian, Al Jazeera, ABC News, The New York Times, The Independent, France 24, Channel News Asia, dan South China Morning Post. Masing-masing tunduk pada kebijakan privasi mereka sendiri.",
        },
      ],
    },

    {
      id: "kurs",
      title: "Kurs mata uang",
      blocks: [
        {
          kind: "p",
          text: "Fitur keuangan mengambil nilai tukar dari `open.er-api.com`. Tidak ada data Anda yang dikirim ke sana, hanya permintaan nilai tukar.",
        },
      ],
    },

    {
      id: "izin",
      title: "Izin Android dan alasannya",
      blocks: [
        {
          kind: "defs",
          items: [
            {
              term: "`INTERNET`",
              text: "Mengambil cuaca, berita, data gempa, kurs, dan ikon tautan di catatan Anda, serta menjalankan sinkronisasi Google.",
            },
            {
              term: "`ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION`",
              text: "Menampilkan cuaca di sekitar Anda, mengisi tempat pada catatan keuangan, dan menghitung jarak gempa. Opsional.",
            },
            {
              term: "`ACCESS_WIFI_STATE`",
              text: "Membaca kode negara yang disiarkan router Wi-Fi di sekitar, untuk fitur Gempa.",
            },
            {
              term: "`POST_NOTIFICATIONS`",
              text: "Menampilkan pengingat dan alarm, pengumuman dari pengembang, dan info gempa.",
            },
            {
              term: "`SCHEDULE_EXACT_ALARM`",
              text: "Membunyikan alarm pada waktu yang tepat.",
            },
            {
              term: "`RECEIVE_BOOT_COMPLETED`",
              text: "Memasang ulang pengingat setelah perangkat menyala kembali.",
            },
            {
              term: "`USE_FULL_SCREEN_INTENT`, `SYSTEM_ALERT_WINDOW`",
              text: "Menampilkan layar alarm.",
            },
            {
              term: "`FOREGROUND_SERVICE`, `FOREGROUND_SERVICE_SPECIAL_USE`",
              text: "Menjaga alarm tetap berbunyi.",
            },
            {
              term: "`VIBRATE`, `WAKE_LOCK`",
              text: "Getaran dan membangunkan layar saat alarm berbunyi.",
            },
          ],
        },
        {
          kind: "p",
          text: "Tiga izin lain dideklarasikan oleh pustaka Google dan AndroidX yang dipakai Morvyn, dan **tidak dipakai oleh fitur Morvyn mana pun**: `ACCESS_NETWORK_STATE`, `USE_BIOMETRIC`, dan `USE_FINGERPRINT`. Dua yang terakhir datang dari androidx.biometric, yang ikut terbawa pustaka masuk Google. Morvyn tidak memakai sidik jari maupun biometrik.",
        },
      ],
    },

    {
      id: "anak",
      title: "Anak-anak",
      blocks: [
        {
          kind: "p",
          text: "Morvyn tidak ditujukan untuk anak di bawah 13 tahun. Himiko Lab tidak mengumpulkan data dari mereka dengan sengaja, dan tidak mengumpulkan data dari siapa pun, karena tidak ada server yang menerimanya.",
        },
        {
          kind: "p",
          text: "Karena itu pula tidak ada yang bisa kami hapus dari sisi kami bila diminta: data anak yang memakai perangkat tertentu berada di perangkat itu sendiri, dan di cadangan perangkat itu bila pencadangan pernah dinyalakan. Data itu dapat dihapus dengan menghapus data aplikasinya dan menghapus cadangan tersebut. Caranya ada di bagian-bagian berikutnya.",
        },
      ],
    },

    {
      id: "delete-account",
      title: "Menghapus akun",
      blocks: [
        {
          kind: "p",
          text: "Cara utamanya **dari dalam aplikasi: Pengaturan > DATA > Hapus Akun**. Baris itu hanya tampil bila Anda sedang masuk dengan Google. Anda diminta memilih akun Google sekali lagi sebagai verifikasi, dan tombol hapusnya baru aktif sesudah 10 detik, supaya penjelasannya sempat dibaca.",
        },
        {
          kind: "p",
          text: "Yang terjadi saat Anda menghapus akun dari aplikasi:",
        },
        {
          kind: "list",
          items: [
            "Akun Firebase Authentication Anda di proyek Himiko Lab dihapus, beserta alamat email, nama, UID, dan catatan masuk yang dipegangnya.",
            "**Seluruh cadangan Morvyn di Google Drive Anda ikut dihapus**, lalu izin Google Drive untuk Morvyn dicabut. Cadangan itu tidak bisa dipulihkan lagi.",
            "Sambungan Google Drive dan Google Calendar diputus. Acara di Google Calendar Anda tetap ada di sana; salinan di Morvyn yang berasal dari Google dilepas.",
            "**Data di ponsel Anda tidak dihapus.** Anda dapat mengosongkannya sendiri lewat \"Hapus Semua Data\".",
            "Bila langkah menghapus cadangan gagal, misalnya karena tidak ada koneksi internet, akunnya tidak jadi dihapus dan Anda bisa mencoba lagi.",
          ],
        },
        {
          kind: "p",
          text: "**Bila aplikasinya sudah tidak terpasang**, kirim email ke [hi@himikolab.my.id](mailto:hi@himikolab.my.id) dari alamat Google yang Anda pakai masuk. Himiko Lab menghapus akun Firebase Authentication itu **paling lama 14 hari** sejak permintaan. Berkas cadangan di Drive Anda dihapus sendiri oleh Anda, lewat pengaturan aplikasi terhubung di Google Drive, karena Himiko Lab tidak punya akses ke Drive Anda.",
        },
      ],
    },

    {
      id: "hapus-data",
      title: "Cara menghapus data Anda",
      blocks: [
        {
          kind: "defs",
          items: [
            {
              term: "Akun Morvyn",
              text: "Pengaturan > DATA > Hapus Akun, dari dalam aplikasi. Lihat bagian \"Menghapus akun\" di atas.",
            },
            {
              term: "Semua data lokal",
              text: "Pakai \"Hapus Semua Data\" di Pengaturan Morvyn, hapus data aplikasi dari Setelan Android, atau copot (uninstall) aplikasinya. Menghapus akun tidak menghapus data di ponsel Anda.",
            },
            {
              term: "Cadangan di Google Drive",
              text: "Ada dua cara: hapus akun dari dalam aplikasi, yang sekaligus menghapus cadangannya, atau putuskan sambungan Drive dari Pengaturan Morvyn lalu hapus data aplikasinya lewat pengaturan aplikasi terhubung di Google Drive.",
            },
            {
              term: "Cadangan sistem Android",
              text: "Menghapus data Morvyn di perangkat tidak menghapus salinan yang sudah masuk ke cadangan perangkat. Kelola atau hapus cadangan itu lewat pengaturan cadangan di perangkat Anda atau di Akun Google Anda.",
            },
            {
              term: "Data kalender",
              text: "Mematikan sinkronisasi hanya menjedanya; acara yang sudah ditarik tetap ada di Morvyn. Memutus sambungan Google Calendar dari Pengaturan Morvyn menghapus acara yang berasal dari Google dari Morvyn. Acara di Google Calendar sendiri tetap milik Anda dan dapat dihapus dari sana. Salinan di cadangan dihapus lewat dua butir cadangan di atas.",
            },
            {
              term: "Cabut izin Google",
              text: "Lewat halaman [Izin Pihak Ketiga di Akun Google](https://myaccount.google.com/permissions) Anda.",
            },
          ],
        },
      ],
    },

    {
      id: "perubahan",
      title: "Perubahan kebijakan ini",
      blocks: [
        {
          kind: "p",
          text: "Bila kebijakan ini berubah, versi barunya diumumkan di halaman ini dan tanggal berlaku di bagian atas ikut diperbarui.",
        },
      ],
    },

    {
      id: "kontak",
      title: "Kontak",
      blocks: [
        {
          kind: "p",
          text: "Pertanyaan tentang kebijakan ini dapat dikirim ke [hi@himikolab.my.id](mailto:hi@himikolab.my.id).",
        },
      ],
    },
  ],
};
