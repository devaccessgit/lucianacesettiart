import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import cascaBar1 from "@/assets/casca-bar-1.jpg";
import cascaBar2 from "@/assets/casca-bar-2.jpg";
import akzoNobel1 from "@/assets/akzo-nobel-1.jpg";
import akzoNobel2 from "@/assets/akzo-nobel-2.jpg";
import dreamRoom from "@/assets/dream-room-1.jpg";
import maresias1 from "@/assets/maresias-1.jpg";
import maresias2 from "@/assets/maresias-2.jpg";
import muquiranaBar from "@/assets/muquirana-bar.jpg";

interface Project {
  title: string;
  location: string;
  client: string;
  images: string[];
  type: string;
  featured?: boolean;
  description?: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const murals: Project[] = [
    {
      title: "Casca Gastro-Bar",
      location: "Vila Madalena, São Paulo",
      client: "Patrocínio Suvinil",
      images: [cascaBar1, cascaBar2],
      type: "Mural Comercial",
      description: "Mural vibrante que transforma o ambiente do Casca Gastro-Bar, criando uma experiência visual única para os clientes.",
    },
    {
      title: "Projeto Mês da Mulher",
      location: "Fábrica AkzoNobel, Mauá - SP",
      client: "AkzoNobel / Tintas Coral",
      images: [akzoNobel1, akzoNobel2],
      type: "Mural Corporativo",
      description: "Celebração artística do empoderamento feminino em parceria com AkzoNobel.",
    },
    {
      title: "Quarto dos Sonhos",
      location: "Apartamento Decorado, Campinas - SP",
      client: "Patriani Construtora & Incorporadora",
      images: [dreamRoom],
      type: "Residencial",
      description: "Transformação de ambiente residencial com arte botânica personalizada.",
    },
    {
      title: "Maior Mural da Praia de Maresias",
      location: "Maresias, Litoral Norte - SP",
      client: "Moradores (Parceria @pepybull)",
      images: [maresias1, maresias2],
      type: "Mural - 120 metros",
      featured: true,
      description: "Projeto monumental de 120 metros que conecta arte, natureza e comunidade no litoral paulista.",
    },
    {
      title: "Muquirana's Bar",
      location: "Santo André - SP",
      client: "Muquirana's Bar",
      images: [muquiranaBar],
      type: "Ambiente Comercial",
      description: "Arte que dá identidade e personalidade ao espaço do bar.",
    },
  ];

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

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
                className={`overflow-hidden border-2 hover:border-primary transition-all duration-300 cursor-pointer ${
                  project.featured ? 'bg-primary/5' : ''
                }`}
                onClick={() => openProject(project)}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Carousel de miniaturas */}
                    <div className="relative bg-muted">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {project.images.map((image, imgIndex) => (
                            <CarouselItem key={imgIndex}>
                              <div className="relative aspect-square overflow-hidden group">
                                <img
                                  src={image}
                                  alt={`${project.title} - Imagem ${imgIndex + 1}`}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {project.images.length > 1 && (
                          <>
                            <CarouselPrevious className="left-4" />
                            <CarouselNext className="right-4" />
                          </>
                        )}
                      </Carousel>
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

                      <Button variant="outline" className="w-fit">
                        Ver Detalhes →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Popup com imagens grandes */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && closeProject()}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="space-y-6">
              {/* Navegação de imagens grandes */}
              <div className="relative">
                <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Imagem ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      onClick={prevImage}
                      disabled={currentImageIndex === 0}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                      onClick={nextImage}
                      disabled={currentImageIndex === selectedProject.images.length - 1}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Detalhes do projeto */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tipo</p>
                    <Badge variant="outline">{selectedProject.type}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Local</p>
                    <p className="font-medium">{selectedProject.location}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Cliente</p>
                  <p className="font-semibold text-primary">{selectedProject.client}</p>
                </div>

                {selectedProject.description && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Descrição</p>
                    <p className="text-foreground/80 leading-relaxed">{selectedProject.description}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;