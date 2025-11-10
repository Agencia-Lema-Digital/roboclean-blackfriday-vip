import { Card, CardContent } from "@/components/ui/card";
import { Wind, Heart, Sparkles, Zap, Shield, Trophy, Play, Pause, Volume2, VolumeX } from "lucide-react";
import robocleanVideo from "@/assets/roboclean-video-29-1.mp4";
import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    icon: Wind,
    title: "Respire melhor",
    description: "Elimine ácaros, fungos e bactérias com dupla filtragem por água e filtro HEPA.",
  },
  {
    icon: Heart,
    title: "Ambiente saudável",
    description: "Purifica o ar e reduz crises alérgicas para toda a família.",
  },
  {
    icon: Sparkles,
    title: "Limpeza completa",
    description: "Colchões, estofados, pisos, tapetes e cortinas com um único aparelho.",
  },
  {
    icon: Zap,
    title: "Tecnologia e design",
    description: "Motor potente, baixo ruído e longa durabilidade.",
  },
  {
    icon: Shield,
    title: "13 anos de garantia",
    description: "Investimento protegido com pós-venda especializado.",
  },
  {
    icon: Trophy,
    title: "Investimento inteligente",
    description: "Produto premium importado com exclusividade no Brasil.",
  },
];

export const Benefits = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);

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

  const handleVolumeChange = (val: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = val;
    setVolume(val);
    if (val > 0) {
      v.muted = false;
      setIsMuted(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="font-altone text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-4">
            Por que <span className="text-accent">milhares de famílias</span> escolheram o Roboclean?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Tecnologia premium que transforma limpeza em saúde
          </p>
        </div>

        {/* Layout responsivo: vídeo vertical no mobile, lado a lado no desktop */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Vídeo vertical */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative max-w-sm w-full overflow-hidden rounded-lg shadow-2xl">
              <video 
                ref={videoRef}
                src={robocleanVideo}
                className="w-full h-auto rounded-lg cursor-pointer"
                loop
                playsInline
                muted={isMuted}
                preload="metadata"
                aria-label="Demonstração em vídeo do Roboclean"
                onClick={handleTogglePlay}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onVolumeChange={(e) => {
                  setIsMuted(e.currentTarget.muted);
                  setVolume(e.currentTarget.volume);
                }}
              >
                Seu navegador não suporta vídeos.
              </video>

              {/* Controles personalizados */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-md bg-background/70 backdrop-blur px-3 py-2 border border-border/50 shadow-sm">
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                  className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleToggleMute}
                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                    className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={isMuted ? 0 : volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    aria-label="Volume"
                    className="w-28 h-2 rounded-md accent-[hsl(var(--primary))]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Grid de benefícios ao lado (desktop) ou abaixo (mobile) */}
          <div className="w-full lg:w-3/5">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all hover:scale-105 hover:shadow-xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
