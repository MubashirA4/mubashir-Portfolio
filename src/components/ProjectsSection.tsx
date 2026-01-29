import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with cart management, payment integration, and admin dashboard. Built for scalability and performance.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    techStack: ["React", "Firebase", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Portfolio Generator",
    description: "A dynamic portfolio builder that allows developers to create stunning portfolios with customizable themes and layouts.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
    techStack: ["React", "OpenWeather API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support, SEO optimization, and content management system.",
    techStack: ["React", "Node.js", "MongoDB", "AWS S3"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Chat Application",
    description: "Real-time messaging application with rooms, direct messages, and file sharing capabilities.",
    techStack: ["React", "Socket.io", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`glass-card rounded-xl overflow-hidden hover-glow group ${
        project.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Project Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Folder className="w-6 h-6 text-primary" />
          </div>
          <div className="flex gap-3">
            <motion.a
              href={project.githubUrl}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={project.liveUrl}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View Live Demo"
            >
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative bg-navy-mid/30 py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            My Work
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for building
            exceptional web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
