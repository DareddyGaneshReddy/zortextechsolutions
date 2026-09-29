import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Program } from "@/data/programs";

export function ProgramCard({ program }: { program: Program }) {
  const Icon = program.icon;
  const isExternship = program.slug === "externship";

  return (
    <article
      className={`card-hover relative flex h-full flex-col overflow-hidden rounded-md border p-7 shadow-soft ${
        isExternship ? "border-primary/50 bg-brand text-brand-foreground shadow-lift" : "border-border bg-card"
      }`}
    >
      {isExternship ? (
        <span className="absolute right-0 top-0 bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
          Build your career proof
        </span>
      ) : null}
      <span
        aria-hidden="true"
        className="grid size-12 place-items-center rounded-md bg-primary-soft text-primary"
      >
        <Icon className="size-6" />
      </span>

      <span className={`mt-5 inline-flex w-fit items-center px-2.5 py-1 text-xs font-semibold uppercase ${isExternship ? "bg-brand-foreground/15 text-brand-foreground" : "bg-accent-soft text-primary"}`}>
        {program.mode}
      </span>

      <h3 className={`mt-3 text-xl font-bold ${isExternship ? "text-brand-foreground" : "text-foreground"}`}>{program.name}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${isExternship ? "text-brand-foreground/80" : "text-muted-foreground"}`}>{program.summary}</p>

      {isExternship ? (
        <p className="mt-4 border-l-2 border-primary pl-3 text-sm font-semibold text-brand-foreground">
          Industry-Partner Projects
        </p>
      ) : null}

      <ul className="mt-5 flex-1 space-y-2.5">
        {program.benefits.slice(0, 3).map((benefit) => (
          <li key={benefit.title} className={`flex items-start gap-2 text-sm ${isExternship ? "text-brand-foreground" : "text-foreground"}`}>
            <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
            {benefit.title}
          </li>
        ))}
      </ul>

      <Button asChild variant={isExternship ? "secondary" : "hero"} className="mt-7 w-full justify-between">
        <Link to="/programs/$slug" params={{ slug: program.slug }}>
          Explore Program
          <ArrowRight aria-hidden="true" />
        </Link>
      </Button>
    </article>
  );
}
