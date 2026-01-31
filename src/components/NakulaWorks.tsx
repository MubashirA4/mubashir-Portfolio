import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Arjuna",
    description: "Personal Portfolio Website for talented design engineer",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964",
    category: "Website",
  },
  {
    id: 2,
    title: "Bima",
    description: "Website and branding for AI Automation Company",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974",
    category: "Branding",
  },
  {
    id: 3,
    title: "Mandala",
    description: "Website and branding for Design Agency",
    image: "https://images.unsplash.com/photo-1634017839464-5c339bbe3f35?q=80&w=1935",
    category: "Website",
  },
];

const NakulaWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="works" className="section-container" ref={ref}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="heading-xl"
          >
            Latest work
          </motion.h2>
        </div>
        
        {/* Project count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl lg:text-8xl font-bold text-muted-foreground/20"
        >
          (0{projects.length})
        </motion.div>
      </div>

      {/* Project Numbers Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-8 mb-8 overflow-x-auto no-scrollbar"
      >
        {projects.map((project, index) => (
          <button
            key={project.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex items-center gap-4 transition-colors ${
              hoveredIndex === index ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            <span className="text-3xl lg:text-5xl font-bold">0{index + 1}</span>
            <span className="text-lg hidden sm:block">{project.title}</span>
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href="#"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative aspect-[4/3.5] rounded-2xl overflow-hidden"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={hoveredIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* More Projects Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <a href="#" className="outline-button">
          MORE PROJECTS
        </a>
      </motion.div>
    </section>
  );
};

export default NakulaWorks;
