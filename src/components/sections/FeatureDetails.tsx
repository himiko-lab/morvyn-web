import { Check } from "@phosphor-icons/react/ssr";
import { PhoneFrame } from "../PhoneFrame";
import { Reveal } from "../Reveal";
import { featureColor, featureIcons, featureOrder } from "../featureIcons";
import type { Dictionary, FeatureKey } from "@/content";

/**
 * Pembahasan panjang ketujuh menu, berselang-seling kiri-kanan.
 *
 * Latar belakangnya bergantian antara warna halaman dan permukaan, supaya
 * batas antar fitur terlihat tanpa perlu menarik garis pemisah.
 */
export function FeatureDetails({ dict }: { dict: Dictionary }) {
  return (
    <div>
      {featureOrder.map((key, index) => (
        <FeatureRow
          key={key}
          featureKey={key}
          dict={dict}
          flipped={index % 2 === 1}
          tinted={index % 2 === 1}
        />
      ))}
    </div>
  );
}

function FeatureRow({
  featureKey,
  dict,
  flipped,
  tinted,
}: {
  featureKey: FeatureKey;
  dict: Dictionary;
  flipped: boolean;
  tinted: boolean;
}) {
  const feature = dict.features[featureKey];
  const { Icon, hue } = featureIcons[featureKey];
  const color = featureColor(hue);

  return (
    <section
      id={`fitur-${featureKey}`}
      className={`scroll-mt-24 py-16 md:py-20 ${
        tinted ? "bg-[color:var(--surface-secondary)]/45" : ""
      }`}
    >
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={flipped ? "lg:order-2" : undefined}>
          <Reveal>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-bold"
              style={{
                color,
                backgroundColor: `color-mix(in oklab, ${color} 12%, transparent)`,
              }}
            >
              <Icon size={16} weight="fill" />
              {feature.name}
            </span>
          </Reveal>

          <Reveal delay={70}>
            <h3 className="mt-5 text-[clamp(1.6rem,3vw,2.25rem)] leading-[1.2] font-extrabold tracking-tight text-balance">
              {feature.tagline}
            </h3>
          </Reveal>

          <Reveal delay={130}>
            <p className="mt-5 text-lg leading-relaxed text-[color:var(--foreground)]/60">
              {feature.body}
            </p>
          </Reveal>

          <Reveal delay={190}>
            <ul className="mt-8 space-y-3.5">
              {feature.points.map((point) => (
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
          </Reveal>
        </div>

        <Reveal
          delay={120}
          className={`flex justify-center ${flipped ? "lg:order-1 lg:justify-start" : "lg:justify-end"}`}
        >
          <div className="relative">
            {/* Bidang warna di belakang ponsel, sewarna dengan menunya. */}
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-[3.5rem] opacity-[0.09] blur-2xl"
              style={{ backgroundColor: color }}
            />
            <PhoneFrame
              alt={`${feature.name} — Morvyn`}
              placeholderLabel={`${feature.name} — Morvyn`}
              className="w-[15rem] sm:w-[17rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
