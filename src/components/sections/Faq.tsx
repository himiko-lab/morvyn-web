import { Accordion } from "@heroui/react";
import { CaretDown } from "@phosphor-icons/react/ssr";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { faqItems, type Dictionary } from "@/content";

/**
 * Tanya jawab memakai Accordion HeroUI, yang di baliknya adalah DisclosureGroup
 * milik React Aria — jadi navigasi papan ketik dan atribut ARIA-nya sudah benar
 * tanpa perlu ditambal.
 */
export function Faq({ dict }: { dict: Dictionary }) {
  return (
    <section id="tanya" className="scroll-mt-24 py-14 sm:py-20 md:py-28">
      <div className="shell">
        <SectionHeading eyebrow={dict.faq.eyebrow} title={dict.faq.title} />

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion variant="surface" className="w-full">
              {faqItems(dict).map((item, index) => (
                <Accordion.Item key={item.q} id={`faq-${index}`}>
                  <Accordion.Heading>
                    <Accordion.Trigger className="text-left text-base font-semibold sm:text-lg">
                      {item.q}
                      <Accordion.Indicator>
                        <CaretDown size={18} />
                      </Accordion.Indicator>
                    </Accordion.Trigger>
                  </Accordion.Heading>
                  <Accordion.Panel>
                    <Accordion.Body className="leading-relaxed text-[color:var(--foreground)]/65">
                      {item.a}
                    </Accordion.Body>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
