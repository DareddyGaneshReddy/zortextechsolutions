import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/SectionHeader";
import type { Faq } from "@/data/faqs";

interface FaqSectionProps {
  items: Faq[];
  title?: string;
  description?: string;
  eyebrow?: string;
}

export function FaqSection({
  items,
  title = "Frequently asked questions",
  description,
  eyebrow = "FAQ",
}: FaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="section-y">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          {...(description ? { description } : {})}
        />
        <Accordion type="single" collapsible className="mt-10 w-full">
          {items.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="mb-3 overflow-hidden rounded-xl border border-border bg-card px-4 shadow-soft last:mb-0"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
