import Link from "next/link";
import { ArrowRight, CaretRight, Check, GooglePlayLogo } from "@phosphor-icons/react/ssr";
import { Header } from "../Header";
import { PhoneFrame } from "../PhoneFrame";
import { Footer } from "../sections/Footer";
import { DownloadCta } from "../sections/DownloadCta";
import { featureColor, featureIcons, featureOrder } from "../featureIcons";
import { FeatureJsonLd } from "./FeatureJsonLd";
import {
  altLocale,
  downloadHref,
  downloadIsExternal,
  getDictionary,
  localeHomePath,
  screenshotSrc,
  site,
  type FeatureKey,
  type Locale,
} from "@/content";
import { featurePageUi, featurePath, getFeaturePage } from "@/content/featurePages";

/**
 * Satu halaman fitur, mis. `/fitur/catatan/`.
 *
 * Dipakai enam belas kali (delapan menu kali dua bahasa); seluruh teksnya ada
 * di `content/featurePages/`.
 *
 * Seperti halaman hukum, TIDAK ada `Reveal` di sini. Halaman ini dibuat
 * terutama supaya ditemukan lewat pencarian, dan isinya harus terbaca utuh
 * tanpa menunggu skrip apa pun. Tanya jawabnya juga sengaja terbuka semua,
 * bukan akordeon: jawabannya pendek, dan teks yang tersembunyi di balik klik
 * bukan yang paling dulu dibaca orang maupun mesin.
 */
export function FeaturePage({ featureKey, locale }: { featureKey: FeatureKey; locale: Locale }) {
  const dict = getDictionary(locale);
  const page = getFeaturePage(featureKey, locale);
  const ui = featurePageUi[locale];
  const feature = dict.features[featureKey];
  const { Icon, hue } = featureIcons[featureKey];
  const color = featureColor(hue);
  const home = localeHomePath(locale);
  const otherLocale = altLocale(locale);
  const related = featureOrder.filter((key) => key !== featureKey);

  const externalProps = downloadIsExternal
    ? ({ target: "_blank", rel: "noreferrer noopener" } as const)
    : {};
  const ctaHref = downloadIsExternal ? downloadHref : `${home}${downloadHref}`;
  const ctaLabel = site.playStoreLive ? dict.hero.primaryCta : dict.comingSoon.badge;

  return (
    <>
      <FeatureJsonLd featureKey={featureKey} locale={locale} />

      {/* `anchorBase` dan `altHref` dengan alasan yang sama seperti di
          halaman hukum: menu header menunjuk bagian beranda, dan tombol
          ganti bahasa sebaiknya menuju menu yang sama dalam bahasa lain. */}
      <Header
        dict={dict}
        locale={locale}
        anchorBase={home}
        altHref={featurePath(featureKey, otherLocale)}
      />

      <main>
        {/* --- Kepala halaman ------------------------------------------- */}

        <section className="relative overflow-x-clip pt-10 pb-14 sm:pt-14 sm:pb-20">
          <div className="shell grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <nav aria-label={ui.home} className="text-sm">
                <Link
                  href={home}
                  className="inline-flex items-center gap-1 text-[color:var(--foreground)]/55 transition-colors hover:text-[color:var(--brand-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)]"
                >
                  {ui.home}
                  <CaretRight size={12} weight="bold" />
                </Link>
                <span className="ml-1 text-[color:var(--foreground)]/40">{feature.name}</span>
              </nav>

              <span
                className="mt-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-bold"
                style={{
                  color,
                  backgroundColor: `color-mix(in oklab, ${color} 12%, transparent)`,
                }}
              >
                <Icon size={16} weight="fill" />
                {ui.eyebrow}
              </span>

              <h1 className="mt-5 text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.12] font-extrabold tracking-tight text-balance">
                {page.h1}
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-[color:var(--foreground)]/65">
                {page.lead}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={ctaHref}
                  {...externalProps}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[color:var(--brand-blue)] px-6 py-3.5 text-base font-bold text-white shadow-[var(--shadow-brand-lg)] transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--focus)]"
                >
                  <GooglePlayLogo size={20} weight="fill" />
                  {ctaLabel}
                </a>
                {site.playStoreLive && (
                  <span className="text-sm text-[color:var(--foreground)]/50">
                    {dict.hero.iosNote}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-8 -z-10 rounded-[3.5rem] opacity-[0.09] blur-2xl"
                  style={{ backgroundColor: color }}
                />
                <PhoneFrame
                  src={screenshotSrc(locale, featureKey)}
                  alt={dict.featureMockupAlt.replace("{name}", feature.name)}
                  className="w-[13rem] sm:w-[16rem] lg:w-[18rem]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Isi ------------------------------------------------------ */}

        <div className="shell">
          <article className="mx-auto max-w-3xl space-y-12 pb-16 sm:pb-20">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-extrabold tracking-tight md:text-[1.75rem]">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-lg leading-[1.75] text-[color:var(--foreground)]/70"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.points && (
                  <ul className="mt-6 space-y-3.5">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-white"
                          style={{ backgroundColor: color }}
                        >
                          <Check size={12} weight="bold" />
                        </span>
                        <span className="text-[color:var(--foreground)]/75">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Tanya jawab. Teksnya sama persis dengan FAQPage di
                FeatureJsonLd, karena keduanya membaca `page.faq`. */}
            <section aria-labelledby="tanya-fitur">
              <h2
                id="tanya-fitur"
                className="text-2xl font-extrabold tracking-tight md:text-[1.75rem]"
              >
                {ui.faqHeading}
              </h2>
              <dl className="mt-6 divide-y divide-[color:var(--border)] overflow-hidden rounded-[calc(var(--radius)*1.25)] border border-[color:var(--border)]">
                {page.faq.map((item) => (
                  <div key={item.q} className="px-5 py-5 sm:px-6">
                    <dt className="text-lg font-bold">{item.q}</dt>
                    <dd className="mt-2 leading-relaxed text-[color:var(--foreground)]/65">
                      {item.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </article>
        </div>

        {/* --- Menu lain ------------------------------------------------ */}

        {/* Tautan silang ke tujuh menu lainnya. Selain berguna bagi pembaca,
            inilah yang membuat keenam belas halaman ini saling menemukan:
            halaman yang hanya ditautkan dari satu tempat gampang dianggap
            tidak penting. */}
        <section className="border-t border-[color:var(--border)] bg-[color:var(--surface-secondary)]/45 py-14 sm:py-20">
          <div className="shell">
            <div className="max-w-2xl">
              <h2 className="text-[clamp(1.6rem,3vw,2.25rem)] leading-[1.2] font-extrabold tracking-tight">
                {ui.relatedHeading}
              </h2>
              <p className="mt-3 text-lg text-[color:var(--foreground)]/60">{ui.relatedBody}</p>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((key) => {
                const other = dict.features[key];
                const { Icon: OtherIcon, hue: otherHue } = featureIcons[key];
                const otherColor = featureColor(otherHue);
                return (
                  <li key={key}>
                    <Link
                      href={featurePath(key, locale)}
                      className="card-brand group flex h-full flex-col p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-brand-lg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)]"
                    >
                      <span
                        className="grid size-10 place-items-center rounded-xl text-white"
                        style={{ backgroundColor: otherColor }}
                      >
                        <OtherIcon size={20} weight="fill" />
                      </span>
                      <span className="mt-4 flex items-center gap-1.5 font-bold">
                        {other.name}
                        <ArrowRight
                          size={14}
                          weight="bold"
                          className="text-[color:var(--foreground)]/35 transition-transform group-hover:translate-x-0.5 group-hover:text-[color:var(--brand-blue)]"
                        />
                      </span>
                      <span className="mt-1.5 text-sm leading-relaxed text-[color:var(--foreground)]/60">
                        {other.short}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <div className="pt-16 sm:pt-24">
          <DownloadCta dict={dict} />
        </div>
      </main>

      <Footer dict={dict} locale={locale} altHref={featurePath(featureKey, otherLocale)} />
    </>
  );
}
