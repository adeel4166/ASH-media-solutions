"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-[#000] text-white min-h-screen">
      {/* ✅ Navbar */}
      <Navbar />

      {/* 🖼️ Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden border-b border-[#00444F]/50">
        <Image
          src="/contact.jpg"
          alt="Contact ASH Media Solutions"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001F22]/70 via-[#001314]/70 to-[#000]/90" />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-5xl md:text-6xl font-extrabold text-[#00D8FE]"
        >
          Contact Us
        </motion.h1>
      </section>

      {/* 📞 Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-14">
        {/* Left Content */}
        <div className="col-span-2 space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-[#00D8FE]"
          >
            Let’s Grow Your Brand — Locally & Globally
          </motion.h2>

          <p className="text-gray-300 leading-relaxed max-w-2xl">
            Partner with{" "}
            <span className="text-[#00D8FE] font-semibold">
              ASH MEDIA SOLUTIONS
            </span>{" "}
            to strengthen your digital presence. We help your brand connect with
            your audience and scale globally through innovation and creativity.
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Office */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-[#001314] border border-[#00444F]/60 rounded-2xl shadow-[0_0_15px_#00D8FE20] hover:shadow-[0_0_25px_#00D8FE50] transition-all duration-300"
            >
              <FaMapMarkerAlt className="text-[#00D8FE] text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#00D8FE]">
                Office
              </h3>
              <p className="text-gray-400">
                Office #42, Block D-3, Engineering Town, Lahore
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-[#001314] border border-[#00444F]/60 rounded-2xl shadow-[0_0_15px_#00D8FE20] hover:shadow-[0_0_25px_#00D8FE50] transition-all duration-300"
            >
              <FaPhoneAlt className="text-[#00D8FE] text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#00D8FE]">
                Phone
              </h3>
              <p className="text-gray-400">+92 302 9358220</p>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-[#001314] border border-[#00444F]/60 rounded-2xl shadow-[0_0_15px_#00D8FE20] hover:shadow-[0_0_25px_#00D8FE50] transition-all duration-300"
            >
              <FaEnvelope className="text-[#00D8FE] text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#00D8FE]">
                Email
              </h3>
              <p className="text-gray-400">info@ashmediasolutions.com</p>
            </motion.div>

            {/* Hours */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-[#001314] border border-[#00444F]/60 rounded-2xl shadow-[0_0_15px_#00D8FE20] hover:shadow-[0_0_25px_#00D8FE50] transition-all duration-300"
            >
              <FaClock className="text-[#00D8FE] text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#00D8FE]">
                Working Hours
              </h3>
              <p className="text-gray-400">
                Monday – Friday <br /> 9:00 AM – 6:00 PM
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right — Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#001314] p-8 rounded-2xl border border-[#00444F]/60 shadow-[0_0_20px_#00D8FE20]"
        >
          <h3 className="text-2xl font-semibold text-[#00D8FE] mb-6">
            Drop A Line
          </h3>
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-[#000] border border-[#00444F]/50 text-white focus:border-[#00D8FE] outline-none transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-[#000] border border-[#00444F]/50 text-white focus:border-[#00D8FE] outline-none transition-all"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 rounded-md bg-[#000] border border-[#00444F]/50 text-white focus:border-[#00D8FE] outline-none transition-all"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-md font-semibold bg-[#00D8FE] text-black 
                         shadow-[0_0_20px_#00D8FE70] hover:shadow-[0_0_30px_#00D8FE] 
                         transition-all duration-300"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </section>

      {/* 📍 Map */}
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
