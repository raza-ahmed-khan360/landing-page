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
      "Pixel-perfect and fast-loading marketing pages tailored to your brand and product.",
    icon: FaLaptopCode,
  },
  {
    title: "Business Websites",
    description:
      "Clean, modern websites that establish trust and convert your visitors into clients.",
    icon: FaBuilding,
  },
  {
    title: "Portfolio Websites",
    description:
      "Showcase your work professionally with a personal portfolio designed to impress.",
    icon: FaUserTie,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Build your online store with a focus on user experience and conversion optimization.",
    icon: FaShoppingCart,
  },
  {
    title: "Web Applications",
    description:
      "Develop interactive web apps that provide a seamless user experience across devices.",
    icon: FaCodeBranch,
  },
  {
    title: "Responsive Design",
    description:
      "Ensure your website looks great on all devices with a fully responsive design.",
    icon: FaMobileAlt,
  },
  {
    title: "SEO-Friendly Development",
    description:
      "Build websites with SEO best practices to help you rank higher in search engines.",
    icon: FaSearch,
  },
  {
    title: "Performance Optimization",
    description:
      "Optimize your website for speed and performance to enhance user experience.",
    icon: FaRocket,
  },
  {
    title: "Blog and Content Management",
    description:
      "Create and manage engaging content to attract and retain your audience.",
    icon: FaPenNib,
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      id="services"
      className="w-full bg-light dark:bg-dark py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-dark dark:text-light">
          What I Offer
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-dark dark:text-light gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{ scale: 1.05, y: -5 }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="bg-dark dark:bg-light border border-muted/30 rounded-xl shadow-md p-6 space-y-4 text-left hover:shadow-lg transition"
              >
                <div className="text-light dark:text-dark text-2xl">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold font-poppins text-light dark:text-dark">
                  {service.title}
                </h3>
                <p className="text-muted font-poppins text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
