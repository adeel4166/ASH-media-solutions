"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-[#000] text-white relative overflow-hidden">
      {/* Background tone */}
      <div className="absolute inset-0 bg-[#001F22]/60 -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* ✅ LEFT SIDE — STAGGERED IMAGES LIKE REFERENCE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center md:justify-start items-center gap-6"
        >
          {/* Left Image (slightly lower) */}
          <div className="rounded-3xl overflow-hidden shadow-lg w-56 h-72 md:w-64 md:h-80 mt-10">
            <Image
              src="/person1.jpg"
              alt="Team member smiling"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Image (slightly higher) */}
          <div className="rounded-3xl overflow-hidden shadow-lg w-56 h-72 md:w-64 md:h-80 -mt-10">
            <Image
              src="/person2.jpg"
              alt="Team working together"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          {/* ✅ Orange Experience Box — Overlapping Center */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
                       bg-[#FF6A00] px-8 py-5 rounded-2xl shadow-[0_0_20px_#ff6a0040]"
          >
            <p className="text-center text-white font-bold leading-tight">
              <span className="text-4xl font-extrabold block">20</span>
              Years Of <br /> Experience
            </p>
          </motion.div>
        </motion.div>

        {/* ✅ RIGHT SIDE — TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 md:pl-8"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#00D8FE] leading-tight">
            Why ASH Media Solutions?
          </h2>

          <p className="text-gray-300 leading-relaxed">
            As a trusted digital marketing agency in Pakistan,{" "}
            <span className="text-[#00D8FE] font-semibold">
              ASH MEDIA SOLUTIONS
            </span>{" "}
            provides professional web design, SEO, PPC, and social media
            marketing services nationwide. Our expert team crafts data-driven
            strategies that deliver measurable growth for your brand.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-[#00D8FE] text-black font-semibold 
                       px-6 py-3 rounded-full shadow-[0_0_15px_#00D8FE60] hover:shadow-[0_0_25px_#00D8FE90] 
                       transition-all duration-300"
          >
            <FaPhoneAlt className="text-lg" />
            Contact Us Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
