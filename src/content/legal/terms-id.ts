import type { LegalDocument } from "./types";

/**
 * Ketentuan Layanan — Bahasa Indonesia.
 *
 * Bagian `kalender` sengaja ditulis tegas, bukan diperhalus: sinkronisasi
 * kalender bisa MENGHAPUS acara di kalender Google pengguna. Konsekuensi
 * sebesar itu harus terbaca sekali baca, bukan tersembunyi di anak kalimat.
 *
 * Versi Inggrisnya di `terms-en.ts` harus punya `id` bagian yang sama persis.
 */
export const termsId: LegalDocument = {
  title: "Ketentuan Layanan",
  description:
    "Ketentuan pemakaian Morvyn: aplikasi gratis yang disediakan sebagaimana adanya, dengan data yang sepenuhnya berada di tangan penggunanya.",
  lead: "Ketentuan ini berlaku saat Anda memasang atau memakai Morvyn, aplikasi Android buatan Himiko Lab. Isinya pendek dengan sengaja — Morvyn tidak menyimpan apa pun tentang Anda, jadi tidak banyak yang perlu diatur.",
  effectiveLabel: "Berlaku sejak",
  effectiveDate: "14 Agustus 2026",

  summaryHeading: "Ringkasnya",
  summary: [
    "Morvyn **gratis** dan disediakan **sebagaimana adanya**, tanpa jaminan.",
    "Data Anda ada di perangkat Anda, jadi **menjaganya adalah tanggung jawab Anda**. Pencadangan sangat dianjurkan.",
    "Bila dinyalakan, sinkronisasi kalender dapat **membuat, mengubah, dan menghapus** acara di kalender Google yang Anda pilih.",
    "Ketentuan ini tunduk pada **hukum Republik Indonesia**.",
  ],

  tocHeading: "Isi halaman ini",

  sections: [
    {
      id: "penerimaan",
      title: "Penerimaan ketentuan",
      blocks: [
        {
          kind: "p",
          text: "Dengan memasang atau memakai Morvyn, Anda menyatakan setuju pada ketentuan di halaman ini. Bila ada bagian yang tidak Anda setujui, jangan memakai aplikasinya.",
        },
        {
          kind: "p",
          text: "Ketentuan ini berpasangan dengan [Kebijakan Privasi](/privasi/), yang menjelaskan penanganan data secara rinci.",
        },
      ],
    },

    {
      id: "tentang",
      title: "Tentang Morvyn",
      blocks: [
        {
          kind: "p",
          text: "Morvyn adalah aplikasi Android dengan nama paket `com.himikolab.morvyn`, dikembangkan dan diterbitkan oleh Himiko Lab.",
        },
        {
          kind: "p",
          text: "Aplikasi ini **gratis** dan disediakan **sebagaimana adanya** (*as is*), tanpa jaminan dalam bentuk apa pun — termasuk jaminan bahwa aplikasinya akan selalu tersedia, bebas gangguan, atau cocok untuk keperluan tertentu Anda.",
        },
      ],
    },

    {
      id: "tanggung-jawab",
      title: "Data Anda, tanggung jawab Anda",
      blocks: [
        {
          kind: "p",
          text: "Seluruh data Morvyn tersimpan di dalam perangkat Anda. Himiko Lab tidak memegang salinannya dan **tidak dapat memulihkan data yang hilang**.",
        },
        {
          kind: "p",
          text: "Data itu ikut hilang bila aplikasinya dihapus, data aplikasinya dibersihkan lewat Setelan Android, atau perangkatnya rusak atau hilang. Karena itu **pencadangan sangat dianjurkan** — lihat fitur pencadangan ke Google Drive di dalam aplikasi.",
        },
      ],
    },

    {
      id: "kalender",
      title: "Apa yang dilakukan sinkronisasi Google Calendar",
      blocks: [
        {
          kind: "p",
          text: "Sinkronisasi Google Calendar bersifat opsional dan mati secara bawaan. **Bila Anda menyalakannya, Morvyn dapat membuat, mengubah, dan menghapus acara** pada kalender Google yang Anda pilih.",
        },
        {
          kind: "p",
          text: "Itu memang tujuan fiturnya: perubahan yang Anda lakukan di Morvyn diteruskan ke kalender Google Anda. Tetapi konsekuensinya nyata — menghapus sebuah acara di Morvyn berarti acara itu juga hilang dari kalender Google Anda.",
        },
        {
          kind: "p",
          text: "Pilihlah kalender yang memang Anda maksudkan, dan matikan sinkronisasi dari Pengaturan Morvyn bila Anda tidak lagi menginginkannya.",
        },
      ],
    },

    {
      id: "pihak-ketiga",
      title: "Layanan pihak ketiga",
      blocks: [
        {
          kind: "p",
          text: "Beberapa fitur Morvyn bergantung pada layanan yang bukan milik Himiko Lab. Layanan-layanan itu tunduk pada ketentuan dan kebijakan privasi mereka sendiri, dan Himiko Lab tidak menguasai ketersediaan maupun isinya:",
        },
        {
          kind: "defs",
          items: [
            {
              term: "Google",
              text: "Masuk dengan Google, pencadangan ke Google Drive, dan sinkronisasi Google Calendar.",
            },
            {
              term: "Penyedia data cuaca",
              text: "[Open-Meteo](https://open-meteo.com/) dan [OpenWeather](https://openweathermap.org/).",
            },
            {
              term: "Penerbit berita",
              text: "Umpan RSS diambil langsung dari situs masing-masing penerbit. Isi beritanya milik dan tanggung jawab penerbitnya.",
            },
            {
              term: "Penyedia kurs",
              text: "Nilai tukar diambil dari `open.er-api.com`. Angkanya disajikan sebagai keterangan, bukan patokan transaksi.",
            },
          ],
        },
      ],
    },

    {
      id: "pemakaian",
      title: "Pemakaian yang wajar",
      blocks: [
        {
          kind: "p",
          text: "Morvyn disediakan untuk keperluan pribadi Anda. Jangan memakainya untuk melanggar hukum yang berlaku, dan jangan memakainya dengan cara yang mengganggu layanan pihak ketiga di atas.",
        },
      ],
    },

    {
      id: "batasan",
      title: "Batasan tanggung jawab",
      blocks: [
        {
          kind: "p",
          text: "Sejauh yang diizinkan hukum yang berlaku, Himiko Lab tidak bertanggung jawab atas kehilangan data, kehilangan keuntungan, atau kerugian tidak langsung, khusus, maupun ikutan yang timbul dari pemakaian atau ketidakmampuan memakai Morvyn.",
        },
        {
          kind: "p",
          text: "Termasuk di dalamnya: pengingat atau alarm yang tidak berbunyi, data yang hilang dari perangkat, dan perubahan pada kalender Google Anda akibat sinkronisasi yang Anda nyalakan.",
        },
        {
          kind: "p",
          text: "Keterangan cuaca, berita, dan kurs berasal dari pihak ketiga dan disajikan apa adanya. Himiko Lab tidak menjamin ketepatan maupun kemutakhirannya.",
        },
      ],
    },

    {
      id: "usia",
      title: "Usia minimum",
      blocks: [
        {
          kind: "p",
          text: "Morvyn tidak ditujukan untuk anak di bawah 13 tahun. Fitur yang memakai layanan Google juga mensyaratkan Akun Google yang sah, yang punya batas usianya sendiri.",
        },
      ],
    },

    {
      id: "perubahan",
      title: "Perubahan ketentuan",
      blocks: [
        {
          kind: "p",
          text: "Ketentuan ini dapat berubah. Perubahannya diumumkan di halaman ini, dan tanggal berlaku di bagian atas ikut diperbarui. Memakai Morvyn setelah perubahan itu berarti Anda menyetujui versi yang baru.",
        },
      ],
    },

    {
      id: "penghentian",
      title: "Penghentian",
      blocks: [
        {
          kind: "p",
          text: "Anda dapat berhenti memakai Morvyn kapan saja dengan menghapus aplikasinya. Himiko Lab dapat menghentikan atau mengubah aplikasinya, termasuk menghentikan fitur tertentu, dan akan berusaha memberi tahu lebih dulu bila perubahannya besar.",
        },
      ],
    },

    {
      id: "hukum",
      title: "Hukum yang berlaku",
      blocks: [
        {
          kind: "p",
          text: "Ketentuan ini tunduk pada dan ditafsirkan menurut **hukum Republik Indonesia**.",
        },
      ],
    },

    {
      id: "kontak",
      title: "Kontak",
      blocks: [
        {
          kind: "p",
          text: "Pertanyaan tentang ketentuan ini dapat dikirim ke [hi@himikolab.my.id](mailto:hi@himikolab.my.id).",
        },
      ],
    },
  ],
};
