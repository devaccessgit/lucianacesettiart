import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroPortrait})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <p className="text-secondary text-lg font-medium mb-2">Artista Visual</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
                Luciana Cesetti
              </h1>
              <p className="text-2xl md:text-3xl text-foreground/80 font-light">
                Arte botânica e murais que conectam natureza, memória e cura
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Transformando espaços com cores, formas e símbolos que despertam sensações, 
              criando pontes entre o visível e o sensível. Mais de 500 projetos autorais 
              em pintura artística por todo o Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToPortfolio}
                className="group"
              >
                Ver Portfólio
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                Entre em Contato
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-medium">
              <img
                src={heroPortrait}
                alt="Luciana Cesetti - Artista Visual"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary rounded-full opacity-20 blur-2xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
