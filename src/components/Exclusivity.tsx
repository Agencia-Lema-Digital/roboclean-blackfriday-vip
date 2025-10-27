import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock, Gift, Star, Clock } from "lucide-react";

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
    <section className="py-24 px-4 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center animate-glow-pulse">
              <Lock className="w-10 h-10 text-accent" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Somente quem estiver dentro do grupo vai saber…
          </h2>

          <Card className="p-8 md:p-12 bg-card/90 backdrop-blur-sm border-accent/30 shadow-2xl">
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-muted-foreground">
                As vagas são <span className="text-accent font-semibold">limitadas</span> e o desconto será liberado{" "}
                <span className="text-foreground font-semibold">apenas dentro do grupo fechado de WhatsApp.</span>
              </p>

              <div className="space-y-4">
                <p className="text-lg font-semibold text-foreground">
                  Lá você receberá, em primeira mão:
                </p>
                <div className="space-y-3">
                  {exclusiveFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div 
                        key={index} 
                        className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <p className="text-lg font-medium">{feature.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  variant="cta" 
                  size="lg"
                  asChild
                  className="text-lg px-10 py-8 h-auto w-full md:w-auto animate-glow-pulse"
                >
                  <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <span className="text-2xl">🔥</span>
                    Quero fazer parte do grupo e garantir meu acesso antecipado!
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
