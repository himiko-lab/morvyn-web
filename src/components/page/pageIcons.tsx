import {
  ChatCircleDots,
  ClockCounterClockwise,
  FilePdf,
  SquaresFour,
} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react/dist/lib/types";
import type { PageKey } from "@/content/pages";

/**
 * Ikon dan rona tiap halaman tambahan, sebentuk dengan `featureIcons`.
 * `hue` dipakai `featureColor()`: posisi antara biru merek (0) dan ungu (1).
 */
export const pageIcons: Record<PageKey, { Icon: Icon; hue: number }> = {
  pdf: { Icon: FilePdf, hue: 0.1 },
  widgets: { Icon: SquaresFour, hue: 0.6 },
  releaseNotes: { Icon: ClockCounterClockwise, hue: 0.3 },
  contact: { Icon: ChatCircleDots, hue: 0.8 },
};
