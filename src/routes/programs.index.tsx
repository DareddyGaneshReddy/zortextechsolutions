import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { PageHero } from "@/components/PageHero";
import { ProgramCard } from "@/components/ProgramCard";
import { SectionHeader } from "@/components/SectionHeader";
import { generalFaqs } from "@/data/faqs";
import { programs } from "@/data/programs";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programs — Zortex Edge, Elite & Externship | Zortex Solutions" },
      {
        name: "description",
        content:
          "Explore Zortex programmes: Edge offline training, Elite online training and the Zortex Externship with projects for external organizations.",
      },
      { property: "og:title", content: "Programs | Zortex Solutions" },
      {
        property: "og:description",
        content:
          "Offline training, online training and an externship built around industry-partner projects—choose the path that moves you toward a technical role.",
      },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="A complete path from learning to employability"
        description="Build strong foundations through Edge or Elite, then turn your knowledge into credible workplace experience through Zortex Externship."
        crumbs={[{ label: "Programs" }]}
      />

      <section className="section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="What every programme includes"
            title="Built to make you a stronger job candidate"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {[
              "A structured, practical syllabus",
              "Hands-on coding in every module",
              "Mentor guidance and code review",
              "Portfolio work you can explain in interviews",
              "Career direction for your chosen course",
              "Access to Zortex learning resources",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft"
              >
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={generalFaqs.slice(0, 5)} title="Programme questions" />

      <CtaBand
        title="Not sure how to become job ready?"
        description="Tell us what you know today and the role you want. We'll help you identify the right next step."
        primaryLabel="Contact Us"
        primaryTo="/contact"
      />
    </>
  );
}
