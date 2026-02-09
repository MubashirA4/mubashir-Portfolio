import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "start 0.2"],
  });

  const text =
    "We combines years of web design and branding expertise to craft meaningful, story-driven experiences.";
  const words = text.split(" ");

  return (
    <section id="about" className="section-container" ref={containerRef}>
      <div className="flex gap-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-md"
          data-styles-preset="HyNmndrGv"
        >
          (ABOUT)
        </motion.span>

        <h2 className="heading-display w-full">
          {words.map((word, index) => {
            // Each word reveals progressively as user scrolls
            const start = index / words.length;
            const end = (index + 1) / words.length;

            // Opacity transitions from 0.15 (dark) to 1 (bright)
            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.15, 1],
            );

            return (
              <motion.span
                key={index}
                style={{ opacity }}
                className="text-foreground"
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </h2>
      </div>
    </section>
  );
};

export default About;
