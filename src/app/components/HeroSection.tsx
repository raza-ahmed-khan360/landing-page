"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [uniqueKey, setUniqueKey] = useState("");

  useEffect(() => {
    // Append a timestamp to bust cache and reload the SVG
    setUniqueKey(`?v=${Date.now()}`);
  }, []);

  return (
    <section className="w-full py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight font-montserrat">
            Build Your Brand <br />
            With Expert Web Design
          </h1>
          <p className="text-lg font-poppins">
            I create modern, animated, high-converting websites using Next.js,
            Tailwind CSS & Framer Motion.
          </p>
          <Link
            href="#contact"
            className="inline-block px-6 py-3 rounded-full bg-primary text-dark hover:bg-white hover:text-primary border border-primary transition font-poppins scroll-smooth"
          >
            Start a Project 🚀
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center hover:shadow-lg transition-all duration-300"
        >
          <Image
            src={`/hero-section.svg${uniqueKey}`}
            alt="Web design illustration"
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
