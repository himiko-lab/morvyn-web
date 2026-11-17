import { InfoPage } from "@/components/page/InfoPage";
import { buildPageMetadata } from "../../../siteMetadata";

/** `/fitur/widget/`: keempat widget layar utama, bahasa Indonesia. */
export const metadata = buildPageMetadata("widgets", "id");

export default function Page() {
  return <InfoPage pageKey="widgets" locale="id" />;
}
