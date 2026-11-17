import { InfoPage } from "@/components/page/InfoPage";
import { buildPageMetadata } from "../../../../siteMetadata";

/** `/en/features/pdf/`: pasangan berbahasa Inggris dari `/fitur/pdf/`. */
export const metadata = buildPageMetadata("pdf", "en");

export default function Page() {
  return <InfoPage pageKey="pdf" locale="en" />;
}
