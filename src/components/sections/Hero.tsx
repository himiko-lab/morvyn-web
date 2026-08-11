import { buttonVariants } from "@heroui/react";
import { ArrowRight, GooglePlayLogo, Sparkle } from "@phosphor-icons/react/ssr";
import { PhoneFrame } from "../PhoneFrame";
import { Reveal } from "../Reveal";
import { featureColor, featureIcons, featureOrder } from "../featureIcons";
import {
  downloadHref,
  downloadIsExternal,
  site,
  type Dictionary,
} from "@/content";

export function Hero({ dict }: { dict: Dictionary }) {
  // Selama aplikasinya belum terbit, tombol utama mengaku apa adanya dan
  // menurunkan pembaca ke blok penjelasan, bukan ke Play Store yang 404.
  const primaryLabel = site.playStoreLive
    ? dict.hero.primaryCta
    : dict.comingSoon.badge;

  // Catatan iOS hanya muncul setelah aplikasinya terbit. Sebelum itu tidak
  // ada gunanya menyebut platform kedua, karena yang pertama pun belum ada.
  const note = site.playStoreLive ? dict.hero.iosNote : null;

  return (
    // overflow-x-clip, bukan overflow-hidden: kartu mengapung di sisi mockup
    // perlu dipotong ke samping, tapi cahaya latar harus boleh meluber ke bawah
    // supaya memudar di luar layar alih-alih terpotong garis lurus.
    <section className="relative overflow-x-clip pt-10 pb-14 sm:pt-14 sm:pb-20 md:pt-20 md:pb-28">
      <GlowBackdrop />

      <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-blue)]/25 bg-[color:var(--brand-blue)]/8 px-4 py-1.5 text-sm font-semibold text-[color:var(--brand-blue)]">
              <Sparkle size={16} weight="fill" className="sparkle" />
              {dict.hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(2.5rem,6.2vw,4.25rem)] leading-[1.05] font-extrabold tracking-tight text-balance">
              {dict.hero.headline[0]}{" "}
              <span className="text-gradient-brand">{dict.hero.headline[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--foreground)]/65">
              {dict.hero.body}
            </p>
          </Reveal>

          <Reveal delay={240}>
            {/* Di ponsel kedua tombol dibuat selebar kolom dan ditumpuk.
                Dibiarkan mengalir, keduanya membungkus jadi dua baris dengan
                lebar yang berbeda-beda (253px dan 155px di layar 375px), dan
                yang pendek berakhir menggantung di tengah tanpa alasan. */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={downloadHref}
                {...(downloadIsExternal
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className={`${buttonVariants({ variant: "primary", size: "lg" })} w-full justify-center sm:w-auto`}
              >
                <GooglePlayLogo size={20} weight="fill" />
                {primaryLabel}
              </a>
              <a
                href="#fitur"
                className={`${buttonVariants({ variant: "outline", size: "lg" })} w-full justify-center sm:w-auto`}
              >
                {dict.hero.secondaryCta}
                <ArrowRight size={18} />
              </a>
            </div>
            {note && (
              <p className="mt-4 text-sm text-[color:var(--foreground)]/45">{note}</p>
            )}
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3">
              {featureOrder.map((key) => {
                const { Icon, hue } = featureIcons[key];
                return (
                  <li
                    key={key}
                    className="flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]/55"
                  >
                    <Icon size={17} style={{ color: featureColor(hue) }} />
                    {dict.features[key].name}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="flex justify-center lg:justify-end">
          <div className="relative">
            <PhoneFrame
              alt={dict.hero.mockupAlt}
              placeholderLabel={dict.hero.mockupAlt}
              priority
              className="float-slow max-w-[15rem] sm:max-w-[19rem]"
            />
            <FloatingChip
              className="-left-6 top-[16%] md:-left-14"
              label={dict.features.weather.name}
              featureKey="weather"
            />
            {/* Digeser ke bawah tengah supaya tidak menutupi keterangan yang
                muncul di tengah placeholder mockup. */}
            <FloatingChip
              className="-right-4 top-[64%] md:-right-12"
              label={dict.features.habits.name}
              featureKey="habits"
            />
            <FloatingChip
              className="-left-2 bottom-[12%] md:-left-10"
              label={dict.features.finance.name}
              featureKey="finance"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Kartu kecil yang mengapung di sisi mockup, memberi kesan aplikasi hidup. */
function FloatingChip({
  className,
  label,
  featureKey,
}: {
  className: string;
  label: string;
  featureKey: keyof typeof featureIcons;
}) {
  const { Icon, hue } = featureIcons[featureKey];
  return (
    <div
      className={`card-brand absolute z-10 hidden items-center gap-2.5 px-3.5 py-2.5 text-sm font-semibold sm:flex ${className}`}
    >
      <span
        className="grid size-8 place-items-center rounded-lg text-white"
        style={{ backgroundColor: featureColor(hue) }}
      >
        <Icon size={16} weight="fill" />
      </span>
      {label}
    </div>
  );
}

/**
 * Cahaya biru dan ungu yang jadi latar hero. Murni hiasan.
 *
 * Sengaja memakai radial-gradient, bukan bulatan ber-`blur()`. Bulatan yang
 * diburamkan lalu dipotong `overflow-hidden` meninggalkan garis lurus yang
 * kelihatan jelas di batas atas bagian ini; gradien radial memudar sampai
 * benar-benar bening sebelum mencapai tepi, jadi tidak ada garis sama sekali.
 */
function GlowBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 -top-24 -bottom-56 -z-10"
      style={{
        backgroundImage: `
          radial-gradient(58rem 44rem at 80% 14%, color-mix(in oklab, var(--brand-blue) 16%, transparent), transparent 64%),
          radial-gradient(50rem 38rem at 8% 78%, color-mix(in oklab, var(--brand-violet) 14%, transparent), transparent 62%)
        `,
      }}
    />
  );
}
