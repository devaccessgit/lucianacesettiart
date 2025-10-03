import botanicalArt from "@/assets/botanical-art.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Minha História
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                Luciana Cesetti, artista brasileira, nascida em São Paulo capital, 
                cresceu no ABC, região metropolitana de SP.
              </p>
              
              <p>
                Se considera um <strong className="text-primary">"ser artista"</strong> desde a infância. 
                Transformou o "passatempo" da pintura em profissão, após atuar por cerca de 
                10 anos como jornalista e nas áreas de comunicação e marketing.
              </p>
              
              <p>
                A transição de carreira aconteceu na busca por identidade, propósito e 
                significado em cada dia de trabalho.
              </p>
              
              <p className="font-semibold text-primary">
                Hoje, já são mais de 500 projetos autorais em pintura artística, exclusivos 
                e projetos especiais executados por várias cidades de São Paulo, incluindo 
                também outros estados do Brasil.
              </p>

              <div className="pt-6 space-y-4">
                <div className="border-l-4 border-accent pl-6">
                  <p className="font-semibold text-accent mb-2">Arte para experiências visuais únicas</p>
                  <p className="text-muted-foreground">
                    Arte transformando espaços, com cores, formas e símbolos que despertam sensações.
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-6">
                  <p className="font-semibold text-secondary mb-2">Arte feita por mulher</p>
                  <p className="text-muted-foreground">
                    O feminino ocupando diferentes espaços com força e sensibilidade.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <p className="font-semibold text-primary mb-2">Arte como ferramenta de afeto</p>
                  <p className="text-muted-foreground">
                    Expressão que pulsa e reconecta natureza, memória e cura.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={botanicalArt}
                  alt="Arte Botânica de Luciana Cesetti"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
