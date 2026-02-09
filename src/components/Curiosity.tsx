import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const FORM_SECTION_ID = "#formulario";

export const Curiosity = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-background to-secondary/30 overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        <Card className="p-4 sm:p-6 md:p-8 lg:p-12 bg-card/80 backdrop-blur-sm border-2 border-accent/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* YouTube Video */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-lg aspect-[9/16]">
                <iframe
                  src="https://www.youtube.com/embed/Z0iYAMnaNWs"
                  title="Demonstração Roboclean"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 text-center md:text-left space-y-4 sm:space-y-6">
              <div className="flex justify-center md:justify-start">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-accent animate-pulse" />
              </div>
              
              <h2 className="font-altone text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Um parceiro completo para{" "}
                <span className="text-accent">limpar, purificar e cuidar</span>
                {" "}da sua casa.
              </h2>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground">
                <p>
                  Cada acessório do Roboclean foi desenvolvido para resolver uma necessidade real do dia a dia — desde a higienização profunda de estofados e colchões até a limpeza dos cantos mais difíceis.
                </p>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
                  Você não leva apenas um equipamento: leva um sistema completo para transformar o ar, o ambiente e a saúde da sua família.
                </p>
              </div>

              <div className="pt-4 sm:pt-6">
                <Button variant="cta" size="lg" asChild className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 h-auto w-full md:w-auto">
                  <a href={FORM_SECTION_ID} className="flex items-center justify-center gap-2">
                    <span className="hidden sm:inline">👉</span>
                    <span>Demonstração gratuita</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
