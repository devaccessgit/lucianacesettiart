import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import kombiCiganos1 from "@/assets/kombi-ciganos-1.jpg";
import kombiCiganos2 from "@/assets/kombi-ciganos-2.jpg";
import midiFashion from "@/assets/midi-fashion.jpg";
import products from "@/assets/products-1.jpg";
import livePainting from "@/assets/live-painting-1.jpg";
import redebodyPanel from "@/assets/redebody-panel.jpg";

const SpecialProjects = () => {
  const projects = [
    {
      title: "Arte Autoral para Kombi 'Ciga-Nos'",
      client: "@ciga_nosnakombi",
      image: kombiCiganos1,
      category: "Arte em Veículo",
    },
    {
      title: "Design em Painel para Coleção de Moda",
      client: "Midi Zero11",
      image: midiFashion,
      category: "Moda & Design",
    },
    {
      title: "Produtos Personalizados & Autorais",
      client: "Lu Cesetti Art",
      image: products,
      category: "Produtos",
    },
    {
      title: "Live Painting em Eventos",
      client: "Crema Cultural & Casa Ativa - Santos",
      image: livePainting,
      category: "Performance",
    },
    {
      title: "Painel Live Painting - Dia das Mães",
      client: "Redebody Tech",
      image: redebodyPanel,
      category: "Corporativo",
    },
  ];

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
                className="group overflow-hidden border-2 hover:border-accent hover:shadow-medium transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge 
                      className="absolute top-4 left-4 bg-accent text-accent-foreground"
                    >
                      {project.category}
                    </Badge>
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
    </section>
  );
};

export default SpecialProjects;
