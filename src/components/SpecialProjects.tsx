import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import kombiCiganos1 from "@/assets/kombi-ciganos-1.jpg";
import kombiCiganos2 from "@/assets/kombi-ciganos-2.jpg";
import midiFashion from "@/assets/midi-fashion.jpg";
import products from "@/assets/products-1.jpg";
import livePainting from "@/assets/live-painting-1.jpg";
import redebodyPanel from "@/assets/redebody-panel.jpg";

interface SpecialProject {
  title: string;
  client: string;
  images: string[];
  category: string;
  description?: string;
}

const SpecialProjects = () => {
  const [selectedProject, setSelectedProject] = useState<SpecialProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: SpecialProject[] = [
    {
      title: "Arte Autoral para Kombi 'Ciga-Nos'",
      client: "@ciga_nosnakombi",
      images: [kombiCiganos1, kombiCiganos2],
      category: "Arte em Veículo",
      description: "Personalização completa de kombi com arte botânica autoral, transformando o veículo em uma obra de arte móvel.",
    },
    {
      title: "Design em Painel para Coleção de Moda",
      client: "Midi Zero11",
      images: [midiFashion],
      category: "Moda & Design",
      description: "Criação de painel artístico exclusivo para coleção de moda, unindo arte e fashion.",
    },
    {
      title: "Produtos Personalizados & Autorais",
      client: "Lu Cesetti Art",
      images: [products],
      category: "Produtos",
      description: "Linha de produtos exclusivos com arte botânica, levando a arte para o dia a dia.",
    },
    {
      title: "Live Painting em Eventos",
      client: "Crema Cultural & Casa Ativa - Santos",
      images: [livePainting],
      category: "Performance",
      description: "Performance artística ao vivo, criando obras em tempo real durante eventos culturais.",
    },
    {
      title: "Painel Live Painting - Dia das Mães",
      client: "Redebody Tech",
      images: [redebodyPanel],
      category: "Corporativo",
      description: "Arte ao vivo criada durante evento corporativo em celebração ao Dia das Mães.",
    },
  ];

  const openProject = (project: SpecialProject) => {
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
    <section id="projetos-especiais" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
              Versatilidade
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Projetos Especiais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              De live painting a produtos autorais, cada projeto é uma nova forma de expressar arte
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-2 hover:border-accent hover:shadow-medium transition-all duration-300 cursor-pointer"
                onClick={() => openProject(project)}
              >
                <CardContent className="p-0">
                  {/* Carrossel de miniaturas quadradas */}
                  <div className="relative">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.images.map((image, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <div className="relative aspect-square overflow-hidden">
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
                          <CarouselPrevious className="left-2" />
                          <CarouselNext className="right-2" />
                        </>
                      )}
                    </Carousel>
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-accent text-accent-foreground">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.client}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Popup com imagens grandes e detalhes */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && closeProject()}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="space-y-6">
              {/* Navegação de imagens grandes */}
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
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
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Categoria</p>
                  <Badge className="bg-accent text-accent-foreground">{selectedProject.category}</Badge>
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

export default SpecialProjects;