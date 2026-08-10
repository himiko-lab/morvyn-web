import { Reveal } from "../Reveal";
import type { Dictionary } from "@/content";

/**
 * Tiga angka di bawah hero.
 *
 * Semuanya fakta produk yang bisa diperiksa (jumlah menu, jumlah portal berita,
 * jumlah bahasa) — bukan jumlah unduhan atau rating, yang belum ada sumbernya.
 * Lihat README kalau mau menggantinya dengan angka Play Console.
 */
export function Stats({ dict }: { dict: Dictionary }) {
  return (
    <section className="pb-6">
      <div className="shell">
        <Reveal>
          <dl className="card-brand grid gap-px overflow-hidden bg-[color:var(--border)] sm:grid-cols-3">
            {dict.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[color:var(--surface)] px-8 py-9 text-center"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="text-gradient-brand block text-5xl font-extrabold tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-base font-semibold">
                    {stat.label}
                  </span>
                  <span className="mt-1 block text-sm text-[color:var(--foreground)]/50">
                    {stat.detail}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
