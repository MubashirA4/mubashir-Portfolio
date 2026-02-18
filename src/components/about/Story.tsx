import { motion } from "framer-motion";

interface StoryProps {
  isInView: boolean;
  itemVariants: any;
}

const Story = ({ isInView, itemVariants }: StoryProps) => {
  return (
    <section className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold uppercase tracking-tight text-primary">
            Personal Story
          </h2>
          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
            <p>
              I’m Mubashir Ahmad Hamza, a Full Stack Developer passionate about
              building scalable web applications. My journey into web
              development started with curiosity about how digital products
              work, which evolved into building complete applications from
              frontend interfaces to backend systems.
            </p>
            <p>
              I believe that every project is a story waiting to be told through
              code. What began as a fascinations with pixels has transformed
              into a career dedicated to architecting complex digital ecosystems
              that solve real-world problems and enhance human interaction.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="glass-card p-10 lg:p-14 border-primary/20 bg-primary/[0.02]"
        >
          <h2 className="text-4xl font-bold uppercase tracking-tight mb-8">
            Professional Philosophy
          </h2>
          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
            <p>
              My approach focuses on understanding the core problem before
              diving into solutions. I believe in building scalable
              architectures that grow with your business, ensuring long-term
              success and maintainability.
            </p>
            <p className="border-l-4 border-primary pl-6 italic text-foreground">
              "Functionality is the foundation, but exceptional user experience
              is what makes a product legendary."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
