"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const packages = [
  {
    name: "Starter",
    price: "$199",
    description:
      "Perfect for small businesses and personal brands. Get a sleek 1-page website — ideal for portfolios, link-in-bio pages, or landing page for marketing purposes.",
    features: [
      "Responsive Design",
      "1 Landing Page",
      "SEO Basics",
      "Delivery: 3–5 Days",
    ],
  },
  {
    name: "Pro",
    price: "$399",
    description:
      "Ideal for growing businesses. Build a complete multi-page website with custom animations — great for service providers, agencies, and startups.",
    features: [
      "Up to 5 Pages",
      "Custom Animations",
      "SEO Optimization",
      "Blog Integration",
      "Delivery: 5–7 Days",
    ],
  },
  {
    name: "Elite",
    price: "$699",
    description:
      "Complete solution with advanced customization. Designed for tech startups, SaaS tools, and eCommerce — scalable, animated, CMS-powered.",
    features: [
      "Unlimited Pages",
      "Advanced Framer Animations",
      "CMS Integration (Sanity)",
      "Contact Form + API",
      "Performance Optimization",
      "Delivery: 7–10 Days",
    ],
  },
];

const addons = [
  { name: "Logo Design", price: "+$80" },
  { name: "Dark Mode", price: "+$50" },
  { name: "Custom 404 Page", price: "+$35" },
  { name: "Hero Section Illustration", price: "+$90" },
  { name: "Loading Animations", price: "+$45" },
  { name: "Multilingual Setup", price: "+$100" },
  { name: "Payment Gateway Integration", price: "+$150" },
  { name: "Newsletter Integration", price: "+$75" },
];

export default function PricingSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      id="pricing"
      className="w-full bg-light dark:bg-dark py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-dark dark:text-light">
          Pricing Plans
        </h2>
        <p className="text-muted text-lg font-poppins">
          Choose a plan that suits your business stage. You can also add extras
          as needed.
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
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-dark dark:bg-light border border-muted/30 rounded-xl shadow-sm p-6 space-y-4 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-light dark:text-dark font-montserrat">
                {pkg.name}
              </h3>
              <p className="text-primary text-start dark:text-dark text-5xl font-bold">
                {pkg.price}
              </p>
              <p className="text-muted text-start font-poppins">
                {pkg.description}
              </p>
              <ul className="text-sm text-start text-light dark:text-dark font-poppins space-y-2 mt-4">
                {pkg.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-bold text-dark dark:text-light font-montserrat text-center">
            Optional Add-ons
          </h3>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-poppins text-dark dark:text-light">
            {addons.map((addon, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ scale: 1.05, y: -5 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="bg-light dark:bg-dark hover:shadow-lg transition-all duration-300 border border-muted/30 px-4 py-3 rounded-xl text-sm shadow-sm"
              >
                {addon.name} <span className="text-muted">({addon.price})</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
