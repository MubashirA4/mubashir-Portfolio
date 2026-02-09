import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Arjuna",
    description: "Personal Portfolio Website for talented design engineer",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964",
    category: "Website",
  },
  {
    id: 2,
    title: "Bima",
    description: "Website and branding for AI Automation Company",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974",
    category: "Branding",
  },
  {
    id: 3,
    title: "Mandala",
    description: "Website and branding for Design Agency",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339bbe3f35?q=80&w=1935",
    category: "Website",
  },
];

const LatestWorks = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section
      id="works"
      className="section-container min-h-screen py-32"
      ref={containerRef}
    >
      {/* Centered Heading */}
      <div className="text-center mb-40" ref={titleRef}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl sm:text-8xl lg:text-9xl font-bold  uppercase tracking-tighter"
        >
          Latest work
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        {/* Left Side: Project List - 1/3 width */}
        <div className="flex flex-col lg:col-span-1">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              className="group relative py-12 border-b border-border cursor-pointer transition-all duration-300"
            >
              <div className="flex items-start gap-8">
                {/* Number */}
                <span
                  className={`text-xl font-medium tabular-nums transition-colors duration-300 ${
                    hoveredIndex === index
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  (0{index + 1})
                </span>

                {/* Info */}
                <div className="flex-1">
                  <h3
                    className={`text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                      hoveredIndex === index
                        ? "text-foreground"
                        : "text-muted-foreground/60"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <motion.div
                    initial={false}
                    animate={{
                      height: hoveredIndex === index ? "auto" : 0,
                      opacity: hoveredIndex === index ? 1 : 0,
                      marginTop: hoveredIndex === index ? 16 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-lg text-muted-foreground max-w-sm leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>
                </div>

                {/* View Button - Mobile Only or subtle on DT */}
                <div
                  className={`lg:hidden w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground transform transition-transform duration-300 ${
                    hoveredIndex === index
                      ? "scale-100 rotate-0"
                      : "scale-0 -rotate-45"
                  }`}
                >
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Image Display (Sticky) - 2/3 width */}
        <div className="hidden lg:block lg:col-span-2 sticky top-32 perspective-1000 group">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-muted">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={projects[hoveredIndex].image}
                  alt={projects[hoveredIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                  <div className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    VIEW PROJECT
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;
