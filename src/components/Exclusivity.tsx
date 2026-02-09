import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarCheck, Home, Sparkles, Clock } from "lucide-react";
import robocleanFull from "@/assets/roboclean-full.jpg";
const FORM_SECTION_ID = "#formulario";
const demoFeatures = [{
  icon: Home,
  text: "Demonstração gratuita no conforto da sua casa"
}, {
  icon: Sparkles,
  text: "Veja na prática a diferença na limpeza e no ar"
}, {
  icon: Clock,
  text: "Sem compromisso — você decide depois de experimentar"
}];
export const Exclusivity = () => {
  return <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-6 sm:space-y-8 mb-8 sm:mb-12">
          <div className="flex justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/20 flex items-center justify-center animate-glow-pulse">
              <CalendarCheck className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
            </div>
          </div>

          <h2 className="font-altone text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight px-4">
            Experimente antes de decidir — na sua casa, sem compromisso.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Product Image */}
          <div className="order-2 lg:order-1 overflow-hidden rounded-lg">
            <img alt="Roboclean Pro completo com todos os acessórios" className="w-full h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500" src="/lovable-uploads/81125bf9-4d1d-4fac-aca8-a595e40a757c.png" />
          </div>

          {/* Card Content */}
          <Card className="order-1 lg:order-2 p-6 sm:p-8 lg:p-12 bg-card/90 backdrop-blur-sm border-accent/30 shadow-2xl overflow-hidden">
            <div className="space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Nada melhor do que <span className="text-accent font-semibold">ver e sentir</span> a diferença do Roboclean funcionando no seu próprio lar.{" "}
                <span className="text-foreground font-semibold">Agende uma demonstração gratuita e descubra por que milhares de famílias já transformaram a saúde da casa.</span>
              </p>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg font-semibold text-foreground">
                  O que você ganha com a demonstração:
                </p>
                <div className="space-y-3">
                  {demoFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg font-medium">{feature.text}</p>
                      </div>;
                })}
                </div>
              </div>

                <div className="pt-4 sm:pt-6">
                  <Button variant="cta" size="lg" asChild className="text-sm sm:text-base md:text-lg px-4 sm:px-6 py-4 sm:py-5 md:py-6 h-auto w-full animate-glow-pulse max-w-full">
                    <a href={FORM_SECTION_ID} className="flex items-center justify-center gap-2 text-center">
                      <span className="text-lg sm:text-xl hidden sm:inline">🔥</span>
                      <span className="leading-tight">Agendar demonstração gratuita</span>
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>;
};