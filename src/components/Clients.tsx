import { Badge } from "@/components/ui/badge";
import suvinil from "@/assets/clients/suvinil.png";
import akzonobel from "@/assets/clients/akzonobel.png";
import coral from "@/assets/clients/coral.png";
import gilletteVenus from "@/assets/clients/gillette-venus.png";
import redebody from "@/assets/clients/redebody.png";
import metroTatuape from "@/assets/clients/metro-tatuape.png";
import patriani from "@/assets/clients/patriani.png";
import contatto from "@/assets/clients/contatto.png";
import cremaCultural from "@/assets/clients/crema-cultural.png";
import casaAtiva from "@/assets/clients/casa-ativa.png";
import midiZero11 from "@/assets/clients/midi-zero11.png";
import cascaGastro from "@/assets/clients/casca-gastro.png";
import muquirana from "@/assets/clients/muquirana.png";
import prefeituraSantos from "@/assets/clients/prefeitura-santos.png";

const Clients = () => {
  const clients = [
    {
      name: "Suvinil",
      logo: suvinil,
    },
    {
      name: "AkzoNobel",
      logo: akzonobel,
    },
    {
      name: "Coral",
      logo: coral,
    },
    {
      name: "Gillette Venus",
      logo: gilletteVenus,
    },
    {
      name: "Redebody",
      logo: redebody,
    },
    {
      name: "Shopping Metrô Tatuapé",
      logo: metroTatuape,
    },
    {
      name: "Patriani Construtora",
      logo: patriani,
    },
    {
      name: "Contatto",
      logo: contatto,
    },
    {
      name: "Crema Cultural",
      logo: cremaCultural,
    },
    {
      name: "Casa Ativa",
      logo: casaAtiva,
    },
    {
      name: "Midi Zero11",
      logo: midiZero11,
    },
    {
      name: "Casca Gastro-Bar",
      logo: cascaGastro,
    },
    {
      name: "Muquirana's Bar",
      logo: muquirana,
    },
    {
      name: "Prefeitura de Santos",
      logo: prefeituraSantos,
    },
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border-2 border-border hover:border-botanical-green-dark hover:shadow-medium transition-all duration-300 flex flex-col items-center justify-center text-center gap-4"
              >
                <div className="w-full h-32 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    onError={(e) => {
                      // Fallback para texto se a imagem não carregar
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML = `<p class="font-semibold text-foreground/80 group-hover:text-primary transition-colors">${client.name}</p>`;
                      }
                    }}
                  />
                </div>
                <p className="font-medium text-sm text-muted-foreground group-hover:text-botanical-green-dark transition-colors">
                  {client.name}
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