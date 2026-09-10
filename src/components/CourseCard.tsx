import { Link } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, GraduationCap, IndianRupee } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CourseLogo } from "@/components/CourseLogo";
import type { Course } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <CourseLogo course={course} />
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
          <GraduationCap aria-hidden="true" className="size-3.5" />
          {course.level}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-foreground">{course.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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

      <div className="mt-5 flex-1 border-t border-border pt-5">
        <div className="flex items-start gap-3">
          <BriefcaseBusiness aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-foreground">
              Career Opportunities
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {course.careerOpportunities.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-start gap-3">
          <IndianRupee aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-foreground">
              Average Fresher Package
            </p>
            <p className="mt-1 text-base font-bold text-foreground">{course.averagePackage}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Indicative India range; varies by skills, role, employer, location and interview performance.
            </p>
          </div>
        </div>
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
