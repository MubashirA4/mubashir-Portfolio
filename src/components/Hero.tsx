import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const logos = [
    "Logoipsum",
    "Acme Corp",
    "Stark Inc",
    "Wayne Ent",
    "Daily Planet",
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Animation values
  // We use CSS clamp/calc for responsive initial sizing, but for the fixed position animation
  // we'll transition to standard logo size.

  // Scale: Drops from 1 to a smaller value
  const scale = useTransform(scrollY, [0, 400], [1, 0.25]);

  // Y Position:
  // Start: 7rem (approx 112px) -> Matches section pt-20 (5rem) + mt-8 (2rem)
  // End: 1.75rem (approx 28px) -> Centers vertically in h-20 (5rem) navbar
  const y = useTransform(scrollY, [0, 400], ["7rem", "1.75rem"]);

  // X Position: This is tricky with responsive containers.
  // We'll fix it to the left padding of the viewport (px-6 or px-12)
  // Initially we want it to look like it's in the container.
  // We'll use a responsive left value via CSS classes, so we don't need to animate 'x' if we just align it left.
  // But strictly, we might need a slight X nudge if the hero design was centered.
  // Assuming left-aligned hero text:

  // Opacity: Stays visible
  const opacity = useTransform(scrollY, [0, 100], [1, 1]); // Always visible

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-20"
    >
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

      {/* Floating/Fixed Hero Title -> Logo */}
      {/* Wrapper to align with container width */}
      <div className="fixed inset-0 z-50 pointer-events-none flex flex-col items-start justify-start">
        <div className="container mx-auto px-6 lg:px-12 w-full">
          <motion.div
            style={{
              y,
              scale,
              opacity,
              transformOrigin: "top left",
            }}
            className="origin-top-left inline-block"
          >
            <h1 className="text-[12vw] sm:text-[10vw] lg:text-[8vw] font-bold tracking-tighter leading-none">
              Mubashir Ahmad
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex-1 flex flex-col">
        {/* Placeholder to keep layout spacing where the title used to range */}
        <div className="mt-8 h-[12vw] sm:h-[10vw] lg:h-[8vw] mb-4 w-full pointer-events-none opacity-0">
          Mubashir
        </div>

        {/* Tagline - Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-auto mb-8 max-w-md"
        >
          <p className="text-xl sm:text-2xl leading-relaxed">
            <span className="text-foreground font-medium">
              We build brands, websites, and digital experiences
            </span>
            <span className="text-muted-foreground">
              {" "}
              with intention, clarity and care.
            </span>
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
            Beyond
            <br />
            Visuals.
            <br />
            <span className="text-foreground not-italic">Built with</span>
            <br />
            <span className="text-foreground not-italic">Vision.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
