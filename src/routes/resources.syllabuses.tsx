import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Download } from "lucide-react";

import { CourseTabs } from "@/components/CourseTabs";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { courses, getCourse, type CourseSlug } from "@/data/courses";
import { validateCourseSearch } from "@/lib/courseSearch";

export const Route = createFileRoute("/resources/syllabuses")({
  validateSearch: validateCourseSearch,
  head: () => ({
    meta: [
      { title: "Course Syllabuses — C, Java, Python & Full Stack | Zortex" },
      {
        name: "description",
        content:
          "Module-by-module syllabuses for Zortex courses in C, Java, Python, Java Full Stack and Python Full Stack. View online or download the outline.",
      },
      { property: "og:title", content: "Course Syllabuses | Zortex Solutions" },
      {
        property: "og:description",
        content: "See exactly what each Zortex course covers, module by module.",
      },
      { property: "og:url", content: "/resources/syllabuses" },
    ],
    links: [{ rel: "canonical", href: "/resources/syllabuses" }],
  }),
  component: SyllabusesPage,
});

function SyllabusesPage() {
  const { course: initial } = Route.useSearch();
  const [selected, setSelected] = useState<CourseSlug>(initial ?? courses[0]!.slug);
  const course = getCourse(selected)!;

  function download() {
    const lines = [
      `${course.name} — Course Syllabus`,
      "Zortex Solutions",
      "",
      course.shortDescription,
      "",
      ...course.modules.flatMap((module) => [
        module.title,
        ...module.topics.map((topic) => `  - ${topic}`),
        "",
      ]),
      `Technologies: ${course.technologies.join(", ")}`,
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `zortex-${course.slug}-syllabus.txt`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Course syllabuses"
        description="Pick a course to see the full module outline. Every syllabus is maintained centrally and updated as courses evolve."
        crumbs={[{ label: "Resources", to: "/resources" }, { label: "Syllabuses" }]}
      />

      <section className="section-y">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <CourseTabs value={selected} onChange={setSelected} />

          <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
              <div className="min-w-0">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {course.name} Syllabus
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">{course.shortDescription}</p>
              </div>
              <Button type="button" variant="outlineBrand" onClick={download} className="shrink-0">
                <Download aria-hidden="true" />
                Download
              </Button>
            </div>

            <ol className="mt-8 space-y-4">
              {course.modules.map((module, index) => (
                <li
                  key={module.title}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-sm font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold text-foreground">{module.title}</h3>
                  </div>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {module.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
              <Button asChild variant="hero">
                <Link to="/courses/$slug" params={{ slug: course.slug }}>
                  View course page
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="soft">
                <Link to="/contact">Ask about this course</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
