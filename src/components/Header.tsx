"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonVariants } from "@heroui/react";
import { GooglePlayLogo, List, Translate, X } from "@phosphor-icons/react/ssr";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import {
  altLocale,
  downloadHref,
  downloadIsExternal,
  localeHref,
  site,
  type Dictionary,
  type Locale,
} from "@/content";

interface HeaderProps {
  dict: Dictionary;
  locale: Locale;
}

export function Header({ dict, locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "#fitur", label: dict.nav.features },
    { href: "#terhubung", label: dict.nav.connected },
    { href: "#cara", label: dict.nav.how },
    { href: "#tanya", label: dict.nav.faq },
  ];

  // Garis tepi bawah hanya muncul setelah halaman digulir, supaya header
  // menyatu dengan hero saat masih di puncak.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mengunci guliran badan halaman selagi menu ponsel terbuka.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Esc menutup menu — pengguna papan ketik mengharapkannya.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const other = altLocale(locale);

  // "Unduh" hanya benar kalau memang ada yang bisa diunduh.
  const ctaLabel = site.playStoreLive ? dict.nav.download : dict.comingSoon.navLabel;
  const externalProps = downloadIsExternal
    ? ({ target: "_blank", rel: "noreferrer noopener" } as const)
    : {};

  return (
    <header
      className={`glass sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-[color:var(--border)]" : "border-transparent"
      }`}
    >
      <div className="shell flex h-18 items-center justify-between gap-4">
        <Link
          href={localeHref(locale)}
          // py-2 semata-mata untuk jari: tanpa itu daerah sentuhnya hanya
          // setinggi lambangnya sendiri, 34px. Tidak mengubah tata letak,
          // karena barisnya sudah setinggi h-18 dan isinya dipusatkan.
          className="rounded-lg py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--focus)]"
        >
          <Logo />
        </Link>

        <nav aria-label="Utama" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[color:var(--foreground)]/70 transition-colors hover:bg-[color:var(--surface-secondary)] hover:text-[color:var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={localeHref(other)}
            aria-label={dict.nav.switchTo}
            className="hidden h-10 items-center gap-1.5 rounded-full border border-[color:var(--border)] px-3.5 text-sm font-semibold text-[color:var(--foreground)]/70 transition-colors hover:bg-[color:var(--surface-secondary)] hover:text-[color:var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)] sm:flex"
          >
            <Translate size={16} />
            {other.toUpperCase()}
          </Link>

          <div className="hidden sm:block">
            <ThemeToggle label={dict.nav.toggleTheme} />
          </div>

          <a
            href={downloadHref}
            {...externalProps}
            className={`${buttonVariants({ variant: "primary", size: "md" })} hidden md:inline-flex`}
          >
            <GooglePlayLogo size={18} weight="fill" />
            {ctaLabel}
          </a>

          {/* Kembaran tombol di atas untuk layar sempit. Di bawah md, tombol
              berteks itu hilang dan satu-satunya jalan ke sana adalah membuka
              menu dulu — padahal itu tindakan utama seluruh situs. Versi ini
              menahannya tetap sejangkauan ibu jari sepanjang halaman digulir.

              Selama belum terbit sengaja berteks, bukan hanya berlambang:
              lambang Google Play sendirian selalu terbaca "unduh sekarang",
              dan itu bukan yang ditawarkan halaman ini saat ini. */}
          <a
            href={downloadHref}
            {...externalProps}
            aria-label={ctaLabel}
            className={
              site.playStoreLive
                ? "grid size-11 place-items-center rounded-full bg-[color:var(--brand-blue)] text-white transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)] md:hidden"
                : "inline-flex h-11 items-center gap-1.5 rounded-full bg-[color:var(--brand-blue)] px-4 text-sm font-semibold text-white transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)] md:hidden"
            }
          >
            <GooglePlayLogo size={20} weight="fill" />
            {!site.playStoreLive && ctaLabel}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            aria-expanded={open}
            // size-11, bukan size-10: 44px adalah ukuran terkecil yang masih
            // enak ditekan jari, dan ini tombol yang paling sering dipakai
            // di ponsel karena seluruh navigasi ada di baliknya.
            className="grid size-11 place-items-center rounded-full border border-[color:var(--border)] text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--surface-secondary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)] lg:hidden"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--background)] lg:hidden">
          <nav aria-label="Utama (ponsel)" className="shell flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-[color:var(--surface-secondary)]"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 flex items-center gap-2 border-t border-[color:var(--border)] pt-4">
              <Link
                href={localeHref(other)}
                aria-label={dict.nav.switchTo}
                className="flex h-10 items-center gap-1.5 rounded-full border border-[color:var(--border)] px-3.5 text-sm font-semibold"
              >
                <Translate size={16} />
                {other.toUpperCase()}
              </Link>
              <ThemeToggle label={dict.nav.toggleTheme} />
              <a
                href={downloadHref}
                {...externalProps}
                onClick={() => setOpen(false)}
                className={`${buttonVariants({ variant: "primary", size: "md" })} flex-1`}
              >
                <GooglePlayLogo size={18} weight="fill" />
                {ctaLabel}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
