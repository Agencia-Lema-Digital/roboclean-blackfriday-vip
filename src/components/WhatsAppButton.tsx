import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// ─── Persistência de UTMs no localStorage ─────────────────────────────────────
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"] as const;

const saveUtmParams = () => {
  const params = new URLSearchParams(window.location.search);
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) localStorage.setItem(`rc_${key}`, value);
  });
};

const getUtmParam = (key: string): string => {
  const params = new URLSearchParams(window.location.search);
  return params.get(key) || localStorage.getItem(`rc_${key}`) || "";
};

// ─── Máscara de telefone celular brasileiro ────────────────────────────────────
const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

// ─── Ícone WhatsApp ────────────────────────────────────────────────────────────
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16.002 0C7.165 0 0 7.163 0 16.001c0 2.82.735 5.576 2.135 8.003L.075 32l8.188-2.047A15.94 15.94 0 0016.002 32C24.838 32 32 24.837 32 16.001 32 7.163 24.838 0 16.002 0zm0 29.373a13.35 13.35 0 01-6.816-1.864l-.488-.29-5.063 1.266 1.352-4.923-.318-.506a13.29 13.29 0 01-2.042-7.055c0-7.369 5.998-13.368 13.375-13.368 7.376 0 13.373 5.999 13.373 13.368 0 7.37-5.997 13.372-13.373 13.372zm7.33-10.015c-.402-.2-2.377-1.172-2.745-1.306-.368-.133-.636-.2-.903.2-.268.4-1.037 1.306-1.27 1.573-.234.268-.468.3-.87.1-.401-.2-1.694-.624-3.228-1.99-1.193-1.064-1.998-2.377-2.232-2.779-.234-.4-.025-.617.176-.817.18-.18.401-.468.602-.702.2-.234.267-.4.4-.669.134-.267.067-.5-.033-.7-.1-.2-.903-2.177-1.237-2.98-.325-.782-.656-.676-.903-.69l-.77-.012c-.267 0-.702.1-1.07.5s-1.405 1.372-1.405 3.348c0 1.976 1.438 3.886 1.638 4.153.2.268 2.83 4.32 6.857 6.055.958.413 1.706.66 2.289.844.962.306 1.838.263 2.53.16.771-.116 2.376-.971 2.712-1.909.335-.938.335-1.742.234-1.91-.1-.166-.368-.266-.77-.466z" />
  </svg>
);

// ─── Componente Principal ──────────────────────────────────────────────────────
export const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Salva UTMs ao carregar a página (fallback de persistência)
  useEffect(() => {
    saveUtmParams();
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(formatPhone(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Passo A – impede comportamento padrão do formulário
    e.preventDefault();
    setIsSubmitting(true);

    // Passo B – limpa o número (apenas dígitos)
    const telefoneLimpo = whatsapp.replace(/\D/g, "");

    // Passo C – captura UTMs da URL ou do localStorage
    const utm_source   = getUtmParam("utm_source");
    const utm_medium   = getUtmParam("utm_medium");
    const utm_campaign = getUtmParam("utm_campaign");
    const utm_content  = getUtmParam("utm_content");
    const utm_term     = getUtmParam("utm_term");
    const gclid        = getUtmParam("gclid");
    const fbclid       = getUtmParam("fbclid");

    // Passo D – base do Webhook
    const webhookUrl   = "https://hook.us1.make.com/qda5uki3120qgc834dk22ofpzxphoxos";
    const companyPhone = "5511971365973";

    // Passo E – monta URL com todos os parâmetros
    const queryParams = new URLSearchParams({
      company_phone: companyPhone,
      lead_name:     nome.trim(),
      lead_phone:    telefoneLimpo,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      gclid,
      fbclid,
    });

    const urlMontada = `${webhookUrl}?${queryParams.toString()}`;

    // Passo F – redireciona NA MESMA ABA (nunca window.open ou target="_blank")
    window.location.href = urlMontada;
  };

  return (
    <>
      {/* ── Botão flutuante ── */}
      <button
        id="whatsapp-float-btn"
        onClick={() => setOpen(true)}
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse"
      >
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>

      {/* ── Modal de pré-formulário ── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden border-accent/20">
          {/* Cabeçalho verde */}
          <div className="bg-[#25D366] px-6 pt-6 pb-5 text-white">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div>
                <DialogTitle className="text-white text-lg font-bold leading-tight">
                  Fale com um Consultor
                </DialogTitle>
                <DialogDescription className="text-white/80 text-sm">
                  Preencha para entrar em contato via WhatsApp
                </DialogDescription>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4 bg-card">
            <div className="space-y-1.5">
              <Label htmlFor="wab-nome" className="text-sm font-medium">
                Seu nome completo <span className="text-destructive">*</span>
              </Label>
              <Input
                id="wab-nome"
                type="text"
                placeholder="Ex: João da Silva"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="h-11"
                autoComplete="name"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="wab-whatsapp" className="text-sm font-medium">
                Seu WhatsApp <span className="text-destructive">*</span>
              </Label>
              <Input
                id="wab-whatsapp"
                type="tel"
                placeholder="(00) 00000-0000"
                required
                value={whatsapp}
                onChange={handlePhoneChange}
                className="h-11"
                autoComplete="tel"
                inputMode="numeric"
              />
            </div>

            <Button
              id="whatsapp-lead-submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 text-base font-semibold gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-md hover:shadow-lg transition-all"
            >
              {isSubmitting ? (
                "Conectando..."
              ) : (
                <>
                  <WhatsAppIcon className="w-5 h-5" />
                  Falar com Consultor no WhatsApp
                </>
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Seus dados são usados apenas para atendimento.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
