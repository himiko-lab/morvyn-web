import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/ssr";

const linkClass =
  "group inline-flex items-center gap-1.5 font-semibold text-[color:var(--link)] transition-colors hover:text-[color:var(--brand-violet)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)]";

/**
 * Tautan di bawah satu bagian halaman fitur atau halaman tambahan.
 *
 * Alamat dalam situs (diawali garis miring) memakai `Link`. Alamat ke luar
 * dibuka di tab baru; `mailto:` tidak, karena tidak membuka halaman.
 */
export function SectionLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
      {links.map((link) => {
        const internal = link.href.startsWith("/");
        const mail = link.href.startsWith("mailto:");
        return (
          <li key={link.href}>
            {internal ? (
              <Link href={link.href} className={linkClass}>
                {link.label}
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            ) : (
              <a
                href={link.href}
                {...(mail ? {} : { target: "_blank", rel: "noreferrer noopener" })}
                className={linkClass}
              >
                {link.label}
                {!mail && <ArrowUpRight size={16} weight="bold" />}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
