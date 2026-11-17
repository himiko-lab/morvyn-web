import { InfoPage } from "@/components/page/InfoPage";
import { buildPageMetadata } from "../../../../siteMetadata";

/** `/en/features/widgets/`: pasangan berbahasa Inggris dari `/fitur/widget/`. */
export const metadata = buildPageMetadata("widgets", "en");

export default function Page() {
  return <InfoPage pageKey="widgets" locale="en" />;
}
