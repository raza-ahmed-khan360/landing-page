"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaLaptopCode,
  FaBuilding,
  FaUserTie,
  FaShoppingCart,
  FaCodeBranch,
  FaMobileAlt,
  FaSearch,
  FaRocket,
  FaPenNib,
} from "react-icons/fa";

const services = [
  {
    title: "Custom Landing Pages",
    description:
      "Pixel-perfect, fast-loading landing pages tailored for product launches, SaaS startups, and marketing campaigns using React and Next.js.",
    icon: FaLaptopCode,
  },
  {
    title: "Business Websites",
    description:
      "Clean, professional business websites that build trust, reflect your brand, and convert visitors into leads — optimized for performance and SEO.",
    icon: FaBuilding,
  },
  {
    title: "Portfolio Websites",
    description:
      "Stand out online with a custom-designed personal or creative portfolio that showcases your work beautifully and responsively.",
    icon: FaUserTie,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Scalable online stores built with performance, security, and SEO in mind — designed to convert and built using modern tech like Next.js.",
    icon: FaShoppingCart,
  },
  {
    title: "Web Applications",
    description:
      "From dashboards to CRMs, I develop full-stack web applications with smooth UX and seamless functionality across all devices.",
    icon: FaCodeBranch,
  },
  {
    title: "Responsive Design",
    description:
      "Mobile-first, responsive website design that adapts to every screen — delivering a consistent experience from desktop to mobile.",
    icon: FaMobileAlt,
  },
  {
    title: "SEO Web Development",
    description:
      "Websites built with semantic HTML, structured data, and clean code to help you rank higher and gain organic traffic.",
    icon: FaSearch,
  },
  {
    title: "Performance Optimization",
    description:
      "Lightning-fast loading times, Core Web Vitals optimization, and best practices to ensure high performance and user retention.",
    icon: FaRocket,
  },
  {
    title: "Blog & Content Management",
    description:
      "Set up a modern blog or CMS with markdown or headless CMS integration to manage and scale your content effortlessly.",
    icon: FaPenNib,
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
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

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      id="services"
      className="w-full bg-light dark:bg-dark py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-dark dark:text-light">
          Web Development Services I Offer
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-dark dark:text-light gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-dark dark:bg-light border border-muted/30 rounded-xl shadow-md p-6 space-y-4 text-left hover:shadow-lg transition"
              >
                <div className="text-light dark:text-dark text-2xl">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold font-['Montserrat'] text-light dark:text-dark">
                  {service.title}
                </h3>
                <p className="text-muted font-['Montserrat'] text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
