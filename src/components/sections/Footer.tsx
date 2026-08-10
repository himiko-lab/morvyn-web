import Link from "next/link";
import {
  EnvelopeSimple,
  Globe,
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react/ssr";
import { Logo } from "../Logo";
import { featureOrder } from "../featureIcons";
import {
  altLocale,
  localeHref,
  site,
  socialLinks,
  type Dictionary,
  type Locale,
} from "@/content";

/** Ikon untuk tiap akun di `socialLinks`, dikunci lewat `key`-nya. */
const socialIcons = {
  instagram: InstagramLogo,
  tiktok: TiktokLogo,
  website: Globe,
  email: EnvelopeSimple,
} as const;

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

          <h2 className="mt-8 text-sm font-bold tracking-wider uppercase">
            {dict.footer.followHeading}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.key];
              const isMail = link.key === "email";
              return (
                <li key={link.key}>
                  <a
                    href={link.href}
                    // mailto: tidak membuka tab baru, jadi target/rel-nya tidak
                    // berlaku di situ.
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noreferrer noopener"}
                    // Ikon saja tidak punya teks yang bisa dibacakan pembaca
                    // layar, jadi namanya dipasang di sini.
                    aria-label={link.label}
                    title={link.label}
                    className="grid size-11 place-items-center rounded-full border border-[color:var(--border)] text-[color:var(--foreground)]/60 transition-colors hover:border-[color:var(--brand-blue)]/40 hover:bg-[color:var(--surface-secondary)] hover:text-[color:var(--brand-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)]"
                  >
                    <Icon size={20} />
                  </a>
                </li>
              );
            })}
          </ul>
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
            <li>
              <a
                href={site.publisherUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[color:var(--foreground)]/55 transition-colors hover:text-[color:var(--brand-blue)]"
              >
                {site.publisher}
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
