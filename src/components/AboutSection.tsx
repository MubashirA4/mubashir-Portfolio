import { motion, useInView } from "framer-motion";
import type { Easing } from "framer-motion";
import { useRef } from "react";
import Biography from "./about/Biography";
import Story from "./about/Story";
import Specialization from "./about/Specialization";
import AboutEducation from "./about/AboutEducation";
import Experience from "./about/Experience";
import Stats from "./about/Stats";
import Tools from "./about/Tools";
import Values from "./about/Values";
import AboutCTA from "./about/AboutCTA";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as Easing },
    },
  };

  const valuesData = [
    {
      title: "Quality First",
      desc: "Never settling for 'good enough'. Precision in every line of code.",
    },
    {
      title: "Continuous Early",
      desc: "Always learning and staying at the forefront of digital innovation.",
    },
    {
      title: "Transparency",
      desc: "Honest communication and collaborative partnership throughout the journey.",
    },
    {
      title: "Scalability",
      desc: "Building for today with the future clearly in mind.",
    },
  ];

  return (
    <div className="space-y-32 py-20" ref={ref}>
      <Biography isInView={isInView} />
      <Story isInView={isInView} itemVariants={itemVariants} />
      <Specialization isInView={isInView} itemVariants={itemVariants} />
      <AboutEducation isInView={isInView} itemVariants={itemVariants} />
      <Experience isInView={isInView} itemVariants={itemVariants} />
      <Stats />
      <Tools />
      <Values values={valuesData} />
      <AboutCTA />
    </div>
  );
};

export default AboutSection;
