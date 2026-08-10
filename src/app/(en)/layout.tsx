import type { Metadata, Viewport } from "next";
import { BaseHtml } from "@/components/BaseHtml";
import { getDictionary, site } from "@/content";

const dict = getDictionary("en");

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { absolute: dict.meta.title },
  description: dict.meta.description,
  applicationName: site.name,
  authors: [{ name: site.publisher }],
  alternates: {
    canonical: "/en/",
    languages: { "id-ID": "/", "en-US": "/en/" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${site.url}/en/`,
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

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseHtml lang="en">{children}</BaseHtml>;
}
