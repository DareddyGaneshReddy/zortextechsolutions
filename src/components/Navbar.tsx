import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "Courses", to: "/courses" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-shadow duration-300",
        scrolled ? "glass-panel shadow-soft" : "border-b border-transparent bg-background",
      )}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <Logo />

          <div className="flex items-center gap-1">
            <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft/60 hover:text-primary data-[status=active]:bg-primary-soft data-[status=active]:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Button asChild variant="hero" size="sm" className="ml-2 hidden h-10 px-4 sm:inline-flex">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                Chat with Us
              </a>
            </Button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="ml-1 inline-flex size-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-secondary lg:hidden"
            >
              {open ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-border bg-card transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-primary-soft/60 data-[status=active]:bg-primary-soft data-[status=active]:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild variant="hero" size="lg" className="mt-4 w-full">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" />
              Chat with Us
            </a>
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            {siteConfig.contact.email}
          </p>
        </nav>
      </div>
    </header>
  );
}
