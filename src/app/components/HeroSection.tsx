"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [uniqueKey, setUniqueKey] = useState("");

  useEffect(() => {
    setUniqueKey(`?v=${Date.now()}`); // Prevent SVG caching
  }, []);

  return (
    <section className="w-full py-24 px-4 md:px-8 bg-dark dark:bg-light">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight font-['Poppins'] text-light dark:text-dark">
            Expert Web Development Services <br />
            for Your Growing Brand
          </h1>

          <p className="text-lg font-['Montserrat'] text-light/80 dark:text-dark/80">
            I’m a full stack web developer in Pakistan specializing in custom web
            development using <strong>Next.js</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong>. I help businesses
            launch high-performance, responsive, SEO-optimized websites that convert.
          </p>

          <Link
            href="/#contact"
            className="inline-block px-6 py-3 rounded-full bg-primary text-dark hover:bg-white hover:text-primary border border-primary transition font-['Poppins'] scroll-smooth"
          >
            Start Your Project 🚀
          </Link>
        </motion.div>

        {/* Hero Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center hover:shadow-lg transition-all duration-300"
        >
          <Image
            src={`/hero-section.svg${uniqueKey}`}
            alt="Custom web development illustration"
            width={500}
            height={400}
            className="object-cover rounded-xl bg-dark shadow-md"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
