import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";

interface CtaBandProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: "/programs" | "/courses" | "/contact";
}

export function CtaBand({
  title = "Ready to start building real skills?",
  description = "Explore our programmes and courses, or talk to our team about the right path for you.",
  primaryLabel = "Explore Programs",
  primaryTo = "/programs",
}: CtaBandProps) {
  return (
    <section className="section-y">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand px-6 py-14 text-center shadow-glow sm:px-12">
          <div aria-hidden="true" className="absolute inset-0 grid-backdrop opacity-15" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-2xl font-bold text-primary-foreground sm:text-3xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link to={primaryTo}>
                  {primaryLabel}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="w-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden="true" />
                  Talk to Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
