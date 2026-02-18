import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="container mx-auto px-6 lg:px-12 pb-20">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative rounded-3xl overflow-hidden bg-primary p-12 lg:p-20 text-center"
      >
        <div className="relative z-10">
          <h2 className="text-5xl lg:text-7xl font-bold text-black uppercase tracking-tighter mb-8">
            Let’s Build Your Next <br /> Big Idea Together
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="px-10 py-5 bg-black text-white rounded-full font-bold text-xl hover:scale-110 transition-transform"
            >
              Get In Touch
            </Link>
            <Link
              to="/#projects"
              className="px-10 py-5 border-2 border-black text-black rounded-full font-bold text-xl hover:bg-black hover:text-white transition-all"
            >
              View My Projects
            </Link>
          </div>
        </div>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </motion.div>
    </section>
  );
};

export default AboutCTA;
