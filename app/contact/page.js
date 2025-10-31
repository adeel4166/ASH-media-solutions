"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-[#071414] text-gray-200 min-h-screen font-sans">
      {/* ✅ Navbar */}
      <Navbar />

      {/* 🌄 HERO SECTION — Clean, Edge-to-Edge */}
      <section className="relative flex items-center justify-center text-center border-b border-[#00444F]/40">
        <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh]">
          <Image
            src="/contact.jpg"
            alt="Contact ASH Media Solutions"
            fill
            sizes="100vw"
            priority
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* 📞 CONTACT SECTION — Fully Responsive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 flex flex-col lg:grid lg:grid-cols-3 gap-10 md:gap-14">
        {/* LEFT SIDE — INFO */}
        <div className="col-span-2 space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00D8FE] tracking-tight leading-snug"
          >
            Let’s Grow Your Brand — Locally & Globally
          </motion.h2>

          <p className="text-gray-300 text-[16px] sm:text-[17px] leading-relaxed max-w-2xl">
            Partner with{" "}
            <span className="text-[#00D8FE] font-semibold">
              ASH MEDIA SOLUTIONS
            </span>{" "}
            to strengthen your digital presence. We help your brand connect with
            audiences and scale through creativity and innovation.
          </p>

          {/* CONTACT BOXES */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mt-10">
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Office",
                desc: (
                  <>
                    E8 Plaza Commercial Block, <br />
                    Near Shaheen Block, Chinar Bagh, <br />
                    Raiwind Road, Lahore, Pakistan
                  </>
                ),
              },
              { icon: <FaPhoneAlt />, title: "Phone", desc: "+92 347 7858316" },
              {
                icon: <FaEnvelope />,
                title: "Email",
                desc: "ashmediasolutions01@gmail.com",
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
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-5 sm:p-6 bg-[#041010] border border-[#00444F]/50 rounded-2xl 
                           transition-all duration-300 hover:border-[#00D8FE] w-full"
              >
                <div className="text-[#00D8FE] text-3xl mb-3 sm:mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#00D8FE] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed">
                  {item.desc}
                </p>
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
          className="bg-[#041010] w-full mt-12 lg:mt-0 p-5 sm:p-6 md:p-8 rounded-2xl 
                     border border-[#00444F]/50 shadow-md mx-auto max-w-md lg:max-w-full"
        >
          <h3 className="text-2xl font-bold text-[#00D8FE] mb-6 tracking-tight text-center sm:text-left">
            Drop A Line
          </h3>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-[#00444F]/60 
                         text-white focus:border-[#00D8FE] outline-none transition-all text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-[#00444F]/60 
                         text-white focus:border-[#00D8FE] outline-none transition-all text-sm sm:text-base"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-[#00444F]/60 
                         text-white focus:border-[#00D8FE] outline-none transition-all text-sm sm:text-base resize-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-md font-semibold bg-[#00D8FE] text-black 
                         transition-all duration-300 hover:bg-[#00bfe4] text-sm sm:text-base"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </section>

      {/* 🗺️ MAP SECTION — Updated Embed */}
      <div className="w-full h-[400px] border-t border-[#00444F]/40">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.480537943327!2d74.2447!3d31.3229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919ab57b307efcf%3A0x5182fb70cc0f4fb6!2sASH%20Media%20Solutions!5e0!3m2!1sen!2s!4v1730378142780!5m2!1sen!2s"
          className="w-full h-full border-none"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* ✅ Footer */}
      <Footer />
    </main>
  );
}
