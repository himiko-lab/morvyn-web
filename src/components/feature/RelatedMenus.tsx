import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { featureColor, featureIcons } from "../featureIcons";
import { getDictionary, type FeatureKey, type Locale } from "@/content";
import { featurePageUi, featurePath } from "@/content/featurePages";

/**
 * Kisi tautan ke halaman menu, di kaki halaman fitur dan halaman tambahan.
 *
 * Selain berguna bagi pembaca, inilah yang membuat halaman-halaman itu saling
 * menemukan: halaman yang hanya ditautkan dari satu tempat gampang dianggap
 * tidak penting.
 */
export function RelatedMenus({ keys, locale }: { keys: FeatureKey[]; locale: Locale }) {
  const dict = getDictionary(locale);
  const ui = featurePageUi[locale];

  return (
    <section className="border-t border-[color:var(--border)] bg-[color:var(--surface-secondary)]/45 py-14 sm:py-20">
      <div className="shell">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.6rem,3vw,2.25rem)] leading-[1.2] font-extrabold tracking-tight">
            {ui.relatedHeading}
          </h2>
          <p className="mt-3 text-lg text-[color:var(--foreground)]/60">{ui.relatedBody}</p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {keys.map((key) => {
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
  );
}
