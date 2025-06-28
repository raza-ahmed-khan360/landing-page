"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "TypeScript", level: 80 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 88 },
  { name: "Tailwind CSS", level: 93 },
  { name: "Framer Motion", level: 85 },
  { name: "Figma", level: 90 },
  { name: "Photoshop", level: 75 },
  { name: "GitHub", level: 88 },
  { name: "Firebase", level: 75 },
  { name: "Node.js", level: 65 },
  { name: "Sanity CMS", level: 80 },
];

export default function SkillsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="skills" className="w-full dark:bg-light bg-dark py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat dark:text-dark text-light">
          My Skills
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-left"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="dark:text-dark text-light font-poppins">{skill.name}</span>
                <span className="text-muted text-sm font-poppins">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-muted/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 0.8 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
