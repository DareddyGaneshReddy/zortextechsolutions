import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-inherit opacity-85">
        <li>
          <Link to="/" className="transition-colors hover:opacity-70">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            <ChevronRight aria-hidden="true" className="size-3.5 opacity-60" />
            {item.to && index < items.length - 1 ? (
              <Link to={item.to} className="transition-colors hover:opacity-70">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-inherit">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
