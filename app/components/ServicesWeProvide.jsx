"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaPenNib,
  FaLaptopCode,
  FaMousePointer,
  FaVideo,
  FaAmazon,
} from "react-icons/fa";

export default function ServicesWeProvide() {
  const services = [
    {
      icon: <FaFacebookF className="text-[#00D8FE] text-2xl" />,
      title: "Social Media Marketing",
      desc: "We grow your brand through strategic management on Facebook, Instagram, YouTube, and LinkedIn — driving engagement and reach that convert.",
    },
    {
      icon: <FaPenNib className="text-[#00D8FE] text-2xl" />,
      title: "Content Marketing",
      desc: "Our content marketing experts craft SEO-optimized blogs, email campaigns, and ad copywriting that attract and engage your audience.",
    },
    {
      icon: <FaLaptopCode className="text-[#00D8FE] text-2xl" />,
      title: "Web Design & Development",
      desc: "We build responsive, UX-optimized websites tailored to boost engagement, conversions, and brand credibility.",
    },
    {
      icon: <FaMousePointer className="text-[#00D8FE] text-2xl" />,
      title: "Pay Per Click Marketing",
      desc: "From Google Ads to Facebook campaigns, we manage targeted PPC strategies that deliver measurable ROI for your business.",
    },
    {
      icon: <FaVideo className="text-[#00D8FE] text-2xl" />,
      title: "Graphics & Video Editing",
      desc: "We produce professional graphics and videos using Adobe Premiere, After Effects, and Photoshop — bringing your vision to life.",
    },
    {
      icon: <FaAmazon className="text-[#00D8FE] text-2xl" />,
      title: "Amazon Market Place",
      desc: "We provide Amazon FBA, PPC, and storefront management services to grow your brand across global markets.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-transparent relative overflow-hidden">
      {/* ✅ Background perfectly matching WhyChooseUs */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001F22] via-[#000A0A] to-[#000] opacity-90 -z-10" />

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#00D8FE] mb-3">
          Services We Provide
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Contact us for customized digital marketing solutions tailored to your
          business goals and market needs.
        </p>
      </motion.div>

      {/* Service grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 bg-[#0a0a0a]/70 rounded-2xl border border-[#00444F]/40 
                       shadow-md hover:shadow-[0_0_25px_#00D8FE40] hover:border-[#00D8FE]/60 
                       transition-all duration-300 backdrop-blur-sm"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-14 h-14 mb-6 mx-auto rounded-full 
                            bg-gradient-to-r from-[#00444F] to-[#00D8FE] 
                            shadow-[0_0_10px_#00D8FE60]">
              {service.icon}
            </div>

            {/* Title */}
            <h3
              className="text-xl font-semibold text-white mb-3 text-center relative inline-block 
                         after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#00D8FE] 
                         after:transition-all after:duration-300 group-hover:after:w-full mx-auto"
            >
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed text-center">
              {service.desc}
            </p>

            {/* Hover underline divider */}
            <motion.div
              whileHover={{ scaleX: 1 }}
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 h-[1px] origin-left bg-gradient-to-r 
                         from-transparent via-[#00D8FE40] to-transparent scale-x-0 
                         group-hover:scale-x-100 transition-transform duration-500"
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
