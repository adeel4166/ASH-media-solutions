import Navbar from "@/app/components/Navbar";

export const metadata = {
  title: "About | ASH MEDIA SOLUTIONS",
  description: "Learn more about ASH MEDIA SOLUTIONS — your creative tech partner in design, development, and innovation.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative py-28 text-center bg-gradient-to-b from-[#000000] via-[#00444F] to-[#000000]">
        <h1 className="hero-title text-6xl sm:text-7xl font-bold text-[#00D8FE]">
          About Us
        </h1>
        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto font-[Poppins]">
          Discover our journey, mission, and passion for creating digital experiences that truly make an impact.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-[#000000] text-center border-t border-[#00444F]/40">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-[#00D8FE] mb-8">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg">
            At <span className="text-[#00D8FE] font-semibold">ASH MEDIA SOLUTIONS</span>, 
            we aim to redefine creativity and innovation in Pakistan’s digital landscape.  
            From stunning web designs to powerful marketing campaigns, 
            we help brands communicate their message clearly and effectively.
          </p>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "🚀 Our Vision",
                desc: "To empower every business with a strong online presence and cutting-edge digital solutions.",
              },
              {
                title: "💡 Our Expertise",
                desc: "From custom web apps to full-scale brand strategies — we bring creativity and technology together.",
              },
              {
                title: "🤝 Our Promise",
                desc: "We focus on trust, transparency, and long-term success for our clients — not just quick results.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#00444F]/30 border border-[#00444F]/40 hover:border-[#00D8FE]/60 transition"
              >
                <h3 className="text-xl font-semibold text-[#00D8FE] mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-[#00444F]/30 border-t border-[#00D8FE]/20 text-center">
        <h2 className="text-3xl font-bold text-[#00D8FE] mb-4">
          Let’s Build Something Amazing Together
        </h2>
        <p className="text-gray-300 mb-8">
          Ready to elevate your brand with us? Let’s turn your vision into reality.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-[#00444F] to-[#00D8FE] 
          text-white font-semibold hover:scale-105 transition-transform"
        >
          Contact Us
        </a>
      </section>
    </>
  );
}
