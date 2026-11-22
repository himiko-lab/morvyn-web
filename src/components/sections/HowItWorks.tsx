import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { VideoEmbed } from "../VideoEmbed";
import type { Dictionary } from "@/content";
import { introVideo } from "@/content/video";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section id="cara" className="scroll-mt-24 py-14 sm:py-20 md:py-28">
      <div className="shell">
        <SectionHeading eyebrow={dict.how.eyebrow} title={dict.how.title} />

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {dict.how.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <li className="card-brand relative h-full p-8">
                <span className="gradient-brand grid size-11 place-items-center rounded-full text-lg font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-[color:var(--foreground)]/60">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* Video perkenalan. Teksnya di kiri, pemutarnya di kanan; di layar
            sempit keduanya menumpuk dengan teks di atas. */}
        <Reveal delay={120}>
          <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
            <div>
              <h3 className="text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.2] font-extrabold tracking-tight text-balance">
                {dict.how.video.heading}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-[color:var(--foreground)]/60">
                {dict.how.video.body}
              </p>
              <p className="mt-4 text-sm text-[color:var(--foreground)]/45">{dict.how.video.note}</p>
            </div>
            <VideoEmbed title={introVideo.title} playLabel={dict.how.video.playLabel} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
