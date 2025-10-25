"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function TeamPage() {
  const team = [
    { name: "Javed Iqbal", role: "Managing Director", img: "/team/javed.jpg" },
    { name: "Muhammad Ali", role: "Manager", img: "/team/ali.jpg" },
    { name: "Faisal Iftikhar", role: "Senior Graphic Designer", img: "/team/faisal.jpg" },
    { name: "Hassan Raza", role: "Content Strategist", img: "/team/hassan.jpg" },
    { name: "Taimoor Malik", role: "Marketing Executive", img: "/team/taimoor.jpg" },
    { name: "Maha Fatima", role: "Social Media Manager", img: "/team/maha.jpg" },
  ];

  return (
    <main className="bg-[#071414] text-gray-300 min-h-screen transition-colors duration-500 font-[Poppins]">
      <Navbar />

      {/* 🌄 HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/adeel.jpg"
          alt="Our Team"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-[#071414]/85" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 text-5xl md:text-6xl font-[Amsterdam4] text-[#00D8FE]"
        >
          Our Team
        </motion.h1>
      </section>

      {/* 👥 TEAM SECTION */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-[Amsterdam4] text-[#00D8FE] mb-3">
            Meet Our Professionals
          </h2>
          <p className="text-gray-400">
            The creative individuals driving success at{" "}
            <span className="text-[#00D8FE] font-medium">ASH Media Solutions</span>.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="rounded-xl border border-[#00444F]/40 bg-[#041010]
                         overflow-hidden transition-all duration-300"
            >
              {/* IMAGE SECTION */}
              <div className="relative w-full h-[400px] overflow-hidden">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* MEMBER NAME */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute bottom-[70px] left-1/2 -translate-x-1/2 text-white text-xl font-semibold"
                >
                  {member.name}
                </motion.h3>
              </div>

              {/* ROLE BAR */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#00D8FE] py-4 text-center"
              >
                <p className="text-black text-base font-semibold tracking-wide">
                  {member.role}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
