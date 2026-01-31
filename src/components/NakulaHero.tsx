import { motion } from "framer-motion";

const NakulaHero = () => {
  const logos = [
    "Logoipsum",
    "Acme Corp",
    "Stark Inc",
    "Wayne Ent",
    "Daily Planet",
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-20">
      {/* Background Image - Eye */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background"
          style={{ zIndex: 1 }}
        />
        <img
          src="https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?q=80&w=2070"
          alt="Dramatic eye close-up"
          className="w-full h-full object-cover object-center opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex-1 flex flex-col">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
        >
          <h1 className="text-[12vw] sm:text-[10vw] lg:text-[8vw] font-bold tracking-tighter leading-none">
            NAKULA
            <span className="text-primary text-[3vw] align-super ml-2">®</span>
          </h1>
        </motion.div>

        {/* Tagline - Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-auto mb-8 max-w-md"
        >
          <p className="text-xl sm:text-2xl leading-relaxed">
            <span className="text-foreground font-medium">We build brands, websites, and digital experiences</span>
            <span className="text-muted-foreground"> with intention, clarity and care.</span>
          </p>
        </motion.div>

        {/* Right side heading */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-1/4 right-6 lg:right-12 text-right hidden lg:block"
        >
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight italic">
            Beyond<br />
            Visuals.<br />
            <span className="text-foreground not-italic">Built with</span><br />
            <span className="text-foreground not-italic">Vision.</span>
          </h2>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Trusted By Marquee */}
            <div className="flex items-center gap-4 overflow-hidden flex-1">
              <span className="text-xs text-muted-foreground uppercase tracking-wider shrink-0">
                TRUSTED BY:
              </span>
              <div className="overflow-hidden flex-1">
                <div className="marquee flex items-center gap-12">
                  {[...logos, ...logos, ...logos].map((logo, index) => (
                    <span
                      key={index}
                      className="text-muted-foreground/60 font-medium whitespace-nowrap text-lg"
                    >
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button group shrink-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                START A PROJECT
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NakulaHero;
