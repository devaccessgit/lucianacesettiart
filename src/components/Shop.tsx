import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, ExternalLink, Palette, Package, Sparkles } from "lucide-react";

const Shop = () => {
  const shopFeatures = [
    {
      icon: Palette,
      title: "Arte Original",
      description: "Obras exclusivas e autorais",
    },
    {
      icon: Package,
      title: "Produtos Únicos",
      description: "Itens personalizados com arte botânica",
    },
    {
      icon: Sparkles,
      title: "Qualidade Premium",
      description: "Materiais selecionados e acabamento perfeito",
    },
  ];

  const handleVisitShop = () => {
    window.open('https://lucesettiart.myshopify.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="loja" className="py-24 bg-gradient-to-b from-rose to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-botanical-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-marsala/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
              <ShoppingBag className="w-4 h-4 mr-2 inline" />
              Loja Online
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Arte para Levar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore nossa coleção de obras e produtos exclusivos
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {shopFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="border-2 border-botanical-green-dark/20 hover:border-botanical-green-dark hover:shadow-medium transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-botanical-green/10 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-botanical-green-dark" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <Card className="border-2 border-botanical-green-dark/30 bg-gradient-to-br from-botanical-green/5 to-marsala/5 overflow-hidden">
            <CardContent className="p-12 text-center space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Visite Nossa Loja</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Descubra peças únicas que trazem a beleza da arte botânica para o seu dia a dia. 
                  De obras originais a produtos personalizados, cada item é criado com dedicação e amor.
                </p>
              </div>

              <Button 
                size="lg"
                onClick={handleVisitShop}
                className="bg-botanical-green-dark hover:bg-botanical-green-dark/90 text-white text-lg px-8 py-6 h-auto group shadow-lg"
              >
                <ShoppingBag className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
                Visitar Loja Online
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-muted-foreground">
                Você será redirecionado para nossa loja no Shopify
              </p>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              💚 Envios para todo o Brasil • 📦 Embalagem especial • ✨ Arte autêntica
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;