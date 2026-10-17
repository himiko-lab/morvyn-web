import type { FeatureKey } from "../types";
import type { FeaturePageCopy } from "./types";

/**
 * Feature pages, English.
 *
 * Pairs with `id.ts` and makes the same claims, no more and no fewer. Every
 * technical claim (data sources, what is sent, what is stored) comes from the
 * Privacy Policy.
 */
export const featurePagesEn: Record<FeatureKey, FeaturePageCopy> = {
  notes: {
    slug: "notes",
    title: "Morvyn Notes: Checklists, PDFs, and Handwriting",
    description:
      "Notes in Morvyn: text, checklists, images, handwriting, maths formulas, PDF attachments, and document scanning, linked to your agenda, finances, and habits.",
    h1: "Notes in Morvyn: text, PDFs, and sketches in one place",
    lead: "Notes is the menu that sets Morvyn apart. One note can hold text, checklists, images, handwritten sketches, maths formulas, and PDF attachments, and then connect to your tasks, transactions, and habits.",
    sections: [
      {
        heading: "One editor for every kind of note",
        paragraphs: [
          "There is no need to pick a note type up front. Start with free text, turn part of it into bullets, then make the rest a checklist once it turns out to be a shopping list.",
          "Images can sit right between paragraphs. For things that are quicker to draw than to type, there is handwriting with a pen, and Morvyn remembers the pen colours you used last. Maths formulas can be written inside a note too.",
        ],
        points: [
          "Free text, bullet lists, and checklists in one editor",
          "Images and handwritten sketches inside a note",
          "Maths formulas",
          "Your own categories, plus sorting and filters",
          "Quick search across every note",
        ],
      },
      {
        heading: "PDF attachments, with a reader built in",
        paragraphs: [
          "PDFs can be attached to a note and read right inside Morvyn, without switching apps. Your reading position is remembered, so opening the same PDF tomorrow takes you back to the page you left.",
          "Paper documents can be scanned into PDFs with the camera, using Google's ML Kit document scanner. The result is saved as a PDF in your notes. The PDF reader then recognises the text on scanned pages, so it can be searched and selected. That recognition runs on your own phone, with models for Latin, Chinese, Japanese, Korean, and Devanagari scripts.",
        ],
      },
      {
        heading: "Notes that connect to the rest of your day",
        paragraphs: [
          "In most apps, a note is just a text box. In Morvyn, one note can link to a task in Agenda, a transaction in Finance, and a target in Habits.",
          "Take a meeting note. The tasks that came out of it become tasks in Agenda, the subscription that needs paying becomes an entry in Finance, and the agreement to report progress every morning becomes a target in Habits. Open the note and all of that context opens with it.",
        ],
      },
      {
        heading: "Widget and recovery",
        paragraphs: [
          "The Notes widget puts a note you choose on your phone's home screen, and its checklist items can be ticked from there without opening the app.",
          "Deleted notes do not vanish immediately. Morvyn keeps them for 7 days so they can be restored, then clears them automatically.",
        ],
      },
      {
        heading: "Your notes stay on your phone",
        paragraphs: [
          "Morvyn has no server of its own. Notes, images, sketches, and PDFs are stored on your device, and in your own Google Drive only if you turn on backup. Himiko Lab cannot read anyone's notes.",
        ],
      },
    ],
    faq: [
      {
        q: "Are my notes sent to a server?",
        a: "No. Notes are stored on your device. If you turn on backup, a copy is kept in the app data folder of your own Google Drive, which Himiko Lab cannot access.",
      },
      {
        q: "Can Morvyn scan documents into PDFs?",
        a: "Yes. The document scanner turns photos of a document into a PDF saved in your notes, and the text on its pages is recognised on your phone so it can be searched.",
      },
      {
        q: "Can deleted notes be restored?",
        a: "Yes, for 7 days after deletion. After that they are cleared automatically.",
      },
    ],
  },

  finance: {
    slug: "finance",
    title: "Morvyn Finance: Track Spending Across Wallets",
    description:
      "Finance in Morvyn: record income and expenses across multiple wallets, move balances, see charts, check currency rates, and hide your balance on the widget.",
    h1: "Finance in Morvyn: know where your money actually went",
    lead: "Record income and expenses across several wallets at once, such as cash, a bank account, and an e-wallet. Morvyn turns them into charts, and currency rates are a tap away without leaving the app.",
    sections: [
      {
        heading: "Several wallets, one picture",
        paragraphs: [
          "Money rarely lives in one place. Create a wallet for each place it lives, then record every transaction against the right one. When money moves, say a cash withdrawal from your bank account, transfer the balance between wallets so the numbers keep matching.",
          "The balance card's pattern can be changed, and the number format and main currency are set in Settings.",
        ],
        points: [
          "Multiple wallets, with transfers between them",
          "Income and expense categories you can adjust",
          "Charts to see your spending pattern",
          "A quick-add transaction screen",
        ],
      },
      {
        heading: "Where a transaction happened, if you want",
        paragraphs: [
          "Each transaction can carry a place, and that field can be filled from where you are at the time. What gets saved is the place name, or coordinates if no name is available. The location permission is optional.",
        ],
      },
      {
        heading: "Currency rates",
        paragraphs: [
          "Exchange rates come from open.er-api.com and can be checked straight from Finance. The only thing sent there is the request for rates, never your financial data.",
        ],
      },
      {
        heading: "Hide your balance, on the widget too",
        paragraphs: [
          "Opening a finance app in public should not mean showing your balance to the person next to you. The hide-balance toggle covers the numbers, and that setting also applies to the Finance widget on your home screen.",
          "Deleted transactions are kept for 7 days so they can be restored, then cleared automatically.",
        ],
      },
      {
        heading: "Connected to Notes",
        paragraphs: [
          "A transaction can be linked from a note. A meeting note that mentions a design tool subscription, for instance, can record the expense in Finance on the spot.",
        ],
      },
    ],
    faq: [
      {
        q: "Does Morvyn connect to my bank account or e-wallet?",
        a: "No. Morvyn records the transactions you enter yourself. There is no connection to any bank, e-wallet, or payment service.",
      },
      {
        q: "Is my financial data sent anywhere?",
        a: "No. Amounts, categories, wallet names, and transaction notes are stored on your device, and in your own Google Drive only if backup is turned on.",
      },
      {
        q: "Where do the exchange rates come from?",
        a: "From open.er-api.com. Morvyn only asks for the rates and sends nothing about your finances.",
      },
    ],
  },

  agenda: {
    slug: "agenda",
    title: "Morvyn Agenda: Alarms, Events, and To-Do Lists",
    description:
      "Agenda in Morvyn brings together repeating alarms, events with reminders, and tasks with due dates in one place. Two-way Google Calendar sync is optional.",
    h1: "Agenda in Morvyn: alarms, events, and tasks in one list",
    lead: "Alarms to get you up, event schedules so nothing slips, and a task list for whatever is still open. These usually live in three different apps; in Morvyn they are all managed from one place.",
    sections: [
      {
        heading: "Alarms that actually go off",
        paragraphs: [
          "Alarms can repeat on a pattern, so there is no need to set them again every day. Morvyn schedules them with Android at the exact time, shows a full-screen alarm, vibrates, and wakes the screen when they ring.",
          "After your phone is switched off and on again, reminders and alarms are set up again on their own.",
        ],
        points: [
          "Alarms with repeat patterns",
          "Full-screen alarm, vibration, and screen wake-up",
          "Restored automatically after the phone restarts",
        ],
      },
      {
        heading: "Events and tasks",
        paragraphs: [
          "Events are recorded with their reminders, and tasks carry due dates. Both appear in the Calendar menu on their dates automatically, so a whole month can be seen at once.",
          "The Agenda widget shows today's agenda on your home screen, and tasks can be ticked off from there.",
        ],
      },
      {
        heading: "Sync with Google Calendar",
        paragraphs: [
          "If your schedule already lives in Google Calendar, Morvyn can sync it both ways: events from Google Calendar are pulled into Morvyn, and events you create or change in Morvyn are sent there. Syncing is optional, off by default, and only touches the one calendar you choose.",
        ],
      },
      {
        heading: "Tasks born from notes",
        paragraphs: [
          "Tasks can be created from a note. A Monday meeting note that says \"send the proposal before Friday\" can become a task with a due date in Agenda, without retyping it.",
          "Deleted events, tasks, and alarms are kept for 7 days so they can be restored.",
        ],
      },
    ],
    faq: [
      {
        q: "Do alarms still ring when Morvyn is not open?",
        a: "Yes. Alarms are scheduled with Android at the exact time, and are set up again automatically after the phone restarts.",
      },
      {
        q: "Can Agenda sync with Google Calendar?",
        a: "Yes, both ways, for one calendar you choose. It is optional and off by default, and you need to sign in with Google first.",
      },
      {
        q: "What is the difference between Agenda and Calendar?",
        a: "Agenda is where you create and manage alarms, events, and tasks. Calendar shows those events and tasks on their dates in a monthly view.",
      },
    ],
  },

  news: {
    slug: "news",
    title: "Morvyn News: 29 News Outlets in One App",
    description:
      "News in Morvyn gathers 29 Indonesian and international outlets, from ANTARA, detikcom, and Tempo to BBC and Al Jazeera, grouped by category.",
    h1: "News in Morvyn: 29 Indonesian and international outlets",
    lead: "Stories from twenty-nine outlets pulled into one place, grouped by category, and refreshed throughout the day. From ANTARA and detikcom to BBC, Al Jazeera, and The Guardian.",
    sections: [
      {
        heading: "The outlets included",
        paragraphs: [
          "Indonesian outlets include ANTARA, detikcom, CNN Indonesia, CNBC Indonesia, Tempo, Republika, Sindonews, Okezone, and JPNN. International ones include BBC, BBC Indonesia, Al Jazeera, The Guardian, The New York Times, The Independent, ABC News, France 24, CNA, and the South China Morning Post. The full list is on the home page.",
          "Some outlets appear with several sections, such as ANTARA Ekonomi, Tempo Bola, and detik inet, so business, sports, and tech news each get their own category.",
        ],
        points: [
          "29 Indonesian and international outlets",
          "Business, sports, and tech categories",
          "Refreshed throughout the day",
        ],
      },
      {
        heading: "Pick your own outlets",
        paragraphs: [
          "Not everyone reads every outlet. Choose the ones you follow and the rest stay out of sight. If you do not need news at all, the News menu can be turned off.",
          "Stories you want to read later can be saved, and your reading history is kept on your own device.",
        ],
      },
      {
        heading: "Straight from the publisher",
        paragraphs: [
          "Morvyn does not write or edit the news. The News menu fetches RSS feeds directly from each publisher's site, with no server in between. Headlines and stories remain the property of their publishers.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I choose which outlets appear?",
        a: "Yes. Pick the outlets you want to follow in the News settings. The News menu can also be turned off entirely.",
      },
      {
        q: "Does Morvyn write its own news?",
        a: "No. Stories are fetched through RSS feeds directly from the publishers' sites and remain theirs.",
      },
      {
        q: "Is my reading history sent to Himiko Lab?",
        a: "No. Saved stories and your reading history are stored on your own device.",
      },
    ],
  },

  habits: {
    slug: "habits",
    title: "Morvyn Habits: Habit Tracker with Streaks",
    description:
      "Habits in Morvyn: set daily targets or only on chosen days, schedule your own reminders, and watch your streak grow. Includes a home screen widget.",
    h1: "Habits in Morvyn: small habits that actually stick",
    lead: "Eight glasses of water a day, exercise three times a week, reading every night. Set the target once and let Morvyn handle the reminders and the counting.",
    sections: [
      {
        heading: "Targets that fit your week",
        paragraphs: [
          "Not every habit has to happen every day. A target can be daily, or only on certain days, such as exercising every Monday, Wednesday, and Friday.",
          "Reminders are set per habit, so each one arrives at a sensible time for that habit.",
        ],
        points: [
          "Daily targets, or only on chosen days",
          "Reminders on your own schedule",
          "Streaks you can see at a glance",
          "A Habits widget on your phone's home screen",
        ],
      },
      {
        heading: "Streaks you can see",
        paragraphs: [
          "Every time you tick a habit, its streak grows. The number is simple, and that is exactly what makes people reluctant to break it.",
          "The Habits widget puts your habits on your phone's home screen, so you do not have to remember to open the app first.",
        ],
      },
      {
        heading: "Connected to Notes",
        paragraphs: [
          "A target can be created from a note. An agreement in a meeting note to report progress every morning can become a target in Habits straight away.",
          "As with the other menus, your habit data is stored on your own device and is not sent to Himiko Lab.",
        ],
      },
    ],
    faq: [
      {
        q: "Do habits have to be done every day?",
        a: "No. A target can apply every day or only on the days you choose.",
      },
      {
        q: "Is there a Habits widget?",
        a: "Yes. The Habits widget shows your habits on your phone's home screen.",
      },
      {
        q: "Is my habit data sent to a server?",
        a: "No. Habit data is stored on your device, and in your own Google Drive only if backup is turned on.",
      },
    ],
  },

  weather: {
    slug: "weather",
    title: "Morvyn Weather: Hourly Forecasts for Where You Are",
    description:
      "Weather in Morvyn shows hourly and multi-day forecasts for your precise location, not a city-wide average. Data from Open-Meteo, with OpenWeather as backup.",
    h1: "Weather in Morvyn: where you are, not the next city over",
    lead: "Up-to-date forecasts based on a precise location, hour by hour and for the days ahead, so your plans don't get cancelled by rain nobody saw coming.",
    sections: [
      {
        heading: "A precise location, not a city average",
        paragraphs: [
          "Weather at one end of a city can differ from the other. Morvyn uses your phone's coordinates, so the forecast is for where you actually are.",
          "The data comes from Open-Meteo, with OpenWeather as a backup. When you move more than about 3 km, the weather refreshes for the new position.",
        ],
        points: [
          "Hourly and multi-day forecasts",
          "Precise location, not a city-wide estimate",
          "Adjustable temperature unit",
          "A card with the latest earthquake on the Weather screen",
        ],
      },
      {
        heading: "Right alongside your day",
        paragraphs: [
          "Weather also appears on Morvyn's Home screen, next to today's agenda. If there is an outdoor event today and rain this afternoon, you see both on one screen.",
          "The Weather screen also carries a small card with the latest earthquake information from the Earthquake menu.",
        ],
      },
      {
        heading: "Only the location access it needs",
        paragraphs: [
          "The location permission is optional, and Morvyn does not ask for background location. Your coordinates are sent to the weather provider only as part of the weather request, are not stored on any server by Morvyn, and are not tied to your identity.",
        ],
      },
    ],
    faq: [
      {
        q: "Where does Morvyn's weather data come from?",
        a: "From Open-Meteo, with OpenWeather as a backup.",
      },
      {
        q: "Does Morvyn track my location in the background?",
        a: "No. Morvyn does not request background location. The location permission itself is optional.",
      },
      {
        q: "Can I change the temperature unit?",
        a: "Yes, in the app's Settings.",
      },
    ],
  },

  calendar: {
    slug: "calendar",
    title: "Morvyn Calendar: Tasks and Events in a Month View",
    description:
      "Calendar in Morvyn shows a full month with your tasks and events on their dates. Wired into Agenda, with optional two-way Google Calendar sync.",
    h1: "Calendar in Morvyn: a whole month at a glance",
    lead: "A complete calendar that already carries your task list and event schedule on the right dates, so there is no need to open another menu to find out whether the 17th is busy.",
    sections: [
      {
        heading: "Tasks and events sit on their dates",
        paragraphs: [
          "Every event and task you create in Agenda shows up in Calendar on its date automatically. Nothing needs to be entered twice.",
        ],
        points: [
          "A full, uncluttered month view",
          "Tasks and events sit on their dates",
          "Wired directly into Agenda",
          "Optional two-way sync with Google Calendar",
        ],
      },
      {
        heading: "Sync with Google Calendar",
        paragraphs: [
          "When you turn it on, Morvyn reads and writes events on one Google calendar that you choose. Events from Google Calendar appear in Morvyn's Calendar, and events you create in Morvyn are sent to that Google calendar.",
          "Syncing is optional and off by default. Disconnecting it in Settings removes the Google events from Morvyn and deletes from Google Calendar the copies of schedules that Morvyn created. Events you made yourself in Google Calendar are left alone.",
        ],
      },
      {
        heading: "No one's server in between",
        paragraphs: [
          "Calendar data only moves between your phone and Google. Morvyn has no server, so Himiko Lab holds no copy of your schedule.",
        ],
      },
    ],
    faq: [
      {
        q: "Does Morvyn read all of my Google calendars?",
        a: "No. Syncing only touches the one calendar you choose.",
      },
      {
        q: "What happens if I disconnect Google Calendar sync?",
        a: "Google events are removed from Morvyn, and the copies of schedules Morvyn created are deleted from Google Calendar. Events you made yourself in Google Calendar stay.",
      },
      {
        q: "Can Calendar be used without a Google account?",
        a: "Yes. Google Calendar sync is optional; without it, Calendar still shows the events and tasks from Agenda.",
      },
    ],
  },

  earthquake: {
    slug: "earthquake",
    title: "Morvyn Earthquake: Latest BMKG and USGS Reports",
    description:
      "Earthquake in Morvyn shows the latest reports from BMKG in Indonesia and the USGS elsewhere, with the distance from where you are. Not an early warning.",
    h1: "Earthquake information in Morvyn: BMKG and USGS, not an early warning",
    lead: "Morvyn shows the latest earthquake information, from BMKG if you are in Indonesia and from the U.S. Geological Survey if you are outside Indonesia. If you grant the location permission, the distance to each earthquake is worked out from where you are.",
    sections: [
      {
        heading: "Earthquake information, not an early warning",
        paragraphs: [
          "This menu shows earthquakes that have already happened and been reported by the official agency. Morvyn does not predict earthquakes and does not warn you before shaking arrives. In an emergency, follow BMKG and your local authorities.",
        ],
      },
      {
        heading: "BMKG in Indonesia, USGS elsewhere",
        paragraphs: [
          "In Indonesia the data comes from BMKG, and outside Indonesia from the U.S. Geological Survey. Morvyn downloads their data files whole, shake map images included, and never sends your position to either of them.",
          "Your country is worked out on the phone, in order from your last known position, your mobile network's country, the country code broadcast by nearby Wi-Fi routers, and then your phone's language. None of these use your IP address, so a VPN does not change the data source.",
        ],
      },
      {
        heading: "Distance from where you are",
        paragraphs: [
          "If you grant the location permission, the distance to each earthquake is calculated on your own phone. An approximate location is enough, and the permission stays optional.",
          "A copy of the latest earthquake data is kept on the device, so the menu still has content while you are offline.",
        ],
        points: [
          "BMKG as the source in Indonesia, the U.S. Geological Survey elsewhere",
          "Distance calculated on the phone, if you grant location",
          "Still has content while offline",
        ],
      },
      {
        heading: "Notifications you can tune",
        paragraphs: [
          "Earthquake notifications can be turned off or tuned: radius from your location, minimum magnitude, large earthquakes, and BMKG tsunami potential. A background check runs about every 15 minutes using the position already saved, without reading a new location.",
        ],
      },
    ],
    faq: [
      {
        q: "Does Morvyn give earthquake early warnings?",
        a: "No. Morvyn shows information about earthquakes that have already happened, from BMKG or the USGS. In an emergency, follow BMKG and your local authorities.",
      },
      {
        q: "Is my position sent to BMKG or the USGS?",
        a: "No. Morvyn downloads their earthquake data whole, then works out the distance on your phone.",
      },
      {
        q: "Can earthquake notifications be adjusted?",
        a: "Yes: radius, minimum magnitude, large earthquakes, and BMKG tsunami potential. Notifications can also be turned off.",
      },
    ],
  },
};
