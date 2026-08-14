import Link from "next/link";
import {
  EnvelopeSimple,
  FacebookLogo,
  Globe,
  InstagramLogo,
  PinterestLogo,
  ThreadsLogo,
  TiktokLogo,
  XLogo,
  YoutubeLogo,
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
import { legalPath } from "@/content/legal";

/** Ikon untuk tiap akun di `socialLinks`, dikunci lewat `key`-nya. */
const socialIcons = {
  instagram: InstagramLogo,
  tiktok: TiktokLogo,
  youtube: YoutubeLogo,
  pinterest: PinterestLogo,
  facebook: FacebookLogo,
  x: XLogo,
  threads: ThreadsLogo,
  website: Globe,
  email: EnvelopeSimple,
} as const;

/**
 * Tautan footer di ponsel.
 *
 * Teksnya sendiri cuma setinggi 20px. Ditelusuri dengan jari, itu separuh dari
 * 44px yang disarankan, dan sebelas tautan sekecil itu berjejer 32px sekali
 * langkah membuat salah pencet jadi lumrah. Bantalan tegaknya menaikkan
 * daerah sentuh ke 40px tanpa mengubah ukuran huruf.
 *
 * Hanya berlaku sampai `sm`; di layar lebar yang dipakai tetikus, jarak
 * aslinya dikembalikan supaya tampilannya tidak jadi renggang.
 */
const footerListClass = "mt-5 space-y-1 sm:space-y-3";
const footerLinkClass =
  "block py-2.5 sm:py-0 text-[color:var(--foreground)]/55 transition-colors hover:text-[color:var(--brand-blue)]";

interface FooterProps {
  dict: Dictionary;
  locale: Locale;
  /**
   * Awalan tautan jangkar untuk halaman selain beranda — sama persis
   * alasannya seperti di `Header`. Daftar "Produk" di bawah seluruhnya
   * berjangkar ke bagian beranda, jadi tanpa ini ketujuh tautannya mati
   * begitu footer ini dipakai di halaman hukum.
   */
  anchorBase?: string;
  /** Tujuan tautan ganti bahasa. Bawaannya beranda bahasa satunya. */
  altHref?: string;
}

export function Footer({ dict, locale, anchorBase = "", altHref }: FooterProps) {
  const other = altLocale(locale);
  const switchHref = altHref ?? localeHref(other);

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
          <ul className={footerListClass}>
            {featureOrder.map((key) => (
              <li key={key}>
                <a href={`${anchorBase}#fitur-${key}`} className={footerLinkClass}>
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
          <ul className={footerListClass}>
            <li>
              <Link
                href={switchHref}
                className={footerLinkClass}
              >
                {dict.meta.localeName === "Indonesia" ? "English" : "Bahasa Indonesia"}
              </Link>
            </li>
            {/* Baris ini hilang selama aplikasinya belum terbit. Tautan mati
                di footer tidak kelihatan sampai diklik, dan itu justru bagian
                situs yang paling sering dijadikan patokan keabsahan. */}
            {site.playStoreLive && (
              <li>
                <a
                  href={site.playStoreUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={footerLinkClass}
                >
                  Google Play
                </a>
              </li>
            )}
            <li>
              <a
                href={site.publisherUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={footerLinkClass}
              >
                {site.publisher}
              </a>
            </li>
            {/* Tautan wajib bagi Google Play, dan tempat pertama yang dibuka
                pemeriksa verifikasi OAuth setelah beranda. Alamatnya diambil
                dari `legalPath` supaya footer tidak bisa menunjuk alamat yang
                berbeda dengan yang dipakai halamannya sendiri. */}
            <li>
              <Link href={legalPath.privacy[locale]} className={footerLinkClass}>
                {dict.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href={legalPath.terms[locale]} className={footerLinkClass}>
                {dict.footer.terms}
              </Link>
            </li>
            {site.contactEmail && (
              <li>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className={footerLinkClass}
                >
                  {dict.footer.contact}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Baris penutup, dipusatkan.
          Dulu `justify-between` melempar hak cipta ke kiri dan nama produk ke
          kanan, dan di layar lebar keduanya berakhir sejauh mungkin satu sama
          lain dengan bentangan kosong di antaranya. Keduanya keterangan
          penutup yang sejenis, jadi lebih masuk akal berdampingan di tengah.

          Ditumpuk di bawah `sm`, sebaris dengan titik pemisah di atasnya.
          Bukan dibiarkan membungkus sendiri: dengan `flex-wrap`, di 320px
          barisnya patah tepat sebelum "Morvyn" dan titik pemisahnya tertinggal
          menggantung di ujung baris pertama. Menentukan sendiri kapan menumpuk
          membuat keadaan itu tidak mungkin terjadi. */}
      <div className="border-t border-[color:var(--border)]">
        <div className="shell flex flex-col items-center gap-1 py-6 text-center text-sm text-[color:var(--foreground)]/45 sm:flex-row sm:justify-center sm:gap-2">
          <p>
            © {new Date().getFullYear()} {site.publisher}. {dict.footer.rights}
          </p>
          <span aria-hidden className="hidden sm:inline">
            ·
          </span>
          <p>{site.name}</p>
        </div>
      </div>
    </footer>
  );
}
