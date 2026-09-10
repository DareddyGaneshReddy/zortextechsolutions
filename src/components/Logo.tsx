import { Link } from "@tanstack/react-router";

import logoAsset from "@/assets/zortex-logo.asset.json";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label={`${siteConfig.name} home`}
      className={cn("group flex items-center gap-2.5", className)}
    >
      <img
        src={logoAsset.url}
        alt={`${siteConfig.name} logo`}
        width={40}
        height={40}
        className="h-9 w-9 shrink-0 object-contain transition-transform duration-300 group-hover:rotate-12"
      />
      {showText ? (
        <span className="flex min-w-0 flex-col leading-none">
          <span className="font-display text-[1.05rem] font-bold tracking-tight text-foreground">
            Zortex
          </span>
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Solutions
          </span>
        </span>
      ) : null}
    </Link>
  );
}
