"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: React.ReactNode;
  number?: string;
  className?: string;
  bgColor?: string;
}

export default function ParallaxSection({
  children,
  number,
  className = "",
  bgColor = "bg-got-black",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!contentRef.current) return;

      gsap.fromTo(
        contentRef.current,
        { y: 60 },
        {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${bgColor} ${className}`}
    >
      {number && (
        <span className="section-number text-got-white">{number}</span>
      )}
      <div ref={contentRef} className="relative z-10">
        {children}
      </div>
    </section>
  );
}
