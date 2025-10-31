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
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/share/1CZfWNTq4w/",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/ashmediaexperts?igsh=MTl3bWVkOXA4OHJ2eg==",
      label: "Instagram",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@ashmediasolutions",
      label: "TikTok",
    },
    {
      icon: FaPinterest,
      href: "https://pin.it/1EcHZ6OA3",
      label: "Pinterest",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/@ashmediasolutions-u4w?si=5beD0l3C46-1gcwN",
      label: "YouTube",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ash-media-solutions-1b8895375",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-[#071414] text-gray-400 pt-12 pb-6 border-t border-[#00444F]/30 font-sans">
      {/* ✅ MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3 items-start">
        {/* 1️⃣ BRAND SECTION */}
        <div className="flex flex-col items-start">
          {/* LOGO */}
          <div className="relative w-44 h-16 -mt-2 mb-2">
            <Image
              src="/logo1.png"
              alt="ASH Media Solutions Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-300 leading-relaxed text-[15px] max-w-md">
            ASH Media Solutions is a creative digital agency based in Lahore,
            providing web design, digital marketing, and branding services to
            help businesses grow online with measurable results.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-5">
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-[#00D8FE]/40 flex items-center justify-center text-[#00D8FE]
                           hover:bg-[#00D8FE] hover:text-[#071414] transition-all duration-300"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        {/* 2️⃣ CONTACT INFO */}
        <div>
          <h3 className="text-2xl mb-5 text-[#00D8FE] font-bold tracking-tight">
            Contact Information
          </h3>
          <ul className="space-y-3 text-[15px] leading-relaxed">
            <li>
              <span className="text-white font-semibold">Phone:</span>{" "}
              <span className="text-gray-300">+92 3477858316</span>
            </li>
            <li>
              <span className="text-white font-semibold">Email:</span>{" "}
              <span className="text-gray-300">ashmediasolutions01@gmail.com</span>
            </li>
            <li>
              <span className="text-white font-semibold">Address:</span>{" "}
              <span className="text-gray-300">
                E8 Plaza Commercial Block, <br />
                    Near Shaheen Block, Chinar Bagh, <br />
                    Raiwind Road, Lahore, Pakistan
              </span>
            </li>
          </ul>
        </div>

        {/* 3️⃣ QUICK LINKS */}
        <div>
          <h3 className="text-2xl mb-5 text-[#00D8FE] font-bold tracking-tight">
            Quick Links
          </h3>
          <ul className="space-y-3 text-[15px]">
            {["About Us", "Services", "Contact", ].map(
              (link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(" ", "")}`}
                    className="text-gray-300 hover:text-[#00D8FE] transition-colors duration-300"
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
      <div className="text-center pt-8 border-t border-[#00444F]/40 mt-10">
        <p className="text-sm text-gray-400 tracking-wide">
          © {new Date().getFullYear()} – All rights reserved by{" "}
          <span className="text-[#00D8FE] font-semibold">
            ASH Media Solutions
          </span>
        </p>
      </div>
    </footer>
  );
}
