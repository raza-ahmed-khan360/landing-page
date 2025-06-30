"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-light dark:bg-dark pt-24 pb-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-light font-montserrat">
            Who I Am
          </h2>
          <p className="text-light/80 font-poppins text-lg">
            I&apos;m Raza Ahmed — a passionate web designer and developer focused on building modern, animated, high-performance websites for creators, startups, and brands.
          </p>
          <p className="text-light/80 font-poppins">
            With deep experience in <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong>, I craft digital experiences that feel fast, fluid, and engaging. I also offer design-to-code services from Figma and ensure SEO and responsiveness are never compromised.
          </p>
        </motion.div>

        {/* Illustration or Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src="/about.png" // Replace with actual image
            alt="About Raza Ahmed"
            className="rounded-xl shadow-md w-full max-w-sm object-cover"
            width={500}
            height={400}
          />
        </motion.div>
      </div>
    </section>
  );
}
