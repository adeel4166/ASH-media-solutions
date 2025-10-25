"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-[#071414] text-gray-200 min-h-screen font-[Poppins]">
      {/* ✅ Navbar */}
      <Navbar />

      {/* 🖼️ HERO SECTION */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden border-b border-[#00444F]/40">
        <Image
          src="/contact.jpg"
          alt="Contact ASH Media Solutions"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-[#071414]/85" />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-6xl font-[Amsterdam4] text-[#00D8FE]"
        >
          Contact Us
        </motion.h1>
      </section>

      {/* 📞 CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-14">
        {/* LEFT SIDE — DETAILS */}
        <div className="col-span-2 space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-[Amsterdam4] text-[#00D8FE]"
          >
            Let’s Grow Your Brand — Locally & Globally
          </motion.h2>

          <p className="text-gray-400 leading-relaxed max-w-2xl">
            Partner with{" "}
            <span className="text-[#00D8FE] font-semibold">
              ASH MEDIA SOLUTIONS
            </span>{" "}
            to strengthen your digital presence. We help your brand connect with
            audiences and scale through creativity and innovation.
          </p>

          {/* CONTACT BOXES */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Office",
                desc: "Office #42, Block D-3, Engineering Town, Lahore",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Phone",
                desc: "+92 302 9358220",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                desc: "info@ashmediasolutions.com",
              },
              {
                icon: <FaClock />,
                title: "Working Hours",
                desc: (
                  <>
                    Monday – Friday <br /> 9:00 AM – 6:00 PM
                  </>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#041010] border border-[#00444F]/50 rounded-2xl transition-all duration-300"
              >
                <div className="text-[#00D8FE] text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#00D8FE]">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#041010] p-8 rounded-2xl border border-[#00444F]/50"
        >
          <h3 className="text-2xl font-[Amsterdam4] text-[#00D8FE] mb-6">
            Drop A Line
          </h3>
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-[#00444F]/60 text-white focus:border-[#00D8FE] outline-none transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-[#00444F]/60 text-white focus:border-[#00D8FE] outline-none transition-all"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-[#00444F]/60 text-white focus:border-[#00D8FE] outline-none transition-all"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-md font-semibold bg-[#00D8FE] text-black transition-all duration-300"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </section>

      {/* 🗺️ MAP SECTION */}
      <div className="w-full h-[400px] border-t border-[#00444F]/40">
        <iframe
          src="https://www.google.com/maps?q=Engineering%20Town%20Lahore&output=embed"
          className="w-full h-full border-none"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* ✅ Footer */}
      <Footer />
    </main>
  );
}
