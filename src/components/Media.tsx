import { Badge } from "@/components/ui/badge";
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
      link: "https://www.instagram.com/p/CCHVKASJWdr/",
      isVideo: true,
    },
    {
      title: "UOL - Tapa na Casa",
      description: "Reforma em um dia: quarto vira home office e ateliê",
      image: uolTapaCasa,
      type: "Matéria",
      year: "2020",
      link: "https://www.uol.com.br/nossa/videos/2020/08/07/reforma-em-um-dia-quarto-vira-home-office-e-atelie-com-solucoes-criativas.htm",
      isVideo: true,
    },
    {
      title: "Gillette Venus",
      description: "História inspiradora publicada pela marca",
      image: gilletteVenus,
      type: "Parceria",
      year: "2023",
      link: "https://www.instagram.com/p/CPx5X8VDdL3/?img_index=1",
      isVideo: false,
    },
    {
      title: "Suvinil",
      description: "Parceria de conteúdo entre Tintas Suvinil, @Apto.21 e Lu Cesetti Art",
      image: suvinilCollab,
      type: "Parceria",
      year: "2023",
      link: "https://www.instagram.com/reel/CSXT3Pzp3TO/",
      isVideo: false,
    },
    {
      title: "Reforma Sala de Família",
      description: "Pintura e soluções criativas dão nova vida à sala",
      image: uolTapaCasa,
      type: "Matéria",
      year: "2020",
      link: "https://www.uol.com.br/nossa/videos/2020/09/04/pintura-e-solucoes-criativas-feitas-em-casa-dao-nova-vida-a-sala-de-familia.htm",
      isVideo: true,
    },
    {
      title: "Reforma Quarto - R$ 999",
      description: "Como renovar o quarto com menos de R$ 999",
      image: uolTapaCasa,
      type: "Matéria",
      year: "2020",
      link: "https://www.uol.com.br/nossa/videos/2020/11/06/como-renovar-o-quarto-com-menos-de-r-999-veja-antes-e-depois.htm",
      isVideo: true,
    },
    {
      title: "Quarto dos Sonhos",
      description: "Reforma realiza sonho de menina para o quarto",
      image: uolTapaCasa,
      type: "Matéria",
      year: "2021",
      link: "https://www.uol.com.br/play/videos/nossa/2021/12/13/reforma-de-ate-r-999-realiza-sonho-de-menina-para-o-quarto.htm",
      isVideo: true,
    },
    {
      title: "Mês da Mulher - Santos",
      description: "Painel comemorativo em policlínica de Santos",
      image: globoNews,
      type: "Projeto Social",
      year: "2023",
      link: "#",
      isVideo: false,
    },
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

          {/* Grid de miniaturas quadradas */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-botanical-green-dark hover:shadow-medium transition-all duration-300 cursor-pointer"
                onClick={() => {
                  if (item.link !== "#") {
                    window.open(item.link, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                {/* Imagem */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay com informações */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                    <h3 className="text-white font-bold text-sm line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-xs line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Badge de tipo */}
                <Badge 
                  className="absolute top-2 left-2 text-xs bg-botanical-green-dark text-white"
                >
                  {item.type}
                </Badge>

                {/* Badge de ano */}
                <Badge 
                  variant="secondary"
                  className="absolute top-2 right-2 text-xs"
                >
                  {item.year}
                </Badge>

                {/* Ícone de play para vídeos */}
                {item.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-botanical-green-dark ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Ícone de link externo */}
                {!item.isVideo && item.link !== "#" && (
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;