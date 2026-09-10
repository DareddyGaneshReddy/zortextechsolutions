import { stats } from "@/data/stats";

export function StatsSection() {
  return (
    <section aria-label="Zortex in numbers" className="border-y border-border bg-surface py-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-0 text-center">
              <dd className="font-display text-3xl font-bold text-gradient-brand sm:text-4xl">
                {stat.value}
                {stat.suffix ?? ""}
              </dd>
              <dt className="mt-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm sm:normal-case sm:tracking-normal">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
