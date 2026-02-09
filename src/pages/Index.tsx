import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LatestWorks from "@/components/latestWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <LatestWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
