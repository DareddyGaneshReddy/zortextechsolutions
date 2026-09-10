import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, HeartHandshake, Linkedin, Target } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { StatsSection } from "@/components/StatsSection";
import { siteConfig } from "@/config/site";
import { team } from "@/data/team";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Zortex Solutions | Practical, Career-Oriented Learning" },
      {
        name: "description",
        content:
          "Zortex Solutions exists to close the gap between what students learn and what the industry expects — through practical training, projects and mentorship.",
      },
      { property: "og:title", content: "About | Zortex Solutions" },
      {
        property: "og:description",
        content:
          "Our mission, vision and the team behind Zortex Solutions' practical, career-oriented technical training.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We teach the way the industry actually works"
        description={`${siteConfig.name} is a training and externship company focused on helping students build practical technical skills, work on real projects and become career ready.`}
        crumbs={[{ label: "About" }]}
      />

      <section className="section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div className="min-w-0">
              <SectionHeader
                align="left"
                eyebrow="About Zortex"
                title="A training company built around outcomes"
                className="max-w-none"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Zortex Solutions works with students who want more than a certificate. We run
                  structured technical training in classroom and online formats, and an externship
                  programme where students are assigned real-time projects.
                </p>
                <p>
                  Every course is built to end in something that runs — code you wrote, understood
                  and can explain. That is what makes a difference in an interview, and it is the
                  standard we hold every programme to.
                </p>
                <p>
                  Our mentors work alongside students rather than lecturing at them, reviewing code,
                  correcting habits early and pointing out how each concept shows up in real work.
                </p>
              </div>
            </div>

            <div className="grid min-w-0 gap-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <Target aria-hidden="true" className="size-5 text-primary" />
                <h2 className="mt-4 text-lg font-bold text-foreground">Mission</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To make technical education practical and career-oriented, so students leave with
                  demonstrable skills, real project experience and the confidence to apply for
                  technical roles.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <Eye aria-hidden="true" className="size-5 text-primary" />
                <h2 className="mt-4 text-lg font-bold text-foreground">Vision</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To become the place students turn to when they want to become genuinely
                  industry-ready — known for the quality of the engineers who come out of our
                  programmes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Why we exist */}
      <section className="section-y">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Why we exist"
            title="The gap between learning and doing"
          />
          <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Students finish their degree having written plenty of exams and very little software.
              They know the syntax, but they have never traced a bug across two layers of an
              application, never had their code reviewed, never shipped anything to a deadline.
            </p>
            <p>
              Companies notice that gap immediately, and it is the single most common reason capable
              students get filtered out early in hiring.
            </p>
            <p>
              Zortex was created to close it — by teaching practically, insisting on project work,
              and giving students a real-time project environment through our externship programme.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { icon: Compass, title: "Clarity", text: "Students know exactly where they are heading." },
              { icon: HeartHandshake, title: "Support", text: "Mentors stay involved through the whole journey." },
              { icon: Target, title: "Outcomes", text: "Every module ends in something practical." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft"
                >
                  <Icon aria-hidden="true" className="mx-auto size-5 text-primary" />
                  <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Our team"
            title="The people behind Zortex"
            description="Trainers, mentors and project leads who work directly with students."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <article
                key={`${member.role}-${index}`}
                className="card-hover rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
              >
                <span
                  aria-hidden="true"
                  className="mx-auto grid size-16 place-items-center rounded-full bg-gradient-brand font-display text-lg font-bold text-primary-foreground"
                >
                  {member.initials}
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{member.name}</h3>
                <p className="mt-0.5 text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="mt-4 inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Linkedin aria-hidden="true" className="size-4" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Placeholder team profiles — names, photos and links will be updated.
          </p>
        </div>
      </section>

      <CtaBand
        title="Want to know if Zortex is right for you?"
        description="Have a quick conversation with our team about your goals and current level."
        primaryLabel="Contact Us"
        primaryTo="/contact"
      />
    </>
  );
}
