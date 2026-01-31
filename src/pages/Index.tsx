import NakulaNavigation from "@/components/NakulaNavigation";
import NakulaHero from "@/components/NakulaHero";
import NakulaAbout from "@/components/NakulaAbout";
import NakulaWorks from "@/components/NakulaWorks";
import NakulaStats from "@/components/NakulaStats";
import NakulaServices from "@/components/NakulaServices";
import NakulaProcess from "@/components/NakulaProcess";
import NakulaTestimonials from "@/components/NakulaTestimonials";
import NakulaPricing from "@/components/NakulaPricing";
import NakulaFAQ from "@/components/NakulaFAQ";
import NakulaBlog from "@/components/NakulaBlog";
import NakulaCTA from "@/components/NakulaCTA";
import NakulaFooter from "@/components/NakulaFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <NakulaNavigation />
      <main>
        <NakulaHero />
        <NakulaAbout />
        <NakulaWorks />
        <NakulaStats />
        <NakulaServices />
        <NakulaProcess />
        <NakulaTestimonials />
        <NakulaPricing />
        <NakulaFAQ />
        <NakulaBlog />
        <NakulaCTA />
      </main>
      <NakulaFooter />
    </div>
  );
};

export default Index;
