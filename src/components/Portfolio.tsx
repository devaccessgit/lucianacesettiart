import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import cascaBar1 from "@/assets/casca-bar-1.jpg";
import cascaBar2 from "@/assets/casca-bar-2.jpg";
import akzoNobel1 from "@/assets/akzo-nobel-1.jpg";
import akzoNobel2 from "@/assets/akzo-nobel-2.jpg";
import dreamRoom from "@/assets/dream-room-1.jpg";
import maresias1 from "@/assets/maresias-1.jpg";
import maresias2 from "@/assets/maresias-2.jpg";
import muquiranaBar from "@/assets/muquirana-bar.jpg";

const Portfolio = () => {
  const murals = [
    {
      title: "Casca Gastro-Bar",
      location: "Vila Madalena, São Paulo",
      client: "Patrocínio Suvinil",
      images: [cascaBar1, cascaBar2],
      type: "Mural Comercial",
    },
    {
      title: "Projeto Mês da Mulher",
      location: "Fábrica AkzoNobel, Mauá - SP",
      client: "AkzoNobel / Tintas Coral",
      images: [akzoNobel1, akzoNobel2],
      type: "Mural Corporativo",
    },
    {
      title: "Quarto dos Sonhos",
      location: "Apartamento Decorado, Campinas - SP",
      client: "Patriani Construtora & Incorporadora",
      images: [dreamRoom],
      type: "Residencial",
    },
    {
      title: "Maior Mural da Praia de Maresias",
      location: "Maresias, Litoral Norte - SP",
      client: "Moradores (Parceria @pepybull)",
      images: [maresias1, maresias2],
      type: "Mural - 120 metros",
      featured: true,
    },
    {
      title: "Muquirana's Bar",
      location: "Santo André - SP",
      client: "Muquirana's Bar",
      images: [muquiranaBar],
      type: "Ambiente Comercial",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Murais & Projetos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experiências visuais únicas que transformam espaços e comunicam com impacto
            </p>
          </div>

          <div className="space-y-12">
            {murals.map((project, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden border-2 hover:border-primary transition-all duration-300 ${
                  project.featured ? 'bg-primary/5' : ''
                }`}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Images */}
                    <div className={`grid ${project.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-0`}>
                      {project.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative aspect-square overflow-hidden group"
                        >
                          <img
                            src={image}
                            alt={`${project.title} - Imagem ${imgIndex + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Info */}
                    <div className="p-8 flex flex-col justify-center space-y-4 bg-card">
                      {project.featured && (
                        <Badge className="w-fit bg-accent text-accent-foreground">
                          Destaque
                        </Badge>
                      )}
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {project.type}
                        </Badge>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-lg">
                          {project.location}
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-1">Cliente</p>
                        <p className="font-semibold text-primary">{project.client}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
