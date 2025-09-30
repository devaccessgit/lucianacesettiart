import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import globoNews from "@/assets/globo-news.jpg";
import uolTapaCasa from "@/assets/uol-tapa-casa.jpg";
import gilletteVenus from "@/assets/gillette-venus.jpg";
import suvinilCollab from "@/assets/suvinil-collab.jpg";

const Media = () => {
  const mediaItems = [
    {
      title: "Jornal das Dez - Globo News",
      description: "Entrevista sobre transição de carreira durante a pandemia de COVID-19",
      image: globoNews,
      type: "Entrevista TV",
      year: "2020",
      link: "#",
      isVideo: true,
    },
    {
      title: "UOL - Tapa na Casa",
      description: "Reforma em um dia: quarto vira home office e ateliê com soluções criativas",
      image: uolTapaCasa,
      type: "Matéria",
      year: "2020",
      link: "#",
      isVideo: true,
    },
    {
      title: "Gillette Venus",
      description: "História inspiradora publicada no Instagram da marca Gillette Venus",
      image: gilletteVenus,
      type: "Parceria",
      year: "2023",
      link: "#",
      isVideo: false,
    },
    {
      title: "Suvinil",
      description: "Parceria de conteúdo entre Tintas Suvinil, @Apto.21 e Lu Cesetti Art",
      image: suvinilCollab,
      type: "Parceria",
      year: "2023",
      engagement: "24.3k curtidas",
      link: "#",
      isVideo: false,
    },
  ];

  const additionalMedia = [
    "Outros projetos do Quadro 'Tapa na Casa' com atuação de Lu Cesetti",
    "Pintura e soluções criativas feitas em casa dão nova vida à sala de família",
    "Como renovar o quarto com menos de R$ 999: veja antes e depois",
    "Muro de policlínica de Santos ganha painel comemorativo ao Mês da Mulher",
  ];

  return (
    <section id="midia" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
              Reconhecimento
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Na Mídia
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O trabalho de Luciana Cesetti repercute em grandes veículos de comunicação e marcas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {mediaItems.map((item, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-2 hover:border-accent hover:shadow-medium transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {item.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/30 group-hover:bg-foreground/50 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>
                    )}
                    <Badge 
                      className="absolute top-4 left-4 bg-accent text-accent-foreground"
                    >
                      {item.type}
                    </Badge>
                    <Badge 
                      variant="secondary"
                      className="absolute top-4 right-4"
                    >
                      {item.year}
                    </Badge>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    
                    {item.engagement && (
                      <div className="text-sm font-semibold text-accent">
                        📊 {item.engagement}
                      </div>
                    )}

                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                      onClick={() => {
                        const newWindow = window.open(item.link, '_blank', 'noopener,noreferrer');
                        if (newWindow) newWindow.opener = null;
                      }}
                    >
                      {item.isVideo ? 'Assistir Matéria' : 'Ver Post'}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Media Mentions */}
          <div className="bg-muted/30 rounded-2xl p-8 border-2 border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Outras Aparições</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {additionalMedia.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
