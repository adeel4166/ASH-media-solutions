"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FixedBackgroundSection() {
  return (
    <section
      className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center
                 bg-fixed bg-center bg-cover overflow-hidden
                 bg-[url('/fix1.jpg')]
                 text-white font-[Poppins]"
    >
      {/* 🔹 Background Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 🔹 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center px-6"
      >
        {/* 🔹 Logo */}
        <div className="mb-15">
          <Image
            src="/logo1.png"
            alt="ASH Media Solutions"
            width={180}
            height={50}
            className="mx-auto object-contain"
            priority
          />
        </div>

        {/* 🔹 Heading (Single-line, Centered & Balanced Like Copper Orange Media) */}
        <h2
          className="text-[1.5rem] md:text-[1.9rem] lg:text-[2.2rem] xl:text-[1.8rem] font-bold leading-tight text-center 
               max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto tracking-wide whitespace-normal"
        >
          <span className="text-[#f3f8f9]">Ready to Work with a </span>
          <span className="text-white">
            Top Digital Marketing Company in Lahore That{" "}
          </span>
          <span className="text-[#e7e9ea]">Delivers Results?</span>
        </h2>

        {/* 🔹 Button */}
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-7 bg-[#00D8FE] text-black font-semibold text-[15px] px-8 py-2.5 rounded-full
                       hover:bg-[#00bfe4] transition-all duration-300 shadow-md"
          >
            Contact Us Now
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
