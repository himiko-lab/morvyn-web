import type { LegalDocument } from "./types";

/**
 * Terms of Service — English.
 *
 * Terjemahan dari `terms-id.ts`. Sama seperti kebijakan privasi: urutan dan
 * `id` tiap bagian harus tetap sama dengan versi Indonesianya, supaya tautan
 * berjangkar tidak patah saat pembaca berpindah bahasa.
 */
export const termsEn: LegalDocument = {
  title: "Terms of Service",
  description:
    "The terms for using Morvyn: a free app provided as is, with your data staying entirely in your own hands.",
  lead: "These terms apply when you install or use Morvyn, an Android app made by Himiko Lab. They are short on purpose — Morvyn stores nothing about you, so there is not much to govern.",
  effectiveLabel: "Effective",
  effectiveDate: "14 August 2026",

  summaryHeading: "In short",
  summary: [
    "Morvyn is **free** and provided **as is**, without warranty.",
    "Your data lives on your device, so **keeping it safe is your responsibility**. Backups are strongly recommended.",
    "When enabled, calendar sync can **create, change, and delete** events on the Google calendar you choose.",
    "These terms are governed by **the laws of the Republic of Indonesia**.",
  ],

  tocHeading: "On this page",

  sections: [
    {
      id: "penerimaan",
      title: "Acceptance of these terms",
      blocks: [
        {
          kind: "p",
          text: "By installing or using Morvyn, you agree to the terms on this page. If there is any part you do not agree with, please do not use the app.",
        },
        {
          kind: "p",
          text: "These terms sit alongside the [Privacy Policy](/en/privacy/), which explains data handling in detail.",
        },
      ],
    },

    {
      id: "tentang",
      title: "About Morvyn",
      blocks: [
        {
          kind: "p",
          text: "Morvyn is an Android app with the package name `com.himikolab.morvyn`, developed and published by Himiko Lab.",
        },
        {
          kind: "p",
          text: "The app is **free** and provided **as is**, without warranty of any kind — including any warranty that it will always be available, uninterrupted, or fit for your particular purpose.",
        },
      ],
    },

    {
      id: "tanggung-jawab",
      title: "Your data, your responsibility",
      blocks: [
        {
          kind: "p",
          text: "All Morvyn data is stored inside your device. Himiko Lab holds no copy of it and **cannot recover data that is lost**.",
        },
        {
          kind: "p",
          text: "That data goes with the app if you uninstall it, clear its data from Android Settings, or lose or damage the device. For that reason **backups are strongly recommended** — see the Google Drive backup feature inside the app.",
        },
      ],
    },

    {
      id: "kalender",
      title: "What Google Calendar sync does",
      blocks: [
        {
          kind: "p",
          text: "Google Calendar sync is optional and off by default. **If you turn it on, Morvyn can create, change, and delete events** on the Google calendar you select.",
        },
        {
          kind: "p",
          text: "That is the point of the feature: changes you make in Morvyn are carried through to your Google calendar. But the consequence is real — deleting an event in Morvyn means that event also disappears from your Google calendar.",
        },
        {
          kind: "p",
          text: "Pick the calendar you actually mean, and turn sync off from Morvyn's Settings when you no longer want it.",
        },
      ],
    },

    {
      id: "pihak-ketiga",
      title: "Third-party services",
      blocks: [
        {
          kind: "p",
          text: "Several Morvyn features rely on services that Himiko Lab does not own. Those services are governed by their own terms and privacy policies, and Himiko Lab controls neither their availability nor their content:",
        },
        {
          kind: "defs",
          items: [
            {
              term: "Google",
              text: "Sign in with Google, Google Drive backup, and Google Calendar sync.",
            },
            {
              term: "Weather data providers",
              text: "[Open-Meteo](https://open-meteo.com/) and [OpenWeather](https://openweathermap.org/).",
            },
            {
              term: "News publishers",
              text: "RSS feeds are fetched directly from each publisher's own site. The articles belong to, and are the responsibility of, their publishers.",
            },
            {
              term: "Exchange rate provider",
              text: "Rates come from `open.er-api.com`. The figures are shown for reference, not as a basis for transactions.",
            },
          ],
        },
      ],
    },

    {
      id: "pemakaian",
      title: "Acceptable use",
      blocks: [
        {
          kind: "p",
          text: "Morvyn is provided for your personal use. Do not use it to break any applicable law, and do not use it in ways that disrupt the third-party services listed above.",
        },
      ],
    },

    {
      id: "batasan",
      title: "Limitation of liability",
      blocks: [
        {
          kind: "p",
          text: "To the fullest extent permitted by applicable law, Himiko Lab is not liable for loss of data, loss of profit, or any indirect, special, or consequential damages arising from the use of, or inability to use, Morvyn.",
        },
        {
          kind: "p",
          text: "This includes reminders or alarms that fail to sound, data lost from a device, and changes to your Google calendar caused by the sync you enabled.",
        },
        {
          kind: "p",
          text: "Weather, news, and exchange rate information comes from third parties and is presented as received. Himiko Lab does not guarantee its accuracy or timeliness.",
        },
      ],
    },

    {
      id: "usia",
      title: "Minimum age",
      blocks: [
        {
          kind: "p",
          text: "Morvyn is not directed at children under 13. Features that use Google services also require a valid Google Account, which carries its own age requirements.",
        },
      ],
    },

    {
      id: "perubahan",
      title: "Changes to these terms",
      blocks: [
        {
          kind: "p",
          text: "These terms may change. Changes are published on this page, and the effective date at the top is updated with them. Continuing to use Morvyn after a change means you accept the new version.",
        },
      ],
    },

    {
      id: "penghentian",
      title: "Ending your use",
      blocks: [
        {
          kind: "p",
          text: "You can stop using Morvyn at any time by uninstalling it. Himiko Lab may discontinue or change the app, including retiring particular features, and will try to give notice ahead of significant changes.",
        },
      ],
    },

    {
      id: "hukum",
      title: "Governing law",
      blocks: [
        {
          kind: "p",
          text: "These terms are governed by and construed in accordance with **the laws of the Republic of Indonesia**.",
        },
      ],
    },

    {
      id: "kontak",
      title: "Contact",
      blocks: [
        {
          kind: "p",
          text: "Questions about these terms can be sent to [hi@himikolab.my.id](mailto:hi@himikolab.my.id).",
        },
      ],
    },
  ],
};
