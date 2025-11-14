import logo from "@/assets/roboclean-logo.png";
import { Instagram, Facebook, Youtube } from "lucide-react";

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);
export const Footer = () => {
  return <footer className="bg-white/90 border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <img src={logo} alt="Roboclean Brasil" className="h-10 w-auto" />
            <p className="text-sm text-gray-700">
              Importadora e distribuidora exclusiva da tecnologia Aura Roboclean.
              Presente em mais de 70 países.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-900">Contato</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>WhatsApp: (11) 97136-5973</p>
              <p>De segunda a sexta, 8h às 18h</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-900">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/robocleanbrasil/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.tiktok.com/@robocleanbrasil" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors" aria-label="TikTok">
                <TikTokIcon className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.facebook.com/robocleanbrasil/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.youtube.com/channel/UCwU15Q2gyFcFVaWfQAz9KYw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-300 text-center space-y-2">
          <p className="text-sm text-gray-700">
            © {new Date().getFullYear()} Roboclean Brasil. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600">
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
          </p>
        </div>
      </div>
    </footer>;
};