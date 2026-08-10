import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { featureColor, featureIcons, featureOrder } from "../featureIcons";
import type { Dictionary } from "@/content";

/**
 * Grid bento tujuh menu.
 *
 * Kartu pertama (Catatan) sengaja dibuat dua kali lebih lebar di layar besar:
 * itulah fitur yang membedakan Morvyn, dan ukurannya sendiri yang menyampaikan
 * hierarki itu sebelum orang sempat membaca.
 */
export function Overview({ dict }: { dict: Dictionary }) {
  return (
    <section id="fitur" className="scroll-mt-24 py-20 md:py-28">
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
      </div>
    </section>
  );
}
