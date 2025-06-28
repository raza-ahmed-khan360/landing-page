"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const iconClass =
  "text-light/80 hover:text-primary transition text-lg md:text-xl";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-dark/90 text-light backdrop-blur border-t border-muted/20 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="text-xl font-bold font-montserrat">Raza Ahmed</h2>
          <p className="text-sm text-light/80 mt-2 font-poppins">
            Crafting animated, modern websites that drive results.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <h3 className="font-semibold text-light font-poppins mb-2">Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                href="/"
                className="text-light/80 hover:text-white transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-light/80 hover:text-white transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-light/80 hover:text-white transition"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-light/80 hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h3 className="font-semibold text-light font-poppins mb-2">
            Services
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              <span className="text-light/80">Landing Pages</span>
            </li>
            <li>
              <span className="text-light/80">Web Design</span>
            </li>
            <li>
              <span className="text-light/80">Frontend Dev</span>
            </li>
            <li>
              <span className="text-light/80">Custom UI</span>
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <h3 className="font-semibold text-light font-poppins mb-3">
            Get in Touch
          </h3>
          <div className="flex items-center gap-4">
            <Link
              href="mailto:hafizrazaahmed42@gmail.com"
              aria-label="Email"
              className={iconClass}
            >
              <FiMail />
            </Link>
            <Link
              href="https://wa.me/923141087568"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={iconClass}
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="https://www.linkedin.com/in/raza-ahmed-khan360"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconClass}
            >
              <FiLinkedin />
            </Link>
            <Link
              href="https://github.com/raza-ahmed-khan360"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={iconClass}
            >
              <FiGithub />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-light/80 mt-10 font-poppins">
        © {year} Raza Ahmed. All rights reserved.
      </div>
    </footer>
  );
}
