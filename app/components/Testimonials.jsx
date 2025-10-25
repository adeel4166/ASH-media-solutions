"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Saud Parkeh",
    review:
      "Working with ASH Media Solutions has been an amazing experience. Their professionalism and commitment to excellence are unmatched.",
  },
  {
    name: "Taimoor Malik",
    review:
      "Excellent digital marketing services! Our engagement rates doubled within a few months. Highly recommended!",
  },
  {
    name: "Deeja Ali",
    review:
      "ASH Media handled our campaigns with transparency and creativity. I truly appreciate their dedication.",
  },
  {
    name: "Adeel Khan",
    review:
      "Our website redesign by ASH Media boosted conversions dramatically. They really understand modern UX and SEO.",
  },
  {
    name: "Hassan Raza",
    review:
      "Professional, skilled, and always on time. The team delivers measurable results that exceed expectations.",
  },
  {
    name: "Maha Fatima",
    review:
      "The branding strategy they built for us transformed our company image completely. So grateful for their insight!",
  },
  {
    name: "Ali Rehman",
    review:
      "From PPC to web development, everything was handled smoothly. They’re easily one of the best agencies in Lahore.",
  },
  {
    name: "Sana Qureshi",
    review:
      "Love how data-driven their approach is. We’ve seen real, trackable growth in traffic and sales.",
  },
  {
    name: "Usman Tariq",
    review:
      "Their attention to detail and customer satisfaction is next level. ASH Media is my go-to for all digital needs.",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visible = Array.from({ length: itemsToShow }).map(
    (_, i) => testimonials[(startIndex + i) % testimonials.length]
  );

  return (
    <section className="pt-20 pb-0 bg-[#071414] text-white relative overflow-hidden">
      {/* ✅ Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00D8FE]">
          Our Testimonials
        </h2>
        <p className="text-gray-400 mt-2">
          Hear from our valued clients about their experience with{" "}
          <span className="text-[#00D8FE] font-medium">
            ASH Media Solutions
          </span>.
        </p>
      </div>

      {/* ✅ Testimonials Row */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        <motion.div
          key={startIndex}
          initial={{ x: 0 }}
          animate={{ x: "-33.333%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex gap-8"
        >
          {[...visible, testimonials[(startIndex + itemsToShow) % testimonials.length]].map(
            (t, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-1/3 bg-[#0A0A0A]/80 border border-[#00444F]/30 
                           rounded-3xl p-8 text-center transition-transform duration-300 
                           hover:scale-[1.02]"
              >
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} className="text-yellow-400 text-lg" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-300 italic leading-relaxed mb-4">
                  “{t.review}”
                </p>

                {/* Name */}
                <h3 className="text-[#00D8FE] font-semibold text-lg">{t.name}</h3>
              </motion.div>
            )
          )}
        </motion.div>
      </div>

      {/* ✅ Navigation Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setStartIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              i === startIndex ? "bg-[#00D8FE]" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>

      {/* ✅ Divider Line (clean + thin) */}
      <div className="mt-12 h-[1px] w-full bg-[#00D8FE]/10"></div>
    </section>
  );
}
