"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}: CounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const obj = { val: 0 };

      gsap.to(obj, {
        val: value,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        onUpdate() {
          if (numberRef.current) {
            numberRef.current.textContent =
              prefix + Math.round(obj.val).toLocaleString() + suffix;
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <span ref={containerRef} className="inline-block">
      <span
        ref={numberRef}
        className="text-5xl font-bold text-got-accent md:text-7xl"
      >
        {prefix}0{suffix}
      </span>
    </span>
  );
}
