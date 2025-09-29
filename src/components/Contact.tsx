import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Instagram, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lucianacesetti.com.br",
      link: "mailto:oi@lucianacesetti.com.br",
      display: "oi@lucianacesetti.com.br",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@lu.cesetti.art",
      link: "https://instagram.com/lu.cesetti.art",
      display: "@lu.cesetti.art",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(11) 96058-3005",
      link: "https://wa.me/5511960583005",
      display: "(11) 96058-3005",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-background to-primary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Vamos Criar Juntos?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entre em contato para orçamentos, parcerias ou simplesmente conversar sobre arte
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-2 hover:border-primary hover:shadow-medium transition-all duration-300 cursor-pointer"
                onClick={() => window.open(item.link, '_blank')}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {item.display}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground border-none shadow-medium">
            <CardContent className="p-12 text-center space-y-6">
              <h3 className="text-3xl font-bold">
                Pronta para transformar seu espaço?
              </h3>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Com mais de 500 projetos realizados, estou pronta para trazer arte, 
                cor e significado para seu próximo projeto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('https://wa.me/5511960583005', '_blank')}
                  className="text-base font-semibold"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Chamar no WhatsApp
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://instagram.com/lu.cesetti.art', '_blank')}
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base font-semibold"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Ver no Instagram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
