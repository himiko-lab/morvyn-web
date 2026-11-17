import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { featureColor, featureIcons, featureOrder } from "../featureIcons";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { pageIcons } from "../page/pageIcons";
import type { Dictionary, Locale } from "@/content";
import { featureLikePageKeys, getPage, pagePath } from "@/content/pages";

/**
 * Grid bento delapan menu.
 *
 * Kartu pertama (Catatan) sengaja dibuat dua kali lebih lebar di layar besar:
 * itulah fitur yang membedakan Morvyn, dan ukurannya sendiri yang menyampaikan
 * hierarki itu sebelum orang sempat membaca.
 */
export function Overview({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section id="fitur" className="scroll-mt-24 py-14 sm:py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow={dict.overview.eyebrow}
          title={dict.overview.title}
          body={dict.overview.body}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureOrder.map((key, index) => {
            const feature = dict.features[key];
            const { Icon, hue } = featureIcons[key];
            const color = featureColor(hue);
            const wide = index === 0;

            return (
              <Reveal
                key={key}
                delay={index * 60}
                className={wide ? "sm:col-span-2" : undefined}
              >
                <article className="card-brand group relative h-full overflow-hidden p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-brand-lg)]">
                  {/* Cahaya lembut di pojok, menguat saat kartu disentuh tetikus. */}
                  <div
                    aria-hidden
                    className="absolute -top-16 -right-16 size-40 rounded-full opacity-[0.12] blur-3xl transition-opacity duration-300 group-hover:opacity-25"
                    style={{ backgroundColor: color }}
                  />

                  <span
                    className="relative grid size-12 place-items-center rounded-2xl text-white"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={24} weight="fill" />
                  </span>

                  <h3 className="relative mt-6 text-xl font-bold tracking-tight">
                    {feature.name}
                  </h3>
                  <p className="relative mt-2.5 leading-relaxed text-[color:var(--foreground)]/60">
                    {wide ? feature.body : feature.short}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Dua kemampuan yang tidak punya menu sendiri tapi dicari orang
            seperti mencari menu: PDF dan pindai, serta widget. Ditaruh di
            baris terpisah supaya kisi di atas tetap delapan menu, dan
            masing-masing menuju halamannya sendiri. */}
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {featureLikePageKeys.map((key, index) => {
            const page = getPage(key, locale);
            const { Icon, hue } = pageIcons[key];
            const color = featureColor(hue);

            return (
              <li key={key}>
                <Reveal delay={index * 60} className="h-full">
                  <Link
                    href={pagePath[key][locale]}
                    className="card-brand group flex h-full items-start gap-5 p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-brand-lg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)]"
                  >
                    <span
                      className="grid size-12 shrink-0 place-items-center rounded-2xl text-white"
                      style={{ backgroundColor: color }}
                    >
                      <Icon size={24} weight="fill" />
                    </span>
                    <span>
                      <span className="flex items-center gap-1.5 text-xl font-bold tracking-tight">
                        {page.name}
                        <ArrowRight
                          size={16}
                          weight="bold"
                          className="text-[color:var(--foreground)]/35 transition-transform group-hover:translate-x-0.5 group-hover:text-[color:var(--brand-blue)]"
                        />
                      </span>
                      <span className="mt-2 block leading-relaxed text-[color:var(--foreground)]/60">
                        {page.short}
                      </span>
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
