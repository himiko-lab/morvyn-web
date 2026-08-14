import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Penanda sebaris di dalam teks dokumen hukum.
 *
 * Empat bentuk, semuanya meniru Markdown:
 *
 *     **tebal**            -> <strong>
 *     *miring*             -> <em>
 *     `kode`               -> <code>
 *     [label](alamat)      -> <a> atau <Link>
 *
 * Kenapa tidak menyimpan JSX saja di berkas isinya? Karena aturan pertama
 * README: tidak ada teks yang ditulis di komponen, semuanya lewat `content/`.
 * Menaruh JSX di sana sama saja memindahkan komponen ke folder isi, dan
 * kalimatnya jadi tercerai-berai di antara tag sehingga sulit dibaca ulang —
 * padahal dokumen hukum justru sering dibaca ulang.
 *
 * Kenapa tidak memakai pustaka Markdown? Karena yang dibutuhkan cuma empat
 * bentuk di atas, dan seluruh isinya ditulis sendiri di repo ini — tidak ada
 * masukan dari luar yang perlu dibersihkan. Menarik pustaka penuh untuk itu
 * berarti menambah beban unduh pada satu-satunya halaman yang paling wajib
 * ringan dan terbaca tanpa JavaScript.
 *
 * Yang TIDAK didukung: penanda bersarang. `**tebal dengan [tautan](...)`
 * di dalamnya** tidak akan terbaca sebagaimana diharapkan. Kalau suatu saat
 * benar-benar diperlukan, pecah kalimatnya — jangan menambah kerumitan di
 * sini.
 */
const INLINE_SOURCE =
  "\\*\\*([^*]+)\\*\\*|\\*([^*]+)\\*|`([^`]+)`|\\[([^\\]]+)\\]\\(([^)]+)\\)";

/**
 * Pola baru untuk setiap pemanggilan, bukan satu tetapan bersama.
 *
 * Regex ber-flag `g` menyimpan `lastIndex` di dalam dirinya sendiri, jadi satu
 * objek yang dipakai bergantian oleh banyak pemanggil akan melanjutkan dari
 * posisi pemanggil sebelumnya — dan potongan awal teks berikutnya hilang tanpa
 * pesan kesalahan apa pun. Menyetel ulang `lastIndex` di awal fungsi memang
 * bisa, tapi itu berarti mengubah nilai di luar komponen, yang justru ditolak
 * aturan `react-hooks/immutability`. Membuatnya baru menghapus persoalannya
 * alih-alih menambalnya.
 */
function inlinePattern(): RegExp {
  return new RegExp(INLINE_SOURCE, "g");
}

/** Kelas untuk `kode`. Dipakai juga oleh <dt> di LegalPage. */
export const codeClass =
  "rounded-md border border-[color:var(--border)] bg-[color:var(--surface-secondary)] px-1.5 py-0.5 font-mono text-[0.875em] text-[color:var(--foreground)]/80";

const linkClass =
  "font-medium text-[color:var(--link)] underline decoration-[color:var(--link)]/30 underline-offset-[3px] transition-colors hover:decoration-[color:var(--link)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)]";

function renderLink(label: string, href: string, key: number): ReactNode {
  // Tautan dalam situs ini sendiri lewat <Link> supaya perpindahannya tidak
  // memuat ulang seluruh halaman.
  if (href.startsWith("/")) {
    return (
      <Link key={key} href={href} className={linkClass}>
        {label}
      </Link>
    );
  }

  // mailto: dibuka oleh aplikasi surel, bukan tab baru — target dan rel tidak
  // berlaku di situ.
  const isMail = href.startsWith("mailto:");
  return (
    <a
      key={key}
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer noopener"}
      className={linkClass}
    >
      {label}
    </a>
  );
}

/** Mengubah satu string berpenanda menjadi deretan simpul React. */
export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  const pattern = inlinePattern();

  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index));
    }

    const [, bold, italic, code, linkLabel, linkHref] = match;

    if (bold !== undefined) {
      nodes.push(
        <strong key={key++} className="font-bold text-[color:var(--foreground)]">
          {bold}
        </strong>,
      );
    } else if (italic !== undefined) {
      nodes.push(<em key={key++}>{italic}</em>);
    } else if (code !== undefined) {
      nodes.push(
        <code key={key++} className={codeClass}>
          {code}
        </code>,
      );
    } else if (linkLabel !== undefined && linkHref !== undefined) {
      nodes.push(renderLink(linkLabel, linkHref, key++));
    }

    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  // Setiap elemen di dalam `nodes` sudah membawa key-nya sendiri; potongan
  // teks biasa berupa string, dan string di dalam larik tidak butuh key.
  return <>{nodes}</>;
}
