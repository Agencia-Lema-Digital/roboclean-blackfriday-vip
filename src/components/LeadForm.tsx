import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarCheck, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    cidade: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
  });

  // Captura UTMs da URL ao carregar
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envio do formulário
    // Aqui você pode integrar com seu backend/CRM
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Em breve entraremos em contato para agendar sua demonstração.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="formulario" className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-8 sm:p-12 bg-card/90 backdrop-blur-sm border-accent/30 shadow-2xl text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
            </div>
            <h2 className="font-altone text-2xl sm:text-3xl md:text-4xl font-bold">
              Obrigado pelo interesse!
            </h2>
            <p className="text-muted-foreground text-lg">
              Recebemos sua solicitação e em breve nossa equipe entrará em contato para agendar sua demonstração gratuita.
            </p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center space-y-4 mb-8 sm:mb-12">
          <div className="flex justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/20 flex items-center justify-center animate-glow-pulse">
              <CalendarCheck className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
            </div>
          </div>
          <h2 className="font-altone text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Agende sua{" "}
            <span className="text-accent">demonstração gratuita</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para agendar a demonstração na sua casa.
          </p>
        </div>

        <Card className="p-6 sm:p-8 lg:p-10 bg-card/90 backdrop-blur-sm border-accent/30 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-base font-medium">
                Nome completo
              </Label>
              <Input
                id="nome"
                name="nome"
                type="text"
                placeholder="Digite seu nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-base font-medium">
                WhatsApp
              </Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="(00) 00000-0000"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cidade" className="text-base font-medium">
                Sua cidade
              </Label>
              <Input
                id="cidade"
                name="cidade"
                type="text"
                placeholder="Digite sua cidade"
                required
                value={formData.cidade}
                onChange={handleChange}
                className="h-12 text-base"
              />
            </div>

            {/* Campos ocultos para UTMs */}
            <input type="hidden" name="utm_source" value={formData.utm_source} />
            <input type="hidden" name="utm_medium" value={formData.utm_medium} />
            <input type="hidden" name="utm_campaign" value={formData.utm_campaign} />
            <input type="hidden" name="utm_content" value={formData.utm_content} />
            <input type="hidden" name="utm_term" value={formData.utm_term} />

            <Button
              type="submit"
              variant="cta"
              size="lg"
              disabled={isSubmitting}
              className="w-full text-sm sm:text-base md:text-lg py-4 sm:py-5 h-auto animate-glow-pulse"
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  <span className="hidden sm:inline">👉</span>
                  <span>Agendar demonstração gratuita</span>
                </>
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Ao enviar, você concorda em receber contato da nossa equipe.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};
