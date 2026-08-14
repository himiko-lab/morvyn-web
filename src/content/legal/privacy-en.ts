import type { LegalDocument } from "./types";

/**
 * Privacy Policy — English.
 *
 * Terjemahan dari `privacy-id.ts`, dan harus tetap sepadan isinya. Kalau satu
 * bahasa diperbarui sendirian, dua halaman ini menjanjikan hal yang berbeda
 * tentang aplikasi yang sama — dan yang berbahasa Inggris sering justru itu
 * yang dibaca pemeriksa.
 *
 * Urutan dan `id` tiap bagian sengaja dibuat sama persis dengan versi
 * Indonesianya.
 */
export const privacyEn: LegalDocument = {
  title: "Privacy Policy",
  description:
    "How Morvyn handles your data: everything stays on your device, no server, no tracking, with Google backup and calendar sync entirely optional.",
  lead: "Morvyn is an Android app made by Himiko Lab. This page explains what data the app handles, where it goes, and — just as importantly — what it does not do.",
  effectiveLabel: "Effective",
  effectiveDate: "14 August 2026",

  summaryHeading: "In short",
  summary: [
    "**Morvyn has no server.** Himiko Lab holds no user database and cannot see anyone's notes, schedule, finances, or habits.",
    "All of your data is stored **on your own device**.",
    "**No analytics, no ads, no tracking SDKs.** Nothing is sold or shared.",
    "Google sign-in, Google Drive backup, and Google Calendar sync are all **optional** — Morvyn works fully without any of them.",
  ],

  tocHeading: "On this page",

  sections: [
    {
      id: "pengelola",
      title: "Who runs Morvyn",
      blocks: [
        {
          kind: "p",
          text: "Morvyn is an Android app with the package name `com.himikolab.morvyn`, developed and published by Himiko Lab.",
        },
        {
          kind: "defs",
          items: [
            { term: "App name", text: "Morvyn" },
            { term: "Developer", text: "Himiko Lab" },
            {
              term: "App homepage",
              text: "[morvyn.himikolab.my.id](https://morvyn.himikolab.my.id)",
            },
            {
              term: "Contact",
              text: "[hi@himikolab.my.id](mailto:hi@himikolab.my.id)",
            },
          ],
        },
      ],
    },

    {
      id: "prinsip",
      title: "The core principle: no server, no tracking",
      blocks: [
        {
          kind: "p",
          text: "**Morvyn has no server of its own.** Himiko Lab holds no user database and cannot see anyone's notes, schedule, finances, or habits. All user data is stored on the device itself, in a local database (Room/SQLite).",
        },
        {
          kind: "p",
          text: "**There is no tracking at all.** The app uses no Google Analytics, no Firebase Analytics, no Crashlytics, no advertising SDK, and no third-party tracking SDK. No behavioural profile is built, and no data is sold or shared for advertising.",
        },
      ],
    },

    {
      id: "data-perangkat",
      title: "Data stored on your device",
      blocks: [
        {
          kind: "p",
          text: "Morvyn keeps its contents in a local database inside your device. What lives there:",
        },
        {
          kind: "list",
          items: [
            "Notes",
            "Tasks",
            "Schedule and agenda entries",
            "Habits",
            "Finance records and their categories",
            "Alarms and reminders",
            "News articles you saved",
            "News reading history",
            "Weather records",
          ],
        },
        {
          kind: "p",
          text: "All of it is local. Not one item on that list is sent to Himiko Lab.",
        },
      ],
    },

    {
      id: "masuk",
      title: "Sign in with Google",
      blocks: [
        {
          kind: "p",
          text: "Morvyn uses **Firebase Authentication** for Sign in with Google. It serves one purpose: proving that the account requesting a backup is yours. This is a prerequisite for the backup feature.",
        },
        {
          kind: "p",
          text: "It is **optional**. Morvyn remains fully usable without ever signing in.",
        },
      ],
    },

    {
      id: "drive",
      title: "Google Drive backup",
      blocks: [
        {
          kind: "p",
          text: "Backup is **optional** and uses the `drive.appdata` scope. Backup files are stored in your own app data folder inside your Google Drive.",
        },
        {
          kind: "p",
          text: "That folder is hidden from other apps, and **Himiko Lab has no access to it**. You can delete its contents yourself at any time through your Google Drive settings.",
        },
      ],
    },

    {
      id: "kalender",
      title: "Google Calendar sync",
      blocks: [
        {
          kind: "p",
          text: "Calendar sync uses the `calendar.events` scope. It is two-way, **optional**, and **off by default**.",
        },
        {
          kind: "p",
          text: "When you turn it on, Morvyn **reads and writes events** on a single calendar that you choose yourself. Events pulled from Google Calendar are stored **only on your device**; events you create or change in Morvyn are sent to your Google calendar.",
        },
        {
          kind: "p",
          text: "Calendar data is **never sent to anyone other than Google**, and never passes through a Himiko Lab server — again, because no such server exists.",
        },
        {
          kind: "p",
          text: "You can disconnect at any time from Settings inside Morvyn, and revoke the permission from your [Third-party access page in your Google Account](https://myaccount.google.com/permissions).",
        },
      ],
    },

    {
      id: "firebase",
      title: "Notifications and app configuration",
      blocks: [
        {
          kind: "defs",
          items: [
            {
              term: "Firebase Cloud Messaging",
              text: "Delivers announcement notifications from the developer. Devices subscribe to a topic; the system is not used to identify individual people.",
            },
            {
              term: "Firebase Remote Config",
              text: "Fetches app configuration values. No personal data is sent.",
            },
          ],
        },
      ],
    },

    {
      id: "google-api-policy",
      title: "Compliance with the Google API Services User Data Policy",
      blocks: [
        {
          kind: "p",
          text: "Morvyn's use and transfer of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), **including the Limited Use requirements**.",
        },
        {
          kind: "p",
          text: "In practice, for data obtained through the `drive.appdata` and `calendar.events` scopes:",
        },
        {
          kind: "list",
          items: [
            "It is used only to provide user-facing features — the backup and calendar sync that you switch on yourself.",
            "It is not transferred to anyone. There is no intermediary to pass through, because Morvyn has no server.",
            "It is not used for advertising, and not used to build any kind of profile.",
            "No human reads it. Himiko Lab has no technical route to it: backup files sit in your own hidden folder on Drive, and calendar data never leaves your device except to reach your own Google calendar.",
          ],
        },
      ],
    },

    {
      id: "lokasi",
      title: "Location and weather",
      blocks: [
        {
          kind: "p",
          text: "Morvyn requests location permission (`ACCESS_FINE_LOCATION` / `ACCESS_COARSE_LOCATION`) **solely to show the weather around you**. Latitude and longitude are sent directly to the weather data providers as part of the request:",
        },
        {
          kind: "list",
          items: [
            "`api.open-meteo.com` — [Open-Meteo](https://open-meteo.com/)",
            "`api.openweathermap.org` — [OpenWeather](https://openweathermap.org/)",
          ],
        },
        {
          kind: "p",
          text: "Those coordinates are **not stored on any server by Morvyn**, and are not tied to your identity. The permission is optional; declining it only means the weather feature will not pick up your location automatically.",
        },
      ],
    },

    {
      id: "berita",
      title: "News",
      blocks: [
        {
          kind: "p",
          text: "The news feature fetches RSS feeds **directly from each publisher's own site**, with nothing in between. That means those publishers can see the request coming from your device — your IP address and ordinary request information — exactly as if you had opened their site in a browser.",
        },
        {
          kind: "p",
          text: "The publishers contacted include Detik, Antara, CNN Indonesia, CNBC Indonesia, Tempo, Republika, Sindonews, Okezone, JPNN, BBC, The Guardian, Al Jazeera, ABC News, The New York Times, The Independent, France 24, Channel News Asia, and the South China Morning Post. Each is governed by its own privacy policy.",
        },
      ],
    },

    {
      id: "kurs",
      title: "Currency exchange rates",
      blocks: [
        {
          kind: "p",
          text: "The finance feature fetches exchange rates from `open.er-api.com`. None of your data is sent there — only a request for rates.",
        },
      ],
    },

    {
      id: "izin",
      title: "Android permissions and why they are used",
      blocks: [
        {
          kind: "defs",
          items: [
            {
              term: "`INTERNET`",
              text: "Fetching weather, news, and exchange rates, and running Google sync.",
            },
            {
              term: "`ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION`",
              text: "Showing the weather around you. Optional.",
            },
            {
              term: "`POST_NOTIFICATIONS`",
              text: "Showing reminders and alarms.",
            },
            {
              term: "`SCHEDULE_EXACT_ALARM`",
              text: "Sounding alarms at the exact time.",
            },
            {
              term: "`RECEIVE_BOOT_COMPLETED`",
              text: "Re-arming reminders after the device restarts.",
            },
            {
              term: "`USE_FULL_SCREEN_INTENT`, `SYSTEM_ALERT_WINDOW`",
              text: "Showing the alarm screen.",
            },
            {
              term: "`FOREGROUND_SERVICE`, `FOREGROUND_SERVICE_SPECIAL_USE`",
              text: "Keeping an alarm ringing.",
            },
            {
              term: "`VIBRATE`, `WAKE_LOCK`",
              text: "Vibration, and waking the screen when an alarm goes off.",
            },
          ],
        },
      ],
    },

    {
      id: "anak",
      title: "Children",
      blocks: [
        {
          kind: "p",
          text: "Morvyn is not directed at children under 13. Himiko Lab does not knowingly collect data from them — and collects data from no one at all, because there is no server to receive it.",
        },
        {
          kind: "p",
          text: "For the same reason there is nothing for us to delete on request: a child's data lives on the device they used, and can be removed by clearing that app's data. The next section explains how.",
        },
      ],
    },

    {
      id: "hapus-data",
      title: "How to delete your data",
      blocks: [
        {
          kind: "defs",
          items: [
            {
              term: "All local data",
              text: "Uninstall the app, or clear the app's data from Android Settings.",
            },
            {
              term: "Google Drive backup",
              text: "Disconnect from Morvyn's Settings, then delete the backup files through the connected-apps settings in Google Drive.",
            },
            {
              term: "Calendar data",
              text: "Turn off sync in Morvyn's Settings. Events already in Google Calendar remain yours and can be deleted there.",
            },
            {
              term: "Revoke Google access",
              text: "Through your [Third-party access page in your Google Account](https://myaccount.google.com/permissions).",
            },
          ],
        },
      ],
    },

    {
      id: "perubahan",
      title: "Changes to this policy",
      blocks: [
        {
          kind: "p",
          text: "If this policy changes, the new version is published on this page and the effective date at the top is updated with it.",
        },
      ],
    },

    {
      id: "kontak",
      title: "Contact",
      blocks: [
        {
          kind: "p",
          text: "Questions about this policy can be sent to [hi@himikolab.my.id](mailto:hi@himikolab.my.id).",
        },
      ],
    },
  ],
};
