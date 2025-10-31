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
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
        {value}
        {endValue < 100 ? "+" : "%"}
      </h3>
      <p className="text-gray-200 text-[17px] font-normal leading-snug">
        {label}
      </p>
    </div>
  );
}

// ✅ Main Section
export default function CompletedStories() {
  return (
    <section
      className="relative py-24 md:py-32 px-6 font-sans
                 bg-[url('/fix1.jpg')] bg-center bg-no-repeat bg-cover bg-fixed
                 text-white overflow-hidden"
    >
      {/* ✅ Transparent overlay */}
      <div className="absolute inset-0 bg-[#071414]/70"></div>

      {/* ✅ Content Wrapper */}
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#00D8FE] mb-5 leading-tight"
        >
          Completed Stories
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-200 max-w-3xl mx-auto text-[17px] leading-relaxed mb-14"
        >
          See how our digital marketing strategies have helped clients grow —
          explore real numbers, real impact, and proven success across Pakistan.
        </motion.p>

        {/* ✅ Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16"
        >
          <AnimatedCounter endValue={150} label="Projects Completed" />
          <AnimatedCounter endValue={140} label="Happy Clients" />
          <AnimatedCounter endValue={100} label="Client Satisfaction" />
        </motion.div>
      </div>
    </section>
  );
}
