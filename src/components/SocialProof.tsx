import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Award, Users, Globe } from "lucide-react";

const trustBadges = [
  {
    icon: ShieldCheck,
    label: "Certificado Inmetro",
  },
  {
    icon: Award,
    label: "Selo ECARF",
  },
  {
    icon: Globe,
    label: "Presente em 70+ países",
  },
  {
    icon: Users,
    label: "13 anos de garantia",
  },
];

const testimonials = [
  {
    text: "Minha rinite melhorou muito depois que comecei a usar. Incrível!",
    author: "Maria S.",
  },
  {
    text: "Vale cada centavo. A casa fica realmente limpa e o ar mais puro.",
    author: "João P.",
  },
  {
    text: "Produto premium de verdade. Acabou com os ácaros do colchão.",
    author: "Ana L.",
  },
];

export const SocialProof = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="font-altone text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-4">
            Mais de <span className="text-accent">30.000 famílias</span> já respiram melhor
            <br className="hidden sm:block" />
            com o Roboclean
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Tecnologia premium com credibilidade internacional
          </p>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <Card 
                key={index} 
                className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm hover:bg-card transition-colors text-center"
              >
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <p className="font-semibold text-xs sm:text-sm leading-tight">{badge.label}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-4 sm:p-6 bg-secondary/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all"
            >
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base lg:text-lg italic leading-relaxed">"{testimonial.text}"</p>
                <p className="text-accent font-semibold text-sm sm:text-base">— {testimonial.author}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional trust indicator */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <Badge variant="secondary" className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base">
            Produto premium importado com exclusividade no Brasil
          </Badge>
        </div>
      </div>
    </section>
  );
};
