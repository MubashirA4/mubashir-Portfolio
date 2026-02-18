import { motion } from "framer-motion";
import { Layout, Terminal, Cpu, Globe } from "lucide-react";

interface SpecializationProps {
  isInView: boolean;
  itemVariants: any;
}

const specializations = [
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Crafting immersive, responsive user interfaces with React, Next.js, and modern CSS frameworks.",
  },
  {
    icon: Terminal,
    title: "Backend Engineering",
    desc: "Building robust APIs and server-side logic using Node.js, Express.",
  },
  {
    icon: Cpu,
    title: "System Architecture",
    desc: "Designing scalable, efficient, and maintainable application structures for long-term success.",
  },
  {
    icon: Globe,
    title: "Full Stack Integration",
    desc: "Seamlessly connecting frontend experiences with powerful backend systems and databases.",
  },
];

const Specialization = ({ isInView, itemVariants }: SpecializationProps) => {
  return (
    <section id="specialization" className="container mx-auto px-6 lg:px-12">
      <div className="mb-16">
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
          Expertise
        </span>
        <h2 className="text-5xl lg:text-6xl font-bold uppercase tracking-tighter">
          Specialization
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {specializations.map((spec, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: i * 0.1 }}
            className="p-8 glass-card border-white/10 hover:border-primary/50 transition-colors group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <spec.icon className="w-7 h-7 text-primary group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{spec.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{spec.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Specialization;
