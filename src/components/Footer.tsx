import logo from "@/assets/roboclean-logo.png";
import { Instagram, Music } from "lucide-react";
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
                <Music className="w-5 h-5 text-white" />
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