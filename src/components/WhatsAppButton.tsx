import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const whatsappNumber = "+27000000000";
  const message = "Hi Arenaya, I'd like to learn more about your corporate gifting services.";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 lg:hidden"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg bg-[#25D366] hover:bg-[#20BA5A] text-white"
      >
        <MessageCircle size={24} />
      </Button>
    </a>
  );
}
