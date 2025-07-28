"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    title: "Marketplace Hackathon",
    description:
      "A decentralized marketplace built with Next.js, Tailwind CSS, Sanity CMS, and deployed via Vercel. A perfect example of modern Web Application Development.",
    image: "/projects/marketplace.png",
    liveUrl: "https://marketplace-hackathon-comforty.vercel.app",
    githubUrl: "https://github.com/raza-ahmed-khan360/Marketplace-Hackathon",
    tech: ["Next.js", "Tailwind", "Sanity", "TypeScript", "Vercel"],
  },
  {
    title: "Ace Tutors Global – Client Website",
    description:
      "Custom Web Development project for a professional tutoring platform with responsive layout and SEO-optimized structure.",
    image: "/projects/ace-tutors-global.png",
    liveUrl: "https://ace-tutors-global.vercel.app",
    githubUrl: "https://github.com/raza-ahmed-khan360/ace-tutors-global",
    tech: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Vercel",
      "Framer Motion",
      "Sanity",
    ],
  },
  {
    title: "Personal Portfolio – Next.js & Tailwind",
    description:
      "A Full Stack Developer portfolio built with Next.js and Tailwind CSS, demonstrating skills in modern front-end technologies and responsive design.",
    image: "/projects/personal-portfolio.png",
    liveUrl: "https://personal-portfolio-next-js-tailwind-css.vercel.app",
    githubUrl:
      "https://github.com/raza-ahmed-khan360/next-js-milestone-02-project-02",
    tech: ["Next.js", "Tailwind"],
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      id="projects"
      className="w-full bg-light dark:bg-dark py-20 px-4 md:px-8"
      aria-label="Web Development Portfolio Projects"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-['Poppins'] text-dark dark:text-light">
          Featured Web Development Projects
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.article
              key={i}
              variants={itemVariant}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-dark dark:bg-light border border-muted/30 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              aria-label={`Project: ${project.title}`}
            >
              <figure>
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                  priority={i === 0}
                />
                <figcaption className="sr-only">{project.title}</figcaption>
              </figure>

              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold font-['Montserrat'] text-light dark:text-dark">
                  {project.title}
                </h3>
                <p className="text-muted text-sm font-['Montserrat'] leading-relaxed">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 text-xs mt-2 text-muted">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-muted/10 dark:bg-muted/20 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary text-primary dark:text-primary bg-transparent hover:bg-primary/10 text-sm font-medium transition"
                  >
                    <FaArrowUpRightFromSquare className="text-sm" />
                    Live Site
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-muted text-muted hover:bg-muted/10 dark:hover:bg-muted/20 text-sm font-medium transition"
                  >
                    <FaGithub className="text-base" />
                    GitHub
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
