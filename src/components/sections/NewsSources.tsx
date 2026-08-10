import { SectionHeading } from "../SectionHeading";
import { newsSources, type Dictionary } from "@/content";

/**
 * Pita berjalan berisi 27 portal berita.
 *
 * Sama seperti pita di situs MOGLE: berisi DUA daftar yang isinya harus persis
 * sama. Animasinya menggeser jalur tepat 50% dari lebarnya, sehingga grup kedua
 * mengambil alih posisi grup pertama tanpa sambungan terlihat. Kalau daftar
 * portalnya berubah, kedua daftar ikut berubah — karena keduanya dibangun dari
 * array `newsSources` yang sama, itu terjadi dengan sendirinya.
 *
 * Kalau sistem pengguna meminta pengurangan gerak, animasinya berhenti dan
 * pita berubah jadi daftar statis yang bisa digulir tangan.
 */
export function NewsSources({ dict }: { dict: Dictionary }) {
  return (
    <section className="overflow-hidden py-14 sm:py-20 md:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow={dict.news.eyebrow}
          title={dict.news.title}
          body={dict.news.body}
        />
      </div>

      <div className="marquee mt-12" aria-label={dict.news.title}>
        <div className="marquee__track">
          <SourceList />
          <SourceList ariaHidden />
        </div>
      </div>
    </section>
  );
}

function SourceList({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul className="marquee__group" aria-hidden={ariaHidden || undefined}>
      {newsSources.map((source) => (
        <li
          key={source}
          className="card-brand shrink-0 px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-[color:var(--foreground)]/70"
        >
          {source}
        </li>
      ))}
    </ul>
  );
}
