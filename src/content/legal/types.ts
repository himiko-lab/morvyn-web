/**
 * Bentuk dokumen hukum (Kebijakan Privasi dan Ketentuan Layanan).
 *
 * Dipisahkan dari `Dictionary` di `content/types.ts` dengan sengaja. Dictionary
 * itu salinan teks beranda: puluhan kunci pendek yang dipetakan satu-satu ke
 * elemen tertentu. Dokumen hukum bentuknya lain — prosa berbagian-bagian yang
 * jumlah bagiannya bisa bertambah kapan saja — dan menumpangkannya ke sana
 * akan membuat Dictionary membengkak tanpa satu pun kunci baru yang dipakai
 * beranda.
 *
 * Yang tetap sama: teksnya tidak ditulis di dalam komponen. Aturan pertama
 * README berlaku di sini juga.
 */

/** Sepotong isi di dalam sebuah bagian. Digambar berurutan sesuai daftarnya. */
export type LegalBlock =
  /** Satu paragraf. */
  | { kind: "p"; text: string }
  /** Daftar bertitik. */
  | { kind: "list"; items: string[] }
  /**
   * Daftar istilah dan penjelasannya — dipakai untuk hal-hal yang memang
   * berpasangan, seperti nama izin Android dan alasan dipakainya. Digambar
   * sebagai <dl>, bukan <ul> berisi tanda hubung, supaya pembaca layar
   * membacakan pasangannya sebagai pasangan.
   */
  | { kind: "defs"; items: { term: string; text: string }[] };

export interface LegalSection {
  /**
   * Dipakai dua kali: sebagai `id` elemen <section> dan sebagai tujuan tautan
   * daftar isi. Sengaja SAMA di kedua bahasa — dengan begitu `#kalender` pada
   * `/privasi` dan `/en/privacy` menunjuk bagian yang sama, dan tautan yang
   * dibagikan seseorang tidak patah ketika pembacanya berganti bahasa.
   */
  id: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  /** Judul <h1> sekaligus isi tag <title>. */
  title: string;
  /** Meta description. Diusahakan di bawah 160 karakter. */
  description: string;
  /** Satu paragraf pembuka di bawah judul. */
  lead: string;
  /** Label di sebelah tanggal berlaku, mis. "Berlaku sejak". */
  effectiveLabel: string;
  /** Tanggal berlaku yang dibaca manusia. Bentuk mesinnya ada di `index.ts`. */
  effectiveDate: string;
  /** Judul di atas kotak ringkasan. */
  summaryHeading: string;
  /** Poin-poin ringkasan. Kesimpulan dokumen, ditaruh sebelum uraiannya. */
  summary: string[];
  /** Judul di atas daftar isi. */
  tocHeading: string;
  sections: LegalSection[];
}
