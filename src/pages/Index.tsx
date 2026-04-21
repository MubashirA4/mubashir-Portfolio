import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load non-critical sections
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const LatestWorks = lazy(() => import("@/components/latestWorks"));
const CTA = lazy(() => import("@/components/CTA"));

const SectionLoading = () => <div className="h-40" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoading />}>
          <About />
          <Skills />
          <LatestWorks />
          <CTA />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
