"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-20 px-6 bg-[#071414] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* ✅ LEFT SIDE — Animated Images */}
        <div className="relative flex justify-center md:justify-start items-center gap-6">
          {/* Left Image — comes from left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 mt-10"
          >
            <Image
              src="/person1.jpg"
              alt="Team member smiling"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Right Image — comes from bottom */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 -mt-10"
          >
            <Image
              src="/person2.jpg"
              alt="Team working together"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* ✅ Experience Box — Static, same position as reference */}
          <div
            className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
                       bg-[#00D8FE] text-black font-bold px-8 py-5 rounded-2xl"
          >
            <p className="text-center leading-tight">
              <span className="text-4xl font-extrabold block">20</span>
              Years Of <br /> Experience
            </p>
          </div>
        </div>

        {/* ✅ RIGHT SIDE — Text Content */}
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
                       px-6 py-3 rounded-full hover:bg-[#00bfe4] transition-all duration-300"
          >
            <FaPhoneAlt className="text-lg" />
            Contact Us Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
