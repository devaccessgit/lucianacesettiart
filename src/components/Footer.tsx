import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Luciana Cesetti</h3>
              <p className="text-background/80">
                Arte botânica e murais que transformam espaços
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Links Rápidos</h4>
              <div className="flex flex-col gap-2">
                <a href="#sobre" className="text-background/80 hover:text-background transition-colors">
                  Sobre
                </a>
                <a href="#portfolio" className="text-background/80 hover:text-background transition-colors">
                  Portfolio
                </a>
                <a href="#midia" className="text-background/80 hover:text-background transition-colors">
                  Mídia
                </a>
                <a href="#loja" className="text-background/80 hover:text-background transition-colors">
                  Loja
                </a>
                <a href="#orcamento" className="text-background/80 hover:text-background transition-colors">
                  Orçamento
                </a>
                <a href="#contato" className="text-background/80 hover:text-background transition-colors">
                  Contato
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="flex flex-col gap-3">
                <a 
                  href="mailto:oi@lucianacesetti.com.br"
                  className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  oi@lucianacesetti.com.br
                </a>
                <a 
                  href="https://instagram.com/lu.cesetti.art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  @lu.cesetti.art
                </a>
                <a 
                  href="https://wa.me/5511960583005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (11) 96058-3005
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>© {currentYear} Luciana Cesetti. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
