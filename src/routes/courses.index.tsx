import { createFileRoute } from "@tanstack/react-router";

import { CourseCard } from "@/components/CourseCard";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { PageHero } from "@/components/PageHero";
import { courses } from "@/data/courses";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Courses — C, Java, Python & Full Stack | Zortex Solutions" },
      {
        name: "description",
        content:
          "Zortex courses in C, Java, Python, Java Full Stack and Python Full Stack — structured syllabus, practical projects and career paths.",
      },
      { property: "og:title", content: "Courses | Zortex Solutions" },
      {
        property: "og:description",
        content:
          "Explore C, Java, Python, Java Full Stack and Python Full Stack courses with practical projects and career guidance.",
      },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

const courseFaqs = [
  {
    question: "Can I take a course without prior experience?",
    answer:
      "Yes. C, Java and Python all begin from fundamentals. The full stack courses include an essentials module before the framework content.",
  },
  {
    question: "Will I build projects during the course?",
    answer:
      "Yes. Each course includes practical builds, and every course page lists suggested projects you can take on.",
  },
  {
    question: "What are the course fees?",
    answer:
      "Fees are to be updated. Request a callback from any course page and our team will share the current details.",
  },
  {
    question: "Can I take a course online?",
    answer:
      "Yes. All courses are available through Zortex Elite (online) and Zortex Edge (offline).",
  },
];

function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Courses designed around building, not memorising"
        description="Five focused courses with structured syllabuses, practical projects, technologies used in industry and clear career paths."
        crumbs={[{ label: "Courses" }]}
      />

      <section className="section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={courseFaqs} title="Course questions" />

      <CtaBand
        title="Want help choosing a course?"
        description="Tell us your background and goal, and we'll suggest the course that fits best."
        primaryLabel="Contact Us"
        primaryTo="/contact"
      />
    </>
  );
}
