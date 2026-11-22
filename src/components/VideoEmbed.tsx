"use client";

import { useState } from "react";
import { Play } from "@phosphor-icons/react/ssr";
import { introVideo, introVideoEmbedUrl, introVideoWatchUrl } from "@/content/video";

/**
 * Pemutar video YouTube yang baru dimuat setelah diklik.
 *
 * Sebelum diklik, yang tampil hanya sampul dan tombol putar, dan halaman
 * tidak menghubungi YouTube sama sekali. Iframe YouTube itu sendiri berat
 * (ratusan KB skrip) dan, begitu dimuat, mengirim data pengunjung ke Google
 * walaupun videonya tidak pernah diputar. Keduanya tidak layak dibebankan ke
 * semua orang yang membuka beranda.
 *
 * Tombolnya tautan biasa ke YouTube. Bila JavaScript tidak jalan, mengekliknya
 * tetap membuka video di YouTube, bukan tombol mati.
 */
export function VideoEmbed({ title, playLabel }: { title: string; playLabel: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[calc(var(--radius)*1.5)] bg-[color:var(--brand-ink)] shadow-[var(--shadow-brand-lg)]">
      {playing ? (
        <iframe
          src={`${introVideoEmbedUrl}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <a
          href={introVideoWatchUrl}
          onClick={(event) => {
            event.preventDefault();
            setPlaying(true);
          }}
          aria-label={playLabel}
          className="group absolute inset-0 grid place-items-center focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
        >
          {introVideo.poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={introVideo.poster}
              alt=""
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <span aria-hidden className="gradient-brand absolute inset-0" />
          )}
          <span aria-hidden className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/5" />
          <span className="relative grid size-18 place-items-center rounded-full bg-white/95 text-[color:var(--brand-blue)] shadow-lg transition-transform duration-300 group-hover:scale-110 sm:size-20">
            <Play size={30} weight="fill" className="translate-x-0.5" />
          </span>
          {!introVideo.poster && (
            <span className="absolute inset-x-6 bottom-5 text-center text-base font-bold text-white sm:text-lg">
              {title}
            </span>
          )}
        </a>
      )}
    </div>
  );
}
