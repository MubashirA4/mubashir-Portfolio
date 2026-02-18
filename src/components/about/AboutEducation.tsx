import { motion } from "framer-motion";

interface EducationProps {
  isInView: boolean;
  itemVariants: any;
}

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "Virtual University of Pakistan",
    period: "OCT 2020 - SEP 2024",
    description:
      "Gained strong foundational knowledge in programming, software development, and web technologies.",
    coursework:
      "Focused coursework: Web Development, Data Structures & Algorithms, Database Systems, and Software Engineering.",
  },
  {
    degree: "Fsc Pre-Engineering",
    institution: "Islamia College",
    period: "AUG 2018 - SEP 2020",
    description:
      "Studied core subjects including Mathematics, Physics, and Chemistry, building a solid analytical foundation for computer science.",
  },
];

const AboutEducation = ({ isInView, itemVariants }: EducationProps) => {
  return (
    <section
      id="education"
      className="container mx-auto px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mb-16 lg:mb-24 flex flex-col gap-4">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm block">
          Learnings
        </span>
        <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tighter">
          Academic Journey
        </h2>
      </div>

      <div className="flex flex-col gap-16 lg:gap-24">
        {educationData.map((edu, index) => (
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
                {edu.period}
              </span>
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                {edu.degree}
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {edu.institution}
                </h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {edu.description}
                </p>
              </div>

              {edu.coursework && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {edu.coursework}
                  </p>
                </div>
              )}
            </div>
            <div className="absolute -top-1.5 left-0 w-3 h-3 bg-primary rounded-full transform -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutEducation;
