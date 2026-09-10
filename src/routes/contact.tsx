import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";

import { FaqSection } from "@/components/FaqSection";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappLink } from "@/config/site";
import { generalFaqs } from "@/data/faqs";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Zortex Solutions | Enquiries & Callbacks" },
      {
        name: "description",
        content:
          "Get in touch with Zortex Solutions about our training programmes, courses and externship. Send an enquiry or chat with us directly.",
      },
      { property: "og:title", content: "Contact | Zortex Solutions" },
      {
        property: "og:description",
        content:
          "Phone, email and enquiry form for Zortex Solutions training programmes, courses and externship.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the Zortex team"
        description="Ask about programmes, courses, the externship or anything else — we'll get back to you quickly."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section-y">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div className="min-w-0">
              <SectionHeader
                align="left"
                eyebrow="Contact information"
                title="Reach us directly"
                className="max-w-none"
              />

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"
                  >
                    <Phone className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground">Phone</span>
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </span>
                </li>

                <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"
                  >
                    <Mail className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground">Email</span>
                    <a
                      href={siteConfig.contact.emailHref}
                      className="block break-all text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </span>
                </li>

                <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"
                  >
                    <MapPin className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground">Address</span>
                    <span className="block text-sm text-muted-foreground">
                      {siteConfig.contact.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </span>
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-primary/20 bg-primary-soft/50 p-6">
                <h2 className="text-base font-bold text-foreground">Prefer to chat?</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Message us on WhatsApp and we'll reply with the details you need.
                </p>
                <Button asChild variant="hero" className="mt-4 w-full">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle aria-hidden="true" />
                    Chat with Us
                  </a>
                </Button>
              </div>

              <div className="mt-6">
                <h2 className="text-sm font-semibold text-foreground">Follow us</h2>
                <div className="mt-3 flex items-center gap-2">
                  <SocialButton href={siteConfig.social.instagram} label="Instagram">
                    <Instagram aria-hidden="true" className="size-4" />
                  </SocialButton>
                  <SocialButton href={siteConfig.social.linkedin} label="LinkedIn">
                    <Linkedin aria-hidden="true" className="size-4" />
                  </SocialButton>
                  <SocialButton href={siteConfig.social.youtube} label="YouTube">
                    <Youtube aria-hidden="true" className="size-4" />
                  </SocialButton>
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <SectionHeader
                align="left"
                eyebrow="Enquiry form"
                title="Send us an enquiry"
                description="Fill in your details and our team will respond with the information you're looking for."
                className="max-w-none"
              />
              <LeadForm
                className="mt-8"
                source="contact-page"
                submitLabel="Send Enquiry"
                showProgram
                showCourse
              />
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={generalFaqs.slice(5)} title="Before you write to us" />
    </>
  );
}

function SocialButton({
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
      className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
    >
      {children}
    </a>
  );
}
