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
      icon: <FaFacebookF className="text-[#00D8FE] text-xl" />,
      title: "Social Media Marketing",
      desc: "We grow your brand through strategic management on Facebook, Instagram, YouTube, and LinkedIn — driving engagement and reach that convert.",
    },
    {
      icon: <FaPenNib className="text-[#00D8FE] text-xl" />,
      title: "Content Marketing",
      desc: "Our content marketing experts craft SEO-optimized blogs, email campaigns, and ad copywriting that attract and engage your audience.",
    },
    {
      icon: <FaLaptopCode className="text-[#00D8FE] text-xl" />,
      title: "Web Design & Development",
      desc: "We build responsive, UX-optimized websites tailored to boost engagement, conversions, and brand credibility.",
    },
    {
      icon: <FaMousePointer className="text-[#00D8FE] text-xl" />,
      title: "Pay Per Click Marketing",
      desc: "From Google Ads to Facebook campaigns, we manage targeted PPC strategies that deliver measurable ROI for your business.",
    },
    {
      icon: <FaVideo className="text-[#00D8FE] text-xl" />,
      title: "Graphics & Video Editing",
      desc: "We produce professional graphics and videos using Adobe Premiere, After Effects, and Photoshop — bringing your vision to life.",
    },
    {
      icon: <FaAmazon className="text-[#00D8FE] text-xl" />,
      title: "Amazon Market Place",
      desc: "We provide Amazon FBA, PPC, and storefront management services to grow your brand across global markets.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#071414] text-white">
      {/* ✅ Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
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

      {/* ✅ Services Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-y-10 border-t border-[#0E1E1E]">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="group relative p-8 transition-all duration-300 hover:-translate-y-[2px]"
          >
            {/* ✅ Right Divider Line */}
            <div className="absolute top-0 right-0 w-[2px] h-full bg-[#0E1E1E] group-hover:bg-[#00D8FE] transition-colors duration-300" />

            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0E1E1E]">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-[#00D8FE] transition-colors duration-300">
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-[15px] leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
