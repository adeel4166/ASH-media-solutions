"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 px-6 bg-[#071414] text-white font-[Arial,Helvetica,sans-serif] overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* ✅ LEFT IMAGES */}
        <div className="relative flex justify-center items-center gap-8">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96"
          >
            <Image
              src="/person1.jpg"
              alt="Team member smiling"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96"
          >
            <Image
              src="/person2.jpg"
              alt="Team working together"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* ✅ Experience Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-[#00D8FE] text-black text-center px-10 py-4 rounded-2xl shadow-lg"
          >
            <p className="leading-tight font-bold tracking-tight">
              <span className="text-5xl font-extrabold block">20</span>
              Years of <br /> Experience
            </p>
          </motion.div>
        </div>

        {/* ✅ RIGHT TEXT AREA */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:pl-6"
        >
          {/* ✅ One-line heading */}
          <h2 className="text-4xl md:text-[2.6rem] font-bold text-[#00D8FE] leading-tight tracking-tight whitespace-nowrap mb-2">
            Why ASH Media Solutions?
          </h2>

          <p className="text-gray-300 text-[17px] leading-relaxed max-w-[580px] mt-1">
            As a trusted digital marketing agency in Pakistan,{" "}
            <span className="text-[#00D8FE] font-bold">
              ASH MEDIA SOLUTIONS
            </span>{" "}
            provides expert services in web design, SEO, PPC, and social media
            marketing. Our experienced team crafts data-driven strategies
            that deliver measurable business growth.
          </p>

          {/* ✅ Button */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-[#00D8FE] text-black font-bold 
                       uppercase tracking-[1px] px-8 py-3 rounded-full hover:bg-[#00bfe4] 
                       transition-all duration-300 mt-6"
          >
            <FaPhoneAlt className="text-lg" />
            Contact Us Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
