"use client";
import { motion } from "framer-motion";

export default function ServicesWeProvide() {
  const services = [
    {
      title: "Social Media Marketing",
      desc: "We grow your brand through strategic management on Facebook, Instagram, YouTube, and LinkedIn — driving engagement and reach that convert.",
    },
    {
      title: "Content Marketing",
      desc: "Our content marketing experts craft SEO-optimized blogs, email campaigns, and ad copywriting that attract and engage your audience.",
    },
    {
      title: "Web Design & Development",
      desc: "We build responsive, UX-optimized websites tailored to boost engagement, conversions, and brand credibility.",
    },
    {
      title: "Pay Per Click Marketing",
      desc: "From Google Ads to Facebook campaigns, we manage targeted PPC strategies that deliver measurable ROI for your business.",
    },
    {
      title: "Graphics & Video Editing",
      desc: "We produce professional graphics and videos using Adobe Premiere, After Effects, and Photoshop — bringing your vision to life.",
    },
    {
      title: "Amazon Market Place",
      desc: "We provide Amazon FBA, PPC, and storefront management services to grow your brand across global markets.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#071414] text-white font-[Poppins]">
      {/* ✅ Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#00D8FE] mb-3">
          Services We Provide
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-[15px] leading-relaxed">
          Contact us for customized digital marketing solutions tailored to your
          business goals and market needs.
        </p>
      </motion.div>

      {/* ✅ Services Grid (Right Line + Hover Effect Included) */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 border-t border-[#0E1E1E] divide-y md:divide-y-0 md:divide-x divide-[#0E1E1E]">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="group relative p-10 md:p-12 text-left transition-all duration-300 hover:-translate-y-[3px]"
          >
            {/* ✅ Right Vertical Hover Line */}
            <div className="absolute top-0 right-0 w-[2px] h-full bg-[#0E1E1E] group-hover:bg-[#00D8FE] transition-colors duration-300" />

            {/* ✅ Text Content */}
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00D8FE] transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
