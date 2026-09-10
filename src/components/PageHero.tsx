import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, crumbs, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-soft">
      <div aria-hidden="true" className="absolute inset-0 grid-backdrop opacity-40" />
      <div className="container relative mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 lg:pb-20 lg:pt-14">
        <Breadcrumbs items={crumbs} />
        {eyebrow ? (
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
