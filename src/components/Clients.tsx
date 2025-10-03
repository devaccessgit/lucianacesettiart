import { Badge } from "@/components/ui/badge";

const Clients = () => {
  const clients = [
    {
      name: "Suvinil",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Suvinil_logo.svg/1200px-Suvinil_logo.svg.png",
    },
    {
      name: "AkzoNobel",
      logo: "https://companieslogo.com/img/orig/AKZA.AS-4becfd76.png",
    },
    {
      name: "Coral",
      logo: "https://seeklogo.com/images/T/tintas-coral-logo-FE6F0B3C02-seeklogo.com.png",
    },
    {
      name: "Gillette Venus",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Gillette-Venus-Logo.png",
    },
    {
      name: "Redebody",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHqWxJ0YpC5nw/company-logo_200_200/company-logo_200_200/0/1719944653326/redebody_tech_logo?e=2147483647&v=beta&t=uRMqC0VfzXvZ6LRn5bLa8mRwYlOKNP5YwPkE5N-MFr4",
    },
    {
      name: "Shopping Metrô Tatuapé",
      logo: "https://shoppingmetrotatuape.com.br/wp-content/uploads/2020/02/logo-metro-tatuape-shopping.png",
    },
    {
      name: "Patriani Construtora",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFKX6FuZGdQqA/company-logo_200_200/company-logo_200_200/0/1631303713669?e=2147483647&v=beta&t=8Hjo8mCjQnVxVOTB7JDm7qG1MmA0uJ1YgCpJGCZBn0Q",
    },
    {
      name: "Contatto",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGOzQSYvxCYnw/company-logo_200_200/company-logo_200_200/0/1631303283168?e=2147483647&v=beta&t=Xp8nnYqb2l5qCMfQGdPqRIqMzZYNqJr3bKfJQN1F1qQ",
    },
    {
      name: "Crema Cultural",
      logo: "https://cremacultural.com.br/wp-content/uploads/2022/09/logo-crema-cultural.png",
    },
    {
      name: "Casa Ativa",
      logo: "https://scontent.fsdu32-1.fna.fbcdn.net/v/t39.30808-6/241767449_4477961735576419_7799653896832830632_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IkYZqZw8TREQ7kNvgGLZDGL&_nc_zt=23&_nc_ht=scontent.fsdu32-1.fna&_nc_gid=AZnYQ4JBZaV8m5cP7tC3P0A&oh=00_AYBsLRBOb4-5qwqDQOZPL3fQnrGRJFRG8UxJ6Gb4F9oHCQ&oe=67831F4F",
    },
    {
      name: "Midi Zero11",
      logo: "https://midizero11.com.br/wp-content/uploads/2021/03/logo-midi-zero11.png",
    },
    {
      name: "Casca Gastro-Bar",
      logo: "https://media-cdn.tripadvisor.com/media/photo-s/1a/9c/7e/3c/casca-gastro-bar.jpg",
    },
    {
      name: "Muquirana's Bar",
      logo: "https://media-cdn.tripadvisor.com/media/photo-s/1a/8f/8e/a3/muquirana-s-bar.jpg",
    },
    {
      name: "Prefeitura de Santos",
      logo: "https://www.santos.sp.gov.br/static/files.santos.sp.gov.br/img/logo-pms.png",
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
                <div className="w-full h-20 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
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