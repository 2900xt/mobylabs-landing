"use client";

import { useEffect, useState, RefObject } from "react";

// Hook to track global scroll progress (0 to 1)
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / documentHeight, 1);
      setProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

// Hook to track scroll progress within a specific section element
// Returns a value from 0 (section enters viewport) to 1 (section exits viewport)
export function useSectionScrollProgress(sectionRef: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate progress: 0 when section top enters viewport, 1 when section bottom exits
      // This gives us smooth scrolling through the entire section
      const scrollableDistance = sectionHeight + windowHeight;
      const scrolled = windowHeight - rect.top;
      const sectionProgress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      setProgress(sectionProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);

  return progress;
}

// Improved fade hook with smooth crossfading - no gaps between statistics
// Creates overlapping fade transitions where one stat fades out as the next fades in
// Uses section-specific scroll progress for proper timing
export function useFadeInOut(sectionRef: RefObject<HTMLElement | null>, startProgress: number, endProgress: number) {
  const sectionProgress = useSectionScrollProgress(sectionRef);

  // Calculate opacity directly from progress - no effect needed
  const fadeDuration = 0.08; // 8% of total progress for fade

  let opacity = 0;

  if (sectionProgress >= startProgress && sectionProgress <= endProgress) {
    const fadeInEnd = startProgress + fadeDuration;
    const fadeOutStart = endProgress - fadeDuration;

    if (sectionProgress < fadeInEnd) {
      // Fade in with easing for smoothness
      const fadeProgress = (sectionProgress - startProgress) / fadeDuration;
      // Ease-out curve for smoother appearance
      opacity = Math.min(1, fadeProgress * fadeProgress);
    } else if (sectionProgress > fadeOutStart) {
      // Fade out with easing
      const fadeProgress = (endProgress - sectionProgress) / fadeDuration;
      // Ease-in curve for smoother disappearance
      opacity = Math.max(0, fadeProgress * fadeProgress);
    } else {
      // Fully visible in the middle
      opacity = 1;
    }
  }

  return opacity;
}
