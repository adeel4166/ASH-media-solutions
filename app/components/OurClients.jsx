"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/clients/1.jpeg",
  "/clients/2.jpeg",
  "/clients/3.jpeg",
  "/clients/4.jpeg",
  "/clients/5.jpeg",
  "/clients/6.jpeg",
  "/clients/7.jpeg",
  "/clients/8.jpeg",
  "/clients/9.jpeg",
  "/clients/10.jpeg",
  "/clients/11.jpeg",
  "/clients/12.jpeg",
  "/clients/13.jpeg",
  "/clients/14.jpeg",
  "/clients/15.jpeg",
];

export default function OurClients() {
  return (
    <section className="py-20 bg-[#071414] relative overflow-hidden">
      {/* ✅ Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00D8FE]">
          Our Clients
        </h2>
        <p className="text-gray-400 mt-2">
          Trusted by industry leaders and growing brands worldwide.
        </p>
      </div>

      {/* ✅ Smooth Scrolling Logos */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-20 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 md:w-48 lg:w-52 flex items-center justify-center p-4
                         bg-transparent hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-24 md:h-28">
                <Image
                  src={logo}
                  alt={`Client logo ${i}`}
                  fill
                  sizes="(max-width: 768px) 100px, 200px"
                  className="object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ✅ Divider line (soft, theme-based) */}
      <div className="mt-16 h-[1px] w-full bg-[#00D8FE]/15"></div>
    </section>
  );
}
