/**
 * Central site configuration.
 * Update contact details, WhatsApp number and social links here only.
 */

export const siteConfig = {
  name: "Zortex Solutions",
  shortName: "Zortex",
  tagline: "Build skills. Prove your ability. Compete for the role.",
  description:
    "Zortex Solutions builds job-ready technical skills through practical training, industry-partner projects and structured interview preparation.",
  url: "https://zortexsolutions.com",

  contact: {
    phone: "+91 91777 32225",
    phoneHref: "tel:+919177732225",
    email: "extern.partner@zortexsolutions.com",
    emailHref: "mailto:extern.partner@zortexsolutions.com",
    addressLines: [
      "Vijayawada Office - Bandar Road, Labbipeta, Vijayawada, Andhra Pradesh",
      "Hyderabad Office - To be updated",
    ],
  },

  /** WhatsApp number in international format, digits only. */
  whatsappNumber: "919177732225",
  whatsappMessage:
    "Hi, I'm interested in learning more about the Programs offered by Zortex Solutions.",

  social: {
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },

  feePlaceholder: "Fee: To be updated",
} as const;

export function whatsappLink(message: string = siteConfig.whatsappMessage): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
