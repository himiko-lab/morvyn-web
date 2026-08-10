import { BaseHtml } from "@/components/BaseHtml";
import { buildMetadata, siteViewport } from "../siteMetadata";

export const metadata = buildMetadata("id");
export const viewport = siteViewport;

export default function IndonesianLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseHtml lang="id">{children}</BaseHtml>;
}
