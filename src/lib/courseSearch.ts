import { courses, type CourseSlug } from "@/data/courses";

const slugs = courses.map((course) => course.slug);

export function isCourseSlug(value: unknown): value is CourseSlug {
  return typeof value === "string" && slugs.includes(value as CourseSlug);
}

export interface CourseSearch {
  course?: CourseSlug;
}

/** Shared validateSearch for resource pages that support ?course=<slug>. */
export function validateCourseSearch(search: Record<string, unknown>): CourseSearch {
  const value = search["course"];
  return isCourseSlug(value) ? { course: value } : {};
}
