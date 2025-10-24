"use client";
import Navbar from"./components/Navbar";
import HeroSlider from"./components/HeroSlider";
import WhyChooseUs from "./components/WhyChooseUs";
import ServicesWeProvide from "./components/ServicesWeProvide";

import FixedBackgroundSection from "./components/FixedBackgroundSection";
import TrafficBoostSection from "./components/TrafficBoostSection";
import CompletedStories from "./components/CompletedStories";
import OurClients from "./components/OurClients";
import Testimonials from"./components/Testimonials";
import Footer from "./components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaShoppingCart, FaLaptopCode } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO SLIDER */}
      <div className="mb-0">
        <HeroSlider />
      </div>

    
      {/* ✅ SERVICES SECTION (Rounded + Animated + Side Icons) */}
<section className="py-20 px-6 bg-transparent">
  <div className="max-w-6xl mx-auto text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-[#00D8FE] mb-4">
      Our Core Services
    </h2>
    <p className="text-gray-400 max-w-2xl mx-auto">
      We help businesses grow with digital marketing, web design, and branding solutions that deliver results.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
    {[
      {
        icon: <FaFacebookF className="text-white text-2xl" />,
        title: "Social Media Marketing",
        desc: "Boost your brand’s online presence with expert-led social media marketing strategies that engage and convert.",
      },
      {
        icon: <FaShoppingCart className="text-white text-2xl" />,
        title: "E-commerce Marketing",
        desc: "We analyze market trends and consumer behavior to drive traffic, increase conversions, and grow your online store.",
      },
      {
        icon: <FaLaptopCode className="text-white text-2xl" />,
        title: "Web Design & Development",
        desc: "We craft responsive, user-focused websites that drive results and enhance digital experiences.",
      },
    ].map((service, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: i * 0.2 }}
        viewport={{ once: true }}
        className="flex items-start gap-5 p-8 bg-[#0a0a0a]/70 
                   rounded-[30px] border border-[#00444F]/60 shadow-lg 
                   hover:shadow-[0_0_25px_#00D8FE40] hover:border-[#00D8FE]/60 
                   transition-all duration-300 backdrop-blur-sm"
      >
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full 
                        bg-gradient-to-r from-[#00444F] to-[#00D8FE] flex-shrink-0 
                        shadow-[0_0_10px_#00D8FE60]">
          {service.icon}
        </div>

        {/* Text */}
        <div className="text-left">
          <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
          <p className="text-gray-400 leading-relaxed">{service.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      <WhyChooseUs />
      <ServicesWeProvide />
      <FixedBackgroundSection />
      <TrafficBoostSection />
      <CompletedStories />
      <OurClients />
      <Testimonials />

      <Footer />
    </>
  );
}
