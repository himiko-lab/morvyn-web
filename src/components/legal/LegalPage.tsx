import Link from "next/link";
import { ArrowUpRight, CaretRight, EnvelopeSimple } from "@phosphor-icons/react/ssr";
import { Header } from "../Header";
import { Footer } from "../sections/Footer";
import { RichText } from "./RichText";
import {
  altLocale,
  getDictionary,
  localeHomePath,
  site,
  type Locale,
} from "@/content";
import {
  getLegalDocument,
  legalEffectiveIso,
  legalPath,
  legalUi,
  otherLegalKind,
  type LegalBlock,
  type LegalKind,
} from "@/content/legal";

/**
 * Kerangka bersama Kebijakan Privasi dan Ketentuan Layanan.
 *
 * Dipakai empat kali — dua dokumen kali dua bahasa — dan seluruh perbedaannya
 * ada di `content/legal/`. Tidak ada satu kalimat pun yang ditulis di berkas
 * ini.
 *
 * TIDAK ADA `Reveal` di sini, berbeda dengan beranda. Dua alasan:
 *
 * 1. Halaman ini harus terbaca utuh tanpa JavaScript. `Reveal` sebenarnya
 *    sudah aman untuk itu (penyembunyiannya digantung pada kelas `js`), tapi
 *    halaman yang isinya wajib terbaca pemeriksa Google lebih baik tidak
 *    bergantung pada rantai itu sama sekali.
 * 2. Animasi muncul-satu-per-satu pada dokumen sepanjang ini justru
 *    mengganggu: yang dilakukan orang di sini adalah membaca dan mencari,
 *    bukan menikmati.
 */
export function LegalPage({ kind, locale }: { kind: LegalKind; locale: Locale }) {
  const dict = getDictionary(locale);
  const doc = getLegalDocument(kind, locale);
  const ui = legalUi[locale];
  const other = otherLegalKind(kind);
  const otherLocale = altLocale(locale);
  const home = localeHomePath(locale);

  // Nama dokumen pasangannya diambil dari salinan footer yang sudah ada, jadi
  // istilahnya tidak mungkin berbeda antara footer dan tautan silang di sini.
  const otherTitle = other === "privacy" ? dict.footer.privacy : dict.footer.terms;

  return (
    <>
      {/* Tautan jangkar di header dan footer menunjuk bagian-bagian beranda,
          yang tidak ada di halaman ini. `anchorBase` mengubahnya jadi
          "/#fitur" alih-alih "#fitur" — tanpa itu seluruh menu jadi mati saat
          dibuka dari sini.

          `altHref` membuat tombol ganti bahasa menuju halaman yang sama dalam
          bahasa lain, bukan kembali ke beranda. Pembaca yang sedang di tengah
          Kebijakan Privasi hampir pasti ingin Privacy Policy, bukan halaman
          depan. */}
      <Header
        dict={dict}
        locale={locale}
        anchorBase={home}
        altHref={legalPath[kind][otherLocale]}
      />

      <main className="shell">
        {/* max-w-3xl ditulis di dalam `.shell`, bukan ditumpuk pada kelasnya.
            Keduanya sama-sama utilitas, jadi yang menang cuma ditentukan
            urutan berkas — dan max-width beranda 76rem itu terlalu lebar untuk
            dibaca sebagai prosa. Baris teks yang enak dibaca berhenti di
            sekitar 75 karakter. */}
        <article className="mx-auto max-w-3xl py-12 md:py-16">
          {/* --- Kepala halaman ------------------------------------------ */}

          <nav aria-label={ui.home} className="text-sm">
            <Link
              href={home}
              className="inline-flex items-center gap-1 text-[color:var(--foreground)]/55 transition-colors hover:text-[color:var(--brand-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)]"
            >
              {ui.home}
              <CaretRight size={12} weight="bold" />
            </Link>
            <span className="ml-1 text-[color:var(--foreground)]/40">
              {doc.title}
            </span>
          </nav>

          <h1 className="mt-5 text-[clamp(2rem,4.4vw,3rem)] leading-[1.12] font-extrabold tracking-tight text-balance">
            {doc.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-[color:var(--foreground)]/65">
            {doc.lead}
          </p>

          <p className="mt-6 text-sm text-[color:var(--foreground)]/50">
            {doc.effectiveLabel}{" "}
            {/* dateTime dalam bentuk ISO supaya tanggalnya terbaca mesin,
                sementara yang tampil tetap ditulis menurut kebiasaan tiap
                bahasa. */}
            <time dateTime={legalEffectiveIso} className="font-semibold text-[color:var(--foreground)]/70">
              {doc.effectiveDate}
            </time>
          </p>

          {/* --- Ringkasan ----------------------------------------------- */}

          <section
            aria-labelledby="ringkasan"
            className="card-brand mt-10 p-6 md:p-7"
          >
            <h2
              id="ringkasan"
              className="text-sm font-bold tracking-[0.14em] text-[color:var(--brand-blue)] uppercase"
            >
              {doc.summaryHeading}
            </h2>
            <ul className="mt-4 space-y-3">
              {doc.summary.map((line, i) => (
                <li
                  key={i}
                  className="relative pl-6 leading-relaxed text-[color:var(--foreground)]/75"
                >
                  <span
                    aria-hidden
                    className="gradient-brand absolute top-[0.6em] left-0 size-2 rounded-full"
                  />
                  <RichText text={line} />
                </li>
              ))}
            </ul>
          </section>

          {/* --- Daftar isi ---------------------------------------------- */}

          <nav aria-labelledby="daftar-isi" className="mt-10">
            <h2
              id="daftar-isi"
              className="text-sm font-bold tracking-wider text-[color:var(--foreground)]/50 uppercase"
            >
              {doc.tocHeading}
            </h2>
            {/* Dua kolom mulai sm. Di ponsel satu kolom, karena judul bagian
                seperti "Kepatuhan terhadap Kebijakan Data Pengguna Layanan
                Google API" sudah memakan dua baris sendirian. */}
            <ol className="mt-4 grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {doc.sections.map((section, i) => (
                <li key={section.id} className="flex gap-2.5 py-1.5">
                  <span className="mt-0.5 w-5 shrink-0 text-right text-sm tabular-nums text-[color:var(--foreground)]/35">
                    {i + 1}.
                  </span>
                  <a
                    href={`#${section.id}`}
                    className="text-[color:var(--foreground)]/70 transition-colors hover:text-[color:var(--brand-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)]"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* --- Isi dokumen --------------------------------------------- */}

          <div className="mt-14 space-y-12">
            {doc.sections.map((section, i) => (
              // Tanpa scroll-mt: `html { scroll-padding-top: 6rem }` di
              // globals.css sudah menyisihkan ruang untuk header yang
              // menempel, dan menambahkannya lagi di sini justru menyisakan
              // rongga kosong setinggi dua header di atas judul yang dituju.
              <section key={section.id} id={section.id}>
                <h2 className="flex gap-3 text-xl font-extrabold tracking-tight md:text-2xl">
                  <span
                    aria-hidden
                    className="shrink-0 tabular-nums text-[color:var(--brand-blue)]/45"
                  >
                    {i + 1}.
                  </span>
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.blocks.map((block, j) => (
                    <Block key={j} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* --- Kaki halaman -------------------------------------------- */}

          <div className="mt-16 grid gap-4 border-t border-[color:var(--border)] pt-10 sm:grid-cols-2">
            <Link
              href={legalPath[other][locale]}
              className="card-brand group flex items-center justify-between gap-3 p-5 transition-colors hover:border-[color:var(--brand-blue)]/40"
            >
              <span>
                <span className="block text-sm text-[color:var(--foreground)]/50">
                  {ui.alsoHeading}
                </span>
                <span className="mt-0.5 block font-bold">{otherTitle}</span>
              </span>
              <ArrowUpRight
                size={20}
                className="shrink-0 text-[color:var(--foreground)]/35 transition-colors group-hover:text-[color:var(--brand-blue)]"
              />
            </Link>

            {site.contactEmail && (
              <div className="card-brand p-5">
                <h2 className="font-bold">{ui.contactHeading}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--foreground)]/60">
                  {ui.contactBody}
                </p>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--link)] transition-colors hover:text-[color:var(--brand-violet)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--focus)]"
                >
                  <EnvelopeSimple size={16} />
                  {site.contactEmail}
                </a>
              </div>
            )}
          </div>
        </article>
      </main>

      <Footer
        dict={dict}
        locale={locale}
        anchorBase={home}
        altHref={legalPath[kind][otherLocale]}
      />
    </>
  );
}

/** Satu potong isi di dalam sebuah bagian. */
function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "p":
      return (
        <p className="leading-[1.75] text-[color:var(--foreground)]/70">
          <RichText text={block.text} />
        </p>
      );

    case "list":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="relative pl-6 leading-[1.75] text-[color:var(--foreground)]/70"
            >
              <span
                aria-hidden
                className="absolute top-[0.72em] left-1 size-1.5 rounded-full bg-[color:var(--brand-blue)]/50"
              />
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );

    case "defs":
      return (
        // <dl>, bukan <ul> berisi tanda hubung: pasangan istilah-penjelasan
        // dibacakan pembaca layar sebagai pasangan, dan daftar izin Android di
        // bawahnya memang persis itu bentuknya.
        <dl className="divide-y divide-[color:var(--border)] overflow-hidden rounded-[calc(var(--radius)*1.25)] border border-[color:var(--border)]">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="gap-x-6 gap-y-1 px-5 py-4 sm:grid sm:grid-cols-[minmax(0,13rem)_1fr]"
            >
              {/* break-words wajib di sini, bukan hiasan. Kolom kirinya
                  selebar 13rem, sementara nama izin seperti
                  FOREGROUND_SERVICE_SPECIAL_USE satu kata utuh selebar ~250px
                  dan tidak punya satu pun titik potong alami. Tanpa ini
                  hurufnya meluber keluar kotak dan menabrak kolom penjelasan
                  di sebelahnya — terlihat mulai lebar sm, persis di ukuran
                  tablet. */}
              <dt className="font-semibold break-words text-[color:var(--foreground)]/85">
                <RichText text={item.term} />
              </dt>
              <dd className="mt-1 leading-[1.7] text-[color:var(--foreground)]/65 sm:mt-0">
                <RichText text={item.text} />
              </dd>
            </div>
          ))}
        </dl>
      );
  }
}
