import { Button } from "@/components/ui/button";
import robocleanHero from "@/assets/roboclean-hero.png";

const FORM_SECTION_ID = "#formulario";

export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-background opacity-90" />
      
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/30 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center my-[30px] py-0">
          {/* Product Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <img src={robocleanHero} alt="Roboclean Pro - Aspirador com Filtragem de Água e HEPA" className="w-full max-w-md lg:max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in">
          {/* Main headline */}
          <h1 className="font-altone sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2 sm:px-0 text-4xl">
            Mais do que um aspirador: o Roboclean transforma o ar, o ambiente e o{" "}
            <span className="text-accent">bem-estar da sua família.</span>
          </h1>

          {/* Subheadline */}
          <p className="sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-delayed px-2 sm:px-0 text-sm">
            Há quase 30 anos, o Roboclean vem revolucionando a forma de cuidar da casa — purificando o ar, eliminando ácaros e elevando a saúde e o conforto de milhares de lares.
          </p>

          {/* CTA Button */}
          <div className="pt-4 animate-fade-in-delayed px-2 sm:px-0">
            <Button variant="cta" size="lg" asChild className="text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-8 lg:px-12 py-5 sm:py-6 lg:py-8 h-auto animate-glow-pulse w-full sm:w-auto">
              <a href={FORM_SECTION_ID} className="flex items-center justify-center gap-2">
                <span className="text-lg sm:text-xl lg:text-2xl">👉</span>
                <span className="break-words leading-tight">Agende uma demonstração gratuita do Roboclean!</span>
              </a>
            </Button>
          </div>

            {/* Trust indicators */}
            <p className="text-xs sm:text-sm text-muted-foreground pt-6">
              Mais de 30.000 famílias já confiam no Roboclean
            </p>
          </div>
        </div>
      </div>
    </section>;
};