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
    <section
      id="skills"
      className="w-full bg-dark dark:bg-light py-20 px-4 md:px-8"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="text-center">
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-bold font-['Poppins'] text-light dark:text-dark"
          >
            Full Stack Web Developer Skills
          </h2>
          <p className="mt-2 text-light/80 dark:text-dark/80 text-lg font-['Montserrat']">
            My expertise covers the entire spectrum of modern web development
            — from HTML to advanced React frameworks like{" "}
            <strong className="text-primary">Next.js</strong>, making me a
            strong choice for{' '}
            <em>Custom Web Development</em>,{' '}
            <em>E-commerce Website Development</em>, and scalable{' '}
            <em>Web Application Development</em>.
          </p>
        </header>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-left"
        >
          {skills.map((skill, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-light dark:text-dark font-['Montserrat']">
                  {skill.name}
                </span>
                <span
                  className="text-muted text-sm font-['Montserrat']"
                  aria-hidden="true"
                >
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-muted/20 rounded-full overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={skill.level} aria-label={`${skill.name} proficiency: ${skill.level}%`}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 0.8 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
