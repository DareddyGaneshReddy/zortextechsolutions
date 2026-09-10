import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Code2,
  Compass,
  FolderKanban,
  Layers,
  MessageCircle,
  Quote,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import heroImage from "@/assets/hero-illustration.jpg";
import { CourseCard } from "@/components/CourseCard";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { ProgramCard } from "@/components/ProgramCard";
import { SectionHeader } from "@/components/SectionHeader";
import { StatsSection } from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappLink } from "@/config/site";
import { courses } from "@/data/courses";
import { generalFaqs } from "@/data/faqs";
import { programs } from "@/data/programs";
import { testimonials } from "@/data/team";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zortex Solutions | Build Skills That Get You Hired" },
      {
        name: "description",
        content:
          "Build job-ready technical skills, industry-partner project experience, a credible portfolio and interview confidence with Zortex Solutions.",
      },
      {
        property: "og:title",
        content: "Zortex Solutions | Build Skills That Get You Hired",
      },
      {
        property: "og:description",
        content:
          "Go from knowing the concepts to proving you can do the work. Build skills, project experience and interview confidence with Zortex.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const whyZortex = [
  {
    icon: Code2,
    title: "Practical Learning",
    description:
      "We focus on practical technical knowledge rather than theory alone — you write code in every session.",
  },
  {
    icon: Layers,
    title: "Industry-Oriented Skills",
    description:
      "Learn the technologies and workflows that real development teams actually use day to day.",
  },
  {
    icon: FolderKanban,
    title: "Portfolio Proof",
    description:
      "Build work you can demonstrate, explain and defend when an interviewer asks what you have actually done.",
  },
  {
    icon: Target,
    title: "Interview Readiness",
    description:
      "Prepare your resume, project stories, technical answers and communication for the roles you want.",
  },
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Guidance throughout your learning journey, with reviews and feedback that raise your standard.",
  },
  {
    icon: Briefcase,
    title: "Industry-Partner Experience",
    description:
      "Build from an external organization’s requirements and experience professional reviews, feedback and delivery.",
  },
];

const journey = [
  { title: "Learn", description: "Build strong fundamentals with a structured, practical syllabus." },
  { title: "Build", description: "Turn concepts into portfolio work that proves your ability." },
  { title: "Experience", description: "Deliver an industry-partner project through a professional workflow." },
  { title: "Compete", description: "Apply with a stronger resume, credible experience and interview confidence." },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-soft">
        <div aria-hidden="true" className="absolute inset-0 grid-backdrop opacity-40" />
        <div className="container relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-3 py-1.5 text-xs font-semibold text-primary shadow-soft">
                <Sparkles aria-hidden="true" className="size-3.5" />
                Your bridge from campus to career
              </span>

              <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
                Don&apos;t just learn tech.{" "}
                <span className="text-gradient-brand">Prove you can do the job.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Build the skills, real project experience, portfolio and interview confidence that
                help students and recent graduates stand out for their first technical role.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <Link to="/programs">
                    Start Your Career Path
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outlineBrand" size="xl">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle aria-hidden="true" />
                    Talk to Us
                  </a>
                </Button>
              </div>

              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
                {["Job-relevant skills", "Industry-partner projects", "Interview preparation"].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <BadgeCheck aria-hidden="true" className="size-4 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-w-0">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl"
              />
              <img
                src={heroImage}
                alt="Illustration of coding, learning and career growth at Zortex Solutions"
                width={1280}
                height={1280}
                className="relative mx-auto w-full max-w-lg drop-shadow-xl"
              />
              <div className="relative mx-auto -mt-8 grid max-w-lg grid-cols-3 border border-border bg-card shadow-lift">
                {[["01", "Skills"], ["02", "Experience"], ["03", "Career proof"]].map(
                  ([number, label]) => (
                    <div key={number} className="min-w-0 border-r border-border px-2 py-3 text-center last:border-r-0 sm:px-4">
                      <span className="block text-xs font-bold text-primary">{number}</span>
                      <span className="mt-0.5 block text-xs font-semibold text-foreground sm:text-sm">{label}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Why Zortex */}
      <section className="section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Why Zortex"
            title="Everything employers expect, built into one journey"
            description="Technical ability, proof of work, professional experience and interview preparation—developed together."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyZortex.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary"
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="The Zortex journey"
            title="From learning the skill to competing for the role"
            description="Every stage removes one more reason for an employer to say no."
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="font-display text-sm font-bold text-primary">
                  0{index + 1}
                </span>
                <h3 className="mt-2 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Programs */}
      <section className="section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Programs"
            title="Choose how you will become job ready"
            description="Build your foundation in class or online, then gain credible workplace experience through Zortex Externship."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Courses"
            title="Learn what the role demands—not just what the syllabus covers"
            description="Every course connects technical fundamentals to practical projects, portfolio proof and clear career direction."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outlineBrand" size="lg">
              <Link to="/courses">
                View all courses
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Resources"
            title="Free resources to keep you moving"
            description="Syllabuses, project ideas, career paths and an interview question bank."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ResourceLink
              to="/resources/syllabuses"
              icon={BookOpen}
              title="Syllabuses"
              description="Module-by-module syllabus for every course."
            />
            <ResourceLink
              to="/resources/project-ideas"
              icon={FolderKanban}
              title="Project Ideas"
              description="Projects by course and difficulty level."
            />
            <ResourceLink
              to="/resources/career-paths"
              icon={Compass}
              title="Career Paths"
              description="Skills to roles, mapped for each course."
            />
            <ResourceLink
              to="/resources/interview-questions"
              icon={MessageCircle}
              title="Interview Questions"
              description="A searchable bank of common questions."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader eyebrow="Student voices" title="What learners say about Zortex" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <figure
                key={`${item.name}-${index}`}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <Quote aria-hidden="true" className="size-6 text-primary/40" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft text-sm font-bold text-primary"
                  >
                    {item.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-foreground">
                      {item.name}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {item.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Placeholder testimonials — real student feedback will replace these.
          </p>
        </div>
      </section>

      <FaqSection
        items={generalFaqs}
        description={`Common questions about ${siteConfig.name}, our programmes and our courses.`}
      />

      <CtaBand
        title="Your first technical role starts with proof"
        description="Build the skills, project experience and interview confidence to apply as a candidate employers can take seriously."
        primaryLabel="Start Your Career Path"
      />
    </>
  );
}

function ResourceLink({
  to,
  icon: Icon,
  title,
  description,
}: {
  to: "/resources/syllabuses" | "/resources/project-ideas" | "/resources/career-paths" | "/resources/interview-questions";
  icon: typeof BookOpen;
  title: string;
  description: string;
}) {
  return (
    <Link
      to={to}
      className="card-hover group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
    >
      <span
        aria-hidden="true"
        className="grid size-11 place-items-center rounded-xl bg-accent-soft text-brand"
      >
        <Icon className="size-5" />
      </span>
      <h3 className="mt-5 text-base font-bold text-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Open
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
