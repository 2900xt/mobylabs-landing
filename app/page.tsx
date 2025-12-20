"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Custom hook for scroll-triggered animations
function useScrollAnimation(threshold = 0.2) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [elementRef, isVisible] as const;
}

// Whale Section Component with scroll animations
function WhaleSection({
  children,
  scrollY,
  scrollOffset,
  imageUrl,
  gradientOverlay,
  nextSectionId,
}: {
  children: React.ReactNode;
  scrollY: number;
  scrollOffset: number;
  imageUrl: string;
  gradientOverlay: string;
  nextSectionId?: string;
}) {
  const [ref, isVisible] = useScrollAnimation(0.3);

  return (
    <div ref={ref} className="relative h-screen flex items-center overflow-hidden">
      {/* Background with controlled parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          transform: `translateY(${(scrollY - scrollOffset) * 0.15}px)`,
          top: '-20%',
          height: '140%',
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-b ${gradientOverlay}`} />
      </div>

      {/* Content with fade and slide animations */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 py-20 w-full transition-all duration-1000 ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
          }`}
      >
        {children}
      </div>

      {/* Next Section Arrow */}
      {nextSectionId && (
        <button
          onClick={() => {
            const nextSection = document.querySelector(`#${nextSectionId}`);
            nextSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-8 right-8 group cursor-pointer hover:scale-110 transition-all duration-300 bg-white/10 backdrop-blur-md p-4 rounded-full border-2 border-white/30 hover:border-white/60 hover:bg-white/20"
          aria-label="Scroll to next section"
        >
          <svg
            className="w-6 h-6 text-white/70 group-hover:text-white transform group-hover:translate-y-1 transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </div>
  );
}

// Animated Counter Component
function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with subtle parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940&auto=format&fit=crop')",
            transform: `translateY(${scrollY * 0.2}px)`,
            top: '-20%',
            height: '140%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-blue-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Every whale matters.
            </h1>
            <p className="text-2xl md:text-4xl text-cyan-300 mb-4 font-semibold animate-pulse-slow">
              300,000+ cetaceans die yearly
            </p>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto">
              67% from human activity. Real-time AI detection can stop this.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="group px-10 py-5 bg-blue-500 text-white text-lg font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transform text-center">
                Get a Quote
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link href="/live-map" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:scale-105 transform text-center">
                View Live Map
              </Link>
            </div>

            {/* Awards Carousel - Transparent Overlay */}
            <div className="relative overflow-hidden w-full">
              <div className="flex gap-6 animate-scroll justify-center">
                {/* Awards Images */}
                <div className="flex-shrink-0 w-40 h-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image src="/ISEF.webp" alt="ISEF" width={160} height={128} className="rounded-lg object-contain" />
                </div>
                <div className="flex-shrink-0 w-40 h-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image src="/HOR.jpg" alt="US House of Representatives" width={160} height={128} className="rounded-lg object-contain" />
                </div>
                <div className="flex-shrink-0 w-40 h-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image src="/NASA.jpg" alt="NASA GSFC" width={160} height={128} className="rounded-lg object-contain" />
                </div>
                <div className="flex-shrink-0 w-40 h-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image src="/ACL.png" alt="Telora" width={160} height={128} className="rounded-lg object-contain" />
                </div>
                <div className="flex-shrink-0 w-40 h-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image src="/RSEF.png" alt="LCPS RSEF" width={160} height={128} className="rounded-lg object-contain" />
                </div>
                <div className="flex-shrink-0 w-40 h-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image src="/VSSEF.png" alt="VSSEF" width={160} height={128} className="rounded-lg object-contain" />
                </div>

                {/* Duplicate for seamless loop */}
                <div className="flex-shrink-0 w-40 h-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image src="/ISEF.webp" alt="Award 1" width={160} height={128} className="rounded-lg object-contain" />
                </div>
                <div className="flex-shrink-0 w-40 h-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image src="/HOR.jpg" alt="US House of Representatives" width={160} height={128} className="rounded-lg object-contain" />
                </div>
                <div className="flex-shrink-0 w-40 h-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image src="/NASA.jpg" alt="NASA GSFC" width={160} height={128} className="rounded-lg object-contain" />
                </div>
                <div className="flex-shrink-0 w-40 h-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image src="/ACL.png" alt="Telora" width={160} height={128} className="rounded-lg object-contain" />
                </div>
                <div className="flex-shrink-0 w-40 h-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image src="/RSEF.png" alt="LCPS RSEF" width={160} height={128} className="rounded-lg object-contain" />
                </div>
                <div className="flex-shrink-0 w-40 h-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image src="/VSSEF.png" alt="VSSEF" width={160} height={128} className="rounded-lg object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Clickable */}
        <button
          onClick={() => {
            const crisisSection = document.querySelector('#crisis-section');
            crisisSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group hover:scale-110 transition-transform duration-300"
          aria-label="Scroll to crisis section"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white/80 transition-colors">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse group-hover:bg-white/90" />
          </div>
          <div className="text-white/70 text-sm mt-2 group-hover:text-white/90 transition-colors">Scroll</div>
        </button>
      </section>

      {/* The Crisis Section */}
      <section id="crisis-section" className="relative">
        {/* North Atlantic Right Whale */}
        <WhaleSection
          scrollY={scrollY}
          scrollOffset={800}
          imageUrl="https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=2940&auto=format&fit=crop"
          gradientOverlay="from-blue-900/90 via-blue-900/80 to-slate-900/95"
          nextSectionId="blue-whale-section"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                North Atlantic Right Whale
              </h2>
              <p className="text-xl md:text-2xl text-blue-200 mb-8">
                Fewer than 370 remain. Each one is irreplaceable.
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                  <div className="text-sm text-blue-200 mb-1">Population Remaining</div>
                  <div className="text-5xl font-bold">
                    <AnimatedCounter end={370} suffix="" />
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                  <div className="text-sm text-blue-200 mb-1">Fertile Females Left</div>
                  <div className="text-5xl font-bold">
                    <AnimatedCounter end={70} prefix="Only " />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-700/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl transform transition-all duration-700 delay-100 hover:scale-105">
                <div className="text-6xl font-bold mb-2">
                  <AnimatedCounter end={61} suffix="%" />
                </div>
                <div className="text-blue-100 text-sm">Deaths from vessel strikes & entanglements</div>
              </div>
              <div className="bg-blue-600/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl transform transition-all duration-700 delay-200 hover:scale-105">
                <div className="text-6xl font-bold mb-2">
                  <AnimatedCounter end={20} suffix="%" />
                </div>
                <div className="text-blue-100 text-sm">Population decline since 2017</div>
              </div>
              <div className="col-span-2 bg-blue-500/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl transform transition-all duration-700 delay-300 hover:scale-105">
                <div className="text-6xl font-bold mb-2">
                  <AnimatedCounter end={2400} prefix="$" />
                </div>
                <div className="text-blue-100 text-sm">Cost per whale for invasive tagging</div>
              </div>
            </div>
          </div>
        </WhaleSection>

        {/* Blue Whale */}
        <div id="blue-whale-section">
          <WhaleSection
            scrollY={scrollY}
            scrollOffset={1600}
            imageUrl="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2940&auto=format&fit=crop"
            gradientOverlay="from-slate-900/90 via-cyan-900/80 to-slate-900/95"
            nextSectionId="humpback-whale-section"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                <div className="bg-cyan-600/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl transform transition-all duration-700 delay-100 hover:scale-105">
                  <div className="text-6xl font-bold mb-2">
                    <AnimatedCounter end={10000} suffix="+" />
                  </div>
                  <div className="text-cyan-100 text-sm">Blue whales worldwide</div>
                </div>
                <div className="bg-blue-600/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl transform transition-all duration-700 delay-200 hover:scale-105">
                  <div className="text-6xl font-bold mb-2">
                    <AnimatedCounter end={50} suffix="%" />
                  </div>
                  <div className="text-blue-100 text-sm">Reduction in strikes with speed zones</div>
                </div>
                <div className="col-span-2 bg-indigo-600/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl transform transition-all duration-700 delay-300 hover:scale-105">
                  <div className="text-6xl font-bold mb-2">
                    <AnimatedCounter end={200} />
                  </div>
                  <div className="text-indigo-100 text-sm">Tons - the largest animal ever</div>
                </div>
              </div>

              <div className="order-1 md:order-2 text-white">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                  Blue Whale
                </h2>
                <p className="text-xl md:text-2xl text-cyan-200 mb-8">
                  The largest animal to ever exist on Earth, still at risk.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                    <div className="text-sm text-cyan-200 mb-1">Conservation Status</div>
                    <div className="text-3xl font-bold text-cyan-400">
                      Endangered
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </WhaleSection>
        </div>

        {/* Humpback Whale */}
        <div id="humpback-whale-section">
          <WhaleSection
            scrollY={scrollY}
            scrollOffset={2400}
            imageUrl="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940&auto=format&fit=crop"
            gradientOverlay="from-slate-900/90 via-indigo-900/80 to-slate-900/95"
            nextSectionId="solution"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                  Humpback Whale
                </h2>
                <p className="text-xl md:text-2xl text-indigo-200 mb-8">
                  A conservation success story - but threats remain.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                    <div className="text-sm text-indigo-200 mb-1">Global Population</div>
                    <div className="text-5xl font-bold">
                      <AnimatedCounter end={80000} suffix="+" />
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                    <div className="text-sm text-indigo-200 mb-1">Conservation Status</div>
                    <div className="text-3xl font-bold text-cyan-400">
                      Least Concern
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-600/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl transform transition-all duration-700 delay-100 hover:scale-105">
                  <div className="text-6xl font-bold mb-2">
                    <AnimatedCounter end={62} suffix="%" />
                  </div>
                  <div className="text-indigo-100 text-sm">Reduction in entanglements with closures</div>
                </div>
                <div className="bg-blue-600/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl transform transition-all duration-700 delay-200 hover:scale-105">
                  <div className="text-6xl font-bold mb-2">
                    <AnimatedCounter end={16} />
                  </div>
                  <div className="text-blue-100 text-sm">Hour migration songs</div>
                </div>
                <div className="col-span-2 bg-cyan-600/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl transform transition-all duration-700 delay-300 hover:scale-105">
                  <div className="text-6xl font-bold mb-2">
                    <AnimatedCounter end={5000} suffix=" mi" />
                  </div>
                  <div className="text-cyan-100 text-sm">Annual migration distance</div>
                </div>
              </div>
            </div>
          </WhaleSection>
        </div>

        {/* Evidence-Based Solutions - Final Section */}
        <div className="relative py-24 bg-gradient-to-b from-slate-900 to-blue-950">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white drop-shadow-2xl">
              Prevention Works - And We Have Proof
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-gradient-to-br from-cyan-500/20 to-teal-600/20 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/30 shadow-2xl transform transition-all duration-700 hover:scale-105">
                <div className="text-7xl font-bold text-cyan-400 mb-3">
                  <AnimatedCounter end={57} suffix="%" />
                </div>
                <div className="text-cyan-100 text-lg">Reduction in strike mortality with vessel speeds ≤10 knots</div>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30 shadow-2xl transform transition-all duration-700 hover:scale-105 delay-100">
                <div className="text-7xl font-bold text-blue-400 mb-3">
                  <AnimatedCounter end={50} suffix="%" />
                </div>
                <div className="text-blue-100 text-lg">Decrease in blue whale strikes with voluntary speed zones</div>
              </div>
              <div className="text-center bg-gradient-to-br from-indigo-500/20 to-blue-600/20 backdrop-blur-sm p-8 rounded-2xl border border-indigo-400/30 shadow-2xl transform transition-all duration-700 hover:scale-105 delay-200">
                <div className="text-7xl font-bold text-indigo-400 mb-3">
                  <AnimatedCounter end={62} suffix="%" />
                </div>
                <div className="text-indigo-100 text-lg">Reduction in entanglements with seasonal fishing closures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 bg-white" id="solution">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
              Our Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two products. One mission: Real-time whale detection to save lives.
            </p>
          </div>

          {/* Product Comparison */}
          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            {/* Buoy Network */}
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-400 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="inline-block bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                FOR ORGANIZATIONS
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-3">Buoy Network</h3>
              <p className="text-gray-700 mb-6 text-lg">
                3D-printed acoustic buoys covering your shipping routes.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-800 font-medium">ESP32, solar panels, hydrophone</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-800 font-medium">0.9784 AUROC performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-800 font-medium">Network coverage for shipping routes</span>
                </div>
              </div>

              <div className="text-sm text-gray-600 font-semibold">BEST FOR</div>
              <div className="text-gray-800 font-medium">Shipping companies, coastal management, research institutions</div>
            </div>

            {/* SUAM */}
            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-cyan-200 hover:border-cyan-400 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="inline-block bg-cyan-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                FOR INDIVIDUAL VESSELS
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-3">SUAM System</h3>
              <p className="text-gray-700 mb-6 text-lg">
                Standalone monitoring system for individual boats and ships.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                  <span className="text-gray-800 font-medium">Two-Branch Ensemble AI Model</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                  <span className="text-gray-800 font-medium">Metamaterial sound localization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                  <span className="text-gray-800 font-medium">No infrastructure dependency</span>
                </div>
              </div>

              <div className="text-sm text-gray-600 font-semibold">BEST FOR</div>
              <div className="text-gray-800 font-medium">Commercial vessels, fishing boats, recreational boaters</div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Moby Labs Wins Section */}
      <section className="py-16 bg-slate-50" id="technology">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
              Why Moby Labs?
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-10 rounded-2xl shadow-2xl">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <th className="px-6 py-5 text-left font-bold text-lg">Method</th>
                  <th className="px-6 py-5 text-left font-bold text-lg">Accuracy</th>
                  <th className="px-6 py-5 text-left font-bold text-lg">Cost</th>
                  <th className="px-6 py-5 text-left font-bold text-lg">Real-Time</th>
                  <th className="px-6 py-5 text-left font-bold text-lg">Coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-cyan-50 border-l-4 border-blue-500">
                  <td className="px-6 py-5 font-bold text-gray-900 text-lg">Moby Labs</td>
                  <td className="px-6 py-5 text-gray-700 font-semibold">97.84 %</td>
                  <td className="px-6 py-5 text-cyan-600 font-bold">{"< $200 (one-time)"}</td>
                  <td className="px-6 py-5 text-cyan-600 font-bold">✓ Yes</td>
                  <td className="px-6 py-5 text-cyan-600 font-bold">Wide</td>
                </tr>
                <tr className="border-t-2 border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Whale Tagging</td>
                  <td className="px-6 py-4 text-gray-700">Single whale</td>
                  <td className="px-6 py-4 text-blue-800 font-semibold">$2,400/whale</td>
                  <td className="px-6 py-4 text-blue-600 font-semibold">Limited</td>
                  <td className="px-6 py-4 text-blue-800 font-semibold">1 whale</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Aerial Imagery</td>
                  <td className="px-6 py-4 text-gray-700">Surface only</td>
                  <td className="px-6 py-4 text-blue-600 font-semibold">Moderate</td>
                  <td className="px-6 py-4 text-blue-800 font-semibold">✗ No</td>
                  <td className="px-6 py-4 text-blue-600 font-semibold">Limited</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Civilian Reports</td>
                  <td className="px-6 py-4 text-gray-700">Unreliable</td>
                  <td className="px-6 py-4 text-cyan-600 font-semibold">Free</td>
                  <td className="px-6 py-4 text-blue-600 font-semibold">Delayed</td>
                  <td className="px-6 py-4 text-blue-800 font-semibold">Sparse</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors border-t-2 border-gray-200">
                  <td className="px-6 py-4 font-semibold text-gray-900">Cornell Benchmark</td>
                  <td className="px-6 py-4 text-gray-700">72.14 %</td>
                  <td className="px-6 py-4 text-gray-500">—</td>
                  <td className="px-6 py-4 text-gray-500">—</td>
                  <td className="px-6 py-4 text-gray-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Advantages */}

        </div>
      </section>


      {/* Footer CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Protect Marine Life Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Every detection saves lives. Join us in preventing whale extinctions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-10 py-5 bg-blue-500 text-white text-lg font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-xl hover:scale-105 transform">
              Request a Quote
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-10 py-5 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:scale-105 transform">
              Explore the Demo
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .7;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
