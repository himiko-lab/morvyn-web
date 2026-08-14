import { LegalPage } from "@/components/legal/LegalPage";
import { buildLegalMetadata } from "../../../siteMetadata";

/** `/en/terms` — Ketentuan Layanan, bahasa Inggris. */
export const metadata = buildLegalMetadata("terms", "en");

export default function TermsPage() {
  return <LegalPage kind="terms" locale="en" />;
}
