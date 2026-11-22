import Link from "next/link";
import { CaretDown, CaretRight, Check, GooglePlayLogo } from "@phosphor-icons/react/ssr";
import { Header } from "../Header";
import { SectionLinks } from "../SectionLinks";
import { Footer } from "../sections/Footer";
import { DownloadCta } from "../sections/DownloadCta";
import { featureColor, featureOrder } from "../featureIcons";
import { RelatedMenus } from "../feature/RelatedMenus";
import { PageJsonLd } from "./PageJsonLd";
import { pageIcons } from "./pageIcons";
import {
  altLocale,
  downloadHref,
  downloadIsExternal,
  getDictionary,
  localeHomePath,
  site,
  type Locale,
} from "@/content";
import { featurePageUi } from "@/content/featurePages";
import {
  featureLikePageKeys,
  getPage,
  pagePath,
  type PageKey,
  type PageSection,
} from "@/content/pages";

/**
 * Kerangka halaman tambahan: PDF dan Pindai, Widget, Catatan Rilis, Kontak.
 *
 * Susunannya mengikuti `FeaturePage` (remah roti, label, judul, bagian
 * berpoin, tanya jawab terbuka), tanpa bingkai ponsel: halaman-halaman ini
 * belum punya tangkapan layar sendiri, dan memasang layar menu lain di sini
 * berarti memperlihatkan sesuatu yang tidak dibahas halamannya.
 *
 * Seperti halaman fitur dan halaman hukum, TIDAK ada `Reveal`: isinya harus
 * terbaca utuh tanpa menunggu skrip apa pun.
 */
export function InfoPage({ pageKey, locale }: { pageKey: PageKey; locale: Locale }) {
  const dict = getDictionary(locale);
  const page = getPage(pageKey, locale);
  const ui = featurePageUi[locale];
  const { Icon, hue } = pageIcons[pageKey];
  const color = featureColor(hue);
  const home = localeHomePath(locale);
  const altHref = pagePath[pageKey][altLocale(locale)];
  const isFeature = featureLikePageKeys.includes(pageKey);

  const externalProps = downloadIsExternal
    ? ({ target: "_blank", rel: "noreferrer noopener" } as const)
    : {};
  const ctaHref = downloadIsExternal ? downloadHref : `${home}${downloadHref}`;
  const ctaLabel = site.playStoreLive ? dict.hero.primaryCta : dict.comingSoon.badge;

  function renderSection(section: PageSection) {
    return (
      <section key={section.heading}>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-[1.75rem]">
          {section.heading}
        </h2>
        {section.paragraphs.length > 0 && (
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
        )}
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
        {section.links && <SectionLinks links={section.links} />}
      </section>
    );
  }

  return (
    <>
      <PageJsonLd pageKey={pageKey} locale={locale} />

      <Header dict={dict} locale={locale} anchorBase={home} altHref={altHref} />

      <main>
        <div className="shell">
          <article className="mx-auto max-w-3xl pt-10 pb-16 sm:pt-14 sm:pb-20">
            {/* --- Kepala halaman ----------------------------------------- */}

            <nav aria-label={ui.home} className="text-sm">
              <Link
                href={home}
                className="inline-flex items-center gap-1 text-[color:var(--foreground)]/55 transition-colors hover:text-[color:var(--brand-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)]"
              >
                {ui.home}
                <CaretRight size={12} weight="bold" />
              </Link>
              <span className="ml-1 text-[color:var(--foreground)]/40">{page.name}</span>
            </nav>

            <span
              className="mt-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-bold"
              style={{
                color,
                backgroundColor: `color-mix(in oklab, ${color} 12%, transparent)`,
              }}
            >
              <Icon size={16} weight="fill" />
              {page.eyebrow}
            </span>

            <h1 className="mt-5 text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.12] font-extrabold tracking-tight text-balance">
              {page.h1}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-[color:var(--foreground)]/65">
              {page.lead}
            </p>

            {isFeature && (
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
            )}

            {/* --- Isi ---------------------------------------------------- */}

            <div className="mt-12 space-y-12 sm:mt-14">
              {page.sections.map(renderSection)}

              {/* Bagian terlipat, mis. versi lama di Catatan Rilis.
                  <details> bawaan HTML: tetap bisa dibuka tanpa JavaScript,
                  dan isinya tetap ada di HTML untuk mesin pencari. */}
              {page.collapsed && (
                <details className="group rounded-[calc(var(--radius)*1.25)] border border-[color:var(--border)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-lg font-bold sm:px-6 [&::-webkit-details-marker]:hidden">
                    {page.collapsed.label}
                    <CaretDown
                      size={18}
                      weight="bold"
                      className="shrink-0 text-[color:var(--foreground)]/50 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="space-y-12 border-t border-[color:var(--border)] px-5 py-8 sm:px-6">
                    {page.collapsed.sections.map(renderSection)}
                  </div>
                </details>
              )}

              {/* Tanya jawab. Teksnya sama persis dengan FAQPage di
                  PageJsonLd, karena keduanya membaca `page.faq`. */}
              {page.faq && (
                <section aria-labelledby="tanya-halaman">
                  <h2
                    id="tanya-halaman"
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
              )}
            </div>
          </article>
        </div>

        {isFeature && <RelatedMenus keys={featureOrder} locale={locale} />}

        {/* Halaman Kontak tidak ditutup ajakan mengunduh: yang datang ke sini
            sudah memakai aplikasinya dan sedang mencari bantuan. */}
        {pageKey !== "contact" && (
          <div className={isFeature ? "pt-16 sm:pt-24" : undefined}>
            <DownloadCta dict={dict} />
          </div>
        )}
      </main>

      <Footer dict={dict} locale={locale} altHref={altHref} />
    </>
  );
}
