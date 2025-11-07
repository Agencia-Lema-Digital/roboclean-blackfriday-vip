import { Button } from "@/components/ui/button";
import logo from "@/assets/roboclean-logo.png";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/B9Z6OayDdU2Hf7a9V0ZVS2";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
        <a href="/" className="flex items-center flex-shrink-0">
          <img src={logo} alt="Roboclean Brasil" className="h-8 sm:h-10 md:h-12 w-auto" />
        </a>
        <Button 
          variant="cta" 
          size="sm"
          asChild
          className="animate-glow-pulse text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3 h-auto whitespace-nowrap"
        >
          <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer">
            Grupo Exclusivo
          </a>
        </Button>
      </div>
    </header>
  );
};
