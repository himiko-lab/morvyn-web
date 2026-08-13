import type { Dictionary } from "./types";

/**
 * English copy. Mirrors `id.ts` key for key.
 */
export const en: Dictionary = {
  meta: {
    title: "Morvyn: Notes, Finance, and Agenda in One Android App",
    ogTitle: "Morvyn, one calm space for your whole day",
    description:
      "Morvyn brings notes, finance, agenda, habits, weather, calendar, and news from 27 outlets into a single Android app. Free on Google Play.",
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
    eyebrow: "Seven daily needs, one app",
    headline: ["One calm space for", "your whole day"],
    body: "Notes, finances, agenda, habits, weather, calendar, and news. All inside Morvyn, and all able to talk to each other.",
    primaryCta: "Get it on Google Play",
    secondaryCta: "See the features",
    iosNote: "iOS version in the works",
    mockupAlt: "The Morvyn app home screen",
  },

  featureMockupAlt: "The {name} screen in the Morvyn app",

  stats: [
    { value: "7", label: "core features", detail: "in a single app" },
    { value: "27", label: "news outlets", detail: "local & international" },
    { value: "2", label: "languages", detail: "Indonesian & English" },
  ],

  overview: {
    eyebrow: "What's inside",
    title: "Seven menus that cover an ordinary day",
    body: "Not seven separate apps bolted together. Seven menus that know about each other.",
  },

  features: {
    notes: {
      name: "Notes",
      tagline: "Notes that don't stay just notes",
      short: "Free text, bullet lists, and links into the rest of Morvyn.",
      body: "Write plain notes, break them into bullets, or link them straight to your agenda, transactions, and habits. One meeting note can carry the tasks that came out of it.",
      points: [
        "Free text and bullet lists in one editor",
        "Link a note to Agenda, Finance, or Habits",
        "Search across everything you've written",
      ],
    },
    finance: {
      name: "Finance",
      tagline: "Know where your money actually went",
      short: "Income, expenses, charts, and live currency rates.",
      body: "Record income and expenses, watch the pattern emerge in charts, then check currency rates without leaving the app.",
      points: [
        "Income and expense charts",
        "Spending categories you can adjust",
        "Currency exchange rates, kept current",
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
      ],
    },
    news: {
      name: "News",
      tagline: "World news from 27 outlets",
      short: "From ANTARA and detikcom to BBC, Al Jazeera, and The Guardian.",
      body: "Twenty-seven local and international outlets pulled into one feed, sorted into categories, and refreshed through the day.",
      points: [
        "27 local and international outlets",
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
        body: "Not everyone needs all seven. Use what's relevant; the rest stays out of your way.",
      },
      {
        title: "Connect notes to the rest of your day",
        body: "Once notes reach into your agenda and finances, you stop typing the same thing twice.",
      },
    ],
  },

  news: {
    eyebrow: "News sources",
    title: "Twenty-seven outlets, one feed",
    body: "The full list of outlets that feed the News menu.",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions that come up",
    items: [
      {
        q: "Is Morvyn available for iPhone?",
        a: "Not yet. Coming soon.",
      },
      {
        q: "Which languages are supported?",
        a: "Indonesian and English. Morvyn follows your phone's language, including the home screen greetings and daily notifications.",
      },
      {
        q: "Where does the news come from?",
        a: "From 27 local and international outlets, among them ANTARA, detikcom, CNN Indonesia, Tempo, Republika, BBC, Al Jazeera, The Guardian, and The New York Times.",
      },
      {
        q: "Do I have to use every feature?",
        a: "No. The seven menus stand on their own. If you only want Notes and Agenda, leave the rest alone.",
      },
      {
        q: "How does Morvyn work out my weather?",
        a: "From your device's location, so the forecast is for where you actually are rather than a city-wide average.",
      },
    ],
  },

  cta: {
    title: "Start tidying your day today",
    body: "Morvyn is free on Google Play.",
    button: "Get it on Google Play",
    iosNote: "iOS version in the works",
  },

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
