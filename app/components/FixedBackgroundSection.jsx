"use client";
import { motion } from "framer-motion";

export default function FixedBackgroundSection() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center text-center text-white 
                 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/fix1.jpg')", // 🔁 replace with your image path in /public
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#00D8FE] mb-6">
          Transforming Ideas Into Digital Success
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          At <span className="text-[#00D8FE] font-semibold">ASH Media Solutions</span>,
          we create timeless digital experiences that inspire action and elevate brands.
          Our creative vision and data-driven strategies ensure measurable results every time.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00444F] to-[#00D8FE] font-semibold text-white 
                             shadow-[0_0_25px_#00D8FE70] hover:shadow-[0_0_40px_#00D8FEA0] transition-all duration-300">
            Learn More
          </button>
          <button className="px-8 py-3 rounded-full border border-[#00D8FE] text-[#00D8FE] font-semibold 
                             hover:bg-[#00D8FE]/10 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </motion.div>
    </section>
  );
}
