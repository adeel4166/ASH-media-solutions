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
    <div ref={ref} className="relative w-24 h-24 mx-auto">
      {/* Base Circle */}
      <svg className="w-24 h-24 rotate-[-90deg]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="#0E2B2D" strokeWidth="10" fill="none" />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="#00D8FE"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: endValue / 100 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>

      {/* Percentage */}
      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#00D8FE]">
        {value}%
      </div>
    </div>
  );
}

export default function TrafficBoostSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#071414] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* ✅ LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#00D8FE] mb-6 leading-tight">
            Generate 100% Traffic <br /> On Your Website
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            We implement data-driven digital marketing strategies to drive consistent traffic,
            boost engagement, and maximize your brand’s visibility across Pakistan.
          </p>

          {/* Animated Circles */}
          <div className="flex flex-wrap gap-10 mb-12">
            <div className="text-center">
              <AnimatedCircle endValue={95} />
              <p className="mt-3 text-gray-400 font-medium">Client Satisfied</p>
            </div>

            <div className="text-center">
              <AnimatedCircle endValue={90} />
              <p className="mt-3 text-gray-400 font-medium">Finance Consulting</p>
            </div>
          </div>

          {/* Contact Row */}
          <div className="flex flex-wrap items-center gap-6">
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
                <p className="text-white font-medium">+92 302 9358220</p>
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
          className="bg-[#0B1A1A] rounded-3xl border border-[#00444F]/40 p-10"
        >
          <h3 className="text-2xl font-bold text-[#00D8FE] mb-8">Our Benefits</h3>

          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="bg-[#00D8FE] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <FaBullhorn className="text-black text-lg" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Powerful Ad Campaigns
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We create ROI-focused campaigns through PPC, social media, and performance marketing that deliver measurable impact.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-[#00D8FE] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <FaChartLine className="text-black text-lg" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Drive Website Traffic
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Boost your online presence with proven SEO, PPC, and content marketing strategies designed to convert visitors into leads.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
