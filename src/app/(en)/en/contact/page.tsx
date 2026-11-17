import { InfoPage } from "@/components/page/InfoPage";
import { buildPageMetadata } from "../../../siteMetadata";

/** `/en/contact/`: pasangan berbahasa Inggris dari `/kontak/`. */
export const metadata = buildPageMetadata("contact", "en");

export default function Page() {
  return <InfoPage pageKey="contact" locale="en" />;
}
