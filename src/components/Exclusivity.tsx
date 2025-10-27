import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock, Gift, Star, Clock } from "lucide-react";
import robocleanFull from "@/assets/roboclean-full.jpg";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/B9Z6OayDdU2Hf7a9V0ZVS2";

const exclusiveFeatures = [
  {
    icon: Star,
    text: "Condições exclusivas de Black Friday",
  },
  {
    icon: Gift,
    text: "Brindes e bônus secretos",
  },
  {
    icon: Clock,
    text: "Acesso antecipado antes da abertura oficial",
  },
];

export const Exclusivity = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-6 sm:space-y-8 mb-8 sm:mb-12">
          <div className="flex justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/20 flex items-center justify-center animate-glow-pulse">
              <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-4">
            Somente quem estiver dentro do grupo vai saber…
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Product Image */}
          <div className="order-2 lg:order-1 overflow-hidden rounded-lg">
            <img 
              src={robocleanFull} 
              alt="Roboclean Pro completo com todos os acessórios" 
              className="w-full h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card Content */}
          <Card className="order-1 lg:order-2 p-6 sm:p-8 lg:p-12 bg-card/90 backdrop-blur-sm border-accent/30 shadow-2xl overflow-hidden">
            <div className="space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                As vagas são <span className="text-accent font-semibold">limitadas</span> e o desconto será liberado{" "}
                <span className="text-foreground font-semibold">apenas dentro do grupo fechado de WhatsApp.</span>
              </p>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg font-semibold text-foreground">
                  Lá você receberá, em primeira mão:
                </p>
                <div className="space-y-3">
                  {exclusiveFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg font-medium">{feature.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

                <div className="pt-4 sm:pt-6">
                  <Button 
                    variant="cta" 
                    size="lg"
                    asChild
                    className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 h-auto w-full animate-glow-pulse"
                  >
                    <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 break-words">
                      <span className="text-xl sm:text-2xl flex-shrink-0">🔥</span>
                      <span className="break-words text-center">Quero fazer parte do grupo e garantir meu acesso antecipado!</span>
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  };
