import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Layout, Database, Server, Palette, Smartphone } from "lucide-react";
import type { Easing } from "framer-motion";

interface Service {
  icon: typeof Code;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end web application development from concept to deployment.",
    features: ["Custom web applications", "API development", "Database design", "Cloud deployment"],
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Creating responsive, interactive, and visually stunning user interfaces.",
    features: ["React.js applications", "Responsive design", "UI/UX implementation", "Performance optimization"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Building robust and scalable server-side solutions.",
    features: ["RESTful APIs", "Database management", "Authentication systems", "Server optimization"],
  },
  {
    icon: Server,
    title: "API Integration",
    description: "Connecting your applications with third-party services and APIs.",
    features: ["Payment gateways", "Social media APIs", "Cloud services", "Custom integrations"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user experiences.",
    features: ["Wireframing", "Prototyping", "Design systems", "User testing"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Ensuring your applications work flawlessly on all devices.",
    features: ["Mobile-first approach", "Cross-browser compatibility", "Touch optimization", "Progressive enhancement"],
  },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card p-6 rounded-xl hover-glow group relative overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
          <service.icon className="w-7 h-7 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ease: Easing = [0.25, 0.46, 0.45, 0.94];

  return (
    <section id="experience" className="relative py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            What I Do
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Services & <span className="text-gradient-gold">Expertise</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Comprehensive web development services tailored to bring your vision to life
            with cutting-edge technologies and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Have a project in mind? Let's discuss how I can help.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
