import Navigation from "@/components/Navigation";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12 mb-8">
          <BackButton />
        </div>
        <div className="container mx-auto px-6 lg:px-12 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold uppercase tracking-tighter mb-8">
              About{" "}
              <span className="text-muted-foreground/30 text-stroke">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate Full-Stack Developer with a focus on creating
              exceptional digital experiences through modern technologies.
            </p>
          </motion.div>
        </div>

        <Education />

        <div className="container mx-auto px-6 lg:px-12 mt-20">
          <div className="glass-card p-12 rounded-3xl border border-border/50">
            <h3 className="text-3xl font-bold mb-6 text-primary">
              My Approach
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in building applications that are not just functional,
              but also provide a seamless and enjoyable user experience. By
              combining years of web design expertise with solid technical
              foundations, I craft scalable, story-driven solutions that make an
              impact.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
