import {
  GooglePlayLogo,
  InstagramLogo,
  PinterestLogo,
  Sparkle,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/ssr";
import { Reveal } from "../Reveal";
import { site, socialLinks, type Dictionary } from "@/content";

/**
 * Akun yang layak diikuti untuk menunggu kabar peluncuran.
 *
 * Sengaja bukan seluruh isi `socialLinks`: situs Himiko Lab dan alamat email
 * di sana bukan tempat orang menunggu pengumuman. Daftar ini harus sejalan
 * dengan kanal yang disebut di `comingSoon.faq`.
 */
const followKeys = ["instagram", "tiktok", "youtube", "pinterest"] as const;
const followIcons = {
  instagram: InstagramLogo,
  tiktok: TiktokLogo,
  youtube: YoutubeLogo,
  pinterest: PinterestLogo,
} as const;

export function DownloadCta({ dict }: { dict: Dictionary }) {
  return (
    <section id="unduh" className="scroll-mt-24 pb-16 sm:pb-24 md:pb-32">
      <div className="shell">
        <Reveal>
          <div className="gradient-brand relative overflow-hidden rounded-[2rem] px-8 py-16 text-center text-white sm:px-16 md:py-20">
            {/* Motif sparkle dari logo, dipakai ulang sebagai tekstur latar. */}
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20">
              <Sparkle size={120} weight="fill" className="absolute -top-6 -left-4 rotate-12" />
              <Sparkle size={80} weight="fill" className="absolute right-10 bottom-6 -rotate-12" />
              <Sparkle size={44} weight="fill" className="absolute top-12 right-1/4" />
            </div>

            <div className="relative">
              {site.playStoreLive ? <Available dict={dict} /> : <ComingSoon dict={dict} />}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Bentuk blok ini setelah aplikasinya benar-benar ada di Google Play. */
function Available({ dict }: { dict: Dictionary }) {
  return (
    <>
      <h2 className="text-[clamp(1.9rem,4vw,3rem)] leading-[1.15] font-extrabold tracking-tight text-balance">
        {dict.cta.title}
      </h2>
      <p className="mx-auto mt-5 max-w-lg text-lg text-white/85">{dict.cta.body}</p>

      {/* Tombol ini tidak memakai varian HeroUI: di atas latar gradien,
          yang dibutuhkan justru tombol putih dengan teks biru. */}
      <a
        href={site.playStoreUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-base font-bold text-[color:var(--brand-blue)] shadow-lg transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <GooglePlayLogo size={22} weight="fill" />
        {dict.cta.button}
      </a>

      <p className="mt-5 text-sm text-white/70">{dict.cta.iosNote}</p>
    </>
  );
}

/**
 * Bentuk blok ini selama `site.playStoreLive` masih `false`.
 *
 * Tidak ada tombol unduh sama sekali, karena tidak ada yang bisa diunduh.
 * Sebagai gantinya lencana yang menyatakan keadaannya, lalu tindakan yang
 * benar-benar bisa dilakukan sekarang: mengikuti akun yang akan mengumumkan
 * peluncurannya. Inilah satu-satunya halaman tempat pengunjung menyatakan
 * minat sebelum aplikasinya ada, jadi sayang kalau dibiarkan buntu.
 */
function ComingSoon({ dict }: { dict: Dictionary }) {
  return (
    <>
      <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/25">
        <GooglePlayLogo size={16} weight="fill" />
        {dict.comingSoon.badge}
      </span>

      <h2 className="mt-6 text-[clamp(1.9rem,4vw,3rem)] leading-[1.15] font-extrabold tracking-tight text-balance">
        {dict.comingSoon.title}
      </h2>
      <p className="mx-auto mt-5 max-w-lg text-lg text-white/85">
        {dict.comingSoon.body}
      </p>

      <p className="mt-9 text-sm font-semibold tracking-wider text-white/70 uppercase">
        {dict.comingSoon.followHeading}
      </p>
      {/* Ditumpuk selebar kolom di ponsel, sebaris mulai `sm`. `flex-wrap`
          hanya berlaku sejak `sm` juga: dengan empat tombol, satu baris tidak
          selalu muat di lebar menengah, dan tanpa ini keempatnya akan
          dimampatkan sampai teksnya berdesakan alih-alih pindah baris. */}
      <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
        {followKeys.map((key) => {
          const link = socialLinks.find((s) => s.key === key);
          if (!link) return null;
          const Icon = followIcons[key];
          return (
            <a
              key={key}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-base font-bold text-[color:var(--brand-blue)] shadow-lg transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              <Icon size={22} weight="fill" />
              {link.label}
            </a>
          );
        })}
      </div>
    </>
  );
}
