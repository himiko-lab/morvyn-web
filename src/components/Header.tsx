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
  //
  // Yang mengunci adalah aturan `body.menu-open` di globals.css, bukan gaya
  // inline dari sini. Di sana kuncinya dibatalkan sendiri mulai lebar `lg`,
  // sehingga halaman tidak mungkin tertinggal terkunci di layar yang menu
  // ponselnya sudah tidak ada. Lihat catatan panjangnya di berkas itu.
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
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

  // Menutup menu begitu layarnya melebar sampai `lg`.
  //
  // Tanpa ini halaman bisa terkunci total tanpa jalan keluar: panel menunya
  // `lg:hidden` sehingga lenyap saat layar melebar, tombol hamburgernya juga
  // `lg:hidden` sehingga ikut lenyap, tapi `open` tetap true dan efek di atas
  // menahan `body { overflow: hidden }`. Yang tersisa bagi pengguna adalah
  // halaman yang tidak bisa digulir dan tidak ada satu pun tombol untuk
  // membukanya kembali — hanya muat ulang yang menolong. Terpicu nyata saat
  // tablet diputar ke lanskap atau ponsel lipat dibentangkan selagi menu
  // terbuka.
  //
  // 1024px = titik henti `lg` Tailwind.
  //
  // Sengaja mendengarkan `resize`, bukan peristiwa `change` milik matchMedia.
  // Keduanya seharusnya setara, tapi `change` tidak selalu terkirim ketika
  // ukuran viewport diubah dari luar peramban — terbukti saat menguji ini:
  // media query-nya sudah cocok, panelnya sudah lenyap, tapi peristiwanya
  // tidak pernah sampai dan halaman tetap terkunci. `resize` jauh lebih
  // terjamin, dan pemeriksaannya cukup murah untuk dijalankan sesering itu.
  useEffect(() => {
    if (!open) return;
    function closeIfWide() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    closeIfWide();
    window.addEventListener("resize", closeIfWide);
    return () => window.removeEventListener("resize", closeIfWide);
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
        <>
          {/* Bidang gelap yang menutupi sisa halaman.
              Selagi menu terbuka, halaman di belakangnya terlihat tapi
              terkunci. Tanpa bidang ini, mengetuknya tidak menghasilkan apa
              pun dan situsnya terasa macet — padahal mengetuk di luar menu
              adalah cara paling naluriah menutupnya di ponsel. Sekaligus
              memberi tahu secara visual bagian mana yang sedang aktif. */}
          <button
            type="button"
            aria-label={dict.nav.closeMenu}
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 top-[4.5rem] bottom-0 -z-10 cursor-default bg-[color:var(--brand-ink)]/25 lg:hidden"
          />

          {/* max-h + overflow-y: di lanskap ponsel tinggi layarnya cuma ~360px
              sementara panel ini butuh ~382px. Sebelumnya baris terbawah
              (ganti bahasa, tema, unduh) jatuh di luar layar dan TIDAK BISA
              dijangkau sama sekali, karena `body` sedang terkunci dan panelnya
              sendiri tidak bisa digulir.

              100dvh, bukan 100vh: di peramban ponsel bilah alamat menyusut dan
              memuai saat digulir, dan 100vh selalu memakai ukuran terbesarnya
              sehingga tetap meleset. 4.5rem itu tinggi header (h-18).

              overscroll-contain menahan guliran supaya tidak merembet ke
              halaman di belakangnya saat sudah mentok. */}
          <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-[color:var(--border)] bg-[color:var(--background)] lg:hidden">
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

              {/* h-11 di ketiganya. Baris ini terlewat waktu target sentuh
                  dirapikan: isinya masih 40px, padahal justru di sinilah
                  ganti bahasa dan ganti tema satu-satunya bisa dilakukan
                  dari ponsel. */}
              <div className="mt-3 flex items-center gap-2 border-t border-[color:var(--border)] pt-4">
                <Link
                  href={localeHref(other)}
                  aria-label={dict.nav.switchTo}
                  onClick={() => setOpen(false)}
                  className="flex h-11 items-center gap-1.5 rounded-full border border-[color:var(--border)] px-3.5 text-sm font-semibold"
                >
                  <Translate size={16} />
                  {other.toUpperCase()}
                </Link>
                <ThemeToggle label={dict.nav.toggleTheme} sizeClass="size-11" />
                <a
                  href={downloadHref}
                  {...externalProps}
                  onClick={() => setOpen(false)}
                  className={`${buttonVariants({ variant: "primary", size: "md" })} h-11 flex-1`}
                >
                  <GooglePlayLogo size={18} weight="fill" />
                  {ctaLabel}
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
