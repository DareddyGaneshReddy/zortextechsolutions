import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";
import { courses } from "@/data/courses";
import { programs } from "@/data/programs";

const resourceLinks = [
  { label: "Syllabuses", to: "/resources/syllabuses" },
  { label: "Project Ideas", to: "/resources/project-ideas" },
  { label: "Career Paths", to: "/resources/career-paths" },
  { label: "Interview Questions", to: "/resources/interview-questions" },
] as const;

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "Courses", to: "/courses" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

const linkClass = "text-sm text-muted-foreground transition-colors hover:text-primary";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <SocialLink href={siteConfig.social.instagram} label="Instagram">
                <Instagram aria-hidden="true" className="size-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.linkedin} label="LinkedIn">
                <Linkedin aria-hidden="true" className="size-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.youtube} label="YouTube">
                <Youtube aria-hidden="true" className="size-4" />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Quick Links">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Programs">
            {programs.map((program) => (
              <li key={program.slug}>
                <Link
                  to="/programs/$slug"
                  params={{ slug: program.slug }}
                  className={linkClass}
                >
                  {program.name}
                </Link>
              </li>
            ))}
            <li className="pt-3 text-sm font-semibold text-foreground">Resources</li>
            {resourceLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Courses">
            {courses.map((course) => (
              <li key={course.slug}>
                <Link to="/courses/$slug" params={{ slug: course.slug }} className={linkClass}>
                  {course.name}
                </Link>
              </li>
            ))}
            <li className="pt-3 text-sm font-semibold text-foreground">Contact</li>
            <li>
              <a href={siteConfig.contact.phoneHref} className={`${linkClass} flex items-start gap-2`}>
                <Phone aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.contact.emailHref} className={`${linkClass} flex items-start gap-2`}>
                <Mail aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
                <span className="break-all">{siteConfig.contact.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
              <span>{siteConfig.contact.addressLines.join(", ")}</span>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Learn → Build → Experience → Become Career Ready
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
    >
      {children}
    </a>
  );
}
