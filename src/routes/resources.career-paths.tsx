import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Briefcase, Compass, Layers } from "lucide-react";

import { CourseTabs } from "@/components/CourseTabs";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { courses, type CourseSlug } from "@/data/courses";
import { getCareerPath } from "@/data/careerPaths";
import { validateCourseSearch } from "@/lib/courseSearch";

export const Route = createFileRoute("/resources/career-paths")({
  validateSearch: validateCourseSearch,
  head: () => ({
    meta: [
      { title: "Career Paths — From Course to Skills to Roles | Zortex" },
      {
        name: "description",
        content:
          "See how each Zortex course maps to practical skills, the roles those skills apply to, and a realistic direction to grow in.",
      },
      { property: "og:title", content: "Career Paths | Zortex Solutions" },
      {
        property: "og:description",
        content: "Course to skills to roles — a clear view of where each Zortex course can lead.",
      },
      { property: "og:url", content: "/resources/career-paths" },
    ],
    links: [{ rel: "canonical", href: "/resources/career-paths" }],
  }),
  component: CareerPathsPage,
});

function CareerPathsPage() {
  const { course: initial } = Route.useSearch();
  const [selected, setSelected] = useState<CourseSlug>(initial ?? courses[0]!.slug);
  const path = getCareerPath(selected);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Career paths"
        description="A course is only useful if you know where it leads. Pick a course to see the skills it builds, the roles those skills apply to, and how to keep growing."
        crumbs={[{ label: "Resources", to: "/resources" }, { label: "Career Paths" }]}
      />

      <section className="section-y">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <CourseTabs value={selected} onChange={setSelected} />

          {path ? (
            <div className="mt-10 space-y-6">
              {/* Flow */}
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <Layers aria-hidden="true" className="size-5 text-primary" />
                  <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Course
                  </h2>
                  <p className="mt-1 font-display text-xl font-bold text-foreground">
                    {path.courseName}
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <Compass aria-hidden="true" className="size-5 text-primary" />
                  <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Skills you gain
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {path.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <Briefcase aria-hidden="true" className="size-5 text-primary" />
                  <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Roles it applies to
                  </h2>
                  <p className="mt-1 font-display text-xl font-bold text-foreground">
                    {path.roles.length} role directions
                  </p>
                </div>
              </div>

              {/* Roles */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
                <h2 className="font-display text-xl font-bold text-foreground">
                  Roles in detail
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {path.roles.map((role) => (
                    <article key={role.title} className="rounded-xl border border-border bg-surface p-5">
                      <h3 className="text-base font-bold text-foreground">{role.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {role.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              {/* Direction */}
              <div className="rounded-2xl border border-primary/20 bg-primary-soft/50 p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-foreground">
                  Career direction
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {path.direction}
                </p>
                <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Suggested next steps
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {path.nextSteps.map((step) => (
                    <li key={step} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {step}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild variant="hero">
                    <Link to="/courses/$slug" params={{ slug: selected }}>
                      View the course
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="outlineBrand">
                    <Link to="/resources/interview-questions">Prepare for interviews</Link>
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <CtaBand
        title="Ready to work towards one of these roles?"
        description="Our programmes combine training, project work and career guidance."
        primaryLabel="Explore Programs"
      />
    </>
  );
}
