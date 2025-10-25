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
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About", href: "/about", icon: <FaInfoCircle /> },
    { name: "Services", href: "/services", icon: <FaServicestack /> },
    { name: "Our Team", href: "/team", icon: <FaProjectDiagram /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0a1818] border-b border-[#00444F]/40 font-[Poppins]">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* ✅ Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/thursday.png"
            alt="ASH Media Solutions Logo"
            width={45}
            height={45}
            className="rounded-xl"
            priority
          />
          <span
            className="text-2xl tracking-wide text-[#00D8FE] font-[Amsterdam4]"
            style={{ letterSpacing: "1.5px" }}
          >
            ASH MEDIA SOLUTIONS
          </span>
        </Link>

        {/* ✅ Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group text-gray-300 hover:text-[#00D8FE] transition-colors duration-300"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00D8FE] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* ✅ Contact Button (Desktop) */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-md px-5 py-2.5 font-semibold text-sm
                     bg-[#00D8FE] text-black hover:bg-[#00bfe4]
                     hover:scale-[1.03] transition-all duration-300"
        >
          Contact Us
        </Link>

        {/* ✅ Mobile Menu Toggle */}
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
            className="md:hidden fixed top-[72px] left-0 w-full bg-[#0a1818] border-t border-[#00444F]/40
                       py-6 flex flex-col items-center z-40"
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
              className="mt-6 inline-flex justify-center items-center rounded-md px-6 py-3 font-semibold
                         bg-[#00D8FE] text-black hover:bg-[#00bfe4]
                         transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
