import { InfoPage } from "@/components/page/InfoPage";
import { buildPageMetadata } from "../../../siteMetadata";

/** `/fitur/pdf/`: Pembaca PDF dan pindai dokumen, bahasa Indonesia.
 *
 * Folder statis ini menang atas `fitur/[slug]` di sebelahnya, jadi alamatnya
 * tidak perlu masuk daftar slug menu. */
export const metadata = buildPageMetadata("pdf", "id");

export default function Page() {
  return <InfoPage pageKey="pdf" locale="id" />;
}
