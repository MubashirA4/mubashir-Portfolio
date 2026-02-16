import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "HTML5 & CSS3", level: 95, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "Frontend" },
  { name: "React.js", level: 92, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Framer Motion", level: 85, category: "Frontend" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Express.js", level: 85, category: "Backend" },
  { name: "MongoDB", level: 82, category: "Backend" },
  { name: "Firebase", level: 80, category: "Backend" },
  { name: "Git & GitHub", level: 88, category: "Tools" },
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-bar h-2">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{
            duration: 1,
            delay: 0.3 + index * 0.1,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card p-6 rounded-xl hover-glow relative overflow-hidden group"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {skill.name}
          </h3>
          <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
            {skill.category}
          </span>
        </div>

        {/* Circular progress indicator */}
        <div className="relative w-20 h-20 mx-auto">
          <svg className="w-20 h-20 transform -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke="hsl(var(--muted))"
              strokeWidth="6"
              fill="none"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="35"
              stroke="hsl(var(--primary))"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={220}
              initial={{ strokeDashoffset: 220 }}
              animate={
                isInView
                  ? { strokeDashoffset: 220 - (220 * skill.level) / 100 }
                  : {}
              }
              transition={{
                duration: 1.5,
                delay: 0.3 + index * 0.08,
                ease: "easeOut",
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-gradient-gold">
              {skill.level}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const frontendSkills = skills.filter((s) => s.category === "Frontend");
  const backendSkills = skills.filter((s) => s.category === "Backend");
  const toolSkills = skills.filter((s) => s.category === "Tools");

  return (
    <section className="relative py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            My Expertise
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Skills & <span className="text-gradient-gold">Technologies</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            A comprehensive toolkit of modern web technologies that I use to
            build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid - Cards View */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Skills Bars - Detailed View */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="heading-md text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded" />
              Frontend
            </h3>
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="heading-md text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent rounded" />
              Backend
            </h3>
            <div className="space-y-5">
              {backendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="heading-md text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded" />
              Tools
            </h3>
            <div className="space-y-5">
              {toolSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
