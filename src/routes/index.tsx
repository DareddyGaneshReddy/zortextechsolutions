import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Code2,
  Compass,
  FolderKanban,
  Handshake,
  Layers,
  MessageCircle,
  MessagesSquare,
  Route as RouteIcon,
  Quote,
  Sparkles,
  Target,
  UserRoundCheck,
  Users,
} from "lucide-react";

import heroImage from "@/assets/zortex-career-hero.jpg";
import studentsCollaborating from "@/assets/students-collaborating.jpg";
import studentsHrInterview from "@/assets/students-hr-interview.jpg";
import studentsMentoring from "@/assets/students-mentoring.jpg";
import { ClientLogos } from "@/components/ClientLogos";
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
          "Build job-ready technical skills, industry-partner project experience, a credible portfolio and HR interview confidence with Zortex Solutions.",
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
    title: "Placement Assistance",
    description:
      "Get guidance on suitable opportunities, applications and next steps as you prepare to enter the job market.",
  },
  {
    icon: Briefcase,
    title: "Industry-Client Experience",
    description:
      "Build from an external organization’s requirements and experience professional reviews, feedback and delivery.",
  },
  {
    icon: UserRoundCheck,
    title: "Industry Expert Guidance",
    description: "Learn from experienced professionals who connect your work to the expectations of a real team.",
  },
];

const journey = [
  { title: "Learn", description: "Build strong fundamentals with a structured, practical syllabus." },
  { title: "Build", description: "Turn concepts into portfolio work that proves your ability." },
  { title: "Experience", description: "Deliver an industry-partner project through a professional workflow." },
  { title: "Compete", description: "Apply with a stronger resume, credible experience and interview confidence." },
];

const hrTrainingTopics = [
  {
    icon: UserRoundCheck,
    title: "Professional Introduction",
    description: "Learn to introduce yourself clearly and connect your education, skills and projects to the role.",
  },
  {
    icon: MessagesSquare,
    title: "HR Question Practice",
    description: "Prepare thoughtful answers for common questions about strengths, goals, challenges and teamwork.",
  },
  {
    icon: Handshake,
    title: "Mock Interviews & Feedback",
    description: "Practise realistic HR rounds and receive direct feedback from experienced HR professionals.",
  },
];

function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[min(690px,76svh)] items-center overflow-hidden border-b border-border bg-brand text-brand-foreground sm:min-h-[min(730px,76svh)]">
        <img src={heroImage} alt="Students and a mentor discussing a software project together" width={1600} height={1008} fetchPriority="high" className="absolute inset-0 size-full object-cover object-[60%_center]" />
        <div aria-hidden="true" className="absolute inset-0 career-hero-overlay" />
        <div className="container relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-md border border-primary/35 bg-primary-soft/70 px-3 py-1.5 text-xs font-semibold uppercase text-primary">
              <Sparkles aria-hidden="true" className="size-4 text-primary" />
              Your career begins here
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.1] text-brand-foreground sm:text-6xl lg:text-7xl">
              Zortex Solutions.<br /><span className="text-gradient-brand">Your career, accelerated.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-foreground/80 sm:text-xl">
              From your first line of code to real industry-client projects, HR interviews and placement assistance—build the proof and confidence to pursue your first job.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl" variant="secondary">
                <Link to="/programs/$slug" params={{ slug: "externship" }}>Explore Externship <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <Button asChild size="xl" variant="ghost" className="border border-brand-foreground/60 text-brand-foreground hover:bg-brand-foreground/15 hover:text-brand-foreground">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Talk to Our Team</a>
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-brand-foreground">
              {["Real projects", "Expert guidance", "HR training", "Placement assistance"].map((item) => (
                <li key={item} className="flex items-center gap-2"><BadgeCheck aria-hidden="true" className="size-4 text-primary" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-label="Your path to a job" className="border-b border-border bg-brand py-8 text-brand-foreground sm:py-10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center gap-3 text-sm font-bold uppercase text-primary"><RouteIcon aria-hidden="true" className="size-5" /> The Zortex career runway</div>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["01", "Learn the skills"], ["02", "Build with clients"], ["03", "Prepare with HR"], ["04", "Pursue the role"]].map(([number, label]) => (
              <li key={number} className="flex items-center gap-3 border-t border-border pt-3"><span className="font-display text-xl text-primary">{number}</span><span className="font-semibold">{label}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <StatsSection />

      <ClientLogos />

      {/* Why Zortex */}
      <section className="bg-background section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Why Zortex"
            title="Everything employers expect, built into one journey"
            description="Technical ability, proof of work, professional experience and interview preparation—developed together."
          />
           <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyZortex.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                   className="card-hover rounded-md border border-border bg-card p-6 shadow-soft"
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
      <section className="border-y border-border bg-primary-soft section-y">
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

      {/* Life at Zortex */}
       <section className="bg-background section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={studentsCollaborating}
                alt="Students working together on code during a Zortex Solutions training session"
                width={1280}
                height={960}
                loading="lazy"
                className="h-56 w-full rounded-2xl border border-border object-cover shadow-lift sm:h-72"
              />
              <img
                src={studentsMentoring}
                alt="A mentor guiding two students through a project review at Zortex Solutions"
                width={1280}
                height={960}
                loading="lazy"
                className="h-56 w-full rounded-2xl border border-border object-cover shadow-lift sm:mt-8 sm:h-72"
              />
            </div>
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary shadow-soft">
                <Users aria-hidden="true" className="size-3.5" />
                Life at Zortex
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Learn the way teams actually work
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Students build in small groups, review each other&apos;s work and get direct
                guidance from mentors—so writing code, explaining decisions and shipping to a
                deadline all feel familiar before the first interview.
              </p>
              <Button asChild variant="outlineBrand" size="lg" className="mt-7">
                <Link to="/programs">
                  See the Programs
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
       <section className="bg-accent-soft section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Programs"
             title="Everything you need to move toward your first job"
             description="Build your foundation in class or online, gain credible workplace experience through Zortex Externship, and prepare for HR rounds with experienced professionals. Placement assistance helps you take the next step."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* HR Training */}
       <section className="border-y border-border bg-surface section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary shadow-soft">
                <Users aria-hidden="true" className="size-3.5" />
                HR Training
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Be ready for the conversation beyond your technical skills
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Experienced HR professionals help students prepare for HR interview rounds with practical guidance, realistic practice and personal feedback.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-7">
                <Link to="/contact">
                  Enquire About HR Training
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <img
                src={studentsHrInterview}
                alt="A student answering questions in a mock HR interview with an experienced HR professional"
                width={1280}
                height={960}
                loading="lazy"
                className="mt-8 h-56 w-full rounded-2xl border border-border object-cover shadow-lift sm:h-64"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {hrTrainingTopics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <article
                    key={topic.title}
                    className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft lg:flex-row lg:items-start"
                  >
                    <span
                      aria-hidden="true"
                      className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-primary"
                    >
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{topic.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {topic.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
       <section className="bg-background section-y">
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
       <section className="bg-primary-soft section-y">
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
        className="grid size-11 place-items-center rounded-xl bg-accent-soft text-primary"
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
