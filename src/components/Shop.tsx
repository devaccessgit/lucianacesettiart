import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";

const Shop = () => {
  return (
    <section id="loja" className="py-24 bg-gradient-to-b from-rose to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
              <ShoppingBag className="w-4 h-4 mr-2 inline" />
              Loja Online
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Arte para Levar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore nossa coleção de obras prontas para transformar seu espaço
            </p>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden shadow-medium border-2 border-botanical-green-dark/20" style={{ minHeight: "800px" }}>
            <iframe
              src="https://lucesettiart.myshopify.com/"
              className="w-full h-full absolute inset-0"
              style={{ minHeight: "800px" }}
              title="Loja Lu Cesetti Art"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;