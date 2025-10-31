"use client";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import WhyChooseUs from "./components/WhyChooseUs";
import ServicesWeProvide from "./components/ServicesWeProvide";
import FixedBackgroundSection from "./components/FixedBackgroundSection";
import TrafficBoostSection from "./components/TrafficBoostSection";
import CompletedStories from "./components/CompletedStories";
import OurClients from "./components/OurClients";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { FaFacebookF, FaShoppingCart, FaLaptopCode } from "react-icons/fa";

export default function HomePage() {
  const services = [
    {
      icon: <FaFacebookF className="text-white text-xl" />,
      title: "Social Media Marketing",
      desc: "Boost your brand’s online presence with expert-led social media marketing solutions.",
      color: "#00D8FE",
    },
    {
      icon: <FaShoppingCart className="text-white text-xl" />,
      title: "E-commerce Marketing",
      desc: "We analyze market trends and consumer behavior to drive targeted traffic, boost conversions, and grow your online store.",
      color: "#00D8FE",
    },
    {
      icon: <FaLaptopCode className="text-white text-xl" />,
      title: "Web Design & Development",
      desc: "We craft responsive, user-focused websites by analyzing market trends and digital behavior to enhance UX and drive results.",
      color: "#00D8FE",
    },
  ];

  return (
    <>
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ HERO SECTION */}
      <div className="relative m-0 p-0">
        <HeroSlider />
      </div>

      {/* ✅ OUR CORE SERVICES */}
      <section
        id="core-services"
        className="pt-0 pb-20 px-6 bg-[#071414] transition-colors duration-500 font-[Arial,Helvetica,sans-serif]"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-[#0E1E1E] rounded-[40px] p-10 md:p-16 border border-[#093333]"
        >
          {/* ✅ Grid layout (3 equal columns) */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#093333]">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-row items-center gap-7 px-8 py-10"
              >
                {/* ✅ Icon */}
                <div
                  className="flex items-center justify-center w-[65px] h-[65px] rounded-full flex-shrink-0"
                  style={{ backgroundColor: service.color }}
                >
                  {service.icon}
                </div>

                {/* ✅ Text (Copper Orange Font System) */}
                <div className="text-left flex flex-col justify-center">
                  <h3
                    className="text-[23px] md:text-[25px] font-bold text-[#00D8FE]
                               leading-[1.15] mb-[6px] tracking-normal"
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-[15.5px] leading-relaxed font-normal max-w-[320px]">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ✅ OTHER SECTIONS */}
      <WhyChooseUs />
      <ServicesWeProvide />
      <FixedBackgroundSection />
      <TrafficBoostSection />
      <CompletedStories />
      <OurClients />
      <Testimonials />

      {/* ✅ FOOTER */}
      <Footer />
    </>
  );
}
