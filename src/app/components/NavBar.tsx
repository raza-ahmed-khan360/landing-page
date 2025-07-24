"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all ${
        scrolled ? "shadow-sm backdrop-blur-md" : ""
      } bg-light dark:bg-dark dark:text-dark text-light border-b border-muted/20`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold font-montserrat text-dark dark:text-light flex items-center"
        >
          <span className="relative w-10 h-10 mr-2">
            {/* Light mode logo */}
            <Image
              src="/code-light.svg"
              alt="Raza.dev Logo"
              width={40}
              height={40}
              className="absolute inset-0 dark:hidden"
              priority
            />
            {/* Dark mode logo */}
            <Image
              src="/code-dark.svg"
              alt="Raza.dev Logo"
              width={40}
              height={40}
              className="inset-0 hidden dark:inline-block"
              priority
            />
          </span>
          Raza.dev
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 font-poppins text-sm text-dark dark:text-light">
          <Link href="/#projects" className="hover:text-primary transition">Projects</Link>
          <Link href="/#pricing" className="hover:text-primary transition">Pricing</Link>
          <Link href="/#skills" className="hover:text-primary transition">Skills</Link>
          <Link href="/#services" className="hover:text-primary transition">Services</Link>
          <Link href="/#about" className="hover:text-primary transition">About</Link>
          <Link href="/#features" className="hover:text-primary transition">Features</Link>
          <Link href="/#contact" className="hover:text-primary transition">Contact</Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-dark dark:text-light focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-4 pb-6 space-y-4 font-poppins bg-white/60 dark:bg-black/60 backdrop-blur-md border-t border-muted/20 text-dark dark:text-light"
          >
            <Link href="/#projects" onClick={() => setOpen(false)} className="block">Projects</Link>
            <Link href="/#pricing" onClick={() => setOpen(false)} className="block">Pricing</Link>
            <Link href="/#skills" onClick={() => setOpen(false)} className="block">Skills</Link>
            <Link href="/#services" onClick={() => setOpen(false)} className="block">Services</Link>
            <Link href="/#about" onClick={() => setOpen(false)} className="block">About</Link>
            <Link href="/#features" onClick={() => setOpen(false)} className="block">Features</Link>
            <Link href="/#contact" onClick={() => setOpen(false)} className="block">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
