"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FixedBackgroundSection() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center text-center 
                 bg-fixed bg-center bg-cover overflow-hidden
                 bg-[url('/fix1.jpg')]
                 text-white"
    >
      {/* ✅ Dark overlay for clarity */}
      <div className="absolute inset-0 bg-black/70" />

      {/* ✅ Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center max-w-4xl px-6"
      >
        {/* ✅ Company Logo */}
        <div className="mb-3">
          <Image
            src="/thursday.png" // replace with your logo
            alt="ASH Media Solutions"
            width={260}
            height={60}
            className="mx-auto object-contain"
          />
        </div>

        {/* ✅ Heading (exact reference layout) */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 leading-snug text-center">
          Ready to Work with a{" "}
          <span className="text-[#00D8FE] font-bold">
            Top Digital Marketing Company in Lahore
          </span>{" "}
          That Delivers Results?
        </h2>

        {/* ✅ Call-to-Action Button */}
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 bg-[#00D8FE] text-black font-semibold px-8 py-3 rounded-full 
                       transition-all duration-300"
          >
            Contact Us Now
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
