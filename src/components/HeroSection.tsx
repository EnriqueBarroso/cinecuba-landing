import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-memorias.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Memorias del Subdesarrollo - Clásico del cine cubano"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-sans uppercase tracking-widest text-gold border border-gold/30 bg-gold/5">
                Clásico
              </span>
              <span className="text-sm text-muted-foreground font-light">1968 • Drama</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] tracking-tight">
              Memorias del
              <br />
              <span className="italic">Subdesarrollo</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
              La obra maestra de Tomás Gutiérrez Alea. Un intelectual burgués observa
              la transformación de La Habana tras la Revolución, atrapado entre dos mundos.
            </p>

            {/* Metadata */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground font-light">
              <span>Dir. Tomás Gutiérrez Alea</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span>97 min</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span>ICAIC</span>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <Button variant="hero" size="xl" className="group">
                <Play className="w-5 h-5 fill-current transition-transform group-hover:scale-110" />
                Reproducir
              </Button>
              <Button variant="heroOutline" size="xl">
                <Info className="w-5 h-5" />
                Más info
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
