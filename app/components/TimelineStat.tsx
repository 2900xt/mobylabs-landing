"use client";

import { RefObject } from "react";
import { useFadeInOut } from "../hooks/useScrollProgress";
import { AnimatedCounter } from "./AnimatedCounter";

interface TimelineStatProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
  startProgress: number;
  endProgress: number;
  side?: "left" | "right";
  sectionRef: RefObject<HTMLElement | null>;
}

export function TimelineStat({
  label,
  value,
  suffix = "",
  prefix = "",
  description,
  startProgress,
  endProgress,
  side = "left",
  sectionRef
}: TimelineStatProps) {
  const opacity = useFadeInOut(sectionRef, startProgress, endProgress);
  const isVisible = opacity > 0.3;

  return (
    <div
      className={`absolute w-full px-4 md:px-12 pointer-events-none z-20`}
      style={{
        opacity,
        transform: `translateY(${(1 - opacity) * 15}px)`,
        transition: "opacity 0.2s ease-out, transform 0.2s ease-out"
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className={`absolute ${side === "left" ? "left-0 md:left-0" : "right-0 md:right-0"} md:w-[42%] w-[85%]`}>
          <div className="bg-white rounded-xl border-2 border-blue-200 p-4 md:p-5 shadow-lg pointer-events-auto">
            <div className="text-xs md:text-sm font-semibold text-blue-600 mb-1.5 uppercase tracking-wide">
              {label}
            </div>
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              <AnimatedCounter end={value} suffix={suffix} prefix={prefix} isVisible={isVisible} />
            </div>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
