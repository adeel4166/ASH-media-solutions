"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const slides = [
    { src: "/hero/slide3.jpg", alt: "ASH MEDIA SOLUTIONS — Slide 1" },
    { src: "/hero/slide5.jpg", alt: "ASH MEDIA SOLUTIONS — Slide 2" },
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const delay = 4000; // ⏱ Slide change every 4 seconds

  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, delay);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    start();
    return () => stop();
  }, []);

  return (
    <section
      className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden
                 bg-white dark:bg-[#0a1818]
                 text-gray-900 dark:text-white
                 transition-colors duration-500"
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      {/* ✅ Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1080}
            quality={95}
            priority={i === 0}
            className="w-full h-full object-cover"
          />

          {/* ✅ Overlay (theme-aware) */}
          <div className="absolute inset-0
                          bg-gradient-to-b from-white/30 via-transparent to-black/60
                          dark:from-black/40 dark:via-transparent dark:to-black/80
                          transition-colors duration-500 pointer-events-none" />
        </div>
      ))}

      {/* ✅ Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-6 bg-[#00D8FE] shadow-[0_0_10px_#00D8FE80]"
                : "w-2.5 bg-gray-400 dark:bg-white/30 hover:bg-[#00D8FE]/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
