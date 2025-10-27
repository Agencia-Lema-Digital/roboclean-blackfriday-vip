import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Droplets, Wind } from "lucide-react";
import robocleanHero from "@/assets/roboclean-hero.png";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/B9Z6OayDdU2Hf7a9V0ZVS2";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-background opacity-90" />
      
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <img 
              src={robocleanHero} 
              alt="Roboclean Pro - Aspirador com Filtragem de Água e HEPA" 
              className="w-full max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8 animate-fade-in">
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Certificado Inmetro
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Wind className="w-4 h-4 mr-2" />
              Selo ECARF
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Droplets className="w-4 h-4 mr-2" />
              Dupla Filtragem
            </Badge>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            A limpeza que transformou{" "}
            <span className="text-accent">milhares de lares</span>
            <br />
            agora com a maior oferta do ano!
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            A Black Friday da Roboclean chegou e vai surpreender você.
            Participe do grupo exclusivo no WhatsApp e seja o primeiro a descobrir a{" "}
            <span className="text-accent font-semibold">oferta secreta</span> que só será revelada lá
            — apenas para quem entrar antes do lançamento oficial!
          </p>

          {/* CTA Button */}
          <div className="pt-6 animate-fade-in-delayed">
            <Button 
              variant="cta" 
              size="lg"
              asChild
              className="text-lg px-12 py-8 h-auto animate-glow-pulse"
            >
              <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span className="text-2xl">👉</span>
                Quero entrar no grupo exclusivo!
              </a>
            </Button>
          </div>

            {/* Trust indicators */}
            <p className="text-sm text-muted-foreground pt-8">
              Mais de 30.000 famílias já confiam no Roboclean
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
