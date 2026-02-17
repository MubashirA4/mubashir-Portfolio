import { motion, useInView } from "framer-motion";
import type { Easing } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Cpu,
  Globe,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Terminal,
  Zap,
  CheckCircle2,
  Workflow,
  Search,
  Layout,
  Layers,
  Repeat,
} from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as Easing },
    },
  };

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

  const processSteps = [
    {
      icon: Search,
      title: "Discovery & Planning",
      desc: "Deep diving into the core problem to understand user needs and business goals.",
    },
    {
      icon: Layers,
      title: "Architecture Design",
      desc: "Mapping out the technical foundation and database schema for scalability.",
    },
    {
      icon: Code2,
      title: "Strategic Development",
      desc: "Writing clean, efficient code while following industry best practices.",
    },
    {
      icon: Repeat,
      title: "Iteration & Refinement",
      desc: "Continuous testing and user feedback loops to polish the final product.",
    },
  ];

  const values = [
    {
      title: "Quality First",
      desc: "Never settling for 'good enough'. Precision in every line of code.",
    },
    {
      title: "Continuous Early",
      desc: "Always learning and staying at the forefront of digital innovation.",
    },
    {
      title: "Transparency",
      desc: "Honest communication and collaborative partnership throughout the journey.",
    },
    {
      title: "Scalability",
      desc: "Building for today with the future clearly in mind.",
    },
  ];

  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "Virtual University of Pakistan",
      period: "OCT 2020 - SEP 2024",
      description:
        "Gained strong foundational knowledge in programming, software development, and web technologies.",
      coursework:
        "Focused coursework: Web Development, Data Structures & Algorithms, Database Systems, and Software Engineering.",
    },
    {
      degree: "Fsc Pre-Engineering",
      institution: "Islamia College",
      period: "AUG 2018 - SEP 2020",
      description:
        "Studied core subjects including Mathematics, Physics, and Chemistry, building a solid analytical foundation for computer science.",
    },
  ];

  return (
    <div className="space-y-32 py-20" ref={ref}>
      {/* 1. Big Header (About Me) */}
      <section className="container mx-auto px-6 lg:px-12 text-center">
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

      {/* 2. Personal Story & 3. Professional Philosophy */}
      <section className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold uppercase tracking-tight text-primary">
              Personal Story
            </h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                I’m Mubashir Ahmad Hamza, a Full Stack Developer passionate
                about building scalable web applications. My journey into web
                development started with curiosity about how digital products
                work, which evolved into building complete applications from
                frontend interfaces to backend systems.
              </p>
              <p>
                I believe that every project is a story waiting to be told
                through code. What began as a fascinations with pixels has
                transformed into a career dedicated to architecting complex
                digital ecosystems that solve real-world problems and enhance
                human interaction.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="glass-card p-10 lg:p-14 border-primary/20 bg-primary/[0.02]"
          >
            <h2 className="text-4xl font-bold uppercase tracking-tight mb-8">
              Professional Philosophy
            </h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                My approach focuses on understanding the core problem before
                diving into solutions. I believe in building scalable
                architectures that grow with your business, ensuring long-term
                success and maintainability.
              </p>
              <p className="border-l-4 border-primary pl-6 italic text-foreground">
                "Functionality is the foundation, but exceptional user
                experience is what makes a product legendary."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Specialization */}
      <section className="container mx-auto px-6 lg:px-12">
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
              <p className="text-muted-foreground leading-relaxed">
                {spec.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4.5 Academic Journey (Education) */}
      <section className="container mx-auto px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="mb-16 lg:mb-24 flex flex-col gap-4">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm block">
            Learnings
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tighter">
            Academic Journey
          </h2>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative grid lg:grid-cols-[1fr_2fr] gap-8 border-t border-border/50 pt-12"
            >
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">
                  {edu.period}
                </span>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {edu.degree}
                </h3>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {edu.institution}
                  </h4>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {edu.description}
                  </p>
                </div>

                {edu.coursework && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      {edu.coursework}
                    </p>
                  </div>
                )}
              </div>
              <div className="absolute -top-1.5 left-0 w-3 h-3 bg-primary rounded-full transform -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Development Process */}
      <section className="bg-white/[0.02] py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                Logistics
              </span>
              <h2 className="text-5xl lg:text-6xl font-bold uppercase tracking-tighter mb-8">
                Development Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Efficiency is planned, not accidental. My workflow ensures every
                project moves from vision to reality with precision and speed.
              </p>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Experience Highlights */}
      <section className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {[
            { value: "3+", label: "Years in Development" },
            { value: "50+", label: "Projects Delivered" },
            { value: "MERN", label: "Specialized Stack" },
            { value: "24/7", label: "Commitment" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-7xl font-bold text-white/10 group-hover:text-primary transition-colors mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Tools & Workflow */}
      <section className="container mx-auto px-6 lg:px-12">
        <div className="glass-card p-12 overflow-hidden relative">
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold uppercase tracking-tight mb-6">
                Tools & Workflow
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I utilize a modern toolset to ensure code quality,
                collaboration, and high-performance deployment.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "VS Code",
                  "Anti Gravity",
                  "Git/GitHub",
                  "Vercel",
                  "Postman",
                  "Figma",
                  "Agile/Scrum",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="grid grid-cols-3 gap-6 opacity-30">
                <Terminal size={60} className="text-primary" />
                <Workflow size={60} />
                <Cpu size={60} className="text-primary" />
                <Code2 size={60} />
                <ShieldCheck size={60} className="text-primary" />
                <Zap size={60} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Personal Values */}
      <section className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold uppercase tracking-tighter">
            Personal Values
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <div key={i} className="text-center space-y-4">
              <CheckCircle2 className="w-8 h-8 text-primary mx-auto" />
              <h3 className="text-xl font-bold">{val.title}</h3>
              <p className="text-muted-foreground text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA */}
      <section className="container mx-auto px-6 lg:px-12 pb-20">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative rounded-3xl overflow-hidden bg-primary p-12 lg:p-20 text-center"
        >
          <div className="relative z-10">
            <h2 className="text-5xl lg:text-7xl font-bold text-black uppercase tracking-tighter mb-8">
              Let’s Build Your Next <br /> Big Idea Together
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/#contact"
                className="px-10 py-5 bg-black text-white rounded-full font-bold text-xl hover:scale-110 transition-transform"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-10 py-5 border-2 border-black text-black rounded-full font-bold text-xl hover:bg-black hover:text-white transition-all"
              >
                View My Projects
              </a>
            </div>
          </div>
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </section>
    </div>
  );
};

export default AboutSection;
