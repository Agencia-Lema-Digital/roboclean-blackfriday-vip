import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Play, Pause, Volume2, VolumeX } from "lucide-react";
import robocleanVideo from "@/assets/roboclean-video-curiosity.mp4";
import { useEffect, useRef, useState } from "react";

const FORM_SECTION_ID = "#formulario";

export const Curiosity = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            try {
              video.muted = true;
              await video.play();
              setIsPlaying(true);
            } catch (err) {
              console.log("Autoplay prevented:", err);
            }
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleTogglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      try {
        await v.play();
        setIsPlaying(true);
        if (isMuted) {
          v.muted = false;
          setIsMuted(false);
        }
      } catch (e) {
        console.log("Manual play failed:", e);
      }
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-background to-secondary/30 overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        <Card className="p-4 sm:p-6 md:p-8 lg:p-12 bg-card/80 backdrop-blur-sm border-2 border-accent/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Product Video */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <video 
                  ref={videoRef}
                  src={robocleanVideo}
                  className="w-full rounded-lg cursor-pointer"
                  loop
                  playsInline
                  muted={isMuted}
                  preload="metadata"
                  aria-label="Demonstração em vídeo do Roboclean"
                  onClick={handleTogglePlay}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  Seu navegador não suporta vídeos.
                </video>

                {/* Controles personalizados */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-md bg-background/70 backdrop-blur px-3 py-2 border border-border/50 shadow-sm">
                  <button
                    type="button"
                    onClick={handleTogglePlay}
                    aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                    className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>

                  <button
                    type="button"
                    onClick={handleToggleMute}
                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                    className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 text-center md:text-left space-y-4 sm:space-y-6">
              <div className="flex justify-center md:justify-start">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-accent animate-pulse" />
              </div>
              
              <h2 className="font-altone text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Um parceiro completo para{" "}
                <span className="text-accent">limpar, purificar e cuidar</span>
                {" "}da sua casa.
              </h2>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground">
                <p>
                  Cada acessório do Roboclean foi desenvolvido para resolver uma necessidade real do dia a dia — desde a higienização profunda de estofados e colchões até a limpeza dos cantos mais difíceis.
                </p>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
                  Você não leva apenas um equipamento: leva um sistema completo para transformar o ar, o ambiente e a saúde da sua família.
                </p>
              </div>

              <div className="pt-4 sm:pt-6">
                <Button variant="cta" size="lg" asChild className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 h-auto w-full md:w-auto">
                  <a href={FORM_SECTION_ID} className="flex items-center justify-center gap-2">
                    <span className="hidden sm:inline">👉</span>
                    <span>Demonstração gratuita</span>
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