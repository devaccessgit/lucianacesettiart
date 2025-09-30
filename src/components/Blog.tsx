import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "A Arte Botânica como Transformação de Espaços",
    excerpt: "Descubra como a arte botânica pode transformar ambientes corporativos e residenciais, trazendo natureza e vida para dentro dos espaços.",
    date: "2025-03-15",
    category: "Arte Botânica",
  },
  {
    id: 2,
    title: "O Processo Criativo por Trás dos Murais",
    excerpt: "Uma visão íntima do processo de criação dos murais, desde a concepção da ideia até a execução final.",
    date: "2025-03-10",
    category: "Processo Criativo",
  },
  {
    id: 3,
    title: "Cor e Memória: Conectando Emoções através da Arte",
    excerpt: "Como as cores e formas na arte botânica podem evocar memórias e criar conexões emocionais profundas.",
    date: "2025-03-05",
    category: "Reflexões",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reflexões, processos e histórias sobre arte, natureza e transformação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="hover:shadow-lg transition-all duration-300 animate-scale-in border-botanical-green/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('pt-BR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </time>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-botanical-green/10 text-botanical-green rounded-full mb-3">
                  {post.category}
                </span>
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                <CardDescription className="text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="text-botanical-green hover:text-botanical-green-light font-semibold transition-colors">
                  Ler mais →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
