import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "start 0.2"],
  });

  const text =
    "Full Stack Developer building scalable, high-performance web applications with React.js, Node.js, and MongoDB.";
  const words = text.split(" ");

  return (
    <section id="about" className="section-container" ref={containerRef}>
      <div className="flex flex-col lg:flex-row gap-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-md shrink-0"
          data-styles-preset="HyNmndrGv"
        >
          (ABOUT)
        </motion.span>

        <div className="flex flex-col items-start gap-12">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform group"
            >
              EXPLORE MORE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
