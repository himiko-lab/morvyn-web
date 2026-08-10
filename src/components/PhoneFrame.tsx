import Image from "next/image";
import type { ReactNode } from "react";

interface PhoneFrameProps {
  /**
   * Screenshot aplikasi. Rasio yang diharapkan 9:19.5 (mis. 1080×2340).
   * Kalau dikosongkan, yang tampil adalah kotak placeholder bergaris putus-putus
   * — pola yang sama seperti di proyek MOGLE.
   */
  src?: string;
  alt: string;
  /** Keterangan pada placeholder, menjelaskan layar mana yang seharusnya di sini. */
  placeholderLabel?: string;
  className?: string;
  /** Hero memakai `priority` supaya gambarnya tidak dimuat belakangan. */
  priority?: boolean;
  children?: ReactNode;
}

/**
 * Bingkai ponsel untuk memajang tampilan aplikasi.
 *
 * Bingkainya digambar dengan CSS, bukan gambar — jadi tetap tajam di layar
 * kepadatan berapa pun dan tidak menambah berat halaman.
 */
export function PhoneFrame({
  src,
  alt,
  placeholderLabel,
  className = "",
  priority = false,
  children,
}: PhoneFrameProps) {
  return (
    <div
      className={`relative aspect-[9/19.5] w-full max-w-[19rem] rounded-[2.75rem] border-[6px] border-[color:var(--device-frame)] bg-[color:var(--device-frame)] p-[3px] shadow-[var(--shadow-brand-lg)] ${className}`}
    >
      {/* Poni kamera. Murni hiasan, jadi disembunyikan dari pembaca layar. */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[7px] z-20 h-[18px] w-[86px] -translate-x-1/2 rounded-full bg-[color:var(--device-frame)]"
      />

      <div className="relative h-full w-full overflow-hidden rounded-[2.35rem] bg-white">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 70vw, 304px"
            className="object-cover"
          />
        ) : (
          <Placeholder label={placeholderLabel ?? alt} />
        )}
        {children}
      </div>
    </div>
  );
}

/**
 * Placeholder sementara screenshot asli belum dipasang.
 *
 * Ditandai `data-placeholder` supaya gampang dicari: `grep -r data-placeholder src`
 * memunculkan semua tempat yang masih perlu diganti.
 */
function Placeholder({ label }: { label: string }) {
  return (
    <figure
      data-placeholder
      className="flex h-full w-full flex-col items-center justify-center gap-4 border-2 border-dashed border-[color:var(--brand-blue)]/30 bg-linear-to-b from-[color:var(--brand-blue)]/8 to-[color:var(--brand-violet)]/12 p-6 text-center"
    >
      <svg viewBox="2100 3671 12466 9325" className="h-12 w-auto opacity-25">
        <g transform="translate(-205.929658,-19902.166846)">
          <path
            d="M11688.596,31900C11688.596,29299.587 6100.629,23623.149 4228.596,23623C2356.564,23622.906 3559.896,32847.405 5803.93,32848C6984.44,32848 8539.263,31423 8539.263,31423C8539.263,31423 10094.304,32848 11274.596,32848C11615.81,32848.499 11688.554,32327.89 11688.596,31900Z"
            fill="#078DFB"
          />
        </g>
        <g transform="matrix(-1,0,0,1,16328.917235,-19902.166846)">
          <path
            d="M11144.917,31900C11144.917,29299.587 5556.95,23623.149 3684.917,23623C1812.885,23622.906 3016.217,32847.405 5260.251,32848C6440.761,32848 7995.584,31423 7995.584,31423C7995.584,31423 9550.625,32848 10730.917,32848C11072.131,32848.499 11144.875,32327.89 11144.917,31900Z"
            fill="#4D61F9"
            fillOpacity="0.85"
          />
        </g>
      </svg>
      {/* Layar mockup selalu putih di kedua mode, jadi warna teksnya ditulis
          tetap gelap — bukan var(--foreground), yang di mode gelap akan jadi
          teks putih di atas putih. */}
      <figcaption className="text-xs leading-relaxed font-medium text-[#2a3446]/45">
        {label}
      </figcaption>
    </figure>
  );
}
