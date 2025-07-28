"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export default function CTASection() {
  return (
    <section id="cta" className="w-full bg-dark dark:bg-light text-light dark:text-dark py-20 px-4 md:px-8">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <header>
          <h2 className="text-3xl md:text-4xl font-bold font-['Poppins']">
            Looking for Custom Web Development Services?
          </h2>
          <p className="text-muted text-lg font-['Montserrat'] mt-4">
            I build blazing fast, responsive, and SEO-optimized websites using modern stacks like <strong>Next.js</strong> and <strong>React</strong>. Let’s turn your ideas into impactful digital products.
          </p>
        </header>
        <Link
          href="#contact"
          aria-label="Contact me to discuss your web development project"
          className="inline-block px-8 py-3 rounded-full bg-primary text-dark hover:bg-white hover:text-primary border border-primary transition font-['Poppins']"
        >
          Let’s Talk 🚀
        </Link>
      </motion.div>
    </section>
  );
}
