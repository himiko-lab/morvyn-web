"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Jeda sebelum elemen muncul, dalam milidetik. Untuk memberi efek berurutan. */
  delay?: number;
  className?: string;
  /** Tag pembungkus. Bawaan `div`. */
  as?: ElementType;
}

/**
 * Memunculkan isinya saat masuk viewport.
 *
 * Yang menyembunyikan elemen adalah CSS `.js .reveal`, dan kelas `js` baru
 * dipasang di <html> oleh skrip di BaseHtml. Jadi kalau JavaScript gagal
 * dimuat, kelas itu tidak pernah ada dan seluruh isi halaman tetap terbaca —
 * bukan halaman kosong.
 *
 * Kelas `is-visible` ditambahkan langsung ke node lewat classList, bukan lewat
 * state React: pengamatnya cuma perlu memberi tahu CSS, dan tidak ada satu pun
 * bagian React lain yang perlu tahu elemen ini sudah terlihat atau belum.
 *
 * Pengguna yang mengaktifkan "kurangi gerak" melewati animasinya sama sekali;
 * lihat blok prefers-reduced-motion di globals.css.
 */
export function Reveal({ children, delay = 0, className = "", as }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
