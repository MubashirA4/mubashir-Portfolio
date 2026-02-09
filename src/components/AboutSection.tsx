import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";
import type { Easing } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ease: Easing = [0.25, 0.46, 0.45, 0.94];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and exceptional user experience",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying updated with modern technologies",
    },
  ];

  return (
    <section id="about" className="relative bg-navy-mid/30 py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="flex">
            <motion.span
              variants={itemVariants}
              className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block"
            >
              About Me
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="heading-lg mb-6 text-foreground"
            >
              Passionate about building{" "}
              <span className="text-gradient-gold">digital solutions</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-body mb-6">
              I'm a Full Stack Developer with a passion for creating elegant,
              efficient, and user-friendly web applications. With expertise
              spanning both frontend and backend technologies, I bring ideas to
              life through clean code and intuitive design.
            </motion.p>
            <motion.p variants={itemVariants} className="text-body mb-8">
              My approach focuses on understanding the core problem before
              diving into solutions. I believe in building scalable
              architectures that grow with your business, ensuring long-term
              success and maintainability.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Highlight Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="glass-card p-6 rounded-xl hover-glow group"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/30"
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "50+", label: "Projects Completed" },
            { value: "30+", label: "Happy Clients" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
