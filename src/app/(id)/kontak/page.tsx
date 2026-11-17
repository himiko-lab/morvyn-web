import { InfoPage } from "@/components/page/InfoPage";
import { buildPageMetadata } from "../../siteMetadata";

/** `/kontak/`: kontak dan dukungan, bahasa Indonesia. */
export const metadata = buildPageMetadata("contact", "id");

export default function Page() {
  return <InfoPage pageKey="contact" locale="id" />;
}
