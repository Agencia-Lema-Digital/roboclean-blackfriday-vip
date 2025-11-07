import { Card, CardContent } from "@/components/ui/card";
import { Wind, Heart, Sparkles, Zap, Shield, Trophy } from "lucide-react";
import robocleanRemote from "@/assets/roboclean-remote.jpg";

const benefits = [
  {
    icon: Wind,
    title: "Respire melhor",
    description: "Elimine ácaros, fungos e bactérias com dupla filtragem por água e filtro HEPA.",
  },
  {
    icon: Heart,
    title: "Ambiente saudável",
    description: "Purifica o ar e reduz crises alérgicas para toda a família.",
  },
  {
    icon: Sparkles,
    title: "Limpeza completa",
    description: "Colchões, estofados, pisos, tapetes e cortinas com um único aparelho.",
  },
  {
    icon: Zap,
    title: "Tecnologia e design",
    description: "Motor potente, baixo ruído e longa durabilidade.",
  },
  {
    icon: Shield,
    title: "13 anos de garantia",
    description: "Investimento protegido com pós-venda especializado.",
  },
  {
    icon: Trophy,
    title: "Investimento inteligente",
    description: "Produto premium importado com exclusividade no Brasil.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="font-altone text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-4">
            Por que <span className="text-accent">milhares de famílias</span> escolheram o Roboclean?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Tecnologia premium que transforma limpeza em saúde
          </p>
        </div>

        {/* Product Image with Remote */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 overflow-hidden rounded-lg">
          <img 
            src={robocleanRemote} 
            alt="Roboclean Pro com controle remoto - Tecnologia e praticidade" 
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all hover:scale-105 hover:shadow-xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
