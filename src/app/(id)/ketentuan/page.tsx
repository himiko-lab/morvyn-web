import { LegalPage } from "@/components/legal/LegalPage";
import { buildLegalMetadata } from "../../siteMetadata";

/** `/ketentuan` — Ketentuan Layanan, bahasa Indonesia. */
export const metadata = buildLegalMetadata("terms", "id");

export default function KetentuanPage() {
  return <LegalPage kind="terms" locale="id" />;
}
