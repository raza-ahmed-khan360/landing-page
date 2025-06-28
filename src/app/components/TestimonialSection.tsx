"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sarah Malik",
    location: "Dubai, UAE",
    quote: "Working with Raza was incredible! My site is fast, modern and just perfect.",
  },
  {
    name: "James Carter",
    location: "London, UK",
    quote: "Superb experience. The animations and feel are better than most agencies.",
  },
  {
    name: "Amina Khan",
    location: "Toronto, Canada",
    quote: "Highly recommend if you want a serious and aesthetic web presence.",
  },
  // ... more repeated or real testimonials
];

export default function TestimonialsSection() {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = async () => {
      const width = carouselRef.current?.scrollWidth || 0;
      await controls.start({
        x: [-0, -width / 2],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    };
    scroll();
  }, [controls]);

  return (
    <section id="testimonials" className="w-full bg-light dark:bg-dark py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-light text-center font-montserrat">
          What Clients Say
        </h2>
        <div className="relative overflow-hidden">
          <motion.div
            ref={carouselRef}
            className="flex gap-6"
            animate={controls}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-[300px] bg-dark dark:bg-light rounded-xl shadow-sm p-6 space-y-4 border border-muted/30 hover:shadow-md transition"
              >
                <p className="italic text-muted font-poppins">“{t.quote}”</p>
                <div className="pt-2">
                  <p className="dark:text-dark text-light font-semibold font-poppins">
                    {t.name}
                  </p>
                  <p className="text-sm text-muted">{t.location}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
