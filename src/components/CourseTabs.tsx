import { courses, type CourseSlug } from "@/data/courses";
import { cn } from "@/lib/utils";

interface CourseTabsProps {
  value: CourseSlug;
  onChange: (slug: CourseSlug) => void;
  label?: string;
}

export function CourseTabs({ value, onChange, label = "Select a course" }: CourseTabsProps) {
  return (
    <div>
      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      <div role="tablist" aria-label={label} className="mt-3 flex flex-wrap gap-2">
        {courses.map((course) => {
          const active = course.slug === value;
          return (
            <button
              key={course.slug}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(course.slug)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                active
                  ? "border-transparent bg-gradient-brand text-primary-foreground shadow-soft"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
              )}
            >
              {course.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
