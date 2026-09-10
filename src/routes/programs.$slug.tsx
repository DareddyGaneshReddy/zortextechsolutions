import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles, Target, Users } from "lucide-react";

import { FaqSection } from "@/components/FaqSection";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import { getProgram } from "@/data/programs";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return { name: program.name, summary: program.summary, slug: program.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Program not found | Zortex Solutions" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.name} | Zortex Solutions`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/programs/${loaderData.slug}` },
      ],
      links: [{ rel: "canonical", href: `/programs/${loaderData.slug}` }],
    };
  },
  component: ProgramDetailPage,
});

function ProgramDetailPage() {
  const { slug } = Route.useParams();
  const program = getProgram(slug);

  if (!program) return null;

  return (
    <>
      <PageHero
        eyebrow={program.mode}
        title={program.name}
        description={program.tagline}
        crumbs={[{ label: "Programs", to: "/programs" }, { label: program.name }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="hero" size="lg">
            <a href="#enquiry">
              Enquire Now
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outlineBrand" size="lg">
            <a
              href={whatsappLink(`Hi, I'd like to know more about the ${program.name} programme.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with Us
            </a>
          </Button>
        </div>
      </PageHero>

      {/* Overview */}
      <section className="section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="min-w-0">
              <SectionHeader
                align="left"
                eyebrow="Overview"
                title={`What ${program.name} is`}
                className="max-w-none"
              />
              <div className="mt-6 space-y-4">
                {program.overview.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              {program.highlights ? (
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {program.highlights.map((highlight) => (
                    <div
                      key={highlight.title}
                      className="rounded-2xl border border-primary/20 bg-primary-soft/50 p-5"
                    >
                      <Sparkles aria-hidden="true" className="size-5 text-primary" />
                      <h3 className="mt-3 text-base font-bold text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <aside className="min-w-0">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="flex items-center gap-2 text-base font-bold text-foreground">
                  <Users aria-hidden="true" className="size-4 text-primary" />
                  Who it's for
                </h2>
                <ul className="mt-4 space-y-3">
                  {program.audience.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="flex items-center gap-2 text-base font-bold text-foreground">
                  <Target aria-hidden="true" className="size-4 text-primary" />
                  What to expect
                </h2>
                <ul className="mt-4 space-y-3">
                  {program.expectations.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader eyebrow="Key benefits" title={`Why students choose ${program.name}`} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {program.benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <h3 className="text-base font-bold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Learning methodology"
            title="How the programme is delivered"
            description="A repeatable cycle designed so learning turns into working software."
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {program.approach.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="font-display text-sm font-bold text-primary">
                  Step 0{index + 1}
                </span>
                <h3 className="mt-2 text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FaqSection items={program.faqs} title={`${program.name} — questions`} />

      {/* Enquiry */}
      <section id="enquiry" className="border-t border-border bg-surface section-y scroll-mt-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Enquiry"
            title={`Enquire about ${program.name}`}
            description="Share your details and our team will get back to you with everything you need to know."
          />
          <LeadForm
            className="mt-10"
            source={`program:${program.slug}`}
            submitLabel="Send Enquiry"
            defaultProgram={program.name}
            showProgram
            showCourse
          />
        </div>
      </section>
    </>
  );
}
