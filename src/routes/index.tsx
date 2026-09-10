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
      { title: "Zortex Solutions | Training, Projects & Externship Programs" },
      {
        name: "description",
        content:
          "Zortex Solutions offers practical technical training, real-time projects and externship opportunities in C, Java, Python and full stack development.",
      },
      {
        property: "og:title",
        content: "Zortex Solutions | Training, Projects & Externship Programs",
      },
      {
        property: "og:description",
        content:
          "Learn. Build. Experience. Get Career Ready. Practical training, real projects and externship opportunities for students.",
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
    title: "Real-Time Projects",
    description:
      "Apply what you learn to practical projects you can explain, defend and show in a portfolio.",
  },
  {
    icon: Target,
    title: "Career Preparation",
    description:
      "Understand the career paths open to you and prepare properly for technical interviews.",
  },
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Guidance throughout your learning journey, with reviews and feedback that raise your standard.",
  },
  {
    icon: Briefcase,
    title: "Externship Opportunities",
    description:
      "Get exposure to real-world project environments and the discipline they demand.",
  },
];

const journey = [
  { title: "Learn", description: "Build strong fundamentals with a structured, practical syllabus." },
  { title: "Build", description: "Turn concepts into working projects, module by module." },
  { title: "Experience", description: "Work on a real-time project the way a team would." },
  { title: "Get Career Ready", description: "Prepare your portfolio, resume and interview skills." },
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
                Training · Projects · Externship
              </span>

              <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
                Learn. Build. Experience.{" "}
                <span className="text-gradient-brand">Get Career Ready.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Zortex Solutions gives students practical technical training, real-time projects and
                externship opportunities — so you finish with skills and experience, not just notes.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <Link to="/programs">
                    Explore Programs
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
                {["Practical training", "Real projects", "Mentor support"].map((item) => (
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
            title="Built around what actually gets students hired"
            description="Skills, projects and preparation — the three things employers look for, taught together."
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
            title="From first line of code to career ready"
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
            title="Three ways to learn with Zortex"
            description="Choose classroom training, online training, or a real-time project externship."
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
            title="Courses that build real capability"
            description="Every course includes a structured syllabus, practical projects and career direction."
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

      <CtaBand />
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
