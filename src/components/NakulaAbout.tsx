import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const NakulaAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container">
      <div ref={ref} className="max-w-5xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          (ABOUT)
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-display"
        >
          <span className="text-foreground">We combines years of </span>
          <span className="text-muted-foreground">web design and branding expertise to craft meaningful, story-driven experiences.</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default NakulaAbout;
