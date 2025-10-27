import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import robocleanDetail from "@/assets/roboclean-detail.jpg";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/B9Z6OayDdU2Hf7a9V0ZVS2";

export const Curiosity = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-accent/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Product Image */}
            <div className="order-2 md:order-1">
              <img 
                src={robocleanDetail} 
                alt="Roboclean Pro - Detalhe do produto premium" 
                className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 text-center md:text-left space-y-6">
              <div className="flex justify-center md:justify-start">
                <Sparkles className="w-16 h-16 text-accent animate-pulse" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Você achava que já conhecia o Roboclean...
                <br />
                <span className="text-accent">mas ainda não viu o que está por vir!</span>
              </h2>

              <div className="space-y-4 text-base md:text-lg lg:text-xl text-muted-foreground">
                <p>
                  Durante o ano todo, o Roboclean já é sinônimo de saúde, tecnologia e bem-estar.
                </p>
                <p>
                  Mas nesta Black Friday, preparamos algo <span className="text-foreground font-semibold">inédito</span>, 
                  <span className="text-accent font-semibold"> exclusivo</span> para quem entrar no grupo 
                  — e não, não é um simples desconto.
                </p>
                <p className="text-lg md:text-xl font-semibold text-foreground">
                  É uma oportunidade única de transformar a sua casa em um ambiente realmente saudável.
                </p>
              </div>

              <div className="pt-6">
                <Button 
                  variant="cta" 
                  size="lg"
                  asChild
                  className="text-lg px-10 py-7 h-auto w-full md:w-auto"
                >
                  <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <span className="text-xl">👉</span>
                    Entrar no grupo antes que fechem as vagas
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
