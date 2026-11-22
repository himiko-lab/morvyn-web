import { appVersion, site } from "../site";
import { releaseBody, releases, releasesShown, type Release } from "../releases";
import type { PageCopy, PageKey } from "./types";

/** Satu versi sebagai bagian halaman Catatan Rilis. */
function releaseSection(release: Release) {
  return { heading: `Version ${release.version}`, ...releaseBody(release, "en") };
}

/** Tiga versi terbaru, mis. "1.6.0, 1.5.0, dan 1.4.0", untuk deskripsi meta. */
function recentVersions(and: string): string {
  const [last, ...rest] = releases
    .slice(0, 3)
    .map((release) => release.version)
    .reverse();
  return rest.length ? `${rest.reverse().join(", ")}, ${and} ${last}` : last;
}

/**
 * Extra pages, English. Pairs with `id.ts` and makes the same claims, no more
 * and no fewer.
 *
 * Two things are deliberately NOT written:
 * - Locked notes are never called "encrypted". The lock hides the note on
 *   screen; it does not encrypt its contents.
 * - Release notes carry no dates. The day each version went live on Google
 *   Play is not known.
 */
export const pagesEn: Record<PageKey, PageCopy> = {
  pdf: {
    name: "PDF and Scan",
    short: "Open PDFs, scan paper documents with the camera, and copy their text with offline OCR.",
    eyebrow: "Morvyn features",
    title: "PDF Reader and Document Scanner in Morvyn",
    description:
      "Morvyn opens PDFs, scans paper documents into PDFs, and recognises their text (OCR) on your phone with no internet. It can also organise pages and compress PDFs.",
    h1: "PDF reader and document scanner in Morvyn",
    lead: "Morvyn is more than a notes app. It includes a PDF reader, a camera document scanner, and text recognition (OCR) that runs on your phone with no internet. Free, with no ads.",
    sections: [
      {
        heading: "Scan paper documents into PDFs",
        paragraphs: [
          "Paper documents can be scanned with your phone's camera and saved as PDFs. There is no need to install a separate scanner app just for that.",
        ],
      },
      {
        heading: "Scanned text you can select, copy, and search",
        paragraphs: [
          "A scanned PDF is essentially a photo of a page. Morvyn recognises the text in it (OCR), so that text can be selected, copied, and searched like ordinary text.",
          "The recognition runs on your own phone, with no internet, for Latin, Chinese, Japanese, Korean, and Hindi scripts.",
        ],
      },
      {
        heading: "Open PDFs from anywhere",
        paragraphs: [
          "PDFs can be opened from device storage, from another app through \"Open with\", or from a note that has one attached.",
          "Important pages can be bookmarked, and the PDF can be shared or printed.",
        ],
        points: [
          "Open from the device, from another app, or from a note",
          "Page bookmarks",
          "Share or print",
        ],
      },
      {
        heading: "Organise pages and compress PDFs",
        paragraphs: [
          "PDF pages can be reordered and deleted. Pages from another PDF or images from your gallery can be merged in.",
          "The PDF's file size can be compressed too.",
        ],
        points: [
          "Reorder and delete pages",
          "Merge pages from another PDF or from the gallery",
          "Compress PDF file size",
        ],
      },
      {
        heading: "Markdown, text, and 3D models",
        paragraphs: [
          "Besides PDFs, Morvyn reads Markdown and text files (.md, .txt), and their contents can be saved to Notes.",
          "3D models in GLB, glTF, STL, and OBJ formats can be viewed in Morvyn as well, then saved to Notes.",
        ],
        links: [{ label: "More about Notes", href: "/en/features/notes/" }],
      },
    ],
    faq: [
      {
        q: "Can Morvyn scan documents into PDFs?",
        a: "Yes. Paper documents are scanned with your phone's camera and saved as PDFs.",
      },
      {
        q: "Does OCR in Morvyn need internet?",
        a: "No. Text in scanned PDFs is recognised on your own phone, with no internet, for Latin, Chinese, Japanese, Korean, and Hindi scripts.",
      },
      {
        q: "Can Morvyn merge and compress PDFs?",
        a: "Yes. PDF pages can be reordered, deleted, and merged in from another PDF or from the gallery, and the PDF's file size can be compressed.",
      },
      {
        q: "What other files can Morvyn open?",
        a: "Markdown and text (.md, .txt), plus 3D models in GLB, glTF, STL, and OBJ formats. All of them can be saved to Notes.",
      },
    ],
  },

  widgets: {
    name: "Widgets",
    short: "Five home screen widgets: Finance, Agenda, Notes, Habits, and Weather.",
    eyebrow: "Morvyn features",
    title: "Morvyn Widgets: Finance, Agenda, Notes, Habits, Weather",
    description:
      "Morvyn's five home screen widgets: Finance, Agenda, Notes, Habits, and Weather. See your balance, add a transaction, and tick off tasks without opening the app.",
    h1: "Morvyn widgets for your phone's home screen",
    lead: "Morvyn has five home screen widgets: Finance, Agenda, Notes, Habits, and Weather. The things you look at and do most often can be handled from the home screen, without opening the app.",
    sections: [
      {
        heading: "Finance widget",
        paragraphs: [
          "The Finance widget shows your balance, and a new transaction can be added from it without opening the app.",
          "The balance can be hidden with the eye icon on the widget. Since version 1.3.1, that eye icon switches instantly on Android 12 and later.",
        ],
        links: [{ label: "More about Finance", href: "/en/features/finance/" }],
      },
      {
        heading: "Agenda widget",
        paragraphs: [
          "The Agenda widget shows your agenda for today or for 2 weeks, and tasks can be ticked off straight from the widget.",
          "Tasks whose due time has passed are marked Overdue, on this widget too.",
        ],
        links: [{ label: "More about Agenda", href: "/en/features/agenda/" }],
      },
      {
        heading: "Notes widget",
        paragraphs: [
          "The Notes widget shows a list of notes, or the contents of one note you choose. Checklist items in that note can be ticked from the widget.",
        ],
        links: [{ label: "More about Notes", href: "/en/features/notes/" }],
      },
      {
        heading: "Habits widget",
        paragraphs: [
          "The Habits widget puts your habits on your phone's home screen, so you do not have to remember to open the app first.",
        ],
        links: [{ label: "More about Habits", href: "/en/features/habits/" }],
      },
      {
        heading: "Weather widget",
        paragraphs: [
          "The Weather widget comes in two options: Weather, or Weather + daily. It stays up to date, and tapping it opens Weather.",
        ],
        links: [{ label: "More about Weather", href: "/en/features/weather/" }],
      },
    ],
    faq: [
      {
        q: "Does Morvyn have widgets?",
        a: "Yes, five home screen widgets: Finance, Agenda, Notes, Habits, and Weather.",
      },
      {
        q: "Can I tick off tasks from a widget?",
        a: "Yes. Tasks on the Agenda widget and checklist items on the Notes widget can be ticked without opening the app.",
      },
      {
        q: "Can I add a transaction from a widget?",
        a: "Yes. From the Finance widget, a new transaction can be added without opening the app.",
      },
      {
        q: "Can the balance on the widget be hidden?",
        a: "Yes, with the eye icon on the Finance widget.",
      },
    ],
  },

  releaseNotes: {
    name: "Release Notes",
    short: "What changed in each version of Morvyn, newest first.",
    eyebrow: "Version history",
    title: "Morvyn Release Notes: What's New in Each Version",
    description: `Morvyn release notes, newest first: fixes and new features in versions ${recentVersions("and")} of the Android app made by Himiko Lab.`,
    h1: "Morvyn release notes",
    lead: `What changed in each version of Morvyn, newest first. The current version is ${appVersion}.`,
    sections: releases.slice(0, releasesShown).map(releaseSection),
    // Undefined selama versinya belum lebih dari `releasesShown`, sehingga
    // tombol lipatnya baru muncul begitu memang ada yang perlu dilipat.
    collapsed:
      releases.length > releasesShown
        ? {
            label: `Earlier versions (${releases.length - releasesShown})`,
            sections: releases.slice(releasesShown).map(releaseSection),
          }
        : undefined,
  },

  contact: {
    name: "Contact",
    short: "How to send feedback or report a problem.",
    eyebrow: "Support",
    title: "Morvyn Contact and Support",
    description:
      "How to send feedback or report a problem in Morvyn, the Android app made by Himiko Lab: by email, on Morvyn's Google Play page, or through the Himiko Lab site.",
    h1: "Morvyn contact and support",
    lead: "Have feedback, found a problem, or want to ask something about Morvyn? Here is how to reach Himiko Lab, its developer.",
    sections: [
      {
        heading: "Send feedback or report a problem",
        paragraphs: [
          "Send an email to the address below. Your message is read by the developer directly.",
          "When reporting a problem, describe what happened, the steps you took before it appeared, the Morvyn version you have installed, and your phone model. A screenshot helps a lot.",
        ],
        links: [{ label: site.contactEmail, href: `mailto:${site.contactEmail}` }],
      },
      {
        heading: "Morvyn on Google Play",
        paragraphs: [
          "Morvyn is downloaded and updated through Google Play. On the same page you can also write a review.",
        ],
        links: [{ label: "Open Morvyn on Google Play", href: site.playStoreUrl }],
      },
      {
        heading: "Himiko Lab",
        paragraphs: [
          "Morvyn is made by Himiko Lab. Its official site is himikolab.my.id.",
        ],
        links: [{ label: "Visit himikolab.my.id", href: site.publisherUrl }],
      },
      {
        heading: "Privacy and terms",
        paragraphs: [
          "Questions about what data Morvyn stores and sends are answered in the Privacy Policy. The rules for using it are in the Terms of Service.",
        ],
        links: [
          { label: "Privacy Policy", href: "/en/privacy/" },
          { label: "Terms of Service", href: "/en/terms/" },
        ],
      },
    ],
  },
};
