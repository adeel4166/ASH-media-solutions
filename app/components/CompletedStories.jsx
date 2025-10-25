"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ✅ Animated Counter Component
function AnimatedCounter({ endValue, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 20;
    const step = endValue / (duration / stepTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= endValue) {
        start = endValue;
        clearInterval(timer);
      }
      setValue(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, endValue]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-4xl md:text-5xl font-bold text-[#00D8FE] mb-2">
        {value}
        {endValue < 100 ? "+" : "%"}
      </h3>
      <p className="text-gray-800 dark:text-gray-300 text-lg transition-colors duration-500">
        {label}
      </p>
    </div>
  );
}

// ✅ Main Section
export default function CompletedStories() {
  return (
    <section
      className="relative py-32 overflow-hidden
                 text-gray-900 dark:text-white
                 bg-[url('/fix2-light.jpg')] dark:bg-[url('/fix2.jpg')]
                 bg-fixed bg-center bg-cover
                 transition-all duration-500 ease-in-out"
    >
      {/* ✅ Background overlay for contrast */}
      <div
        className="absolute inset-0 -z-10 
                   bg-white/85 dark:bg-[#071414]/90 
                   backdrop-blur-[2px]
                   transition-colors duration-500"
      />

      {/* ✅ Content Wrapper */}
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#00D8FE] mb-4"
        >
          Completed Stories
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed transition-colors duration-500"
        >
          Discover how our digital strategies transformed client growth — real
          numbers, real success, and proven impact across Pakistan.
        </motion.p>

        {/* ✅ Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-20"
        >
          <AnimatedCounter endValue={150} label="Projects Completed" />
          <AnimatedCounter endValue={140} label="Happy Clients" />
          <AnimatedCounter endValue={100} label="Client Satisfaction" />
        </motion.div>
      </div>
    </section>
  );
}
