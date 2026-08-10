import type { MetadataRoute } from "next";
import { site } from "@/content";

// Sama seperti sitemap.ts: berkas statis yang dibuat saat build.
export const dynamic = "force-static";

/**
 * Seluruh situs boleh dijelajahi, memang tidak ada yang perlu disembunyikan.
 *
 * Yang penting justru baris `sitemap`: itulah cara perayap menemukan peta
 * situsnya tanpa menunggu didaftarkan manual di Search Console.
 *
 * Tidak ada `host` di sini. Next menyediakan opsinya, tapi `Host:` adalah
 * direktif buatan Yandex untuk menunjuk domain utama di antara beberapa
 * cermin. Situs ini cuma punya satu domain, dan Google mengabaikan barisnya.
 * Urusan domain kanonik sudah ditangani `rel="canonical"` di tiap halaman.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
