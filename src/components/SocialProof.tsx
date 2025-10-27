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
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Mais de <span className="text-accent">30.000 famílias</span> já respiram melhor
            <br />
            com o Roboclean
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologia premium com credibilidade internacional
          </p>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card/50 backdrop-blur-sm hover:bg-card transition-colors text-center"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="font-semibold text-sm">{badge.label}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 bg-secondary/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all"
            >
              <div className="space-y-4">
                <p className="text-lg italic">"{testimonial.text}"</p>
                <p className="text-accent font-semibold">— {testimonial.author}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional trust indicator */}
        <div className="mt-16 text-center">
          <Badge variant="secondary" className="px-6 py-3 text-base">
            Produto premium importado com exclusividade no Brasil
          </Badge>
        </div>
      </div>
    </section>
  );
};
