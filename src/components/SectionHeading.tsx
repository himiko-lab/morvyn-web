import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  body?: string;
  /** Rata tengah untuk bagian yang berdiri sendiri, rata kiri untuk yang berdampingan. */
  align?: "center" | "start";
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <p className="text-sm font-bold tracking-[0.14em] text-[color:var(--brand-blue)] uppercase">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-[clamp(1.85rem,3.6vw,2.75rem)] leading-[1.15] font-extrabold tracking-tight text-balance">
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={140}>
          <p className="mt-5 text-lg leading-relaxed text-[color:var(--foreground)]/60">
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
