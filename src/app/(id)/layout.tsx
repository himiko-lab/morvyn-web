import type { Metadata, Viewport } from "next";
import { BaseHtml } from "@/components/BaseHtml";
import { getDictionary, site } from "@/content";

const dict = getDictionary("id");

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { absolute: dict.meta.title },
  description: dict.meta.description,
  applicationName: site.name,
  authors: [{ name: site.publisher }],
  alternates: {
    canonical: "/",
    languages: { "id-ID": "/", "en-US": "/en" },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.name,
    title: dict.meta.title,
    description: dict.meta.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export default function IndonesianLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseHtml lang="id">{children}</BaseHtml>;
}
