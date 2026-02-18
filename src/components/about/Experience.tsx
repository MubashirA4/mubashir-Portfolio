import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

interface ExperienceProps {
  isInView: boolean;
  itemVariants: any;
}

const experienceData = [
  {
    role: "Front-End Lead",
    company: "TechTideCo.",
    period: "DEC 2025 - Present",
    description:
      "Lead front-end development for responsive and scalable web applications.",
    points: [
      "Collaborate with designers and backend teams to deliver high-performance, user-friendly interfaces.",
      "Oversee code quality, optimize performance, and manage version control and deployments.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "TechTideCo.",
    period: "OCT 2025 - DEC 2025",
    description:
      "Develop and maintain scalable, responsive web applications using React.js and TypeScript.",
    points: [
      "Collaborate with cross-functional teams to translate UI/UX designs into high-performance features.",
      "Optimize applications for speed, accessibility, and cross-browser compatibility.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "TechTideCo.",
    period: "AUG 2025 - OCT 2025",
    description:
      "Developing responsive and dynamic user interfaces using React.js and Tailwind CSS.",
    points: [
      "Collaborating with designers and backend developers to ensure seamless integration and UI consistency.",
      "Optimizing application performance and ensuring cross-browser compatibility.",
      "Enhancing project workflow efficiency using Git, GitHub for version control and deployment.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "DevelopersHub Co.",
    period: "DEC 2024 - FEB 2025",
    description:
      "Translated Figma designs into pixel-perfect, reusable React components.",
    points: [
      "Implemented modern UI/UX principles to improve user engagement and accessibility.",
      "Worked in an agile environment, participating in code reviews and daily stand-ups.",
      "Deployed and maintained web applications, ensuring responsive design across all devices.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "Rhombix Technology",
    period: "SEP 2024 - NOV 2024",
    description:
      "Assisted in building and maintaining front-end features for client projects using HTML, CSS, and React.js.",
    points: [
      "Collaborated with senior developers to debug and enhance existing web functionalities.",
      "Gained hands-on experience with Tailwind CSS, version control (Git), and project deployment.",
      "Improved code readability and maintainability through component-based architecture.",
    ],
  },
];

const Experience = ({ isInView, itemVariants }: ExperienceProps) => {
  return (
    <section
      id="experience"
      className="container mx-auto px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mb-16 lg:mb-24 flex flex-col gap-4">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm block">
          Career Path
        </span>
        <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tighter">
          Work Experience
        </h2>
      </div>

      <div className="flex flex-col gap-16 lg:gap-24">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative grid lg:grid-cols-[1fr_2fr] gap-8 border-t border-border/50 pt-12"
          >
            <div className="flex flex-col gap-2">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">
                {exp.period}
              </span>
              <h3 className="text-3xl font-bold group-hover:text-primary transition-colors duration-300 uppercase tracking-tight">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 size={18} className="text-primary/60" />
                <span className="font-medium">{exp.company}</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xl text-foreground font-medium mb-4 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground group/item"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2.5 group-hover/item:bg-primary transition-colors" />
                      <span className="flex-1 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute -top-1.5 left-0 w-3 h-3 bg-primary rounded-full transform -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
