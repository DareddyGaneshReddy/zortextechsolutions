import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Compass, FolderKanban, MessagesSquare } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Student Resources — Syllabus, Projects & Interview Prep | Zortex" },
      {
        name: "description",
        content:
          "Free Zortex resources: course syllabuses, project ideas, career paths and a searchable interview question bank for C, Java, Python, SQL and full stack.",
      },
      { property: "og:title", content: "Resources | Zortex Solutions" },
      {
        property: "og:description",
        content:
          "Syllabuses, project ideas, career paths and interview questions to support your learning.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const resources = [
  {
    icon: BookOpen,
    title: "Syllabuses",
    description:
      "See exactly what each course covers, module by module, and download the outline for reference.",
    to: "/resources/syllabuses" as const,
    label: "View syllabuses",
  },
  {
    icon: FolderKanban,
    title: "Project Ideas",
    description:
      "Browse project ideas by course and difficulty, with the technologies each one uses.",
    to: "/resources/project-ideas" as const,
    label: "Browse projects",
  },
  {
    icon: Compass,
    title: "Career Paths",
    description:
      "Understand how a course maps to skills, then to roles, then to a direction you can grow in.",
    to: "/resources/career-paths" as const,
    label: "Explore career paths",
  },
  {
    icon: MessagesSquare,
    title: "Interview Questions",
    description:
      "A searchable bank of technical and HR interview questions with concise, accurate answers.",
    to: "/resources/interview-questions" as const,
    label: "Practise questions",
  },
];

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Everything you need to study, build and prepare"
        description="Open resources for Zortex students and anyone learning to code — syllabuses, project ideas, career paths and interview preparation."
        crumbs={[{ label: "Resources" }]}
      />

      <section className="section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <article
                  key={resource.title}
                  className="card-hover flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary"
                  >
                    <Icon className="size-5" />
                  </span>
                  <h2 className="mt-5 font-display text-xl font-bold text-foreground">
                    {resource.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  <Link
                    to={resource.to}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    {resource.label}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface section-y">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <SectionHeader
            eyebrow="How to use these"
            title="A simple way to work through them"
            description="Start with the syllabus for your course, pick a project slightly above your current level, then use the career path and interview bank as you prepare to apply."
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
