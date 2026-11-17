import Image from "next/image";
import type { ReactNode } from "react";
import geometry from "./phoneFrameGeometry.json";

interface PhoneFrameProps {
  /**
   * Screenshot aplikasi. Rasio yang diharapkan 9:19.5 (mis. 1080×2340). Layar
   * model sedikit lebih lebar (67,1 × 143,5 mm), jadi tepi atas dan bawah
   * tangkapan layar terpotong kurang dari 1%.
   * Kalau dikosongkan, yang tampil adalah kotak placeholder bergaris putus-putus,
   * pola yang sama seperti di proyek MOGLE.
   */
  src?: string;
  alt: string;
  /** Keterangan pada placeholder, menjelaskan layar mana yang seharusnya di sini. */
  placeholderLabel?: string;
  /**
   * WAJIB memuat lebar pasti, mis. `w-[13rem] sm:w-[17rem]`.
   *
   * Kelas dasar di bawah sengaja TIDAK memasang utilitas lebar apa pun. Dulu
   * ada `max-w-[19rem]` di sana, dan akibatnya `w-[15rem]` yang dikirim dari
   * FeatureDetails tidak pernah berlaku: keduanya sama-sama utilitas lebar
   * dengan kekhususan yang sama, jadi yang menang ditentukan urutan di berkas
   * CSS, bukan urutan di string kelas.
   *
   * Lebarnya harus pasti, bukan `w-full` dengan `max-w-*`. Bingkai ini duduk
   * di wadah flex yang lebarnya mengikuti isi, sedangkan gambar bingkai dan
   * tangkapan layarnya diposisikan absolut dan tidak menyumbang lebar sama
   * sekali. Tanpa lebar pasti, bingkainya menyusut jadi nol.
   */
  className?: string;
  /** Hero memakai `priority` supaya gambarnya tidak dimuat belakangan. */
  priority?: boolean;
  children?: ReactNode;
}

/**
 * Bingkai ponsel Android untuk memajang tampilan aplikasi.
 *
 * Bingkainya gambar hasil render model 3D Galaxy S24
 * (`design/mockup/galaxy-s24-sm-s921b-ds.glb`) dengan area layar bening,
 * dibuat oleh `scripts/render-phone-frame.mjs`. Tangkapan layar ditaruh DI
 * BAWAH gambar itu, tepat di lubang layarnya, sehingga lengkung layar dan
 * lubang kamera punch-hole datang dari modelnya sendiri, bukan ditiru CSS.
 *
 * Gambar statis, bukan model 3D yang dirender di peramban: beranda memuat
 * sembilan bingkai, dan model 4 MB plus WebGL di setiap bingkai akan berat.
 * Bingkainya sendiri cuma 7 sampai 13 KB dan sama di semua halaman, jadi
 * cukup diunduh sekali.
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
  const { aspect, screen } = geometry;

  return (
    <div className={className}>
      <div
        className="relative w-full [filter:var(--device-shadow)]"
        style={{ aspectRatio: `1 / ${aspect}` }}
      >
        {/* Layar: seukuran lubang layar pada gambar bingkai, dengan lengkung
            sudut yang sama dengan layar modelnya. Lengkung itu wajib: sudut
            ponselnya lebih bulat daripada sudut layar, jadi tanpa lengkung,
            sudut tangkapan layar menyembul keluar dari ponsel. Latar putih
            mengisi sisa layar bila rasio tangkapan layarnya sedikit beda. */}
        <div
          className="absolute overflow-hidden bg-white"
          style={{
            left: `${screen.left}%`,
            top: `${screen.top}%`,
            width: `${screen.width}%`,
            height: `${screen.height}%`,
            borderRadius: `${screen.radiusX}% / ${screen.radiusY}%`,
          }}
        >
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

        {/* Bingkainya hiasan, jadi alt kosong: yang perlu dibacakan pembaca
            layar adalah tangkapan layarnya, bukan "ponsel". `srcSet` dua
            ukuran, karena bingkai ini tampil dari 12rem sampai 19rem. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/phone-frame/frame-640.webp"
          srcSet="/phone-frame/frame-640.webp 640w, /phone-frame/frame-960.webp 960w"
          sizes="(max-width: 768px) 70vw, 304px"
          alt=""
          aria-hidden
          draggable={false}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="pointer-events-none absolute inset-0 z-10 h-full w-full select-none"
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
          tetap gelap, bukan var(--foreground), yang di mode gelap akan jadi
          teks putih di atas putih. */}
      <figcaption className="text-xs leading-relaxed font-medium text-[#2a3446]/45">
        {label}
      </figcaption>
    </figure>
  );
}
