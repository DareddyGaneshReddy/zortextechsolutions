import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/config/site";

export function FloatingChat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 sm:bottom-7 sm:right-7"
    >
      <MessageCircle aria-hidden="true" className="size-5" />
      <span className="hidden sm:inline">Chat with Us</span>
      <span className="sr-only sm:hidden">Chat with Us on WhatsApp</span>
    </a>
  );
}
