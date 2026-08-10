import { Alarm, ChartLineUp, NotePencil, Target } from "@phosphor-icons/react/ssr";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { featureColor, featureIcons } from "../featureIcons";
import type { Dictionary } from "@/content";

/**
 * Bagian pembeda: satu catatan yang bercabang ke tiga menu lain.
 *
 * Peragaannya digambar dengan HTML biasa, bukan gambar — supaya teksnya bisa
 * ikut diterjemahkan, bisa dipilih, dan terbaca oleh pembaca layar.
 */
export function Connected({ dict }: { dict: Dictionary }) {
  const branches = [
    {
      icon: Alarm,
      hue: featureIcons.agenda.hue,
      line: dict.connected.noteLines[0],
      label: dict.connected.linkLabels.agenda,
    },
    {
      icon: ChartLineUp,
      hue: featureIcons.finance.hue,
      line: dict.connected.noteLines[1],
      label: dict.connected.linkLabels.finance,
    },
    {
      icon: Target,
      hue: featureIcons.habits.hue,
      line: dict.connected.noteLines[2],
      label: dict.connected.linkLabels.habits,
    },
  ];

  return (
    <section
      id="terhubung"
      className="relative scroll-mt-24 overflow-hidden py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[30rem] -translate-y-1/2 opacity-[0.07] blur-[120px]"
        style={{ backgroundColor: "var(--brand-violet)" }}
      />

      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={dict.connected.eyebrow}
            title={dict.connected.title}
            body={dict.connected.body}
            align="start"
          />
        </div>

        <Reveal delay={120}>
          <div className="card-brand p-6 sm:p-8">
            {/* Kartu catatan */}
            <div className="flex items-center gap-3 border-b border-[color:var(--border)] pb-5">
              <span
                className="grid size-10 place-items-center rounded-xl text-white"
                style={{ backgroundColor: featureColor(featureIcons.notes.hue) }}
              >
                <NotePencil size={20} weight="fill" />
              </span>
              <div>
                <p className="font-bold">{dict.connected.noteTitle}</p>
                <p className="text-sm text-[color:var(--foreground)]/45">
                  {dict.features.notes.name}
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-3">
              {branches.map((branch) => {
                const color = featureColor(branch.hue);
                const Icon = branch.icon;
                return (
                  <li
                    key={branch.label}
                    className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <p className="font-medium">{branch.line}</p>
                    </div>

                    {/* Garis siku yang menyambungkan poin catatan ke menu tujuannya. */}
                    <div className="mt-3 flex items-center gap-2.5 pl-[0.3rem]">
                      <span
                        aria-hidden
                        className="h-5 w-4 rounded-bl-md border-b-2 border-l-2"
                        style={{ borderColor: color, opacity: 0.45 }}
                      />
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          color,
                          backgroundColor: `color-mix(in oklab, ${color} 12%, transparent)`,
                        }}
                      >
                        <Icon size={13} weight="fill" />
                        {branch.label}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
