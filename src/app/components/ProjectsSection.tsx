"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Marketplace Hackathon",
    description:
      "Decentralized product marketplace built with Next.js, Tailwind CSS, and Sanity CMS.",
    image: "/projects/marketplace.png", // Update this image path as needed
    liveUrl: "https://marketplace-hackathon-comforty.vercel.app",
    githubUrl: "https://github.com/raza-ahmed-khan360/Marketplace-Hackathon",
    tech: ["Next.js", "Tailwind", "Sanity", "TypeScript", "Vercel"],
  },
  {
    title: "Ace Tutors Global – Client Website",
    description:
      "Professional tutoring service website with lead capture, responsive design, and secure deployment.",
    image: "/projects/ace-tutors-global.png", // Make sure the image matches your asset folder
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
      "Responsive personal portfolio website built with Next.js and Tailwind CSS, featuring project showcases and contact integration.",
    image: "/projects/personal-portfolio.png", // Ensure this image exists in your assets
    liveUrl: "https://personal-portfolio-next-js-tailwind-css.vercel.app",
    githubUrl:
      "https://github.com/raza-ahmed-khan360/next-js-milestone-02-project-02",
    tech: ["Next.js", "Tailwind"],
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      id="projects"
      className="w-full bg-light dark:bg-dark py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-montserrat text-dark dark:text-light">
          Featured Projects
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              variants={itemVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-dark dark:bg-light border border-muted/30 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold font-poppins text-light dark:text-dark">
                  {project.title}
                </h3>
                <p className="text-muted text-sm font-poppins">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs dark:bg-dark bg-light text-dark dark:text-primary px-2 py-1 rounded-full font-poppins"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="text-sm font-poppins text-primary underline"
                  >
                    Live Site
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="text-sm font-poppins text-muted underline"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
