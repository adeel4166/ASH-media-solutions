"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaServicestack,
  FaBlog,
  FaInfoCircle,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Services", href: "/services", icon: <FaServicestack /> },
    { name: "Blog", href: "/blog", icon: <FaBlog /> },
    { name: "About Us", href: "/about", icon: <FaInfoCircle /> },
    { name: "Our Team", href: "/team", icon: <FaUsers /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A1818] shadow-lg font-[Poppins] h-[90px]">
      <nav className="max-w-7xl mx-auto h-full flex items-center justify-between px-8 sm:px-10">
        
        {/* ✅ Logo (slightly wider, height locked) */}
        <Link href="/" className="flex items-center h-full">
          <div className="h-[55px] flex items-center">
            <Image
              src="/thursday.png"
              alt="ASH Media Solutions Logo"
              width={170}          // 🔹 Increased width from 140 → 170
              height={45}
              className="object-contain w-auto max-h-[550px]"
              priority
            />
          </div>
        </Link>

        {/* ✅ Center Menu */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-10 lg:gap-14 text-[16px] lg:text-[17px] font-semibold text-white">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#00D8FE] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ✅ Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-[18px] px-6 lg:px-8 py-2 font-semibold text-[15px] lg:text-[16px]
                     bg-[#00D8FE] text-black hover:bg-[#00bfe4] transition-all duration-300 shadow-sm"
        >
          Contact Us
        </Link>

        {/* ✅ Mobile Toggle */}
        <button
          className="md:hidden text-[#00D8FE] text-3xl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* ✅ Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A1818] border-t border-[#00444F]/40 py-6 flex flex-col items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-white text-lg font-medium hover:text-[#00D8FE] transition-all duration-300"
            >
              <span className="text-[#00D8FE] text-xl">{link.icon}</span>
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#00D8FE] text-black px-8 py-2.5 rounded-[18px] font-medium text-[16px] hover:bg-[#00bfe4] transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
