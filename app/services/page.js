"use client";
import { motion } from "framer-motion";
import {
  FaPenFancy,
  FaCode,
  FaBullhorn,
  FaVideo,
  FaAmazon,
  FaMousePointer,
} from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Social Media Marketing",
      icon: <FaBullhorn className="text-4xl text-[#00D8FE]" />,
      features: [
        "Facebook & Instagram Ads",
        "YouTube Channel Management",
        "Brand Awareness Campaigns",
        "Community Engagement Strategy",
      ],
    },
    {
      title: "Content Marketing",
      icon: <FaPenFancy className="text-4xl text-[#00D8FE]" />,
      features: [
        "SEO Copywriting",
        "Email Marketing",
        "Video Script Writing",
        "Blog & Article Campaigns",
      ],
    },
    {
      title: "Web Design & Development",
      icon: <FaCode className="text-4xl text-[#00D8FE]" />,
      features: [
        "Responsive Web Design",
        "E-Commerce Development",
        "SEO Integration",
        "Maintenance & Optimization",
      ],
    },
    {
      title: "Pay Per Click Advertising",
      icon: <FaMousePointer className="text-4xl text-[#00D8FE]" />,
      features: [
        "Google & Meta Ads",
        "ROI-driven Campaigns",
        "Keyword Research",
        "Performance Analytics",
      ],
    },
    {
      title: "Graphics & Video Editing",
      icon: <FaVideo className="text-4xl text-[#00D8FE]" />,
      features: [
        "Brand Identity Design",
        "Logo & Poster Creation",
        "Reels & YouTube Editing",
        "Motion Graphics Animation",
      ],
    },
    {
      title: "Amazon Marketplace Services",
      icon: <FaAmazon className="text-4xl text-[#00D8FE]" />,
      features: [
        "Amazon FBA Management",
        "PPC Campaign Optimization",
        "Product Listing SEO",
        "Brand Store Setup",
      ],
    },
  ];

  return (
    <main className="bg-[#071414] text-gray-300 min-h-screen transition-colors duration-500 font-sans">
      <Navbar />

      {/* 🌟 HERO SECTION — Full-width, no gaps */}
      <section className="relative w-full overflow-hidden border-b border-[#00444F]/40">
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]">
          <Image
            src="/service1.jpg"
            alt="Our Services - ASH Media Solutions"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center w-full h-full"
          />
        </div>
      </section>

      {/* 🧩 SERVICES GRID */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00D8FE] mb-3 tracking-tight">
            What We Offer
          </h2>
          <p className="text-gray-400 text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed">
            Explore our data-driven digital and creative solutions designed to
            grow your business online.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, borderColor: "#00D8FE" }}
              className="group rounded-2xl p-8 sm:p-10 border border-[#00444F]/30 bg-[#041010] 
                         transition-all duration-300 hover:shadow-[0_0_15px_#00D8FE33]"
            >
              <div className="flex items-center gap-4 mb-6">
                {service.icon}
                <h3 className="text-xl sm:text-2xl font-bold text-[#00D8FE] tracking-tight">
                  {service.title}
                </h3>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-gray-300 text-[14px] sm:text-[15px] leading-relaxed"
                  >
                    <BsCheckCircleFill className="text-[#00D8FE] text-base" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="block w-full text-center py-2.5 sm:py-3 rounded-full border border-[#00D8FE] 
                           text-[#00D8FE] font-semibold hover:bg-[#00D8FE] hover:text-black transition-all duration-300"
              >
                Get a Quote →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
