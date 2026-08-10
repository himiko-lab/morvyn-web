import { GooglePlayLogo, Sparkle } from "@phosphor-icons/react/ssr";
import { Reveal } from "../Reveal";
import { site, type Dictionary } from "@/content";

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
              <h2 className="text-[clamp(1.9rem,4vw,3rem)] leading-[1.15] font-extrabold tracking-tight text-balance">
                {dict.cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-white/85">
                {dict.cta.body}
              </p>

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
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
