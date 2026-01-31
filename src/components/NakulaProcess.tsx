import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "STEP 1",
    title: "Discovery Phase",
    description: "Understanding your, goals, pain points, audience, and what sets you apart.",
  },
  {
    number: "STEP 2",
    title: "Project Kickoff",
    description: "Setting up projects, aligning on scope and milestones, and diving into the work.",
  },
  {
    number: "STEP 3",
    title: "Receive & Refine",
    description: "Sharing initial designs, gathering feedback, and fine-tuning together.",
  },
  {
    number: "STEP 4",
    title: "Continue & Grow",
    description: "Launching with confidence and supporting your next extraordinary moves.",
  },
];

const NakulaProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-container" ref={ref}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="section-label"
      >
        (PROCESS)
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="heading-xl mb-16"
      >
        HOW WE WORK
      </motion.h2>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="relative"
          >
            {/* Step number */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-bold text-primary">{step.number}</span>
              <span className="text-primary">.</span>
            </div>

            {/* Vertical line */}
            <div className="absolute left-0 top-12 bottom-0 w-px bg-border" />

            {/* Dot */}
            <div className="absolute left-0 top-12 w-3 h-3 -translate-x-1/2 rounded-full bg-primary" />

            {/* Content */}
            <div className="pl-6">
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Rating */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-20 flex items-center gap-4"
      >
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold text-primary">4.9</span>
          <span className="text-2xl text-muted-foreground">/5</span>
        </div>
        <span className="text-muted-foreground">300+ Reviews on Clutch</span>
      </motion.div>
    </section>
  );
};

export default NakulaProcess;
