"use client";

import { Moon, Sun } from "@phosphor-icons/react/ssr";

const STORAGE_KEY = "morvyn-theme";

/**
 * Tombol terang/gelap.
 *
 * Kedua ikonnya selalu ada di DOM; yang menentukan mana yang tampil adalah CSS
 * yang membaca `data-theme` pada <html> (lihat globals.css bagian "Tombol
 * tema"). Karena atribut itu sudah dipasang skrip di BaseHtml sebelum halaman
 * digambar, ikon yang benar langsung muncul — tidak ada tombol kosong yang
 * berkedip selagi React menghidrasi.
 */
export function ThemeToggle({
  label,
  /**
   * Kelas ukuran. Bawaannya 40px, dipakai di baris header layar lebar tempat
   * tetikuslah yang menekannya dan tingginya harus sepadan dengan tombol di
   * sebelahnya. Di dalam menu ponsel dikirim `size-11` (44px), karena di sana
   * yang menekan adalah jari dan tombol ini satu-satunya jalan mengganti tema.
   */
  sizeClass = "size-10",
}: {
  label: string;
  sizeClass?: string;
}) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Mode penyamaran memblokir localStorage. Tema tetap berganti untuk sesi
      // ini, hanya tidak diingat setelah tab ditutup.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className={`grid ${sizeClass} shrink-0 place-items-center rounded-full border border-[color:var(--border)] text-[color:var(--foreground)]/70 transition-colors hover:bg-[color:var(--surface-secondary)] hover:text-[color:var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)]`}
    >
      <Moon size={18} className="theme-icon theme-icon--moon" />
      <Sun size={18} className="theme-icon theme-icon--sun" />
    </button>
  );
}
