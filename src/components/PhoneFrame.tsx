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
  /**
   * WAJIB memuat batas lebar, mis. `max-w-[13rem] sm:max-w-[17rem]`.
   *
   * Kelas dasar di bawah sengaja hanya memasang `w-full` dan TIDAK memasang
   * `max-w-*` bawaan. Dulu ada `max-w-[19rem]` di sana, dan akibatnya
   * `w-[15rem]` yang dikirim dari FeatureDetails tidak pernah berlaku:
   * keduanya sama-sama utilitas lebar dengan kekhususan yang sama, jadi yang
   * menang ditentukan urutan di berkas CSS, bukan urutan di string kelas.
   * Bingkai fitur ikut melar ke 304px dan itu tidak kelihatan sampai diukur.
   */
  className?: string;
  /** Hero memakai `priority` supaya gambarnya tidak dimuat belakangan. */
  priority?: boolean;
  children?: ReactNode;
}

/**
 * Bingkai ponsel Android untuk memajang tampilan aplikasi.
 *
 * Bingkainya digambar dengan CSS, bukan gambar, jadi tetap tajam di layar
 * kepadatan berapa pun dan tidak menambah berat halaman.
 *
 * Bentuknya sengaja Android, bukan iPhone: Morvyn hanya ada di Google Play,
 * dan memajangnya di dalam bingkai iPhone menjanjikan sesuatu yang tidak bisa
 * ditepati situs ini.
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
      className={`relative aspect-[9/19.5] w-full rounded-[2.75rem] border-[6px] border-[color:var(--device-frame)] bg-[color:var(--device-frame)] p-[3px] shadow-[var(--shadow-brand-lg)] ${className}`}
    >
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

        {/* Kamera punch-hole ala Android: lubang bundar di tengah atas, di
            ATAS layar dan bukan di bingkainya. Itu bedanya dengan poni iPhone,
            yang memakan sepotong bingkai selebar 86px.

            Ukurannya dalam persen, bukan piksel, karena bingkai ini dipakai
            dalam tiga lebar berbeda (19rem di hero, 17rem dan 15rem di bagian
            fitur). Ukuran piksel tetap akan terlihat kebesaran di yang kecil.

            Ditaruh setelah {children} supaya selalu di atas isinya, dan di
            dalam wadah ber-overflow-hidden supaya ikut terpotong lengkung
            layar. Murni hiasan, jadi disembunyikan dari pembaca layar. */}
        <div
          aria-hidden
          className="absolute left-1/2 top-[1.7%] z-20 aspect-square w-[5%] -translate-x-1/2 rounded-full bg-[color:var(--device-camera)] shadow-[inset_0_0_0_1px_rgb(255_255_255/0.16)]"
        />
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
      {/* Lambang tanpa percikan putih di tengahnya: latar placeholder ini
          terang, jadi bentuk putih itu cuma jadi lubang. Lihat Logo.tsx untuk
          asal-usul angka transformnya. */}
      <svg viewBox="0 0 10468 9226" className="h-12 w-auto opacity-25">
        <g transform="translate(-3305.608748,-23623)">
          <path
            d="M11688.596,31900C11688.596,29299.587 6100.629,23623.149 4228.596,23623C2356.564,23622.906 3559.896,32847.405 5803.93,32848C6984.44,32848 8539.263,31423 8539.263,31423C8539.263,31423 10094.304,32848 11274.596,32848C11615.81,32848.499 11688.554,32327.89 11688.596,31900Z"
            fill="#078DFB"
          />
        </g>
        <g transform="matrix(-1,0,0,1,13229.238145,-23623)">
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
