"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  // ✅ Counter Animation
  const Counter = ({ target, label, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!isInView) return;
      let start = 0;
      const duration = 1500;
      const stepTime = 20;
      const step = target / (duration / stepTime);

      const counter = setInterval(() => {
        start += step;
        if (start >= target) {
          start = target;
          clearInterval(counter);
        }
        setValue(Math.floor(start));
      }, stepTime);

      return () => clearInterval(counter);
    }, [isInView, target]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="m-4 text-center flex flex-col items-center justify-center"
      >
        <h3 className="text-4xl font-bold text-[#00D8FE] tracking-tight">
          {value}
          <span className="text-[#00D8FE]">+</span>
        </h3>
        <p className="text-gray-300 mt-2 font-medium text-sm sm:text-base">
          {label}
        </p>
      </motion.div>
    );
  };

  return (
    <main className="bg-[#071414] text-gray-300 transition-colors duration-500 min-h-screen font-sans">
      <Navbar />

      {/* 🌄 HERO SECTION — Full bleed, zero top/bottom gap */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden border-b border-[#00444F]/40">
        <Image
          src="/about2.jpg"
          alt="About ASH Media Solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full"
        />
      </section>

      {/* 💼 BUSINESS GOALS SECTION */}
      <section className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00D8FE] mb-4 tracking-tight">
            Realize Your Business Goals for Maximum Profit
          </h2>
          <p className="text-gray-400 text-[15px] sm:text-[17px] leading-relaxed">
            We develop and execute strategic digital marketing plans aligned
            with your business goals — boosting growth, improving efficiency,
            and maximizing ROI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src="/team.jpg"
            alt="Team collaboration"
            width={700}
            height={500}
            className="object-cover w-full h-full rounded-3xl"
          />
        </motion.div>
      </section>

      {/* 📊 COUNTER SECTION */}
      <section className="bg-[#041010] border-t border-[#00444F]/30 py-12 sm:py-16 flex flex-wrap justify-center items-center text-center">
        <Counter target={140} label="Happy Customers" />
        <Counter target={150} label="Trusted Users" delay={0.1} />
        <Counter target={300} label="Positive Reviews" delay={0.2} />
        <Counter target={10} label="Awards Gained" delay={0.3} />
      </section>

      {/* 🎥 WHY WE’RE BEST SECTION */}
      <section className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src="/about/social.jpg"
            alt="Digital Marketing Agency"
            width={700}
            height={500}
            className="object-cover w-full h-full rounded-3xl"
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <button className="w-16 h-16 bg-[#00D8FE] text-black text-3xl rounded-full flex items-center justify-center shadow-lg">
              ▶
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00D8FE] mb-4 tracking-tight">
            Why We’re the Best Digital Marketing Agency in Lahore
          </h2>
          <p className="text-gray-400 text-[15px] sm:text-[17px] leading-relaxed">
            We stand out by combining innovative digital marketing strategies,
            data-driven insights, and personalized campaigns — delivering
            unmatched ROI and sustainable brand growth.
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
