import { LegalPage } from "@/components/legal/LegalPage";
import { buildLegalMetadata } from "../../siteMetadata";

/**
 * `/privasi` — Kebijakan Privasi, bahasa Indonesia.
 *
 * INI ALAMAT YANG DIDAFTARKAN ke Google Cloud Console (layar persetujuan
 * OAuth) dan ke Play Console. Jangan dipindahkan setelah didaftarkan:
 * pengajuan verifikasi menunjuk URL persis, dan alamat yang berubah
 * membatalkan pemeriksaan yang sedang berjalan.
 *
 * Halaman ini dirender penuh saat build — tidak ada satu pun bagian yang
 * menunggu JavaScript. Itu syarat, bukan kebetulan: pemeriksa Google membuka
 * alamat ini sendiri, dan halaman yang isinya baru muncul setelah skrip jalan
 * berisiko dianggap kosong.
 */
export const metadata = buildLegalMetadata("privacy", "id");

export default function PrivasiPage() {
  return <LegalPage kind="privacy" locale="id" />;
}
