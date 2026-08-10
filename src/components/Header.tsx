"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonVariants } from "@heroui/react";
import { GooglePlayLogo, List, Translate, X } from "@phosphor-icons/react/ssr";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { altLocale, localeHref, site, type Dictionary, type Locale } from "@/content";

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

  return (
    <header
      className={`glass sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-[color:var(--border)]" : "border-transparent"
      }`}
    >
      <div className="shell flex h-18 items-center justify-between gap-4">
        <Link
          href={localeHref(locale)}
          className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--focus)]"
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
            href={site.playStoreUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={`${buttonVariants({ variant: "primary", size: "md" })} hidden md:inline-flex`}
          >
            <GooglePlayLogo size={18} weight="fill" />
            {dict.nav.download}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full border border-[color:var(--border)] text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--surface-secondary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)] lg:hidden"
          >
            {open ? <X size={18} /> : <List size={18} />}
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
                href={site.playStoreUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={`${buttonVariants({ variant: "primary", size: "md" })} flex-1`}
              >
                <GooglePlayLogo size={18} weight="fill" />
                {dict.nav.download}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
