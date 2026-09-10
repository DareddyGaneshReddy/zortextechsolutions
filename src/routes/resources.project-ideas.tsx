import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FolderKanban } from "lucide-react";

import { CourseTabs } from "@/components/CourseTabs";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { courses, getCourse, type CourseSlug } from "@/data/courses";
import { difficulties, projectIdeas, type Difficulty } from "@/data/projectIdeas";
import { validateCourseSearch } from "@/lib/courseSearch";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/resources/project-ideas")({
  validateSearch: validateCourseSearch,
  head: () => ({
    meta: [
      { title: "Project Ideas for C, Java, Python & Full Stack | Zortex" },
      {
        name: "description",
        content:
          "Practical project ideas by course and difficulty — with the technologies each project uses — to build a portfolio that stands out.",
      },
      { property: "og:title", content: "Project Ideas | Zortex Solutions" },
      {
        property: "og:description",
        content: "Browse beginner to advanced project ideas across all Zortex courses.",
      },
      { property: "og:url", content: "/resources/project-ideas" },
    ],
    links: [{ rel: "canonical", href: "/resources/project-ideas" }],
  }),
  component: ProjectIdeasPage,
});

type DifficultyFilter = Difficulty | "All";

const difficultyStyles: Record<Difficulty, string> = {
  Beginner: "border-accent/30 bg-accent-soft text-accent-strong",
  Intermediate: "border-primary/25 bg-primary-soft text-primary",
  Advanced: "border-border bg-secondary text-secondary-foreground",
};

function ProjectIdeasPage() {
  const { course: initial } = Route.useSearch();
  const [selected, setSelected] = useState<CourseSlug>(initial ?? courses[0]!.slug);
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("All");

  const course = getCourse(selected)!;
  const filtered = useMemo(
    () =>
      projectIdeas.filter(
        (idea) =>
          idea.course === selected && (difficulty === "All" || idea.difficulty === difficulty),
      ),
    [selected, difficulty],
  );

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Project ideas"
        description="Choose a course and a difficulty level, then pick a project slightly beyond what you can comfortably build today."
        crumbs={[{ label: "Resources", to: "/resources" }, { label: "Project Ideas" }]}
      />

      <section className="section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-8">
            <CourseTabs value={selected} onChange={setSelected} />

            <div>
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Difficulty
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {(["All", ...difficulties] as DifficultyFilter[]).map((option) => {
                  const active = option === difficulty;
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setDifficulty(option)}
                      className={cn(
                        "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
                        active
                          ? "border-primary/40 bg-primary-soft text-primary"
                          : "border-border bg-card text-muted-foreground hover:text-primary",
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Showing <strong className="text-foreground">{filtered.length}</strong>{" "}
            {filtered.length === 1 ? "project" : "projects"} for {course.name}
          </p>

          {filtered.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <p className="text-sm text-muted-foreground">
                No projects match this combination yet. Try another difficulty level.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((idea) => (
                <article
                  key={idea.id}
                  className="card-hover flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <div className="flex items-center justify-between gap-3">
                    <FolderKanban aria-hidden="true" className="size-5 shrink-0 text-primary" />
                    <span
                      className={cn(
                        "rounded-full border px-2.5 py-0.5 text-xs font-semibold",
                        difficultyStyles[idea.difficulty],
                      )}
                    >
                      {idea.difficulty}
                    </span>
                  </div>
                  <h2 className="mt-4 text-base font-bold text-foreground">{idea.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {idea.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {idea.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title="Want to build these with mentor support?"
        description="Our programmes include guided project work and code review, so you finish what you start."
        primaryLabel="Explore Programs"
      />
    </>
  );
}
