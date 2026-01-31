import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Globe, Palette, Instagram, Sparkles } from "lucide-react";

const services = [
  {
    id: 1,
    number: "01",
    title: "Web Design & Development",
    description: "Logos, colors, type, your brand, fully alive.",
    features: ["Responsive Design", "Interaction Design", "CMS Integration", "SEO Optimization"],
    icon: Globe,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000",
  },
  {
    id: 2,
    number: "02",
    title: "Branding",
    description: "Crafting visual identities that feel clear, timeless, and true to your brand.",
    features: ["Logo Design", "Color System", "Typography", "Brand Direction"],
    icon: Palette,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000",
  },
  {
    id: 3,
    number: "03",
    title: "Social Media",
    description: "Branded templates and content systems to help you stay consistent and scroll-worthy.",
    features: ["Instagram Design", "Story Kits", "Content Templates", "Visual Consistency"],
    icon: Instagram,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000",
  },
  {
    id: 4,
    number: "04",
    title: "Motion Design",
    description: "Thoughtful animations that add rhythm, clarity, and life to your interface.",
    features: ["Micro-interactions", "Scroll Effects", "Hover States", "Framer Motion"],
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000",
  },
];

const NakulaServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="section-container" ref={ref}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="section-label"
      >
        (SERVICES)
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="heading-xl mb-16"
      >
        HOW WE CAN HELP
      </motion.h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            onMouseEnter={() => setActiveService(index)}
            className={`service-card group cursor-pointer ${
              activeService === index ? "border-primary/50" : ""
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-primary">{service.number}</span>
                <span className="text-2xl font-bold text-muted-foreground">.</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <service.icon className="w-6 h-6" />
              </div>
            </div>

            {/* Image */}
            <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-muted-foreground mb-6">{service.description}</p>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Service title at bottom */}
            <div className="mt-6 pt-6 border-t border-border">
              <span className="text-lg font-semibold">{service.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NakulaServices;
