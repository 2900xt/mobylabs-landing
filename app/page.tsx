"use client";

import { HeroSection } from "../components/landing/HeroSection";
import { AwardsCarousel } from "../components/landing/AwardsCarousel";
import { ScrollPrompt } from "../components/landing/ScrollPrompt";
import { SolutionSection } from "../components/landing/SolutionSection";
import { WhyMobyLabsSection } from "../components/landing/WhyMobyLabsSection";
import { ProcessSection } from "../components/landing/ProcessSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-50">
      <HeroSection />
      <ScrollPrompt />
      <ProcessSection />
      <SolutionSection />
    </div >
  );
}
