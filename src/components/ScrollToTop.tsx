"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Posisi gulir terakhir per alamat, untuk tombol Kembali/Maju. */
const savedScroll = new Map<string, number>();

/**
 * Menggulir ke awal halaman, dengan animasi, setiap kali pindah halaman.
 *
 * Kenapa perlu: perpindahan lewat `<Link>` terjadi di peramban tanpa memuat
 * ulang, dan Next.js hanya menggeser sedikit ke elemen pertama halaman baru,
 * bukan ke puncaknya. Dari beranda yang sudah digulir jauh ke bawah, halaman
 * fitur jadi terbuka di tengah-tengah, dan pembaca harus menggulir ke atas
 * sendiri untuk mulai membacanya.
 *
 * Animasinya ditulis sendiri dengan requestAnimationFrame, bukan
 * `behavior: "smooth"` bawaan: lamanya gulir bawaan peramban berbeda-beda dan
 * bisa lama sekali untuk jarak beberapa ribu piksel. Di sini lamanya dibatasi
 * 350 sampai 800 ms dengan perlambatan di ujung, jadi terasa sama di jarak
 * berapa pun.
 *
 * Yang sengaja TIDAK digulir ke atas:
 * - Tombol Kembali/Maju peramban. Di situ pembaca berharap kembali ke posisi
 *   terakhirnya. Posisi itu dipulihkan komponen ini sendiri, bukan peramban:
 *   saat kembali, Next.js mencatat ulang entri riwayatnya selagi halaman
 *   masih di puncak, sehingga posisi yang diingat peramban hilang.
 * - Alamat berjangkar (`/#fitur`). Tujuannya memang bagian tertentu.
 *
 * Pembaca yang menyalakan "kurangi gerak" langsung dipindah ke atas tanpa
 * animasi. Animasinya juga berhenti begitu pembaca menggulir sendiri.
 */
export function ScrollToTop() {
  const pathname = usePathname();
  const previous = useRef(pathname);
  const fromHistory = useRef(false);

  useEffect(() => {
    // Posisi halaman yang ditinggalkan dicatat di tiga saat, supaya tidak
    // bergantung pada satu mekanisme saja:
    //
    // 1. Setiap kali pembaca menggulir. Selama perpindahan Kembali/Maju
    //    belum selesai, pencatatan ini berhenti: alamatnya sudah alamat
    //    tujuan, tapi isinya masih halaman lama, dan gulir di sela itu akan
    //    menimpa posisi yang mau dipulihkan.
    // 2. Saat tautan diklik, sebelum Next.js berpindah halaman.
    // 3. Saat Kembali/Maju ditekan, atas nama halaman yang ditinggalkan.
    const onScroll = () => {
      if (fromHistory.current) return;
      savedScroll.set(window.location.pathname, window.scrollY);
    };
    const onClick = (event: MouseEvent) => {
      if ((event.target as Element | null)?.closest?.("a[href]")) {
        savedScroll.set(window.location.pathname, window.scrollY);
      }
    };
    const onPopState = () => {
      fromHistory.current = true;
      savedScroll.set(previous.current, window.scrollY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick, { capture: true });
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick, { capture: true });
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  useEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;

    if (fromHistory.current) {
      fromHistory.current = false;
      const saved = savedScroll.get(pathname);
      if (saved !== undefined) window.scrollTo({ top: saved, behavior: "instant" });
      return;
    }
    if (window.location.hash) return;

    const start = window.scrollY;
    if (start <= 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const duration = Math.min(800, Math.max(350, start * 0.2));
    const startedAt = performance.now();
    let frame = 0;

    // Perlambatan di ujung (ease-out kubik): cepat di awal, mendarat pelan.
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const t = Math.min(1, (now - startedAt) / duration);
      // `instant` wajib: tanpa itu, `scroll-behavior: smooth` di globals.css
      // mengubah setiap langkah kecil ini jadi animasinya sendiri.
      window.scrollTo({ top: Math.round(start * (1 - ease(t))), behavior: "instant" });
      if (t < 1) frame = requestAnimationFrame(step);
    };

    // Gulir dari pembaca sendiri menang atas animasi ini.
    const cancel = () => cancelAnimationFrame(frame);
    const options = { passive: true, once: true } as const;
    window.addEventListener("wheel", cancel, options);
    window.addEventListener("touchstart", cancel, options);
    window.addEventListener("keydown", cancel, options);

    frame = requestAnimationFrame(step);
    return () => {
      cancel();
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", cancel);
    };
  }, [pathname]);

  return null;
}
