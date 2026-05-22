"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface AnimatedTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  splitBy?: "words" | "chars";
  stagger?: number;
}

export default function AnimatedText({
  text,
  as: Tag = "p",
  className = "",
  splitBy = "words",
  stagger = 0.05,
}: AnimatedTextProps) {
  const elementRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!elementRef.current) return;

      const split = SplitText.create(elementRef.current, {
        type: splitBy,
      });

      const targets = splitBy === "chars" ? split.chars : split.words;

      gsap.from(targets, {
        opacity: 0,
        y: 30,
        stagger,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: elementRef }
  );

  return (
    <Tag
      ref={elementRef as React.Ref<HTMLHeadingElement & HTMLParagraphElement>}
      className={className}
    >
      {text}
    </Tag>
  );
}
