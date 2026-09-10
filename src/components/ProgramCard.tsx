import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Program } from "@/data/programs";

export function ProgramCard({ program }: { program: Program }) {
  const Icon = program.icon;

  return (
    <article className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
      <span
        aria-hidden="true"
        className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary"
      >
        <Icon className="size-6" />
      </span>

      <span className="mt-5 inline-flex w-fit items-center rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
        {program.mode}
      </span>

      <h3 className="mt-3 text-xl font-bold text-foreground">{program.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{program.summary}</p>

      <ul className="mt-5 flex-1 space-y-2.5">
        {program.benefits.slice(0, 3).map((benefit) => (
          <li key={benefit.title} className="flex items-start gap-2 text-sm text-foreground">
            <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
            {benefit.title}
          </li>
        ))}
      </ul>

      <Button asChild variant="hero" className="mt-7 w-full justify-between">
        <Link to="/programs/$slug" params={{ slug: program.slug }}>
          Explore Program
          <ArrowRight aria-hidden="true" />
        </Link>
      </Button>
    </article>
  );
}
