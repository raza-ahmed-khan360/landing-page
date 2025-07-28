"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
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
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-light font-['Poppins']">
            Web Developer in Pakistan — Building Custom Web Solutions
          </h2>
          <p className="text-light/80 font-['Montserrat'] text-lg">
            I&apos;m <strong>Raza Ahmed</strong>, a <strong>Full Stack Web Developer</strong> from Pakistan, offering professional{" "}
            <strong>Web Development Services</strong> for businesses, startups, and entrepreneurs worldwide.
          </p>
          <p className="text-light/80 font-['Montserrat']">
            Specializing in <strong>React</strong>, <strong>Next.js Development Services</strong>, and modern UI frameworks like{" "}
            <strong>Tailwind CSS</strong>, I create fast, mobile-first, SEO-optimized websites. Whether you need a{" "}
            <strong>custom web application</strong>, an <strong>e-commerce website</strong>, or a sleek portfolio, I deliver high-quality, scalable solutions.
          </p>
          <p className="text-light/80 font-['Montserrat']">
            Need a design turned into code? I convert Figma/Sketch designs into pixel-perfect, responsive websites. Let's{" "}
            <strong>build your web presence</strong> with clean code, semantic structure, and top performance.
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
            src="/about.png"
            alt="Freelance Web Developer in Pakistan - Raza Ahmed"
            className="rounded-xl shadow-md w-full max-w-sm object-cover"
            width={500}
            height={400}
          />
        </motion.div>
      </div>
    </section>
  );
}
