"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLayerGroup, FaPaintBrush, FaBolt, FaSearch } from "react-icons/fa";

const features = [
  {
    title: "Modern Tech Stack",
    description:
      "Utilizing Next.js, React, Tailwind CSS, and Framer Motion to build fast, responsive, and interactive web applications — the foundation of custom web development.",
    icon: FaLayerGroup,
  },
  {
    title: "Conversion-Focused Design",
    description:
      "I craft intuitive interfaces and user-centered designs that drive user engagement, generate leads, and grow your business through professional web development services.",
    icon: FaPaintBrush,
  },
  {
    title: "Fast Project Turnaround",
    description:
      "As a freelance web developer in Pakistan, I deliver high-quality websites and full-stack solutions quickly — ideal for startups and growing businesses that need results now.",
    icon: FaBolt,
  },
  {
    title: "SEO & Performance Optimization",
    description:
      "I follow semantic SEO and modern optimization techniques to ensure your website ranks higher on Google and loads quickly across all devices.",
    icon: FaSearch,
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
      staggerChildren: 0.15,
    },
  },
};

export default function FeaturesSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      id="features"
      className="w-full bg-white dark:bg-light py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-center text-light dark:text-dark">
          Why Choose My Web Development Services
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariant}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-light dark:bg-dark border border-muted/30 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-dark dark:text-light text-2xl mb-3">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold font-['Montserrat'] text-dark dark:text-light">
                  {feature.title}
                </h3>
                <p className="text-muted font-['Montserrat'] text-sm mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
