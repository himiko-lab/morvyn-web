import Link from "next/link";
import { Logo } from "../Logo";
import { featureOrder } from "../featureIcons";
import { altLocale, localeHref, site, type Dictionary, type Locale } from "@/content";

export function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const other = altLocale(locale);

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)]">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs leading-relaxed text-[color:var(--foreground)]/55">
            {dict.footer.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wider uppercase">
            {dict.footer.productHeading}
          </h2>
          <ul className="mt-5 space-y-3">
            {featureOrder.map((key) => (
              <li key={key}>
                <a
                  href={`#fitur-${key}`}
                  className="text-[color:var(--foreground)]/55 transition-colors hover:text-[color:var(--brand-blue)]"
                >
                  {dict.features[key].name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wider uppercase">
            {dict.footer.aboutHeading}
          </h2>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                href={localeHref(other)}
                className="text-[color:var(--foreground)]/55 transition-colors hover:text-[color:var(--brand-blue)]"
              >
                {dict.meta.localeName === "Indonesia" ? "English" : "Bahasa Indonesia"}
              </Link>
            </li>
            <li>
              <a
                href={site.playStoreUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[color:var(--foreground)]/55 transition-colors hover:text-[color:var(--brand-blue)]"
              >
                Google Play
              </a>
            </li>
            {/* Halaman privasi dan ketentuan belum dibuat — lihat README.
                Sengaja tidak dipasang sebagai tautan mati. */}
            {site.contactEmail && (
              <li>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-[color:var(--foreground)]/55 transition-colors hover:text-[color:var(--brand-blue)]"
                >
                  {dict.footer.contact}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-[color:var(--border)]">
        <div className="shell flex flex-wrap items-center justify-between gap-3 py-6 text-sm text-[color:var(--foreground)]/45">
          <p>
            © {new Date().getFullYear()} {site.publisher}. {dict.footer.rights}
          </p>
          <p>{site.name}</p>
        </div>
      </div>
    </footer>
  );
}
