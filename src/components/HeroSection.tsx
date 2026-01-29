import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import type { Easing } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as Easing },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 section-container text-center"
      >
        {/* Pre-title badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="heading-xl mb-4">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient-gold">Mubashir Ahmad Hamza</span>
        </motion.h1>

        {/* Title with typing effect simulation */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary">
            Full Stack Developer
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-body max-w-2xl mx-auto mb-10"
        >
          Crafting exceptional digital experiences with modern web technologies.
          Specialized in building scalable, performant, and user-centric applications
          that solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover-glow flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 border border-primary/50 text-primary rounded-lg font-semibold text-lg hover:bg-primary/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="p-3 rounded-full bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
