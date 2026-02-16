import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const springConfig = { stiffness: 150, damping: 30, restDelta: 0.001 };

  const scale = useTransform(scrollY, [0, 400], [1, 0.25]);
  const y = useTransform(scrollY, [0, 400], ["7rem", "2.2rem"]);
  const rawOpacity = useTransform(scrollY, [0, 60], [1, 0]);
  const rawContentY = useTransform(scrollY, [0, 60], [0, -40]);

  const opacity = useSpring(rawOpacity, springConfig);
  const contentY = useSpring(rawContentY, springConfig);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 bg-black text-white"
    >
      {/* 🔥 Background Glow */}
      <motion.div style={{ opacity }} className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
      </motion.div>

      {/* Animated Big Name */}
      <div className="fixed inset-0 z-[120] pointer-events-none flex items-start">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="pointer-events-auto inline-block w-fit">
            <motion.h1
              style={{ y, scale, transformOrigin: "top left" }}
              className="text-[12vw] sm:text-[10vw] lg:text-[6vw] font-extrabold tracking-tight leading-none text-white hover:text-purple-400 transition-colors w-fit"
            >
              Mubashir Ahmad Hamza
            </motion.h1>
          </Link>
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col justify-center h-full"
      >
        {/* Spacer */}
        <div className="h-[12vw] sm:h-[10vw] lg:h-[8vw] opacity-0">
          Mubashir
        </div>

        {/* Main Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mt-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-relaxed">
            Full Stack Developer crafting
            <span className="text-purple-400"> scalable</span>,
            <span className="text-pink-400"> modern</span> &
            <span className="text-blue-400"> high-performance</span>
            digital experiences.
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            I build powerful web applications using React, Node.js, MongoDB, and
            modern cloud technologies — turning ideas into impactful products.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform"
          >
            View Projects
          </a>

          <a
            href="/Mubashir Ahmad CV.pdf"
            download="Mubashir Ahmad CV.pdf"
            className="px-8 py-3 border border-white/40 rounded-full font-semibold hover:bg-white/10 transition flex items-center gap-2"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-white/40 rounded-full font-semibold hover:bg-white/20 transition backdrop-blur-sm"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Floating Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 right-6 lg:right-12 hidden lg:flex gap-4 text-sm text-gray-400"
        >
          <span className="px-4 py-2 bg-white/5 rounded-full backdrop-blur">
            React
          </span>
          <span className="px-4 py-2 bg-white/5 rounded-full backdrop-blur">
            Node.js
          </span>
          <span className="px-4 py-2 bg-white/5 rounded-full backdrop-blur">
            MongoDB
          </span>
          <span className="px-4 py-2 bg-white/5 rounded-full backdrop-blur">
            Firebase
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
