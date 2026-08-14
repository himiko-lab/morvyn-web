import type { Metadata, Viewport } from "next";
import {
  getDictionary,
  localeUrl,
  ogImagePath,
  site,
  type Locale,
} from "@/content";
import { getLegalDocument, legalPath, type LegalKind } from "@/content/legal";

/**
 * Metadata <head> untuk satu bahasa.
 *
 * Kedua root layout memanggil ini alih-alih menuliskan blok yang sama dua
 * kali. Waktu keduanya masih terpisah, gampang sekali satu bahasa dapat
 * perbaikan dan satunya tertinggal — dan yang tertinggal itu tidak kelihatan
 * dari halamannya, cuma dari kode sumber.
 */
export function buildMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const url = localeUrl(locale);
  const image = ogImagePath(locale);

  return {
    metadataBase: new URL(site.url),
    title: { absolute: dict.meta.title },
    description: dict.meta.description,
    applicationName: site.name,
    authors: [{ name: site.publisher, url: site.publisherUrl }],
    creator: site.publisher,
    publisher: site.publisher,

    alternates: {
      canonical: url,
      languages: {
        "id-ID": `${site.url}/`,
        "en-US": `${site.url}/en/`,
        // Dipakai mesin pencari untuk pembaca yang bahasanya tidak cocok
        // dengan keduanya. Tanpa ini, mereka menebak sendiri.
        "x-default": `${site.url}/`,
      },
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        // Tanpa ini Google membatasi pratinjau gambar jadi thumbnail kecil,
        // dan cuplikan teksnya dipotong pendek.
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_US",
      alternateLocale: locale === "id" ? "en_US" : "id_ID",
      url,
      siteName: site.name,
      // Di sini taglinenya yang dipakai, bukan judul berkata kunci: yang
      // melihatnya sudah menatap gambar dan lambang, bukan daftar hasil cari.
      title: dict.meta.ogTitle,
      description: dict.meta.description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: dict.meta.ogImageAlt,
          type: "image/png",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.description,
      images: [{ url: image, alt: dict.meta.ogImageAlt }],
    },

    // Tag verifikasi hanya dicetak kalau kodenya benar-benar diisi di
    // `site.ts`. Tag kosong tidak berguna dan malah membingungkan.
    ...(site.googleSiteVerification
      ? { verification: { google: site.googleSiteVerification } }
      : {}),
  };
}

/**
 * Metadata <head> untuk satu halaman hukum.
 *
 * Bukan `buildMetadata` dengan beberapa penimpaan: canonical, hreflang, dan
 * judulnya semuanya berbeda, dan yang tersisa sama cuma identitas penerbit.
 * Menyatukan keduanya lewat parameter opsional justru membuat keduanya sulit
 * dibaca sekaligus mudah salah.
 *
 * Yang paling penting di sini `alternates.canonical`. Empat halaman hukum
 * isinya berpasangan dua-dua, dan tanpa canonical serta hreflang yang benar,
 * `/privasi` dan `/en/privacy` gampang dinilai Google sebagai konten kembar.
 */
export function buildLegalMetadata(kind: LegalKind, locale: Locale): Metadata {
  const doc = getLegalDocument(kind, locale);
  const url = `${site.url}${legalPath[kind][locale]}`;
  const image = ogImagePath(locale);

  return {
    metadataBase: new URL(site.url),
    // Judul beranda ditulis untuk hasil pencarian; yang ini tidak perlu.
    // Orang mencari halaman ini dengan menyebut namanya beserta nama
    // aplikasinya, dan itu persis yang tertulis di sini.
    title: { absolute: `${doc.title} — ${site.name}` },
    description: doc.description,
    applicationName: site.name,
    authors: [{ name: site.publisher, url: site.publisherUrl }],
    creator: site.publisher,
    publisher: site.publisher,

    alternates: {
      canonical: url,
      languages: {
        "id-ID": `${site.url}${legalPath[kind].id}`,
        "en-US": `${site.url}${legalPath[kind].en}`,
        "x-default": `${site.url}${legalPath[kind].id}`,
      },
    },

    // Halaman ini memang dimaksudkan untuk ditemukan — Google Play dan layar
    // persetujuan OAuth sama-sama menautkannya.
    robots: { index: true, follow: true },

    openGraph: {
      type: "article",
      locale: locale === "id" ? "id_ID" : "en_US",
      alternateLocale: locale === "id" ? "en_US" : "id_ID",
      url,
      siteName: site.name,
      title: `${doc.title} — ${site.name}`,
      description: doc.description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: getDictionary(locale).meta.ogImageAlt,
          type: "image/png",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${doc.title} — ${site.name}`,
      description: doc.description,
      images: [{ url: image, alt: getDictionary(locale).meta.ogImageAlt }],
    },
  };
}

export const siteViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};
