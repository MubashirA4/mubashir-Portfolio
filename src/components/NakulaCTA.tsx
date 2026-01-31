import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const NakulaCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974"
          alt="Hand reaching out"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 section-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="heading-display max-w-4xl mx-auto mb-8"
        >
          LET'S WORK TOGETHER
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Have a project in mind? We'd love to hear about it. Let's create something great together!
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:hello@nakula.studio"
          className="cta-button text-lg"
        >
          GET IN TOUCH
        </motion.a>
      </div>
    </section>
  );
};

export default NakulaCTA;
