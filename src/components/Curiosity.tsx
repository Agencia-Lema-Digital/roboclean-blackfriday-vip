import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/B9Z6OayDdU2Hf7a9V0ZVS2";

export const Curiosity = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-accent/20 shadow-2xl">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Sparkles className="w-16 h-16 text-accent animate-pulse" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold">
              Você achava que já conhecia o Roboclean...
              <br />
              <span className="text-accent">mas ainda não viu o que está por vir!</span>
            </h2>

            <div className="space-y-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              <p>
                Durante o ano todo, o Roboclean já é sinônimo de saúde, tecnologia e bem-estar.
              </p>
              <p>
                Mas nesta Black Friday, preparamos algo <span className="text-foreground font-semibold">inédito</span>, 
                <span className="text-accent font-semibold"> exclusivo</span> para quem entrar no grupo 
                — e não, não é um simples desconto.
              </p>
              <p className="text-xl font-semibold text-foreground">
                É uma oportunidade única de transformar a sua casa em um ambiente realmente saudável.
              </p>
            </div>

            <div className="pt-6">
              <Button 
                variant="cta" 
                size="lg"
                asChild
                className="text-lg px-10 py-7 h-auto"
              >
                <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span className="text-xl">👉</span>
                  Entrar no grupo antes que fechem as vagas
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
