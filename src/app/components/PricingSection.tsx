"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const packages = [
  {
    name: "Starter",
    price: "$249",
    description:
      "Perfect for small businesses or personal brands needing a sleek one-page website. Ideal for landing pages, portfolios, or bio links.",
    features: [
      "Responsive Web Design",
      "1 Landing Page",
      "Basic SEO Setup",
      "Delivery in 3–5 Days",
    ],
    recommended: false,
  },
  {
    name: "Pro",
    price: "$499",
    description:
      "Best suited for service providers, agencies, and startups. Build a modern, multi-page website with advanced interactions.",
    features: [
      "Up to 5 Custom Pages",
      "Smooth Scroll Animations",
      "SEO Optimization",
      "Blog Setup",
      "Delivery in 5–7 Days",
    ],
    recommended: true,
  },
  {
    name: "Elite",
    price: "$899",
    description:
      "All-in-one solution for growing startups. Get a full-featured web application with CMS, API integrations, and blazing performance.",
    features: [
      "Unlimited Pages",
      "Framer Motion Animations",
      "Sanity CMS Integration",
      "Contact Forms & APIs",
      "Performance Optimization",
      "Delivery in 7–10 Days",
    ],
    recommended: false,
  },
];

const addons = [
  { name: "Logo Design", price: "+$80" },
  { name: "Dark Mode", price: "+$50" },
  { name: "Custom 404 Page", price: "+$35" },
  { name: "Hero Section Illustration", price: "+$90" },
  { name: "Loading Animations", price: "+$45" },
  { name: "Multilingual Website Setup", price: "+$100" },
  { name: "Payment Gateway Integration", price: "+$150" },
  { name: "Newsletter Integration", price: "+$75" },
];

export default function PricingSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      id="pricing"
      className="w-full bg-light dark:bg-dark py-20 px-4 md:px-8"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        <h2
          id="pricing-heading"
          className="text-3xl md:text-4xl font-bold font-['Poppins'] text-dark dark:text-light"
        >
          Web Development Pricing Plans
        </h2>
        <p className="text-muted text-lg font-['Montserrat'] max-w-2xl mx-auto">
          Transparent pricing for modern websites. Choose a package that fits your business goals. Add custom features as needed.
        </p>

        {/* Packages */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileHover={{ scale: 1.05, y: -5 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className={`relative bg-dark dark:bg-light border border-muted/30 rounded-xl shadow-sm p-6 space-y-4 hover:shadow-lg transition-all duration-300 ${
                pkg.recommended
                  ? "ring-2 ring-primary dark:ring-offset-2 dark:ring-offset-dark"
                  : ""
              }`}
              aria-label={`${pkg.name} web development package`}
            >
              {pkg.recommended && (
                <span className="absolute top-4 right-4 bg-primary text-dark text-xs font-semibold px-3 py-1 rounded-full font-['Montserrat']">
                  Best Offer
                </span>
              )}
              <h3 className="text-xl font-semibold text-light dark:text-dark font-['Montserrat']">
                {pkg.name}
              </h3>
              <p className="text-primary text-start dark:text-dark text-5xl font-bold font-['Poppins']">
                {pkg.price}
              </p>
              <p className="text-muted text-start font-['Montserrat']">
                {pkg.description}
              </p>
              <ul className="text-sm text-start text-light dark:text-dark font-['Montserrat'] space-y-2 mt-4">
                {pkg.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-bold text-dark dark:text-light font-['Poppins'] text-center">
            Optional Web Development Add-ons
          </h3>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-['Montserrat'] text-dark dark:text-light">
            {addons.map((addon, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ scale: 1.05, y: -5 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="bg-light dark:bg-dark hover:shadow-lg transition-all duration-300 border border-muted/30 px-4 py-3 rounded-xl text-sm shadow-sm"
              >
                {addon.name}{" "}
                <span className="text-muted font-medium">({addon.price})</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
