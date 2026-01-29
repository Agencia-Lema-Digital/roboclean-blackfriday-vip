import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/5511971365973?text=Oi,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20Roboclean";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" />
    </a>
  );
};
