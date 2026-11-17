import { InfoPage } from "@/components/page/InfoPage";
import { buildPageMetadata } from "../../siteMetadata";

/** `/catatan-rilis/`: yang berubah di tiap versi, bahasa Indonesia. */
export const metadata = buildPageMetadata("releaseNotes", "id");

export default function Page() {
  return <InfoPage pageKey="releaseNotes" locale="id" />;
}
