/**
 * Central site configuration.
 * Update contact details, WhatsApp number and social links here only.
 */

export const siteConfig = {
  name: "Zortex Solutions",
  shortName: "Zortex",
  tagline: "Learn. Build. Experience. Get Career Ready.",
  description:
    "Zortex Solutions provides practical technical training, real-time projects and externship opportunities that help students become career ready.",
  url: "https://zortexsolutions.com",

  contact: {
    phone: "+91 00000 00000",
    phoneHref: "tel:+910000000000",
    email: "contact@zortexsolutions.com",
    emailHref: "mailto:contact@zortexsolutions.com",
    addressLines: ["Zortex Solutions", "Address line 1 — to be updated", "City, State, PIN"],
  },

  /** WhatsApp number in international format, digits only. */
  whatsappNumber: "910000000000",
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
