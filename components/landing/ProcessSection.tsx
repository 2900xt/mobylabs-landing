"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WorldMap from "../WorldMap";

interface Section {
  id: string;
  title: string;
  subtitle: string;
  shortLabel: string;
  description: string;
  image: string;
  isMap?: boolean;
  blogLink: string;
  blogLabel: string;
}

const sections: Section[] = [
  {
    id: "narw",
    title: "Meet Moby,",
    subtitle: "Fewer than 370 remain",
    shortLabel: "Meet Moby",
    description:
      "A North Atlantic Right Whale. One of the most endangered large whale species on Earth. Why? Human-caused deaths.",
    image: "/North-Atlantic-Right-Whale.jpg",
    blogLink: "/blog/ship-strikes-preventing-whale-collisions",
    blogLabel: "Learn about ship strike prevention",
  },
  {
    id: "buoy",
    title: "Solar-Powered Buoys",
    subtitle: "Always listening",
    shortLabel: "Our Buoys",
    description:
      "Our network of low-cost, weather-resistant buoys continuously monitor ocean acoustics in critical whale habitats. Each buoy captures underwater sounds and transmits data in real-time via satellite.",
    image: "/buoy.jpg",
    blogLink: "/blog/acoustic-detection-technology-explained",
    blogLabel: "How acoustic detection works",
  },
  {
    id: "fft",
    title: "AI Sound Analysis",
    subtitle: "97.84% accuracy",
    shortLabel: "AI Analysis",
    description:
      "Our machine learning models analyze acoustic signatures using Fast Fourier Transform to detect whale calls with unprecedented precision. The system processes audio in real-time, identifying species-specific vocalizations.",
    image: "/fft.jpg",
    blogLink: "/blog/understanding-whale-vocalizations",
    blogLabel: "Understanding whale vocalizations",
  },
  {
    id: "map",
    title: "Real-Time Whale Tracking",
    subtitle: "Instant alerts",
    shortLabel: "The Map",
    description:
      "When a whale is detected, its location is instantly mapped and shared with vessel operators, researchers, and conservation organizations. Our API enables proactive route planning and collision avoidance.",
    image: "/ocean.jpg",
    blogLink: "/blog/whale-migration-patterns",
    blogLabel: "Explore whale migration patterns",
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate how far we've scrolled through the container
      const scrolled = -rect.top;
      const totalScrollable = containerHeight - viewportHeight;

      if (scrolled < 0) {
        setActiveIndex(0);
        setScrollProgress(0);
        return;
      }

      if (scrolled > totalScrollable) {
        setActiveIndex(sections.length - 1);
        setScrollProgress(1);
        return;
      }

      // Divide scroll into sections
      const sectionHeight = totalScrollable / sections.length;
      const currentSection = Math.floor(scrolled / sectionHeight);
      const sectionProgress = (scrolled % sectionHeight) / sectionHeight;

      setActiveIndex(Math.min(currentSection, sections.length - 1));
      setScrollProgress(sectionProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-black"
      style={{ height: `${(sections.length + 1) * 100}vh` }}
    >
      {/* Top fade - transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-30 pointer-events-none" />

      {/* Fixed viewport container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background images layer */}
        <div className="absolute inset-0">
          {sections.map((section, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === activeIndex - 1;
            const isNext = index === activeIndex + 1;

            // Calculate opacity based on scroll progress
            let opacity = 0;
            if (isActive) {
              // Current section fades out as we scroll
              opacity = 1 - scrollProgress * 0.5;
            } else if (isNext) {
              // Next section fades in as we scroll
              opacity = scrollProgress * 0.5;
            } else if (isPrev) {
              opacity = 0.2;
            }

            // Scale effect for depth
            const scale = isActive ? 1 + scrollProgress * 0.05 : 1;

            return (
              <div
                key={section.id}
                className="absolute inset-0 transition-opacity duration-700 ease-out"
                style={{
                  opacity: isActive || isNext ? opacity : 0,
                  zIndex: isActive ? 2 : isNext ? 1 : 0,
                }}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  style={{
                    transform: `scale(${scale})`,
                    transition: "transform 0.1s ease-out",
                  }}
                  priority={index === 0}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
                {/* Vignette effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
              </div>
            );
          })}
        </div>

        {/* Text content layer */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            {sections.map((section, index) => {
              const isActive = index === activeIndex;

              // Calculate text animation based on scroll
              let textOpacity = 0;
              let translateY = 50;

              if (isActive) {
                // Text fades in quickly, then fades out as we approach next section
                if (scrollProgress < 0.2) {
                  textOpacity = scrollProgress * 5; // 0 to 1 in first 20%
                  translateY = 50 - scrollProgress * 250; // 50 to 0
                } else if (scrollProgress < 0.8) {
                  textOpacity = 1;
                  translateY = 0;
                } else {
                  textOpacity = 1 - (scrollProgress - 0.8) * 5; // 1 to 0 in last 20%
                  translateY = -(scrollProgress - 0.8) * 250; // 0 to -50
                }
              }

              return (
                <div
                  key={section.id}
                  className="absolute inset-0 flex items-center justify-center px-6"
                  style={{
                    opacity: textOpacity,
                    transform: `translateY(${translateY}px)`,
                    transition: "opacity 0.3s ease-out",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div className="max-w-4xl mx-auto text-center">
                    {/* Subtitle badge */}
                    <div
                      className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                      style={{
                        opacity: textOpacity,
                        transform: `translateY(${translateY * 0.5}px)`,
                      }}
                    >
                      <span className="text-sm font-medium text-cyan-300 tracking-widest uppercase">
                        {section.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
                      style={{
                        textShadow: "0 4px 30px rgba(0,0,0,0.5)",
                      }}
                    >
                      {section.title}
                    </h2>

                    {/* Description */}
                    <p
                      className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
                      style={{
                        textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                        opacity: textOpacity * 0.9,
                        transform: `translateY(${translateY * 1.2}px)`,
                      }}
                    >
                      {section.description}
                    </p>

                    {/* Read More Button */}
                    <Link
                      href={section.blogLink}
                      className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
                      style={{
                        opacity: textOpacity * 0.9,
                        transform: `translateY(${translateY * 1.4}px)`,
                      }}
                    >
                      {section.blogLabel}
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>

                    {/* Section indicator */}
                    <div className="mt-12 flex justify-center gap-3">
                      {sections.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex
                              ? "w-12 bg-cyan-400"
                              : i < activeIndex
                                ? "w-6 bg-white/50"
                                : "w-6 bg-white/20"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          style={{
            opacity: activeIndex === sections.length - 1 && scrollProgress > 0.5 ? 0 : 1,
            transition: "opacity 0.5s ease-out",
          }}
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>

        {/* Side progress bar */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-end gap-6">
          {sections.map((section, i) => (
            <button
              key={section.id}
              onClick={() => {
                const container = containerRef.current;
                if (!container) return;
                const containerHeight = container.offsetHeight;
                const viewportHeight = window.innerHeight;
                const totalScrollable = containerHeight - viewportHeight;
                const sectionHeight = totalScrollable / sections.length;
                // Add a small offset (30% into the section) to trigger the text animation
                const targetScroll = container.offsetTop + (i * sectionHeight) + (sectionHeight * 0.3);
                window.scrollTo({ top: targetScroll, behavior: "smooth" });
              }}
              className="group flex items-center gap-3"
            >
              <span
                className={`text-xs font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${i === activeIndex
                    ? "text-cyan-300 opacity-100 translate-x-0"
                    : "text-white/50 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
              >
                {section.shortLabel}
              </span>
              <span
                className={`text-xs font-mono w-5 text-right transition-all duration-300 ${i === activeIndex ? "text-cyan-400" : "text-white/30 group-hover:text-white/60"
                  }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className={`h-10 rounded-full transition-all duration-500 ${i === activeIndex
                    ? "w-1 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    : i < activeIndex
                      ? "w-0.5 bg-white/40"
                      : "w-0.5 bg-white/20 group-hover:bg-white/40"
                  }`}
              />
            </button>
          ))}
        </div>

        {/* Bottom fade overlay - transitions to dark SolutionSection */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-30 pointer-events-none"
          style={{
            opacity: activeIndex === sections.length - 1 ? Math.min(1, scrollProgress * 2) : 0,
            transition: "opacity 0.5s ease-out",
          }}
        />
      </div>
    </section>
  );
}
