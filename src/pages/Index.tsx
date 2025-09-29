import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import SpecialProjects from "@/components/SpecialProjects";
import Media from "@/components/Media";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <SpecialProjects />
        <Media />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
