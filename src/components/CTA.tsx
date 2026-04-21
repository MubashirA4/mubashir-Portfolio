import { m, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-10 overflow-hidden" ref={ref}>
      {/* Optimized Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 section-container text-center">
        <m.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="heading-display max-w-4xl mx-auto mb-8 uppercase"
        >
          LET'S WORK TOGETHER
        </m.h2>

        <m.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-muted-foreground/90 max-w-2xl mx-auto mb-12 uppercase tracking-wide"
        >
          Have a project in mind? I'd love to hear about it. Let's create
          something great together!
        </m.p>

        <Link
          to="/contact"
          aria-label="Contact me to start a project"
          className="inline-block"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button text-lg"
          >
            GET IN TOUCH
          </m.div>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
