import type { Dictionary } from "./types";

/**
 * English copy. Mirrors `id.ts` key for key.
 */
export const en: Dictionary = {
  meta: {
    title: "Morvyn: Notes, Finance, and Agenda in One Android App",
    ogTitle: "Morvyn, one calm space for your whole day",
    description:
      "Morvyn brings notes, finance, agenda, habits, weather, calendar, earthquake info, and news from 29 outlets into a single Android app. Free on Google Play.",
    localeName: "English",
    localeShort: "EN",
    ogImageAlt: "Morvyn, one calm space for your whole day",
  },

  nav: {
    features: "Features",
    connected: "Connected",
    how: "How it works",
    faq: "FAQ",
    download: "Download",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchTo: "Switch to Indonesian",
    toggleTheme: "Toggle light and dark mode",
  },

  hero: {
    eyebrow: "Eight daily needs, one app",
    headline: ["One calm space for", "your whole day"],
    body: "Notes, finances, agenda, habits, weather, calendar, news, and earthquake information. All inside Morvyn, an Android app made by Himiko Lab, and all able to talk to each other.",
    primaryCta: "Get it on Google Play",
    secondaryCta: "See the features",
    iosNote: "Android only for now",
    mockupAlt: "The Morvyn app home screen",
  },

  featureMockupAlt: "The {name} screen in the Morvyn app",

  stats: [
    { value: "8", label: "core features", detail: "in a single app" },
    { value: "29", label: "news outlets", detail: "local & international" },
    { value: "2", label: "languages", detail: "Indonesian & English" },
  ],

  overview: {
    eyebrow: "What's inside",
    title: "Eight menus that cover an ordinary day",
    body: "Not eight separate apps bolted together. Eight menus that know about each other.",
  },

  features: {
    notes: {
      name: "Notes",
      tagline: "Notes that don't stay just notes",
      short: "Text, checklists, images, PDFs, and links into the rest of Morvyn.",
      body: "Write plain notes, break them into bullets or checklists, or link them straight to your agenda, transactions, and habits. A note can also hold images, handwritten sketches, maths formulas, and PDF attachments with a reader to open them. Documents can be scanned into PDFs. One meeting note can carry the tasks that came out of it.",
      points: [
        "Free text, bullet lists, and checklists in one editor",
        "Images, handwritten sketches, maths formulas, and PDF attachments with their reader",
        "Link a note to Agenda, Finance, or Habits",
        "Note categories and quick search across everything you've written",
        "Notes widget: tick checklist items straight from the home screen",
      ],
    },
    finance: {
      name: "Finance",
      tagline: "Know where your money actually went",
      short: "Income, expenses, multiple wallets, charts, and live currency rates.",
      body: "Record income and expenses across multiple wallets, such as cash, a bank account, and an e-wallet, and move balances between them. Watch the pattern emerge in charts, and check currency rates without leaving the app.",
      points: [
        "Multiple wallets, with transfers between them",
        "Income and expense charts",
        "Debts & Loans, with installments and due date reminders",
        "Currency exchange rates, kept current",
        "A hide-balance toggle that also applies to the Finance widget",
      ],
    },
    agenda: {
      name: "Agenda",
      tagline: "Alarms, events, and tasks in one list",
      short: "Wake up on time, show up on time, finish on time.",
      body: "Alarms to get you up, event schedules so nothing slips, and a task list for whatever is still open, all managed from one place.",
      points: [
        "Alarms with repeat patterns",
        "Event schedules and their reminders",
        "Tasks with due dates",
        "Alarm tones from your own song or audio file",
        "Agenda widget: tick off tasks straight from the home screen",
      ],
    },
    news: {
      name: "News",
      tagline: "World news from 29 outlets",
      short: "From ANTARA and detikcom to BBC, Al Jazeera, and The Guardian.",
      body: "Twenty-nine local and international outlets pulled into one feed, sorted into categories, and refreshed through the day.",
      points: [
        "29 local and international outlets",
        "Business, sports, and tech categories",
        "Refreshed throughout the day",
      ],
    },
    habits: {
      name: "Habits",
      tagline: "Small habits that actually stick",
      short: "Set the target once, then Morvyn reminds and counts.",
      body: "Eight glasses of water a day, exercise three times a week, reading every night. Set the target once and let Morvyn keep score.",
      points: [
        "Daily targets, or only on chosen days",
        "Streaks you can see at a glance",
        "Reminders on your own schedule",
        "A Habits widget on your phone's home screen",
      ],
    },
    weather: {
      name: "Weather",
      tagline: "Weather where you are, not the next city over",
      short: "Current forecasts from an accurate location fix.",
      body: "Up-to-date forecasts based on a precise location, so your plans don't get cancelled by rain nobody saw coming.",
      points: [
        "Accurate location, not a city-wide average",
        "Hourly and multi-day forecasts",
        "A scrollable 24-hour forecast, and a Weather widget",
        "Sits right alongside your agenda",
      ],
    },
    calendar: {
      name: "Calendar",
      tagline: "A whole month at a glance",
      short: "A full calendar with tasks and events on their dates.",
      body: "A complete calendar that already carries your task list and event schedule on the right dates, so there is no need to open another menu to find out whether the 17th is busy.",
      points: [
        "A full, uncluttered month view",
        "Tasks and events sit on their dates",
        "Wired directly into Agenda",
      ],
    },
    earthquake: {
      name: "Earthquake",
      tagline: "The latest earthquake information, not an early warning",
      short: "The latest earthquake information from BMKG or USGS. Not an early warning.",
      body: "Morvyn shows the latest earthquake information, from BMKG if you are in Indonesia and from the U.S. Geological Survey if you are outside Indonesia. If you grant the location permission, the distance to each earthquake is worked out from where you are. This is earthquake information, not an early warning.",
      points: [
        "BMKG as the source in Indonesia, the U.S. Geological Survey elsewhere",
        "Distance from your location, if you grant the location permission",
        "Notifications you can tune: radius, minimum magnitude, large earthquakes, and BMKG tsunami potential",
      ],
    },
  },

  connected: {
    eyebrow: "The difference",
    title: "Your notes know what your day looks like",
    body: "In most apps a note is just a text box. In Morvyn, one note can link a task in Agenda, an expense in Finance, and a target in Habits. Open the note and the whole context opens with it.",
    noteTitle: "Monday team meeting",
    noteLines: [
      "Send the proposal before Friday",
      "Pay the design tool subscription",
      "Report progress every morning",
    ],
    linkLabels: {
      agenda: "Becomes a task in Agenda",
      finance: "Becomes an entry in Finance",
      habits: "Becomes a target in Habits",
    },
  },

  how: {
    eyebrow: "How it works",
    title: "Three steps, then you're set",
    steps: [
      {
        title: "Install and pick your language",
        body: "Morvyn follows your phone's language, Indonesian or English, and you can change it whenever you like.",
      },
      {
        title: "Turn on the menus you need",
        body: "Not everyone needs all eight. Use what's relevant; the rest stays out of your way.",
      },
      {
        title: "Connect notes to the rest of your day",
        body: "Once notes reach into your agenda and finances, you stop typing the same thing twice.",
      },
    ],
    video: {
      heading: "See Morvyn in 90 seconds",
      body: "A short introduction that walks through every menu in Morvyn and shows how it looks on a phone, a foldable, and a tablet.",
      playLabel: "Play the Introducing Morvyn video",
      note: "The video plays from YouTube once you press play.",
    },
  },

  news: {
    eyebrow: "News sources",
    title: "Twenty-nine outlets, one feed",
    body: "The full list of outlets that feed the News menu.",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions that come up",
    items: [
      {
        q: "Is Morvyn available for iPhone?",
        a: "Not yet. For now, Morvyn is Android only.",
      },
      {
        q: "Which languages are supported?",
        a: "Indonesian and English. Morvyn follows your phone's language, including the home screen greetings and daily notifications.",
      },
      {
        q: "Where does the news come from?",
        a: "From 29 local and international outlets, among them ANTARA, detikcom, CNN Indonesia, Tempo, Republika, BBC, Al Jazeera, The Guardian, and The New York Times.",
      },
      {
        q: "Can Morvyn open and scan PDFs?",
        a: "Yes. Morvyn opens PDFs from your device, from another app through \"Open with\", or from a note, and scans paper documents into PDFs with the camera. Text in scanned PDFs is recognised on your phone with no internet, so it can be selected, copied, and searched.",
        link: { label: "More about PDF and scanning", href: "/en/features/pdf/" },
      },
      {
        q: "Can notes be locked?",
        a: "Yes. Notes are locked with your phone's screen lock: PIN, pattern, or fingerprint. Their titles stay visible in the list.",
        link: { label: "More about Notes", href: "/en/features/notes/" },
      },
      {
        q: "Does Morvyn have widgets?",
        a: "Yes, five home screen widgets: Finance, Agenda, Notes, Habits, and Weather. From there you can see your balance, add a transaction, and tick off tasks without opening the app.",
        link: { label: "More about widgets", href: "/en/features/widgets/" },
      },
      {
        q: "Can Morvyn be used on tablets and foldables?",
        a: "Yes. On landscape tablets, Notes, Agenda, Calendar, Habits, Earthquakes, and Debts & Loans use a two-pane layout, and on wide screens navigation moves to the side. Forms and notes no longer reset when you rotate the screen or fold your phone, and alarms have a tabletop mode for half-folded phones.",
      },
      {
        q: "Do I have to use every feature?",
        a: "No. The eight menus stand on their own. If you only want Notes and Agenda, leave the rest alone.",
      },
      {
        q: "How does Morvyn work out my weather?",
        a: "From your device's location, so the forecast is for where you actually are rather than a city-wide average.",
      },
      {
        q: "What data does Morvyn send?",
        a: "The contents of your notes, finances, agenda, and habits stay on your device. Morvyn sends statistics on which menus are opened, plus crash reports, to the developer through Google. Both are always on, and there are no ads. The details are in the Privacy Policy.",
        link: { label: "Read the Privacy Policy", href: "/en/privacy/" },
      },
    ],
  },

  cta: {
    title: "Start tidying your day today",
    body: "Morvyn is free on Google Play.",
    button: "Get it on Google Play",
    iosNote: "Android only for now",
  },

  appFeatureList: [
    "Notes with formatted text, images, web links, handwriting, and maths formulas",
    "Note lock using the phone's screen lock",
    "Export notes to PDF or Markdown",
    "Scan paper documents into PDFs with the camera",
    "PDF reader with on-device OCR, page bookmarks, page organising, and compression",
    "Markdown, text, and 3D model viewer (GLB, glTF, STL, OBJ)",
    "One-off or repeating events, tasks with subtasks, priorities, and due dates",
    "Alarms and reminders with a full-screen alarm and snooze",
    "Monthly calendar, with optional two-way Google Calendar sync",
    "Finance with per-wallet balances, transfers, monthly summary, weekly chart, and exchange rates",
    "Debts and loans with installments, overdue status, and due date reminders",
    "Alarm tones from your own song or audio, and alarms for schedules",
    "Two-pane layout on landscape tablets, with foldable support",
    "Home screen widgets: Finance, Agenda, Notes, Habits, and Weather",
    "Habits with progress rings and streak counts",
    "Weather with a scrollable 24-hour forecast",
    "Earthquake information from BMKG and USGS",
    "News from 29 outlets",
    "Optional backup to the user's own Google Drive",
    "Light and dark mode",
    "Indonesian and English",
    "Free, with no ads",
  ],

  comingSoon: {
    badge: "Coming soon to Google Play",
    navLabel: "Soon",
    title: "Morvyn is almost here",
    body: "The app is being finished before it goes up on Google Play. Follow along and you'll hear from us the moment it can be downloaded.",
    followHeading: "Follow along",
    faq: {
      q: "When can I download Morvyn?",
      a: "There is no firm date yet. The app is being finished before it goes up on Google Play, and the announcement will come through the Himiko Lab social accounts.",
    },
  },

  footer: {
    tagline: "One calm space for your whole day.",
    productHeading: "Product",
    aboutHeading: "About",
    followHeading: "Follow us",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    contact: "Contact",
    rights: "All rights reserved.",
  },
};
