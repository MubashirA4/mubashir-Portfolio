import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  ChevronRight,
} from "lucide-react";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pb-20">
        <div className="section-container">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Projects
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-muted group shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </motion.div>

            {/* Project Info */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                    {project.category}
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl font-bold uppercase tracking-tighter mb-6">
                  {project.title}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                    >
                      LIVE DEMO
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted text-foreground border border-border px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-muted/80 transition-all hover:scale-105 active:scale-95"
                    >
                      SOURCE CODE
                      <Github size={20} />
                    </a>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-8 border-t border-border pt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-primary">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">
                        DATE
                      </p>
                      <p className="text-foreground font-medium">
                        {project.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-primary">
                      <Tag size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">
                        TECHNOLOGIES
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-foreground font-medium flex items-center gap-1"
                          >
                            {tech}
                            <span className="text-muted-foreground/30 last:hidden">
                              •
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Detailed Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              Project Overview
              <div className="h-px flex-1 bg-border" />
            </h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.content}
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mt-12">
                <div className="bg-muted/30 p-8 rounded-3xl border border-border/50">
                  <h3 className="text-xl font-bold mb-4">Key Challenges</h3>
                  <p className="text-muted-foreground">
                    {project.challenges ||
                      "Implementing a seamless user experience while maintaining high performance and security was the primary focus of this project."}
                  </p>
                </div>
                <div className="bg-muted/30 p-8 rounded-3xl border border-border/50">
                  <h3 className="text-xl font-bold mb-4">Solution</h3>
                  <p className="text-muted-foreground">
                    {project.solution ||
                      "Utilized modern frameworks and best practices to ensure a scalable and maintainable architecture that meets all client requirements."}
                  </p>
                </div>
              </div>

              {project.impact && (
                <div className="mt-8 bg-primary/5 p-8 rounded-3xl border border-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-primary text-center">
                    Project Impact
                  </h3>
                  <p className="text-muted-foreground text-center">
                    {project.impact}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
