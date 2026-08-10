import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import type { Dictionary } from "@/content";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section id="cara" className="scroll-mt-24 py-20 md:py-28">
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
      </div>
    </section>
  );
}
