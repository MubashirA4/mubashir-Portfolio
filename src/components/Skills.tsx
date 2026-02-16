import { motion, useInView, Variants, Easing } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Front-end",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database & Cloud",
    skills: ["MongoDB", "Firebase"],
  },
  {
    title: "Tools",
    skills: ["VS Code", "Git", "GitHub", "Vercel"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as Easing },
    },
  };

  return (
    <section
      id="skills"
      className="section-container relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="section-label"
      >
        (SKILLS)
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-7xl sm:text-8xl lg:text-7xl font-bold  uppercase tracking-tighter mb-40"
      >
        Technical <span className="">Powers</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-4 gap-12 lg:gap-16"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="flex flex-col"
          >
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-primary/80">
              {category.title}
            </h3>

            <ul className="flex flex-col gap-6">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="group flex items-center justify-between border-b border-border/50 pb-4"
                >
                  <span className="text-2xl lg:text-3xl font-bold text-muted-foreground/60 group-hover:text-foreground transition-all duration-300 transform group-hover:translate-x-2">
                    {skill}
                  </span>

                  {/* Subtle dot indicator */}
                  <div className="w-2 h-2 rounded-full bg-primary transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Large background text for aesthetics */}
      <div className="absolute -bottom-10 left-0 -z-20 pointer-events-none select-none">
        <span className="text-[20vw] font-black text-white/[0.02] uppercase leading-none">
          Stack
        </span>
      </div>
    </section>
  );
};

export default Skills;
