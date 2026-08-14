import type { LegalDocument } from "./types";

/**
 * Kebijakan Privasi — Bahasa Indonesia.
 *
 * Disusun dari perilaku aplikasi yang sebenarnya, bukan dari template. Kalau
 * suatu fitur berubah, YANG DIUBAH DULU adalah berkas ini — kebijakan yang
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
 * 2. Nama aplikasi yang ditulis persis "Morvyn" — harus sama dengan yang
 *    terdaftar di layar persetujuan OAuth.
 *
 * Versi Inggrisnya di `privacy-en.ts` harus punya `id` bagian yang sama persis.
 */
export const privacyId: LegalDocument = {
  title: "Kebijakan Privasi",
  description:
    "Bagaimana Morvyn menangani data Anda: seluruhnya di perangkat, tanpa server, tanpa pelacakan, dengan pencadangan dan sinkronisasi Google yang opsional.",
  lead: "Morvyn adalah aplikasi Android buatan Himiko Lab. Halaman ini menjelaskan data apa yang ditangani aplikasi, ke mana perginya, dan — sama pentingnya — apa yang tidak dilakukannya.",
  effectiveLabel: "Berlaku sejak",
  effectiveDate: "14 Agustus 2026",

  summaryHeading: "Ringkasnya",
  summary: [
    "**Morvyn tidak punya server.** Himiko Lab tidak memiliki basis data pengguna dan tidak dapat melihat isi catatan, jadwal, keuangan, maupun kebiasaan siapa pun.",
    "Seluruh data Anda disimpan **di dalam perangkat Anda sendiri**.",
    "**Tidak ada analitik, tidak ada iklan, tidak ada SDK pelacak.** Tidak ada data yang dijual atau dibagikan.",
    "Masuk dengan Google, pencadangan ke Google Drive, dan sinkronisasi Google Calendar semuanya **opsional** — Morvyn tetap utuh tanpa satu pun di antaranya.",
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
          text: "**Morvyn tidak punya server sendiri.** Himiko Lab tidak memiliki basis data pengguna dan tidak dapat melihat isi catatan, jadwal, keuangan, maupun kebiasaan siapa pun. Seluruh data pengguna disimpan di dalam perangkat memakai basis data lokal (Room/SQLite).",
        },
        {
          kind: "p",
          text: "**Tidak ada pelacakan sama sekali.** Aplikasi ini tidak memakai Google Analytics, Firebase Analytics, Crashlytics, SDK iklan, maupun SDK pelacak pihak ketiga lain. Tidak ada profil perilaku yang dibangun, dan tidak ada data yang dijual atau dibagikan untuk keperluan iklan.",
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
          ],
        },
        {
          kind: "p",
          text: "Semuanya lokal. Tidak satu pun dari daftar di atas yang dikirim ke Himiko Lab.",
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
          text: "Bila Anda menyalakannya, Morvyn **membaca dan menulis acara** pada satu kalender yang Anda pilih sendiri. Acara yang ditarik dari Google Calendar disimpan **hanya di perangkat Anda**; acara yang Anda buat atau ubah di Morvyn dikirim ke kalender Google Anda.",
        },
        {
          kind: "p",
          text: "Data kalender **tidak pernah dikirim ke pihak mana pun selain Google**, dan tidak pernah melewati server Himiko Lab — sekali lagi, karena server itu tidak ada.",
        },
        {
          kind: "p",
          text: "Anda dapat memutus sambungan ini kapan saja dari Pengaturan di dalam Morvyn, dan mencabut izinnya dari halaman [Izin Pihak Ketiga di Akun Google](https://myaccount.google.com/permissions) milik Anda.",
        },
      ],
    },

    {
      id: "firebase",
      title: "Notifikasi dan konfigurasi aplikasi",
      blocks: [
        {
          kind: "defs",
          items: [
            {
              term: "Firebase Cloud Messaging",
              text: "Mengirim notifikasi pengumuman dari pengembang. Perangkat berlangganan sebuah topik; sistem ini tidak dipakai untuk mengidentifikasi orang per orang.",
            },
            {
              term: "Firebase Remote Config",
              text: "Mengambil nilai konfigurasi aplikasi. Tidak ada data pribadi yang dikirim.",
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
            "Tidak ada manusia yang membacanya. Himiko Lab tidak punya jalan teknis ke sana: berkas cadangan berada di folder tersembunyi milik Anda di Drive, dan data kalender tidak pernah keluar dari perangkat Anda selain menuju kalender Google Anda sendiri.",
          ],
        },
      ],
    },

    {
      id: "lokasi",
      title: "Lokasi dan cuaca",
      blocks: [
        {
          kind: "p",
          text: "Morvyn meminta izin lokasi (`ACCESS_FINE_LOCATION` / `ACCESS_COARSE_LOCATION`) **hanya untuk menampilkan cuaca di sekitar Anda**. Koordinat lintang dan bujur dikirim langsung ke penyedia data cuaca sebagai bagian dari permintaan:",
        },
        {
          kind: "list",
          items: [
            "`api.open-meteo.com` — [Open-Meteo](https://open-meteo.com/)",
            "`api.openweathermap.org` — [OpenWeather](https://openweathermap.org/)",
          ],
        },
        {
          kind: "p",
          text: "Koordinat itu **tidak disimpan di server mana pun oleh Morvyn**, dan tidak dikaitkan dengan identitas Anda. Izin ini opsional; menolaknya hanya membuat fitur cuaca tidak menampilkan lokasi secara otomatis.",
        },
      ],
    },

    {
      id: "berita",
      title: "Berita",
      blocks: [
        {
          kind: "p",
          text: "Fitur berita mengambil umpan RSS **langsung dari situs penerbitnya**, tanpa perantara. Artinya penerbit tersebut dapat melihat permintaan yang datang dari perangkat Anda — alamat IP dan informasi permintaan biasa — sebagaimana bila Anda membuka situs mereka lewat peramban.",
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
          text: "Fitur keuangan mengambil nilai tukar dari `open.er-api.com`. Tidak ada data Anda yang dikirim ke sana — hanya permintaan nilai tukar.",
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
              text: "Mengambil cuaca, berita, kurs, dan menjalankan sinkronisasi Google.",
            },
            {
              term: "`ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION`",
              text: "Menampilkan cuaca di sekitar Anda. Opsional.",
            },
            {
              term: "`POST_NOTIFICATIONS`",
              text: "Menampilkan pengingat dan alarm.",
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
      ],
    },

    {
      id: "anak",
      title: "Anak-anak",
      blocks: [
        {
          kind: "p",
          text: "Morvyn tidak ditujukan untuk anak di bawah 13 tahun. Himiko Lab tidak mengumpulkan data dari mereka dengan sengaja — dan tidak mengumpulkan data dari siapa pun, karena tidak ada server yang menerimanya.",
        },
        {
          kind: "p",
          text: "Karena itu pula tidak ada yang bisa kami hapus dari sisi kami bila diminta: data anak yang memakai perangkat tertentu berada di perangkat itu sendiri, dan dapat dihapus dengan menghapus data aplikasinya. Caranya ada di bagian berikutnya.",
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
              term: "Semua data lokal",
              text: "Hapus (uninstall) aplikasinya, atau hapus data aplikasi dari Setelan Android.",
            },
            {
              term: "Cadangan di Google Drive",
              text: "Putuskan sambungan dari Pengaturan Morvyn, lalu hapus berkas cadangannya lewat pengaturan aplikasi terhubung di Google Drive.",
            },
            {
              term: "Data kalender",
              text: "Matikan sinkronisasi dari Pengaturan Morvyn. Acara yang terlanjur ada di Google Calendar tetap milik Anda dan dapat dihapus dari sana.",
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
