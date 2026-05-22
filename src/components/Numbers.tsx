"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ParallaxSection from "@/components/ui/ParallaxSection";
import SectionLabel from "@/components/ui/SectionLabel";
import Counter from "@/components/ui/Counter";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { prefix: "+", value: 5, suffix: "", label: "Anos de mercado" },
  { prefix: "+", value: 5000, suffix: "", label: "Pontos de venda" },
  { prefix: "", value: 2, suffix: "", label: "Marcas no portfólio" },
  { prefix: "+", value: 15, suffix: "", label: "Colaboradores" },
  { prefix: "", value: 27, suffix: "", label: "Estados atendidos" },
];

export default function Numbers() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;

      const cards = gridRef.current.querySelectorAll(".stat-card");
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <ParallaxSection number="03">
      <div id="numeros" className="px-6 py-24 lg:px-16 lg:py-32">
        <SectionLabel label="NÚMEROS" className="mb-6" />
        <h2 className="mb-16 text-4xl font-black text-got-pure lg:text-6xl">
          Resultados que falam por si
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card rounded-2xl border border-got-gray/10 bg-got-dark p-6"
            >
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
              <p className="mt-3 text-sm uppercase tracking-wider text-got-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
