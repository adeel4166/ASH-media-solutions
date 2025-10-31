"use client";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Mudassir Javed",
    review:
      "We hired ASH Media Solutions for lead generation through Facebook and Google Ads. I was surprised to see genuine inquiries and real conversions.",
  },
  {
    name: "Fida Hussain",
    review:
      "ASH Media is a vibrant, modern agency that inspires creativity and productivity. Stylish, intelligent, and full of energy.",
  },
  {
    name: "Zeeshan Ameer",
    review:
      "From SEO to social media, they handled everything with care. Highly recommended!",
  },
  {
    name: "Hassan Raza",
    review:
      "Professional, skilled, and always on time. The team delivers measurable results that exceed expectations.",
  },
  {
    name: "Sana Qureshi",
    review:
      "Love how data-driven their approach is. We’ve seen real, trackable growth in traffic and sales.",
  },
  {
    name: "Adeel Khan",
    review:
      "Our website redesign by ASH Media boosted conversions dramatically. They really understand modern UX and SEO.",
  },
];

export default function Testimonials() {
  return (
    <section className="pt-20 pb-16 bg-[#071414] text-white font-[Arial,Helvetica,sans-serif] relative overflow-hidden">
      {/* ✅ Heading */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00D8FE] leading-snug tracking-tight uppercase">
          Our Testimonials
        </h2>
        <p className="text-gray-300 mt-3 text-[17px] max-w-3xl mx-auto leading-relaxed font-normal">
          Hear from our valued clients about their experience with{" "}
          <span className="text-[#00D8FE] font-semibold">
            ASH Media Solutions
          </span>
          .
        </p>
      </div>

      {/* ✅ Auto-scrolling Testimonials */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 45,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[370px] md:w-[400px] bg-[#0E1E1E] border border-[#093333]
                         rounded-2xl p-8 text-left hover:-translate-y-[3px] transition-transform duration-300"
            >
              {/* ⭐ Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <FaStar key={j} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* 💬 Review */}
              <p className="text-gray-300 text-[15px] leading-relaxed mb-5 font-normal">
                “{t.review}”
              </p>

              {/* 👤 Name */}
              <h3 className="text-[#00D8FE] font-semibold text-[16px] tracking-wide uppercase">
                {t.name}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ✅ Divider */}
      <div className="mt-14 h-[1px] w-full bg-[#00D8FE]/15"></div>
    </section>
  );
}
