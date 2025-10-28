import { Button } from "@/components/ui/button";
import logo from "@/assets/roboclean-logo.png";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/B9Z6OayDdU2Hf7a9V0ZVS2";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Roboclean Brasil" className="h-10 md:h-12 w-auto" />
        </a>
        <Button 
          variant="cta" 
          size="lg"
          asChild
          className="animate-glow-pulse"
        >
          <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer">
            Entrar no Grupo Exclusivo
          </a>
        </Button>
      </div>
    </header>
  );
};
