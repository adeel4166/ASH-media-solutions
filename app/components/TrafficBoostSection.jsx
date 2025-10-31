"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaBullhorn, FaChartLine, FaPhoneAlt } from "react-icons/fa";

function AnimatedCircle({ endValue }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const stepTime = 20;
      const step = endValue / (duration / stepTime);
      const counter = setInterval(() => {
        start += step;
        if (start >= endValue) {
          start = endValue;
          clearInterval(counter);
        }
        setValue(Math.floor(start));
      }, stepTime);
    }
  }, [isInView, endValue]);

  return (
    <div ref={ref} className="relative w-24 h-24">
      <svg className="w-24 h-24 rotate-[-90deg]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="#0E2B2D" strokeWidth="8" fill="none" />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="#00D8FE"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: endValue / 100 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-[#00D8FE]">
        {value}%
      </div>
    </div>
  );
}

export default function TrafficBoostSection() {
  return (
    <section className="relative py-24 px-6 bg-[#071414] text-white font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* ✅ LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#00D8FE] mb-6 leading-tight tracking-tight">
            Generate 100% Traffic <br /> On Your Website
          </h2>

          <p className="text-gray-300 text-[17px] leading-relaxed mb-12">
            We implement comprehensive digital marketing strategies to drive
            consistent traffic and achieve maximum online visibility across
            Pakistan.
          </p>

          {/* Circles Section */}
          <div className="flex flex-wrap gap-10 mb-12">
            <div className="flex items-center gap-4">
              <AnimatedCircle endValue={95} />
              <p className="text-gray-300 text-[15px] md:text-[16px] leading-snug">
                Client <br /> Satisfied
              </p>
            </div>

            <div className="flex items-center gap-4">
              <AnimatedCircle endValue={90} />
              <p className="text-gray-300 text-[15px] md:text-[16px] leading-snug">
                Finance <br /> Consulting
              </p>
            </div>
          </div>

          {/* Contact Row */}
          <div className="flex flex-wrap items-center gap-8">
            <a
              href="/contact"
              className="px-8 py-3 rounded-full bg-[#00D8FE] text-black font-semibold hover:bg-[#00bfe4] transition-all duration-300"
            >
              Contact Us Now
            </a>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#00D8FE] text-[#00D8FE]">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm text-gray-400">Call Us Now</p>
                <p className="text-white font-semibold">+92 3477858316</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ✅ RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0E1E1E] rounded-[30px] border border-[#093333] overflow-hidden"
        >
          {/* Header */}
          <div className="px-10 py-6 border-b border-[#093333]">
            <h3 className="text-3xl font-bold text-[#00D8FE] tracking-tight">
              Our Benefits
            </h3>
          </div>

          {/* Benefit Items */}
          <div className="divide-y divide-[#093333]">
            {/* Item 1 */}
            <div className="flex items-start gap-6 px-10 py-8">
              <div className="bg-[#00D8FE] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                <FaBullhorn className="text-black text-xl" />
              </div>
              <div>
                <h4 className="text-lg text-white font-bold mb-2 tracking-tight">
                  Powerful Ad Campaigns
                </h4>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  We create high-impact, ROI-focused advertising campaigns through
                  PPC, social media, and performance marketing strategies.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-6 px-10 py-8 bg-[#0A1717]">
              <div className="bg-[#00D8FE] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                <FaChartLine className="text-black text-xl" />
              </div>
              <div>
                <h4 className="text-lg text-white font-bold mb-2 tracking-tight">
                  Drive Website Traffic
                </h4>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  Increase website traffic with proven SEO, PPC, and digital marketing
                  strategies that boost your online visibility and conversions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
