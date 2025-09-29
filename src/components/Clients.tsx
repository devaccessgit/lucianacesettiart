import { Badge } from "@/components/ui/badge";

const Clients = () => {
  const clients = [
    "Suvinil",
    "Patriani Construtora & Incorporadora",
    "AkzoNobel / Tintas Coral",
    "Contatto",
    "Redebody Tech",
    "Gillette Venus",
    "Shopping Metro Boulevard Tatuapé",
    "Crema Cultural",
    "Casa Ativa",
    "Midi Zero11",
    "Casca Gastro-Bar",
    "Muquirana's Bar",
    "Prefeitura de Santos",
  ];

  return (
    <section id="clientes" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
              Confiança
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Parceiros & Clientes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Marcas e empresas que confiaram em nosso trabalho para transformar seus espaços
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border-2 border-border hover:border-primary hover:shadow-soft transition-all duration-300 flex items-center justify-center text-center"
              >
                <p className="font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                  {client}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground italic">
              ...entre outros projetos e parcerias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
