import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What's your typical process for a new project?",
    answer: "We start with a discovery phase to understand your goals, audience, and competitors. From there, we move into strategy, design, and development—keeping you in the loop at every stage. Each service has its own milestones, but collaboration is constant throughout.",
  },
  {
    question: "How long does a project usually take?",
    answer: "It depends on the scope. A simple website or branding project can take 2 to 3 weeks. Larger projects with multiple pages, motion, or strategy may take 4 to 6 weeks. We'll always set a clear timeline before we begin.",
  },
  {
    question: "Do you offer packages or custom quotes?",
    answer: "Both. We have a few starter packages to keep things simple, but we also offer custom quotes for projects with unique needs. Just tell us what you're planning — we'll work around it.",
  },
  {
    question: "What's included in a branding package?",
    answer: "Our branding package covers the essentials: logo design, color palette, font pairing, and a mini style guide. We can also include social templates or creative direction if needed.",
  },
  {
    question: "Can you work with our existing dev or marketing team?",
    answer: "Yes, absolutely. We're happy to collaborate with your team — whether it's development, content, or marketing. Clear communication and teamwork always lead to better results.",
  },
];

const NakulaFAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-container" ref={ref}>
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
        {/* Left side */}
        <div className="lg:w-1/3">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="heading-xl mb-4"
          >
            FAQ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground mb-6"
          >
            Got specific questions?
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#contact"
            className="text-primary hover:underline"
          >
            Contact Us
          </motion.a>
        </div>

        {/* Right side - FAQ items */}
        <div className="lg:w-2/3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="faq-item"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left py-2"
              >
                <span className="text-lg font-medium pr-8">{faq.question}</span>
                <span className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-muted-foreground pb-4 pt-2">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NakulaFAQ;
