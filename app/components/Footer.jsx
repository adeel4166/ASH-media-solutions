"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPinterest,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-[#071414] text-gray-400 pt-16 border-t border-[#00444F]/30 transition-colors duration-500"
      id="footer"
    >
      {/* ✅ MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3 items-start">
        {/* 1️⃣ Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* Logo */}
            <div className="relative w-14 h-14">
              <Image
                src="/thursday.png"
                alt="ASH Media Solutions Logo"
                fill
                className="object-contain"
              />
            </div>
            <h2
              className="text-3xl text-[#00D8FE] font-[Amsterdam4] tracking-wide"
              style={{ letterSpacing: "1px" }}
            >
              ASH MEDIA SOLUTIONS
            </h2>
          </div>

          <p className="text-gray-400 leading-relaxed text-[15px]">
            ASH Media Solutions is a creative digital agency based in Lahore,
            providing web design, digital marketing, and branding services to
            help businesses grow online with measurable results.
          </p>

          {/* ✅ Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaTiktok, FaPinterest, FaYoutube, FaLinkedin].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-[#00D8FE]/50 flex items-center justify-center text-[#00D8FE] hover:bg-[#00D8FE] hover:text-[#071414] transition-all duration-300"
                >
                  <Icon className="text-lg" />
                </a>
              )
            )}
          </div>
        </div>

        {/* 2️⃣ Contact Info */}
        <div>
          <h3
            className="text-2xl mb-5 text-[#00D8FE] font-[Amsterdam4] tracking-wide"
            style={{ letterSpacing: "1px" }}
          >
            Contact Information
          </h3>
          <ul className="space-y-3 text-[15px]">
            <li>
              <strong className="text-white font-[Amsterdam4]">Phone:</strong>{" "}
              <span className="text-gray-400">+92 308 6595133</span>
            </li>
            <li>
              <strong className="text-white font-[Amsterdam4]">Email:</strong>{" "}
              <span className="text-gray-400">ashmediasolution1@gmail.com</span>
            </li>
            <li>
              <strong className="text-white font-[Amsterdam4]">Address:</strong>{" "}
              <span className="text-gray-400">
                Office #12, Chinar Bagh, Raiwind Road, Lahore, Pakistan
              </span>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Quick Links */}
        <div>
          <h3
            className="text-2xl mb-5 text-[#00D8FE] font-[Amsterdam4] tracking-wide"
            style={{ letterSpacing: "1px" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-3 text-[15px]">
            {["About Us", "Services", "Projects", "Contact", "Careers"].map(
              (link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(" ", "")}`}
                    className="text-gray-400 hover:text-[#00D8FE] transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* ✅ COPYRIGHT BAR */}
      <div className="text-center py-4 mt-10 border-t border-[#00444F]/40">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} – 2025 All rights reserved by{" "}
          <span className="font-[Amsterdam4] text-[#00D8FE] tracking-wide">
            ASH MEDIA SOLUTIONS
          </span>
        </p>
      </div>
    </footer>
  );
}
