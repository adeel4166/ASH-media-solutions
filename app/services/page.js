"use client";
import { motion } from "framer-motion";
import {
  FaPenNib,
  FaLaptopCode,
  FaMousePointer,
} from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import { MdDesignServices, MdOutlineTrendingUp } from "react-icons/md";
import { TbWorldShare } from "react-icons/tb";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Social Media Marketing",
      icon: <HiSpeakerphone className="text-4xl text-[#00D8FE]" />,
      features: [
        "Facebook & Instagram Ads",
        "YouTube Channel Management",
        "Brand Awareness Campaigns",
        "Community Engagement Strategy",
      ],
    },
    {
      title: "Content Marketing",
      icon: <FaPenNib className="text-4xl text-[#00D8FE]" />,
      features: [
        "SEO Copywriting",
        "Email Marketing",
        "Video Script Writing",
        "Blog & Article Campaigns",
      ],
    },
    {
      title: "Web Design & Development",
      icon: <FaLaptopCode className="text-4xl text-[#00D8FE]" />,
      features: [
        "Responsive Web Design",
        "E-Commerce Development",
        "SEO Integration",
        "Maintenance & Optimization",
      ],
    },
    {
      title: "Pay Per Click Advertising",
      icon: <MdOutlineTrendingUp className="text-4xl text-[#00D8FE]" />,
      features: [
        "Google & Meta Ads",
        "ROI-driven Campaigns",
        "Keyword Research",
        "Performance Analytics",
      ],
    },
    {
      title: "Graphics & Video Editing",
      icon: <MdDesignServices className="text-4xl text-[#00D8FE]" />,
      features: [
        "Brand Identity Design",
        "Logo & Poster Creation",
        "Reels & YouTube Editing",
        "Motion Graphics Animation",
      ],
    },
    {
      title: "Amazon Marketplace Services",
      icon: <TbWorldShare className="text-4xl text-[#00D8FE]" />,
      features: [
        "Amazon FBA Management",
        "PPC Campaign Optimization",
        "Product Listing SEO",
        "Brand Store Setup",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Strategy",
      desc: "We understand your brand and goals to design a tailored digital growth plan.",
      icon: <MdOutlineTrendingUp className="text-3xl text-[#00D8FE]" />,
    },
    {
      step: "02",
      title: "Design",
      desc: "We craft engaging visuals and interfaces that reflect your brand’s personality.",
      icon: <MdDesignServices className="text-3xl text-[#00D8FE]" />,
    },
    {
      step: "03",
      title: "Execution",
      desc: "From campaigns to websites — we implement with precision and consistency.",
      icon: <FaMousePointer className="text-3xl text-[#00D8FE]" />,
    },
    {
      step: "04",
      title: "Results",
      desc: "We track, optimize, and scale results for continuous business success.",
      icon: <TbWorldShare className="text-3xl text-[#00D8FE]" />,
    },
  ];

  return (
    <main className="bg-[#071414] text-gray-300 transition-colors duration-500 min-h-screen font-[Poppins]">
      <Navbar />

      {/* 🌟 HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/services-hero.jpg"
          alt="Our Services - ASH Media Solutions"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-[#071414]/85" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-[Amsterdam4] text-[#00D8FE] mb-4">
            Our Services
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Empower your business with powerful digital solutions crafted by{" "}
            <span className="text-[#00D8FE] font-medium">ASH MEDIA SOLUTIONS</span>.
          </p>
        </motion.div>
      </section>

      {/* 🧩 SERVICES GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-[Amsterdam4] text-[#00D8FE] mb-3">
            What We Offer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our data-driven digital and creative solutions designed to
            grow your business online.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group rounded-2xl p-10 border border-[#00444F]/30 bg-[#041010]
                         transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 mb-6"
              >
                {service.icon}
                <h3 className="text-2xl font-[Amsterdam4] text-[#00D8FE]">
                  {service.title}
                </h3>
              </motion.div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-gray-300 text-[15px]"
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
                className="block w-full text-center py-2.5 rounded-full border
                           border-[#00D8FE] text-[#00D8FE] font-semibold
                           hover:bg-[#00D8FE] hover:text-black
                           transition-all duration-300"
              >
                Get a Quote →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⚙️ HOW WE WORK SECTION */}
      <section className="py-24 px-6 bg-[#041010] border-t border-[#00444F]/30">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-[Amsterdam4] text-[#00D8FE] mb-3"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We believe in simplicity, transparency, and results — every step of
            our process delivers measurable value.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {process.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl border border-[#00444F]/30
                         bg-[#071414] transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex justify-center mb-5">{item.icon}</div>
              <h3 className="text-2xl font-[Amsterdam4] text-[#00D8FE] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
              <span className="absolute top-4 left-5 text-[#00D8FE]/15 text-5xl font-[Amsterdam4] select-none">
                {item.step}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
