import { m, useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import MubashirImg from "../assets/Mubashir.webp";

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
      className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden py-20 bg-black text-white"
    >
      {/* 🔥 Background Glow */}
      <m.div style={{ opacity }} className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
      </m.div>

      {/* Animated Big Name */}
      <div className="fixed inset-0 z-[120] pointer-events-none flex items-start">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="pointer-events-auto inline-block w-fit">
            <m.h1
              style={{ y, scale, transformOrigin: "top left" }}
              className="text-[12vw] sm:text-[10vw] lg:text-[6vw] font-extrabold tracking-tight leading-none text-white hover:text-primary transition-colors w-fit"
            >
              Mubashir Ahmad Hamza
            </m.h1>
          </Link>
        </div>
      </div>

      {/* Content */}
      <m.div
        style={{ opacity, y: contentY }}
        className="relative z-10 container mx-auto px-6 mt-32 lg:px-12 flex flex-col justify-center h-full"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Tagline & Description - Increased width */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-8 xl:col-span-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-relaxed max-w-4xl">
              Full Stack <span className="text-primary">Developer</span>
            </h2>

            <p className="mt-6 text-xl text-gray-400 leading-relaxed max-w-2xl">
              Specializing in the MERN stack to create high-performance, 
              scalable web applications that drive business growth. 
            </p>

            <div className="mt-12 flex flex-wrap gap-4 items-center">
             
              <a
                href="#projects"
                className="px-8 py-3 border border-white/40 rounded-full font-semibold hover:bg-white/10 transition text-lg"
                aria-label="View Projects"
              >
                View Projects
              </a>
              <a
                href="#contact"
                aria-label="Get in touch with me"
                className="px-8 py-3 border border-white/40 rounded-full font-semibold hover:bg-white/20 transition backdrop-blur-sm"
              >
                Contact Me
              </a>
            </div>
          </m.div>

          {/* 🔥 Hero Image Section */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[350px] aspect-[3/4] lg:h-[60vh] lg:aspect-auto group">
              {/* Soft Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-blue-600/10 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Premium Border Frame */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-muted shadow-xl z-10">
                <img
                  src={MubashirImg}
                  alt="Mubashir Ahmad Hamza - Full Stack Developer"
                  loading="eager"
                  decoding="async"
                  {...({ fetchpriority: "high" } as unknown as React.ImgHTMLAttributes<HTMLImageElement>)}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />

                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Minimalist Accent Lines */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl z-0" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 border-b-2 border-l-2 border-blue-500/30 rounded-bl-3xl z-0" />
            </div>
          </m.div>
        </div>
      </m.div>
    </section>
  );
};

export default Hero;
