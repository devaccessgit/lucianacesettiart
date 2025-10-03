import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Ruler, Palette, Sparkles } from "lucide-react";

const Budget = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511937522126', '_blank', 'noopener,noreferrer');
  };

  const steps = [
    {
      icon: Ruler,
      title: "Compartilhe seu projeto",
      description: "Envie as medidas e detalhes do seu projeto",
    },
    {
      icon: Palette,
      title: "Preparamos o orçamento",
      description: "Nossa equipe prepara o orçamento e marca um bate-papo leve para alinhar cada detalhe da sua ideia",
    },
    {
      icon: Sparkles,
      title: "Damos vida à sua arte",
      description: "Depois da sua aprovação, damos início à produção da sua arte, feita com todo cuidado e dedicação",
    },
  ];

  return (
    <section id="orcamento" className="py-24 bg-gradient-to-b from-background to-rose">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Como Funciona o Orçamento
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Um processo simples e transparente para transformar sua ideia em arte
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index}
                  className="border-2 border-botanical-green-dark/20 hover:border-botanical-green-dark hover:shadow-medium transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-botanical-green-dark/10 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-botanical-green-dark" />
                    </div>
                    <div className="w-8 h-8 mx-auto mb-4 bg-marsala text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center space-y-6">
            <p className="text-2xl font-semibold text-marsala">
              ✨ Assim, sua inspiração ganha forma e se transforma em uma peça única.
            </p>
            
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-botanical-green-dark hover:bg-botanical-green-dark/90 text-white text-lg px-8 py-6 h-auto group"
            >
              <MessageCircle className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Solicitar Orçamento pelo WhatsApp
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Responderemos em breve para iniciar seu projeto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Budget;