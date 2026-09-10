import { Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Course } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden="true"
          className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-primary-foreground"
        >
          {course.glyph}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
          <GraduationCap aria-hidden="true" className="size-3.5" />
          {course.level}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-foreground">{course.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {course.shortDescription}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {course.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-primary-soft px-2 py-0.5 text-[0.7rem] font-medium text-primary"
          >
            {tech}
          </span>
        ))}
      </div>

      <Button asChild variant="outlineBrand" className="mt-6 w-full justify-between">
        <Link to="/courses/$slug" params={{ slug: course.slug }}>
          Explore Course
          <ArrowRight aria-hidden="true" />
        </Link>
      </Button>
    </article>
  );
}
