"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaPinterest, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 border-t border-[#00444F]/50">
      {/* ====== MAIN FOOTER CONTENT ====== */}
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">

        {/* 1️⃣ Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-[#00444F] to-[#00D8FE]" />
            <h2 className="text-2xl font-bold text-[#00D8FE]">ASH MEDIA SOLUTIONS</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            ASH Media Solutions is a creative digital agency based in Lahore,
            providing web design, digital marketing, and branding services
            to help businesses grow online with measurable results.
          </p>

          {/* 🔗 Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaTiktok, FaPinterest, FaYoutube, FaLinkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00444F] to-[#00D8FE]
                           flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        {/* 2️⃣ Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold text-[#00D8FE] mb-5">Contact Information</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong>Phone:</strong> <span className="text-gray-400">+92 308 6595133</span>
            </li>
            <li>
              <strong>Email:</strong> <span className="text-gray-400">ashmediasolution1@gmail.com</span>
            </li>
            <li>
              <strong>Address:</strong>{" "}
              <span className="text-gray-400">
                Office #12, Chinar Bagh, Raiwind Road, Lahore, Pakistan
              </span>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold text-[#00D8FE] mb-5">Quick Links</h3>
          <ul className="space-y-3">
            {["About Us", "Services", "Projects", "Contact", "Careers"].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase().replace(" ", "")}`}
                  className="text-gray-400 hover:text-[#00D8FE] transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ====== COPYRIGHT BAR ====== */}
      <div className="bg-gradient-to-r from-[#00444F] to-[#00D8FE] text-center py-4 mt-10">
        <p className="text-white text-sm">
          © {new Date().getFullYear()}–2025 All rights reserved by{" "}
          <span className="font-semibold">ASH MEDIA SOLUTIONS</span>
        </p>
      </div>
    </footer>
  );
}
