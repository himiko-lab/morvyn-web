import type { LegalDocument } from "./types";

/**
 * Privacy Policy, English.
 *
 * Terjemahan dari `privacy-id.ts`, dan harus tetap sepadan isinya. Kalau satu
 * bahasa diperbarui sendirian, dua halaman ini menjanjikan hal yang berbeda
 * tentang aplikasi yang sama, dan yang berbahasa Inggris sering justru itu
 * yang dibaca pemeriksa.
 *
 * Urutan dan `id` tiap bagian sengaja dibuat sama persis dengan versi
 * Indonesianya.
 */
export const privacyEn: LegalDocument = {
  title: "Privacy Policy",
  description:
    "How Morvyn handles your data: app content stays on your device. No ads. Menu usage statistics and crash reports are sent to Google and are always on.",
  lead: "Morvyn is an Android app made by Himiko Lab. This page explains what data the app handles, where it goes, and, just as importantly, what it does not do.",
  effectiveLabel: "Effective",
  effectiveDate: "14 October 2026",

  summaryHeading: "In short",
  summary: [
    "**Morvyn has no server.** Himiko Lab cannot see anyone's notes, schedule, finances, or habits. If you sign in with Google, we hold the sign-in record for your account, and you can delete it yourself from inside the app.",
    "Your app content is stored **on your own device**, and in your own Google account only if you turn on backup.",
    "**Usage statistics and crash reports are sent to Google, and cannot be turned off from inside the app.** Morvyn uses Firebase Analytics and Firebase Crashlytics, which are active from the moment the app is installed. All Morvyn deliberately sends is the name of the menu you opened and the name of the part of the code that failed, with none of your notes, finances, agenda, habits, or location. The details are under \"Usage statistics and crash reports\".",
    "**No ads and no advertising SDK.** No data is sold, and none is shared for advertising. The other Google SDKs Morvyn uses also send limited technical data to Google, described under \"Notifications, app configuration, and other Google services\".",
    "Google sign-in, Google Drive backup, and Google Calendar sync are all **optional**: Morvyn works fully without any of them.",
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
      title: "The core principle: no server of our own, app content stays on your device",
      blocks: [
        {
          kind: "p",
          text: "**Morvyn has no server of its own.** Himiko Lab holds no database of your app content and cannot see anyone's notes, schedule, finances, or habits. All user data is stored on the device itself, in a local database (Room/SQLite), and in your own Google account only if you turn on backup.",
        },
        {
          kind: "p",
          text: "**Two things do reach Himiko Lab's Firebase project. The first is the sign-in record.** When you sign in with Google, Firebase Authentication creates an account in Himiko Lab's Firebase project holding your email address, display name, Google profile photo URL, a user ID (UID), and the dates the account was created and last signed in. Himiko Lab can see that list of accounts in the Firebase console. It holds none of your app content, and you can delete it yourself from inside Morvyn: see \"Deleting your account\".",
        },
        {
          kind: "p",
          text: "**The second is usage statistics and crash reports.** Morvyn uses Firebase Analytics and Firebase Crashlytics, both Google services. Both are active from the moment the app is installed, and there is no switch inside the app to turn them off. All Morvyn deliberately sends is the name of the menu you opened and the name of the part of the code that failed, not your app content. The details are under \"Usage statistics and crash reports\".",
        },
        {
          kind: "p",
          text: "**There are no ads.** Morvyn uses no advertising SDK. No data is sold, and none is shared for advertising. The Google SDKs used for sign-in, notifications, configuration, and the document scanner do send limited technical data to Google, each as described in its own documentation: the details are under \"Notifications, app configuration, and other Google services\".",
        },
      ],
    },

    {
      id: "analytics",
      title: "Usage statistics and crash reports",
      blocks: [
        {
          kind: "p",
          text: "Morvyn uses **Firebase Analytics** (Google Analytics for Firebase) and **Firebase Crashlytics**. Both are Google services, and both run in Himiko Lab's Firebase project. The Firebase Sessions component is installed along with Crashlytics.",
        },
        {
          kind: "p",
          text: "**Both are always on.** Analytics and Crashlytics are active from the moment the app is installed, and **there is no switch inside the app to turn them off**. This is the developer's decision. The purpose is to know which menus are used and which parts fail, so that they can be fixed.",
        },
        {
          kind: "p",
          text: "All Morvyn deliberately sends is the name of a place inside the app:",
        },
        {
          kind: "list",
          items: [
            "The name of the menu you opened, as a fixed lowercase word: `beranda`, `catatan`, `keuangan`, `agenda`, `kalender`, `kebiasaan`, `cuaca`, `berita`, `gempa`, plus the names of other screens such as `settings`, `pembaca_pdf`, and `tambah_transaksi_cepat`.",
            "The name of the part of the code that failed, for example \"pengamat widget Agenda\" (the Agenda widget observer).",
            "On crash reports: the name of the last menu you opened, and whether the app was showing on screen at the time.",
          ],
        },
        {
          kind: "p",
          text: "What Morvyn does **not** send: note titles and contents, finance amounts and records, wallet names, the names of agenda items and tasks, habits, location, email address, name, and photo.",
        },
        {
          kind: "p",
          text: "Morvyn sets no user identifier on either service (no `setUserId`). So the statistics and crash reports are not tied to the Google account you sign in with.",
        },
        {
          kind: "p",
          text: "The list above is what Morvyn sends deliberately. The Analytics and Crashlytics SDKs also collect technical data automatically and send it to Google. According to the [Firebase data disclosure page](https://firebase.google.com/docs/android/play-data-disclosure) and the [Google Analytics help page](https://support.google.com/analytics/answer/11582702), that is:",
        },
        {
          kind: "defs",
          items: [
            {
              term: "Firebase Analytics",
              text: "An app installation identifier (the app-instance ID), app lifecycle events (screen views and sessions), and a coarse location derived from a masked IP address.",
            },
            {
              term: "Firebase Crashlytics",
              text: "The stack trace at the time of a crash, the state of the app at the time of the crash, device metadata at the time of the crash, and a Crashlytics installation identifier (a UUID) used to count how many installations are affected. The report is sent the next time the app is opened. What Morvyn attaches to that report: the name of the last menu, whether the app was showing on screen, and the name of the part of the code that failed.",
            },
            {
              term: "Firebase Sessions",
              text: "Installed along with Crashlytics. App metadata (package name, operating system information, SDK version, network connection type), device metadata (manufacturer and model), and the time the app is brought to the foreground.",
            },
            {
              term: "Firebase Installations",
              text: "A per-installation identifier (FID).",
            },
          ],
        },
        {
          kind: "p",
          text: "All of it is encrypted in transit (HTTPS).",
        },
        {
          kind: "p",
          text: "**The advertising ID is not collected.** The `AD_ID`, `ACCESS_ADSERVICES_AD_ID`, and `ACCESS_ADSERVICES_ATTRIBUTION` permissions that the Analytics library brings along are removed from the app, advertising ID collection is turned off, and every use of data for advertising is turned off: ad storage, ad user data, and ad personalisation signals.",
        },
        {
          kind: "p",
          text: "**Your device position is not included.** The position used by Weather, Earthquake, and the transaction place in Finance is not sent to Analytics or Crashlytics. The coarse location mentioned above is derived from a masked IP address.",
        },
        {
          kind: "p",
          text: "**Who sees it.** No data is sold, and none is shared for advertising. Google processes the statistics and crash reports as a service provider for Himiko Lab, and Himiko Lab views them in the Firebase console. Morvyn's Google Analytics property is not linked to Google Ads, Google Signals is off, and data sharing with Google products and services is off.",
        },
        {
          kind: "p",
          text: "**Retention.** Usage statistics event data is kept by Google Analytics for **2 months**, as set on the property. For crash reports, according to the Firebase documentation, stack traces and the identifiers that accompany them are kept for **90 days**, after which they begin to be removed from live and backup systems.",
        },
        {
          kind: "p",
          text: "**What you can do.** Uninstalling the app stops the collection. Clearing the app's data from Android Settings causes the installation identifier to be replaced. We state the limitation plainly: because the statistics are not tied to an account, Himiko Lab cannot look up one person's data by name or email.",
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
            "Deletion history: schedule entries, tasks, alarms, notes, and finance transactions you delete are kept for 7 days so you can restore them, then dropped automatically",
            "Note attachments: images, PDF files, document scans saved as PDF, and drawings",
            "Your profile: name, photo, gender, date of birth, and time zone",
            "The place on a finance record, when you fill it in from where you are (see \"Location, weather, and places\")",
            "Your last known position: a single value shared by Home, Weather, Earthquake, and the transaction place in Finance (see \"Location, weather, and places\")",
            "Earthquake data: your earthquake notification settings and a copy of the latest earthquake data (see \"Earthquake information\")",
            "The text recognised (OCR) on PDF pages, kept in the app's cache",
            "The Google account storage figures last read, while Drive is connected (see \"Google Drive backup\")",
          ],
        },
        {
          kind: "p",
          text: "All of it is local, apart from your own backups. Not one item on that list is sent to Himiko Lab.",
        },
        {
          kind: "p",
          text: "**Home screen widgets.** Morvyn has Habits, Finance, Agenda, and Notes widgets. A widget shows the content you choose, for example the contents of a note, today's agenda, or your balance, on your phone's home screen. To draw it, that content is handed to the home screen app (the launcher) on the same phone, and is not sent anywhere. Anyone who can see your home screen can read it. The hide-balance setting also applies to the Finance widget.",
        },
      ],
    },

    {
      id: "masuk",
      title: "Sign in with Google",
      blocks: [
        {
          kind: "p",
          text: "Morvyn uses **Firebase Authentication** for Sign in with Google. Signing in is a prerequisite for two features: a Google account must be connected first before you connect Google Drive for backup or Google Calendar for calendar sync. Disconnecting the account disconnects both.",
        },
        {
          kind: "p",
          text: "Signing in creates an account in Himiko Lab's Firebase project. It holds your email address, display name, Google profile photo URL, a user ID (UID), and the dates the account was created and last signed in. Firebase Authentication also collects your IP address, for security and abuse prevention, as stated in Firebase's data disclosure documentation.",
        },
        {
          kind: "p",
          text: "You can delete that account from inside the app at any time: see \"Deleting your account\".",
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
          text: "Backups also include the PDF files in your Notes, which are kept in the same app data folder.",
        },
        {
          kind: "p",
          text: "Besides your app data and those PDF files, a backup holds your profile (name, gender, date of birth, time zone, profile photo) and your app settings (theme, language, temperature unit, currency, daily reminder, the sort order and filters in Notes, number format, the hide-balance setting, the balance card pattern, Earthquake settings, pen colour history, and PDF reading positions). It also holds your News settings (whether the News menu is on or off, and the outlets you selected) and the categories you created.",
        },
        {
          kind: "p",
          text: "Some things are deliberately left out of the backup: the weather, news, and exchange rate caches; your last known position and the Wi-Fi country code; the connection status of Drive and Calendar; and PDF passwords.",
        },
        {
          kind: "p",
          text: "That folder is hidden from other apps, and **Himiko Lab has no access to it**. You can delete its contents yourself at any time through your Google Drive settings.",
        },
        {
          kind: "p",
          text: "**Account storage figures.** While Drive is connected, Morvyn reads two figures from your Google account through the Drive API: the storage in use (the total across all Google services) and the storage limit. They are shown to you in Settings, under Backup, as \"Google storage\". This uses the same `drive.appdata` scope; no new scope is requested. The figures are kept only on your device, together with the backup settings, and are not sent to Himiko Lab or to anyone else. They are removed when you disconnect Drive or switch accounts. Because they are stored with the app's settings, they can be included in the Android system backup described under \"How your data is protected\", like any other setting.",
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
          text: "When you turn it on, Morvyn **reads and writes events** on a single calendar that you choose yourself. Events pulled from Google Calendar are stored **on your device** (and in your own backups, if you turn backup on); events you create or change in Morvyn are sent to your Google calendar.",
        },
        {
          kind: "p",
          text: "Calendar data is **never sent to anyone other than Google**, and never passes through a Himiko Lab server, again because no such server exists.",
        },
        {
          kind: "p",
          text: "You can disconnect at any time from Settings inside Morvyn, and revoke the permission from your [Third-party access page in your Google Account](https://myaccount.google.com/permissions).",
        },
        {
          kind: "p",
          text: "**Disconnecting works in both directions.** Disconnecting Google Calendar in Settings removes the events that came from Google from Morvyn, **and deletes from Google Calendar the copies of schedule entries that Morvyn created**. Events you created yourself in Google Calendar are not touched. If some of the deletions fail, for example with no internet connection, the disconnection is held back and you can choose to disconnect anyway.",
        },
      ],
    },

    {
      id: "firebase",
      title: "Notifications, app configuration, and other Google services",
      blocks: [
        {
          kind: "defs",
          items: [
            {
              term: "Firebase Cloud Messaging",
              text: "Delivers announcement notifications from the developer. Devices subscribe to a topic; the system is not used to identify individual people. It sends your app version for that topic subscription.",
            },
            {
              term: "Firebase Remote Config",
              text: "Fetches app configuration values. To work out which values apply, it sends your country code, language code, time zone, platform and OS version, the Firebase App ID, the package name, and the SDK version.",
            },
            {
              term: "Firebase Installations",
              text: "Used by Cloud Messaging and Remote Config above, and by Analytics and Crashlytics (see \"Usage statistics and crash reports\"). It creates a per-installation identifier (FID). According to Firebase, a FID does not uniquely identify a person or a device.",
            },
            {
              term: "Firebase Analytics",
              text: "Menu usage statistics. Always on. See \"Usage statistics and crash reports\".",
            },
            {
              term: "Firebase Crashlytics",
              text: "Crash and error reports. Always on. See \"Usage statistics and crash reports\".",
            },
            {
              term: "Firebase Sessions",
              text: "Installed along with Crashlytics. See \"Usage statistics and crash reports\".",
            },
            {
              term: "Google Play in-app updates",
              text: "Morvyn asks the Play Store whether a newer version is available. The minimum version it compares against comes from Remote Config.",
            },
            {
              term: "ML Kit Document Scanner",
              text: "Powers Scan document, through Google Play services. According to ML Kit's data disclosure page, the SDK sends device information (manufacturer, model, OS version), app information (package name, version), a per-installation identifier, performance metrics, API configuration, and error codes to Google, for diagnostics and usage analytics, encrypted with HTTPS and not passed on to third parties. The scan itself is saved on your device, as a PDF in Notes.",
            },
            {
              term: "ML Kit Text Recognition",
              text: "Lets the PDF reader recognise the text on scanned PDF pages, so that it can be searched and selected. Morvyn uses the bundled version: the models (Latin, Chinese, Japanese, Korean, Devanagari) ship inside the app and run on your device, with no model download. Morvyn itself does not upload the PDF pages or the recognised text anywhere. The recognised text is kept in the app's cache folder on your device, and is encrypted when the PDF is password-protected. That cache is left out of every backup and is removed by \"Clear cache\" in Settings. Like the other ML Kit SDKs, the library does send technical data to Google. According to Google's [ML Kit data disclosure page](https://developers.google.com/ml-kit/android-data-disclosure), that is device information, application information, per-installation identifiers, performance metrics, API configuration, feature input and output size, feature version, event types, and error codes, used for diagnostics and usage analytics, encrypted in transit with HTTPS and not transferred to third parties.",
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
            "It is used only to provide user-facing features: the backup and calendar sync that you switch on yourself, and showing you your own Google account's storage usage.",
            "It is not transferred to anyone. There is no intermediary to pass through, because Morvyn has no server.",
            "It is not sent to Firebase Analytics or Firebase Crashlytics.",
            "It is not used for advertising, and not used to build any kind of profile.",
            "No human reads it. Himiko Lab has no technical route to it: backup files sit in your own hidden folder on Drive, and calendar data never leaves your device except to reach your own Google calendar or your own backups, if you turn them on.",
          ],
        },
      ],
    },

    {
      id: "perlindungan",
      title: "How your data is protected",
      blocks: [
        {
          kind: "p",
          text: "**Encryption in transit.** All communication between Morvyn and Google services (Google Sign-In, Google Drive, Google Calendar, Firebase) uses HTTPS with TLS encryption.",
        },
        {
          kind: "p",
          text: "**Storage on your device.** Your data lives in Morvyn's private app storage, which the Android sandbox keeps inaccessible to other apps. On devices with a screen lock, Android also encrypts this storage.",
        },
        {
          kind: "p",
          text: "**Google access tokens.** Morvyn does not store your Google password or long-lived access tokens. Short-lived tokens are requested from Google Play services only when a backup or calendar sync runs, and are used only for that request.",
        },
        {
          kind: "p",
          text: "**Google Drive backup.** Backups are written only to your Drive's hidden app data folder (`drive.appdata` scope). Morvyn cannot see or modify any other file in your Drive. Google encrypts the files at rest.",
        },
        {
          kind: "p",
          text: "**Android system backup.** If Android backup is on, Morvyn's local database and settings may be included in your device backup to your Google Account. Morvyn only allows this backup when the device has a screen lock, so that Android can encrypt it end-to-end with your lock screen credential. Your sign-in session is never included. The working data that Analytics and Crashlytics keep on the device is not included in the Android system backup, is not carried over in a device transfer, and is not included in Morvyn's Google Drive backup.",
        },
        {
          kind: "p",
          text: "**Least privilege.** Morvyn requests only two Google scopes, `drive.appdata` and `calendar.events`, and only after you turn on the matching feature. Calendar access is limited to the one calendar you choose. The account storage figures shown in Settings are read with the same `drive.appdata` scope.",
        },
        {
          kind: "p",
          text: "**Retention.** Events pulled from Google Calendar stay on your device until you delete them or disconnect Google Calendar in Morvyn's Settings, which removes them from Morvyn and deletes from Google Calendar the copies of schedule entries that Morvyn created. Turning sync off only pauses it. Backup files stay in your Drive until you delete them. Disconnecting Morvyn does not delete them; see \"How to delete your data\". Deleting your account from inside Morvyn does delete every Morvyn backup in your Drive: see \"Deleting your account\". Because Himiko Lab has no server of its own, there is no copy of your app content with us to retain or delete. Retention for usage statistics and crash reports is set out under \"Usage statistics and crash reports\".",
        },
      ],
    },

    {
      id: "lokasi",
      title: "Location, weather, and places",
      blocks: [
        {
          kind: "p",
          text: "Morvyn requests location permission (`ACCESS_FINE_LOCATION` / `ACCESS_COARSE_LOCATION`) for three features. There is **no background location permission** (`ACCESS_BACKGROUND_LOCATION`), and the permission itself stays **optional**.",
        },
        {
          kind: "defs",
          items: [
            {
              term: "Weather",
              text: "Latitude and longitude are sent directly to the weather data providers as part of the request: `api.open-meteo.com` ([Open-Meteo](https://open-meteo.com/)), with `api.openweathermap.org` ([OpenWeather](https://openweathermap.org/)) as the fallback.",
            },
            {
              term: "The place on a finance record",
              text: "In Finance you can fill the transaction place from where you are. What the record keeps is the place name, or the coordinates when no place name is available, and it goes into your backups along with the rest of the record.",
            },
            {
              term: "Earthquake",
              text: "Your last known position is used to work out how far away an earthquake was, and which source to read. The Earthquake menu can also ask for the location permission itself, through its \"Allow location\" button, and approximate location is enough. With the permission granted, the menu reads the phone's position when it is opened or refreshed, which happens only while the app is open and the menu is on screen. The next section explains it in full.",
            },
            {
              term: "Geocoder",
              text: "To turn coordinates into a place name (Weather, Home, Finance, and the \"Your location\" caption in Earthquake) or a country code (Earthquake), Morvyn uses the Android system geocoder. On phones with Google Play services, that service is provided by Google, so the coordinates reach Google.",
            },
          ],
        },
        {
          kind: "p",
          text: "**One last position, shared.** Morvyn keeps a single \"last position\" on your device, shared by Home, Weather, Earthquake, and the transaction place in Finance. Whichever of the four obtains a position saves it. When a new position is saved (the first one, or one that has moved more than about 3 km), Home and Weather refresh the weather for it. So the coordinates are sent to Open-Meteo (fallback: OpenWeather) and to the system geocoder, **even when the position was obtained in the Earthquake menu or while filling in a transaction place in Finance**.",
        },
        {
          kind: "p",
          text: "Those coordinates are **not stored on any server by Morvyn**, and are not tied to your identity. Declining the permission means the weather, the transaction place, and the distance to an earthquake will not pick up your location automatically.",
        },
      ],
    },

    {
      id: "earthquake",
      title: "Earthquake information",
      blocks: [
        {
          kind: "p",
          text: "Morvyn has an Earthquake menu, a small card on the Weather screen, and an \"Earthquake info\" notification. This is **earthquake information, not an early warning system**.",
        },
        {
          kind: "p",
          text: "The data comes from **BMKG** (`data.bmkg.go.id`) for users in Indonesia, and from the **U.S. Geological Survey** (`earthquake.usgs.gov`) for users outside Indonesia. Morvyn downloads their data files whole, including the shake map images, and **sends none of your position to them**. Both institutions see an ordinary request only, your IP address and ordinary request information, exactly as the news publishers do.",
        },
        {
          kind: "p",
          text: "The distance to an earthquake is worked out **on your device**, from the last position obtained by Home, Weather, the Earthquake menu itself, or filling in a transaction place in Finance. That stored position is not sent to BMKG or USGS, it is not part of your Android system backup, and it is not part of your Drive backup.",
        },
        {
          kind: "p",
          text: "With the location permission granted, the Earthquake menu reads the phone's position itself when it is opened or refreshed. That happens only while the app is open and the menu is on screen. The permission can be granted from the menu's \"Allow location\" button; it stays optional, and approximate location is enough. The system geocoder turns the position into the place name shown as \"Your location\".",
        },
        {
          kind: "p",
          text: "The last position is one value shared with Home, Weather, and Finance. When a new one is saved (the first one, or one that has moved more than about 3 km), Home and Weather refresh the weather for it, so the coordinates are sent to Open-Meteo (fallback: OpenWeather) and to the system geocoder even when the position was obtained here in the Earthquake menu. \"Location, weather, and places\" above has the details.",
        },
        {
          kind: "p",
          text: "Which of the two sources is read depends on your country, and Morvyn works that out in this order:",
        },
        {
          kind: "list",
          items: [
            "The system geocoder, on your last known position.",
            "The country of your mobile network.",
            "The country code broadcast by nearby Wi-Fi routers. This is read only when precise location permission is granted and location services are on, only while the app is open, and it is kept on the device for at most 3 days.",
            "Your phone's language setting.",
          ],
        },
        {
          kind: "p",
          text: "None of that uses your IP address, so a VPN does not change it, and all of it is processed on your device.",
        },
        {
          kind: "p",
          text: "A background check roughly every 15 minutes uses the position and country already stored; it does not read a new location. A copy of the latest earthquake data is kept on your device, and left out of your backups, so the menu still has something to show when you are offline.",
        },
        {
          kind: "p",
          text: "The notifications can be turned off and tuned in the Earthquake menu: radius, minimum magnitude, large earthquakes, and BMKG tsunami potential.",
        },
      ],
    },

    {
      id: "berita",
      title: "News",
      blocks: [
        {
          kind: "p",
          text: "The news feature fetches RSS feeds **directly from each publisher's own site**, with nothing in between. That means those publishers can see the request coming from your device (your IP address and ordinary request information), exactly as if you had opened their site in a browser.",
        },
        {
          kind: "p",
          text: "Notes behave the same way with links. When a note holds a link to a site, Morvyn fetches that site's icon (favicon) **directly from the site**, with no third-party service in between, so the site sees the request coming from your device (your IP address and ordinary request information) exactly as a news publisher does.",
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
          text: "The finance feature fetches exchange rates from `open.er-api.com`. None of your data is sent there, only a request for rates.",
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
              text: "Fetching weather, news, earthquake data, exchange rates, and the icons of links in your notes, running Google sync, and sending usage statistics and crash reports.",
            },
            {
              term: "`ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION`",
              text: "Showing the weather around you, filling in the place on a finance record, and working out the distance to an earthquake. Optional.",
            },
            {
              term: "`ACCESS_NETWORK_STATE`",
              text: "Telling \"the phone is offline\" apart from \"the server failed\", and reloading as soon as the network is back.",
            },
            {
              term: "`ACCESS_WIFI_STATE`",
              text: "Reading the country code broadcast by nearby Wi-Fi routers, for the Earthquake feature.",
            },
            {
              term: "`POST_NOTIFICATIONS`",
              text: "Showing reminders and alarms, announcements from the developer, and earthquake information.",
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
        {
          kind: "p",
          text: "The following three permissions are declared by the Google libraries Morvyn is built on:",
        },
        {
          kind: "defs",
          items: [
            {
              term: "`com.google.android.c2dm.permission.RECEIVE`",
              text: "Receiving Firebase Cloud Messaging notifications.",
            },
            {
              term: "`com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE`",
              text: "From the Analytics library. Reading the Play Store's information about where the app was installed from.",
            },
            {
              term: "`com.google.android.providers.gsf.permission.READ_GSERVICES`",
              text: "Brought along by the reCAPTCHA library that comes with Firebase Authentication.",
            },
          ],
        },
        {
          kind: "p",
          text: "Two more permissions are only brought along by libraries and are **not used by any Morvyn feature**: `USE_BIOMETRIC` and `USE_FINGERPRINT`. Both come from androidx.biometric, which the Google sign-in library brings along. Morvyn does not use fingerprint or biometric authentication.",
        },
        {
          kind: "p",
          text: "**The three advertising ID permissions are deliberately removed.** The `AD_ID`, `ACCESS_ADSERVICES_AD_ID`, and `ACCESS_ADSERVICES_ATTRIBUTION` permissions are brought along by the Analytics library, and Morvyn removes them. The merged manifest of the release app has been checked, and none of the three is present.",
        },
      ],
    },

    {
      id: "anak",
      title: "Children",
      blocks: [
        {
          kind: "p",
          text: "Morvyn is not directed at children under 13, and Himiko Lab does not knowingly target them. The usage statistics and crash reports described under \"Usage statistics and crash reports\" are sent from every installation of Morvyn, including when the device is used by a child. All Morvyn deliberately sends in them is menu names and the names of parts of the code, and Morvyn sets no user identifier.",
        },
        {
          kind: "p",
          text: "The app content itself never reaches Himiko Lab: a child's data lives on the device they used, and in that device's own backups if backup was turned on. It can be removed by clearing that app's data and deleting those backups. If the child ever signed in with Google, the sign-in record is deleted through \"Deleting your account\". The sections below explain how.",
        },
      ],
    },

    {
      id: "delete-account",
      title: "Deleting your account",
      blocks: [
        {
          kind: "p",
          text: "The main way is **from inside the app: Settings > DATA > Delete Account**. The row appears only when you are signed in with Google. You are asked to pick your Google account once more as verification, and the delete button becomes active after 10 seconds, so there is time to read what it says.",
        },
        {
          kind: "p",
          text: "What happens when you delete your account from the app:",
        },
        {
          kind: "list",
          items: [
            "Your Firebase Authentication account in Himiko Lab's project is deleted, with the email address, name, UID, and sign-in record it held.",
            "**Every Morvyn backup in your Google Drive is deleted**, and Morvyn's Google Drive permission is then revoked. Those backups cannot be recovered.",
            "Google Drive and Google Calendar are disconnected. Events in your Google Calendar stay where they are; the copies in Morvyn that came from Google are released.",
            "**Data on your phone is not deleted.** You can clear it yourself with \"Delete All Data\".",
            "If deleting the backups fails, with no internet connection for instance, the account is not deleted and you can try again.",
          ],
        },
        {
          kind: "p",
          text: "**If the app is no longer installed**, send an email to [hi@himikolab.my.id](mailto:hi@himikolab.my.id) from the Google address you signed in with. Himiko Lab deletes that Firebase Authentication account **within 14 days** of the request. The backup files in your Drive are yours to delete, through the connected-apps settings in Google Drive, because Himiko Lab has no access to your Drive.",
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
              term: "Your Morvyn account",
              text: "Settings > DATA > Delete Account, inside the app. See \"Deleting your account\" above.",
            },
            {
              term: "All local data",
              text: "Use \"Delete All Data\" in Morvyn's Settings, clear the app's data from Android Settings, or uninstall the app. Deleting your account does not remove the data on your phone.",
            },
            {
              term: "Google Drive backup",
              text: "Two ways: delete your account from inside the app, which deletes the backups along with it, or disconnect Drive in Morvyn's Settings and then delete the app data through the connected-apps settings in Google Drive.",
            },
            {
              term: "Android system backup",
              text: "Clearing Morvyn's data on the device does not remove a copy that is already in your device backup. Manage or delete that backup through the backup settings on your device or in your Google Account.",
            },
            {
              term: "Calendar data",
              text: "Turning sync off only pauses it; events already pulled stay in Morvyn. Disconnecting Google Calendar in Morvyn's Settings removes the events that came from Google from Morvyn, and deletes from Google Calendar the copies of schedule entries that Morvyn created. Events you created yourself in Google Calendar are not touched, and you can delete them there. If some of the deletions fail, for example with no internet connection, the disconnection is held back and you can choose to disconnect anyway. Copies in your backups are deleted through the two backup items above.",
            },
            {
              term: "Usage statistics and crash reports",
              text: "Uninstalling the app stops the collection. Clearing the app's data from Android Settings causes the installation identifier to be replaced. Usage statistics are kept for 2 months, and crash reports for 90 days. Because the statistics are not tied to an account, Himiko Lab cannot look up one person's data by name or email. See \"Usage statistics and crash reports\".",
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
