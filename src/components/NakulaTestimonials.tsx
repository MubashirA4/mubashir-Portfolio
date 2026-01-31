import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Mario Baskoro",
    role: "CTO of Arjuna",
    quote: "Our socials used to feel scattered and inconsistent. Now, everything is on-brand, engaging, and performing better.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
  },
  {
    id: 2,
    name: "Evelyn Widjaja",
    role: "Marketing Lead at Bima",
    quote: "From branding to the website to social—everything was cohesive, strategic, and done with serious care.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
  },
  {
    id: 3,
    name: "Karina Wulandari",
    role: "Founder at Batavia",
    quote: "Working with them felt like having an in-house team that just gets it.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
  },
];

const NakulaTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container" ref={ref}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="section-label"
      >
        (TESTIMONIALS)
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="heading-lg max-w-3xl mb-16"
      >
        <span className="text-foreground">We deliver </span>
        <span className="text-muted-foreground">data-driven and result-focused deliverables. Hear what they say about us.</span>
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="glass-card p-8"
          >
            {/* Avatar */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>

            {/* Quote */}
            <p className="text-lg leading-relaxed mb-6">{testimonial.quote}</p>

            {/* Quote mark */}
            <div className="text-6xl font-serif text-primary/30 text-right">"</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NakulaTestimonials;
