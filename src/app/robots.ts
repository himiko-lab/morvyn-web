import type { MetadataRoute } from "next";
import { site } from "@/content";

// Sama seperti sitemap.ts: berkas statis yang dibuat saat build.
export const dynamic = "force-static";

/**
 * Seluruh situs boleh dijelajahi — memang tidak ada yang perlu disembunyikan.
 *
 * Yang penting justru baris `sitemap`: itulah cara perayap menemukan peta
 * situsnya tanpa menunggu didaftarkan manual di Search Console.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
