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
  const delay = 3000; // ⏱ 3 seconds

  // Start autoplay loop
  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length); // 🔁 continuous loop
    }, delay);
  };

  // Stop autoplay when hovering
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
      className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-black"
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      {/* Slides */}
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

          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-6 bg-[#00D8FE]"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
