import { InfoPage } from "@/components/page/InfoPage";
import { buildPageMetadata } from "../../../siteMetadata";

/** `/en/release-notes/`: pasangan berbahasa Inggris dari `/catatan-rilis/`. */
export const metadata = buildPageMetadata("releaseNotes", "en");

export default function Page() {
  return <InfoPage pageKey="releaseNotes" locale="en" />;
}
