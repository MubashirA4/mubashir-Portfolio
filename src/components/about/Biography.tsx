import { motion } from "framer-motion";

interface BiographyProps {
  isInView: boolean;
}

const Biography = ({ isInView }: BiographyProps) => {
  return (
    <section id="about" className="container mx-auto px-6 lg:px-12 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
          Biography
        </span>
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-none mb-8">
          ABOUT ME
        </h1>
      </motion.div>
    </section>
  );
};

export default Biography;
