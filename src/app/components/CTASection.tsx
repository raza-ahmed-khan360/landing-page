"use client";

import { motion, easeOut } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
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
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat">
          Ready to Elevate Your Online Presence?
        </h2>
        <p className="text-muted text-lg font-poppins">
          Let’s bring your vision to life with a blazing fast, animated website
          that converts.
        </p>
        <Link
          href="#contact"
          className="inline-block px-8 py-3 rounded-full bg-primary text-dark hover:bg-white hover:text-primary border border-primary transition font-poppins"
        >
          Let’s Talk 🚀
        </Link>
      </motion.div>
    </section>
  );
}
