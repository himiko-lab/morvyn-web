import { BaseHtml } from "@/components/BaseHtml";
import { buildMetadata, siteViewport } from "../siteMetadata";

export const metadata = buildMetadata("en");
export const viewport = siteViewport;

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseHtml lang="en">{children}</BaseHtml>;
}
