"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function TeamPage() {
  const team = [
    { name: "Areej Fatima", role: "Senior Graphic Designer", img: "/areej.jpeg" },
    { name: "Shehryar Khan", role: "Senior Video Editor", img: "/shery.jpeg" },
    { name: "Aftab Ahmed", role: "Senior Project Manager", img: "/aftab.jpeg" },
    { name: "Umair Tahir", role: "Video Editor", img: "/umair.jpeg" },
    { name: "Ahtesham-ul-Haq", role: "Social Media Manager", img: "/shami.jpeg" },
    { name: "Adeel Ahmad", role: "Web Developer", img: "/adeel1.jpeg" },
  ];

  return (
    <main className="bg-[#071414] text-gray-300 min-h-screen font-sans">
      <Navbar />

      {/* 🌄 HERO SECTION — Fixed (no auto zoom or crop) */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-[#00444F]/40">
        <div className="absolute inset-0">
          <Image
            src="/team1.jpg"
            alt="Our Team"
            fill
            sizes="100vw"
            priority
            className="w-full h-full object-center sm:object-cover object-contain transition-none"
          />
        </div>

       
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#00D8FE] mb-3">
            Meet Our Professionals
          </h2>
          <p className="text-gray-400 text-[17px] leading-relaxed">
            The creative individuals driving success at{" "}
            <span className="text-[#00D8FE] font-semibold">
              ASH Media Solutions
            </span>.
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
              className="rounded-xl border border-[#00444F]/40 bg-[#041010] overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_#00D8FE33]"
            >
              {/* IMAGE SECTION */}
              <div className="relative w-full h-[400px] overflow-hidden group">
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={600}
                    height={800}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
              </div>

              {/* BOX BELOW IMAGE */}
              <div className="bg-[#0C1C1C] py-5 text-center border-t border-[#00444F]/40">
                <h3 className="text-[#00D8FE] text-xl font-bold mb-1 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
