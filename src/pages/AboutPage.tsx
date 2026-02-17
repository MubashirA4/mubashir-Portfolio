import Navigation from "@/components/Navigation";
import Education from "@/components/Education";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden pt-10">
      <Navigation />

      <main>
        {/* Back Button positioned absolutely or fixed relative to scroll could work, 
            but keeping it inline but with less intrusive spacing */}
        <div className="container mx-auto px-6 lg:px-12 pt-20">
          <BackButton />
        </div>

        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
