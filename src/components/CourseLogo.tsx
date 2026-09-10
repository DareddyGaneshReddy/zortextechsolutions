import cLogo from "@/assets/course-logos/c.svg.asset.json";
import djangoLogo from "@/assets/course-logos/django.svg.asset.json";
import javaLogo from "@/assets/course-logos/java.svg.asset.json";
import pythonLogo from "@/assets/course-logos/python.svg.asset.json";
import reactLogo from "@/assets/course-logos/react.svg.asset.json";
import springLogo from "@/assets/course-logos/spring.svg.asset.json";
import type { Course } from "@/data/courses";

const courseLogos: Record<Course["slug"], { src: string; label: string }[]> = {
  c: [{ src: cLogo.url, label: "C" }],
  java: [{ src: javaLogo.url, label: "Java" }],
  python: [{ src: pythonLogo.url, label: "Python" }],
  "java-full-stack": [
    { src: javaLogo.url, label: "Java" },
    { src: springLogo.url, label: "Spring" },
    { src: reactLogo.url, label: "React" },
  ],
  "python-full-stack": [
    { src: pythonLogo.url, label: "Python" },
    { src: djangoLogo.url, label: "Django" },
    { src: reactLogo.url, label: "React" },
  ],
};

export function CourseLogo({ course }: { course: Course }) {
  const logos = courseLogos[course.slug];
  const isStack = logos.length > 1;

  return (
    <span
      role="img"
      aria-label={`${course.name} technologies`}
      className={`flex h-14 shrink-0 items-center justify-center rounded-lg border border-border bg-card shadow-soft ${
        isStack ? "min-w-32 gap-2 px-3" : "w-14 p-2.5"
      }`}
    >
      {logos.map((logo) => (
        <img
          key={logo.label}
          src={logo.src}
          alt=""
          width={40}
          height={40}
          className={isStack ? "size-8 object-contain" : "size-9 object-contain"}
        />
      ))}
    </span>
  );
}