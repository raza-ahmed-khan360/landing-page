"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLayerGroup, FaPaintBrush, FaBolt, FaSearch } from "react-icons/fa"; // You can swap icons for more specific ones later

const features = [
  {
    title: "Modern Tech Stack",
    description:
      "Built with Next.js, Tailwind CSS, and Framer Motion — ensuring performance, responsiveness, and smooth animations.",
    icon: FaLayerGroup,
  },
  {
    title: "Conversion-Focused Design",
    description:
      "Layouts, colors, and interactions optimized for engagement, leads, and sales.",
    icon: FaPaintBrush,
  },
  {
    title: "Fast Turnaround",
    description:
      "Delivering high-quality websites quickly — because your business can’t wait.",
    icon: FaBolt,
  },
  {
    title: "SEO & Optimization",
    description:
      "I follow best practices to help your site rank and load fast — on every device.",
    icon: FaSearch,
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      id="features"
      className="w-full bg-white dark:bg-light py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center text-light dark:text-dark">
          Why Choose Me
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariant}
                whileHover={{ scale: 1.05, y: -5 }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="bg-light dark:bg-dark border border-muted/30 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-dark dark:text-light text-2xl mb-3">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold font-poppins text-dark dark:text-light">
                  {feature.title}
                </h3>
                <p className="text-muted font-poppins text-sm mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
