import { MessageCircle } from "lucide-react";
import { primaryWhatsAppUrl } from "@/lib/content";

export function WhatsAppFloat() {
  return (
    <a
      href={primaryWhatsAppUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Mastera on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
    >
      <MessageCircle aria-hidden="true" className="h-7 w-7" strokeWidth={2.25} />
    </a>
  );
}
