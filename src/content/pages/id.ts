import { appVersion, site } from "../site";
import { releaseBody, releases } from "../releases";
import type { PageCopy, PageKey } from "./types";

/** Tiga versi terbaru, mis. "1.6.0, 1.5.0, dan 1.4.0", untuk deskripsi meta. */
function recentVersions(and: string): string {
  const [last, ...rest] = releases
    .slice(0, 3)
    .map((release) => release.version)
    .reverse();
  return rest.length ? `${rest.reverse().join(", ")}, ${and} ${last}` : last;
}

/**
 * Halaman tambahan, bahasa Indonesia. Berpasangan dengan `en.ts`.
 *
 * Sapaannya "kamu", sama dengan beranda dan halaman fitur. Faktanya diambil
 * dari daftar fakta aplikasi versi 1.3.1 yang dicocokkan dengan kode aplikasi
 * pada 15 November 2026. Jangan menambah klaim di luar itu.
 *
 * Dua hal yang sengaja TIDAK ditulis:
 * - Catatan yang dikunci tidak disebut "dienkripsi". Kuncinya menutup
 *   tampilan, bukan mengenkripsi isi.
 * - Catatan rilis tidak bertanggal. Tanggal tayang tiap versi di Google Play
 *   tidak diketahui.
 */
export const pagesId: Record<PageKey, PageCopy> = {
  pdf: {
    name: "PDF dan Pindai",
    short: "Buka PDF, pindai dokumen kertas dengan kamera, dan salin teksnya lewat OCR tanpa internet.",
    eyebrow: "Fitur Morvyn",
    title: "Pembaca PDF dan Pindai Dokumen di Morvyn",
    description:
      "Morvyn membuka PDF, memindai dokumen kertas menjadi PDF, dan mengenali teksnya (OCR) di ponsel tanpa internet. Bisa juga mengatur halaman dan mengompres PDF.",
    h1: "Pembaca PDF dan pindai dokumen di Morvyn",
    lead: "Morvyn bukan hanya aplikasi catatan. Di dalamnya ada pembaca PDF, pemindai dokumen dengan kamera, dan pengenalan teks (OCR) yang berjalan di ponselmu tanpa internet. Gratis, tanpa iklan.",
    sections: [
      {
        heading: "Pindai dokumen kertas menjadi PDF",
        paragraphs: [
          "Dokumen kertas bisa dipindai dengan kamera ponsel dan disimpan sebagai PDF. Tidak perlu memasang aplikasi pemindai terpisah hanya untuk itu.",
        ],
      },
      {
        heading: "Teks hasil pindaian bisa dipilih, disalin, dan dicari",
        paragraphs: [
          "PDF hasil pindaian pada dasarnya foto halaman. Morvyn mengenali teks di dalamnya (OCR), sehingga teks itu bisa dipilih, disalin, dan dicari seperti teks biasa.",
          "Pengenalan teksnya berjalan di ponselmu sendiri, tanpa internet, untuk huruf Latin, Mandarin, Jepang, Korea, dan Hindi.",
        ],
      },
      {
        heading: "Buka PDF dari mana saja",
        paragraphs: [
          "PDF bisa dibuka dari penyimpanan perangkat, dari aplikasi lain lewat pilihan \"Buka dengan\", atau dari catatan yang melampirkannya.",
          "Halaman yang penting bisa diberi penanda, dan PDF-nya bisa dibagikan atau dicetak.",
        ],
        points: [
          "Buka dari perangkat, dari aplikasi lain, atau dari catatan",
          "Penanda halaman",
          "Bagikan atau cetak",
        ],
      },
      {
        heading: "Atur halaman dan kompres ukuran PDF",
        paragraphs: [
          "Halaman PDF bisa diurutkan ulang dan dihapus. Halaman dari PDF lain atau gambar dari galeri bisa digabungkan ke dalamnya.",
          "Ukuran berkas PDF juga bisa dikompres.",
        ],
        points: [
          "Urutkan dan hapus halaman",
          "Gabungkan halaman dari PDF lain atau dari galeri",
          "Kompres ukuran PDF",
        ],
      },
      {
        heading: "Markdown, teks, dan model 3D",
        paragraphs: [
          "Selain PDF, Morvyn membaca berkas Markdown dan teks (.md, .txt), dan isinya bisa disimpan ke Catatan.",
          "Model 3D berformat GLB, glTF, STL, dan OBJ juga bisa dilihat di Morvyn, lalu disimpan ke Catatan.",
        ],
        links: [{ label: "Selengkapnya tentang Catatan", href: "/fitur/catatan/" }],
      },
    ],
    faq: [
      {
        q: "Apakah Morvyn bisa memindai dokumen menjadi PDF?",
        a: "Bisa. Dokumen kertas dipindai dengan kamera ponsel dan disimpan sebagai PDF.",
      },
      {
        q: "Apakah OCR di Morvyn butuh internet?",
        a: "Tidak. Teks di PDF hasil pindaian dikenali di ponselmu sendiri, tanpa internet, untuk huruf Latin, Mandarin, Jepang, Korea, dan Hindi.",
      },
      {
        q: "Bisakah Morvyn menggabungkan dan mengompres PDF?",
        a: "Bisa. Halaman PDF bisa diurutkan, dihapus, dan digabungkan dari PDF lain atau dari galeri, dan ukuran PDF-nya bisa dikompres.",
      },
      {
        q: "Berkas apa lagi yang bisa dibuka Morvyn?",
        a: "Markdown dan teks (.md, .txt), serta model 3D berformat GLB, glTF, STL, dan OBJ. Semuanya bisa disimpan ke Catatan.",
      },
    ],
  },

  widgets: {
    name: "Widget",
    short: "Lima widget layar utama: Keuangan, Agenda, Catatan, Kebiasaan, dan Cuaca.",
    eyebrow: "Fitur Morvyn",
    title: "Widget Morvyn: Keuangan, Agenda, Catatan, Kebiasaan, Cuaca",
    description:
      "Lima widget layar utama Morvyn: Keuangan, Agenda, Catatan, Kebiasaan, dan Cuaca. Lihat saldo, tambah transaksi, dan centang tugas tanpa membuka aplikasi.",
    h1: "Widget Morvyn untuk layar utama ponselmu",
    lead: "Morvyn punya lima widget layar utama: Keuangan, Agenda, Catatan, Kebiasaan, dan Cuaca. Yang paling sering kamu lihat dan kerjakan bisa diselesaikan dari layar utama, tanpa membuka aplikasinya.",
    sections: [
      {
        heading: "Widget Keuangan",
        paragraphs: [
          "Widget Keuangan menampilkan saldomu, dan transaksi baru bisa ditambahkan dari sana tanpa membuka aplikasi.",
          "Saldonya bisa disembunyikan lewat ikon mata di widget. Sejak versi 1.3.1, ikon mata itu berganti seketika di Android 12 ke atas.",
        ],
        links: [{ label: "Selengkapnya tentang Keuangan", href: "/fitur/keuangan/" }],
      },
      {
        heading: "Widget Agenda",
        paragraphs: [
          "Widget Agenda menampilkan agenda hari ini atau 2 minggu, dan tugasnya bisa dicentang langsung dari widget.",
          "Tugas yang jam tenggatnya sudah lewat ditandai Terlambat, di widget ini juga.",
        ],
        links: [{ label: "Selengkapnya tentang Agenda", href: "/fitur/agenda/" }],
      },
      {
        heading: "Widget Catatan",
        paragraphs: [
          "Widget Catatan menampilkan daftar catatan, atau isi satu catatan pilihanmu. Daftar centang di catatan itu bisa dicentang dari widget.",
        ],
        links: [{ label: "Selengkapnya tentang Catatan", href: "/fitur/catatan/" }],
      },
      {
        heading: "Widget Kebiasaan",
        paragraphs: [
          "Widget Kebiasaan menaruh kebiasaanmu di layar utama ponsel, jadi kamu tidak perlu ingat untuk membuka aplikasinya dulu.",
        ],
        links: [{ label: "Selengkapnya tentang Kebiasaan", href: "/fitur/kebiasaan/" }],
      },
      {
        heading: "Widget Cuaca",
        paragraphs: [
          "Widget Cuaca hadir dalam dua pilihan: Cuaca, atau Cuaca + harian. Isinya selalu terkini, dan mengetuknya membuka menu Cuaca.",
        ],
        links: [{ label: "Selengkapnya tentang Cuaca", href: "/fitur/cuaca/" }],
      },
    ],
    faq: [
      {
        q: "Apakah Morvyn punya widget?",
        a: "Punya, lima widget layar utama: Keuangan, Agenda, Catatan, Kebiasaan, dan Cuaca.",
      },
      {
        q: "Bisakah mencentang tugas dari widget?",
        a: "Bisa. Tugas di widget Agenda dan daftar centang di widget Catatan bisa dicentang tanpa membuka aplikasi.",
      },
      {
        q: "Bisakah menambah transaksi dari widget?",
        a: "Bisa. Dari widget Keuangan, transaksi baru bisa ditambahkan tanpa membuka aplikasi.",
      },
      {
        q: "Bisakah saldo di widget disembunyikan?",
        a: "Bisa, lewat ikon mata di widget Keuangan.",
      },
    ],
  },

  releaseNotes: {
    name: "Catatan Rilis",
    short: "Yang berubah di tiap versi Morvyn, dari yang terbaru.",
    eyebrow: "Riwayat versi",
    title: "Catatan Rilis Morvyn: Yang Baru di Tiap Versi",
    description: `Catatan rilis Morvyn, dari versi terbaru: perbaikan dan fitur baru di versi ${recentVersions("dan")} aplikasi Android buatan Himiko Lab.`,
    h1: "Catatan rilis Morvyn",
    lead: `Yang berubah di tiap versi Morvyn, dari yang terbaru. Versi terkini adalah ${appVersion}.`,
    sections: releases.map((release) => ({
      heading: `Versi ${release.version}`,
      ...releaseBody(release, "id"),
    })),
  },

  contact: {
    name: "Kontak",
    short: "Cara mengirim masukan atau melaporkan masalah.",
    eyebrow: "Dukungan",
    title: "Kontak dan Dukungan Morvyn",
    description:
      "Cara mengirim masukan atau melaporkan masalah di Morvyn, aplikasi Android buatan Himiko Lab: lewat email, halaman Morvyn di Google Play, atau situs Himiko Lab.",
    h1: "Kontak dan dukungan Morvyn",
    lead: "Punya masukan, menemukan masalah, atau ingin bertanya soal Morvyn? Begini cara menghubungi Himiko Lab, pengembangnya.",
    sections: [
      {
        heading: "Kirim masukan atau laporkan masalah",
        paragraphs: [
          "Kirim email ke alamat di bawah. Pesanmu dibaca langsung oleh pengembangnya.",
          "Kalau melaporkan masalah, ceritakan apa yang terjadi, langkah yang kamu lakukan sebelum masalahnya muncul, versi Morvyn yang terpasang, dan tipe ponselmu. Tangkapan layar sangat membantu.",
        ],
        links: [{ label: site.contactEmail, href: `mailto:${site.contactEmail}` }],
      },
      {
        heading: "Morvyn di Google Play",
        paragraphs: [
          "Morvyn diunduh dan diperbarui lewat Google Play. Di halaman yang sama kamu juga bisa menulis ulasan.",
        ],
        links: [{ label: "Buka Morvyn di Google Play", href: site.playStoreUrl }],
      },
      {
        heading: "Himiko Lab",
        paragraphs: [
          "Morvyn dibuat oleh Himiko Lab. Situs resminya ada di himikolab.my.id.",
        ],
        links: [{ label: "Kunjungi himikolab.my.id", href: site.publisherUrl }],
      },
      {
        heading: "Privasi dan ketentuan",
        paragraphs: [
          "Pertanyaan soal data apa yang disimpan dan dikirim Morvyn dijawab di Kebijakan Privasi. Aturan pemakaiannya ada di Ketentuan Layanan.",
        ],
        links: [
          { label: "Kebijakan Privasi", href: "/privasi/" },
          { label: "Ketentuan Layanan", href: "/ketentuan/" },
        ],
      },
    ],
  },
};
