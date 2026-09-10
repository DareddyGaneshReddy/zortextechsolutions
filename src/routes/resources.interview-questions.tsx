import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Input } from "@/components/ui/input";
import {
  interviewQuestions,
  questionCategories,
  type QuestionCategory,
} from "@/data/interviewQuestions";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/resources/interview-questions")({
  head: () => ({
    meta: [
      { title: "Interview Questions — C, Java, Python, SQL, Full Stack & HR | Zortex" },
      {
        name: "description",
        content:
          "A searchable bank of technical and HR interview questions with concise answers, covering C, Java, Python, SQL and full stack development.",
      },
      { property: "og:title", content: "Interview Questions | Zortex Solutions" },
      {
        property: "og:description",
        content: "Search technical and HR interview questions with clear, concise answers.",
      },
      { property: "og:url", content: "/resources/interview-questions" },
    ],
    links: [{ rel: "canonical", href: "/resources/interview-questions" }],
  }),
  component: InterviewQuestionsPage,
});

type CategoryFilter = QuestionCategory | "all";

function InterviewQuestionsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return interviewQuestions.filter((item) => {
      const matchesCategory = category === "all" || item.category === category;
      const matchesTerm =
        term.length === 0 ||
        item.question.toLowerCase().includes(term) ||
        item.answer.toLowerCase().includes(term);
      return matchesCategory && matchesTerm;
    });
  }, [query, category]);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Interview questions"
        description="Search by keyword or filter by topic. Each answer is written to be short enough to remember and accurate enough to say out loud."
        crumbs={[{ label: "Resources", to: "/resources" }, { label: "Interview Questions" }]}
      />

      <section className="section-y">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search questions, e.g. pointer, inheritance, JOIN…"
              aria-label="Search interview questions"
              className="h-12 pl-10"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {([{ value: "all", label: "All topics" }, ...questionCategories] as {
              value: CategoryFilter;
              label: string;
            }[]).map((option) => {
              const active = option.value === category;
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(option.value)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
                    active
                      ? "border-transparent bg-gradient-brand text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            <strong className="text-foreground">{filtered.length}</strong>{" "}
            {filtered.length === 1 ? "question" : "questions"} found
          </p>

          {filtered.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <p className="text-sm text-muted-foreground">
                No questions matched your search. Try a shorter keyword.
              </p>
            </div>
          ) : (
            <ul className="mt-6 space-y-3">
              {filtered.map((item) => {
                const expanded = open === item.id;
                return (
                  <li
                    key={item.id}
                    className="overflow-hidden rounded-xl border border-border bg-card shadow-soft"
                  >
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setOpen(expanded ? null : item.id)}
                      className="flex w-full items-start gap-3 px-5 py-4 text-left"
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block text-base font-semibold text-foreground">
                          {item.question}
                        </span>
                        <span className="mt-1.5 flex flex-wrap items-center gap-2">
                          <span className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-muted-foreground">
                            {questionCategories.find((c) => c.value === item.category)?.label ??
                              item.category}
                          </span>
                          <span className="rounded-md border border-primary/25 bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary">
                            {item.difficulty}
                          </span>
                        </span>
                      </span>
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "mt-1 size-4 shrink-0 text-muted-foreground transition-transform",
                          expanded && "rotate-180",
                        )}
                      />
                    </button>
                    {expanded ? (
                      <div className="border-t border-border px-5 py-4">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.answer}
                        </p>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      <CtaBand
        title="Practising is easier with feedback"
        description="Zortex programmes include mock interview practice and mentor feedback."
        primaryLabel="Explore Programs"
      />
    </>
  );
}
