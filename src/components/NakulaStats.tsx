import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "220+", label: "Successful projects completed" },
  { value: "10+", label: "Years of experience in creative industry" },
  { value: "70%", label: "Customer satisfaction rate" },
  { value: "$5M", label: "In Client revenue growth" },
];

const NakulaStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="section-container">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          (WHY US)
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-xl mb-4"
        >
          NUMBERS DON'T LIE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mb-16"
        >
          With a decade of expertise, We craft bold brands and high-impact digital experience that get results.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="stat-number mb-2">{stat.value}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-24 glass-card p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8"
        >
          <div className="flex-1">
            <span className="quote-mark">"</span>
            <blockquote className="text-xl lg:text-2xl font-medium mt-4">
              Working with Nakula felt personal.
              <span className="text-primary"> The process was smooth, the design was stunning, and everything had meaning.</span>
            </blockquote>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=200"
              alt="Dianna Sulastri"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold">Dianna Sulastri</div>
              <div className="text-muted-foreground text-sm">Founder at Mandala</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NakulaStats;
