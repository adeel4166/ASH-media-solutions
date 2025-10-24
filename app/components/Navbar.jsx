"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaProjectDiagram,
  FaEnvelope,

} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About", href: "/about", icon: <FaInfoCircle /> },
    { name: "Services", href: "/services", icon: <FaServicestack /> },
    { name: "Projects", href: "/projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
    
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#000000]/80 border-b border-[#00444F] shadow-lg font-[Poppins]">
      <nav className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* ✅ Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/thursday.png"
            alt="ASH MEDIA SOLUTIONS Logo"
            width={45}
            height={45}
            className="rounded-xl"
            priority
          />
          <span
            className="text-2xl tracking-wide text-[#00D8FE] font-[Amsterdam4] drop-shadow-[0_0_6px_rgba(0,216,254,0.5)]"
            style={{ letterSpacing: "1.5px" }}
          >
            ASH MEDIA SOLUTIONS
          </span>
        </Link>

        {/* ✅ Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group text-gray-300 hover:text-[#00D8FE] transition"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00D8FE] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* ✅ CTA Button (Desktop) */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-xl px-5 py-2.5 font-semibold text-sm
                     bg-[#00D8FE] text-black hover:bg-[#00b8da]
                     shadow-[0_0_15px_#00D8FE80] hover:shadow-[0_0_25px_#00D8FE]
                     hover:scale-[1.05] transition-all duration-300 font-[Poppins]"
        >
          Get a Quote
        </Link>

        {/* ✅ Mobile Toggle Button */}
        <button
          className="md:hidden text-[#00D8FE] text-3xl cursor-pointer transition-transform"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* ✅ Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -250, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden fixed top-[72px] left-0 w-full bg-[#000] border-t border-[#00444F]
                       shadow-[0_0_25px_#00D8FE30] py-6 flex flex-col items-center z-40"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-gray-300 text-lg font-[Poppins]
                           hover:text-[#00D8FE] transition-all py-3 w-full justify-center"
              >
                <span className="text-[#00D8FE] text-xl">{link.icon}</span>
                {link.name}
              </Link>
            ))}

            {/* ✅ CTA Button (Mobile) */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-flex justify-center items-center rounded-xl px-6 py-3 font-semibold
                         bg-[#00D8FE] text-black hover:bg-[#00b8da]
                         shadow-[0_0_15px_#00D8FE80] hover:shadow-[0_0_25px_#00D8FE]
                         transition-all duration-300 font-[Poppins]"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
