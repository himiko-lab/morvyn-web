/**
 * Video perkenalan Morvyn di YouTube, kanal Himiko Lab.
 *
 * Judul, deskripsi, tanggal unggah, dan durasinya disalin dari halaman
 * videonya di YouTube (21 November 2026), karena dipakai data terstruktur
 * `VideoObject` dan harus sama dengan yang ada di sana.
 */
export const introVideo = {
  youtubeId: "9VvlyiNCPjk",
  title: "Introducing Morvyn: One App for Your Whole Day",
  description:
    "Meet Morvyn, the free Android app from Himiko Lab that keeps your whole day in one place: notes, PDFs, agenda, calendar, money, habits, weather, news, and more. In 90 seconds, this video walks through every menu in Morvyn and shows how it looks on a phone, a foldable, and a tablet.",
  uploadDate: "2026-11-21T02:22:30-08:00",
  /** ISO 8601, 90 detik. */
  duration: "PT1M30S",
  /**
   * Sampul yang disajikan dari situs ini sendiri, supaya halaman tidak
   * menghubungi YouTube sebelum video diputar. Sumbernya (1920x1080) ada di
   * `design/video/introducing-morvyn.png`. Isi `null` untuk kembali ke latar
   * gradien merek.
   */
  poster: "/video/introducing-morvyn.webp" as string | null,
  /**
   * Versi JPEG sampul yang sama, untuk `thumbnailUrl` di data terstruktur:
   * JPEG adalah format sampul yang paling pasti dibaca mesin pencari.
   */
  thumbnail: "/video/introducing-morvyn.jpg",
} as const;

export const introVideoWatchUrl = `https://www.youtube.com/watch?v=${introVideo.youtubeId}`;

/**
 * Alamat pemutar sematan. `youtube-nocookie.com` adalah mode privasi
 * YouTube: tidak menyimpan cookie sebelum videonya diputar.
 */
export const introVideoEmbedUrl = `https://www.youtube-nocookie.com/embed/${introVideo.youtubeId}`;
