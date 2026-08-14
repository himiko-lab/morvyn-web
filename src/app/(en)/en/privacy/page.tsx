import { LegalPage } from "@/components/legal/LegalPage";
import { buildLegalMetadata } from "../../../siteMetadata";

/**
 * `/en/privacy` — Kebijakan Privasi, bahasa Inggris.
 *
 * Yang didaftarkan ke Google adalah versi Indonesianya di `/privasi`. Halaman
 * ini untuk pembaca, dan wajib tetap sepadan isinya — lihat catatan di
 * `content/legal/privacy-en.ts`.
 */
export const metadata = buildLegalMetadata("privacy", "en");

export default function PrivacyPage() {
  return <LegalPage kind="privacy" locale="en" />;
}
