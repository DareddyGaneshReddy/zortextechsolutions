import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Briefcase, Check, FolderKanban, IndianRupee } from "lucide-react";

import { FaqSection } from "@/components/FaqSection";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { getCourse } from "@/data/courses";
import { getCareerPath } from "@/data/careerPaths";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return {
      name: course.name,
      description: course.shortDescription,
      slug: course.slug,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Course not found | Zortex Solutions" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.name} Course | Zortex Solutions`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/courses/${loaderData.slug}` },
      ],
      links: [{ rel: "canonical", href: `/courses/${loaderData.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: `${loaderData.name} Course`,
            description: loaderData.description,
            provider: {
              "@type": "EducationalOrganization",
              name: "Zortex Solutions",
            },
          }),
        },
      ],
    };
  },
  component: CourseDetailPage,
});

function CourseDetailPage() {
  const { slug } = Route.useParams();
  const course = getCourse(slug);
  const careerPath = getCareerPath(slug);

  if (!course) return null;

  return (
    <>
      <PageHero
        eyebrow={`${course.level} · Course`}
        title={`${course.name} Course`}
        description={course.shortDescription}
        crumbs={[{ label: "Courses", to: "/courses" }, { label: course.name }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="hero" size="lg">
            <a href="#callback">
              Request a Callback
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outlineBrand" size="lg">
            <Link to="/resources/syllabuses" search={{ course: course.slug }}>
              <BookOpen aria-hidden="true" />
              View Syllabus
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Overview + fee */}
      <section className="section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="min-w-0">
              <SectionHeader
                align="left"
                eyebrow="Course overview"
                title={`About the ${course.name} course`}
                className="max-w-none"
              />
              <div className="mt-6 space-y-4">
                {course.overview.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <aside className="min-w-0">
              <div className="rounded-2xl border border-primary/20 bg-primary-soft/50 p-6">
                <h2 className="flex items-center gap-2 text-base font-bold text-foreground">
                  <IndianRupee aria-hidden="true" className="size-4 text-primary" />
                  Course Fee
                </h2>
                <p className="mt-3 font-display text-2xl font-bold text-gradient-brand">
                  Fee: {course.fee}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Request a callback and our team will share the current fee details and available
                  programme options.
                </p>
                <Button asChild variant="hero" className="mt-5 w-full">
                  <a href="#callback">Request a Callback</a>
                </Button>
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="text-base font-bold text-foreground">Technologies covered</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {course.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="What you will learn"
            title="Learning outcomes"
            description="By the end of the course you will be able to do each of the following confidently."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {course.outcomes.map((outcome) => (
              <article
                key={outcome.title}
                className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <Check aria-hidden="true" className="size-5 text-accent" />
                <h3 className="mt-4 text-base font-bold text-foreground">{outcome.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {outcome.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Course structure"
            title="Modules covered"
            description="Placeholder module outline — the detailed syllabus is shared during enrolment."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {course.modules.map((module) => (
              <article
                key={module.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <h3 className="text-base font-bold text-foreground">{module.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {module.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Projects"
            title="What you can build"
            description="Practical projects that turn the syllabus into a portfolio."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {course.projects.map((project) => (
              <article
                key={project.name}
                className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <FolderKanban aria-hidden="true" className="size-5 text-primary" />
                <h3 className="mt-4 text-base font-bold text-foreground">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outlineBrand">
              <Link to="/resources/project-ideas" search={{ course: course.slug }}>
                More project ideas
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Career opportunities"
            title="Roles this course prepares you for"
            {...(careerPath ? { description: careerPath.direction } : {})}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.careers.map((role) => (
              <div
                key={role}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-soft"
              >
                <Briefcase aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{role}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outlineBrand">
              <Link to="/resources/career-paths" search={{ course: course.slug }}>
                See the full career path
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FaqSection items={course.faqs} title={`${course.name} — questions`} />

      {/* Callback */}
      <section id="callback" className="border-t border-border bg-surface section-y scroll-mt-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Request a callback"
            title={`Talk to us about the ${course.name} course`}
            description="Share your details and we'll call you back with fee details, programme options and next steps."
          />
          <LeadForm
            className="mt-10"
            source={`course:${course.slug}`}
            submitLabel="Request a Callback"
            defaultCourse={course.name}
            showProgram
            showCourse
          />
        </div>
      </section>
    </>
  );
}
