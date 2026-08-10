import {
  Alarm,
  CalendarDots,
  ChartLineUp,
  CloudSun,
  Newspaper,
  NotePencil,
  Target,
} from "@phosphor-icons/react/ssr";
// Titik masuk /ssr hanya mengekspor komponen ikonnya, bukan tipe `Icon` —
// tipenya diambil langsung dari lib.
import type { Icon } from "@phosphor-icons/react/dist/lib/types";
import type { FeatureKey } from "@/content";

/**
 * Satu ikon Phosphor per menu, ditambah pergeseran rona untuk gradien kartunya.
 *
 * `hue` adalah posisi antara biru merek (0) dan ungu merek (1). Ketujuh kartu
 * jadi terbaca sebagai satu keluarga warna alih-alih tujuh warna acak, tapi
 * tetap bisa dibedakan satu sama lain.
 */
export const featureIcons: Record<FeatureKey, { Icon: Icon; hue: number }> = {
  notes: { Icon: NotePencil, hue: 0 },
  finance: { Icon: ChartLineUp, hue: 0.18 },
  agenda: { Icon: Alarm, hue: 0.36 },
  news: { Icon: Newspaper, hue: 0.54 },
  habits: { Icon: Target, hue: 0.72 },
  weather: { Icon: CloudSun, hue: 0.86 },
  calendar: { Icon: CalendarDots, hue: 1 },
};

/** Warna satu menu, dihitung dari posisinya di antara biru dan ungu merek. */
export function featureColor(hue: number): string {
  return `color-mix(in oklab, var(--brand-violet) ${Math.round(hue * 100)}%, var(--brand-blue))`;
}

/** Urutan menu di seluruh situs. Catatan sengaja pertama — itu fitur pembeda. */
export const featureOrder: FeatureKey[] = [
  "notes",
  "finance",
  "agenda",
  "news",
  "habits",
  "weather",
  "calendar",
];
