"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ParallaxSection from "@/components/ui/ParallaxSection";
import SectionLabel from "@/components/ui/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const differentials = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84Z" />
        <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84l-3.5-1.59" />
        <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84l-3.5-1.59" />
      </svg>
    ),
    title: "Ecossistema com identidade real",
    description:
      "Não vendemos apenas produtos; construímos marcas com personalidade, cultura e propósito distintos.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Cobertura nacional consolidada",
    description:
      "Presença em mais de 5.000 pontos de venda em todo o Brasil, com estrutura logística e comercial comprovada.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Marcas complementares",
    description:
      "THE OG e SESH atendem vertentes distintas do lifestyle urbano, ampliando o alcance do distribuidor.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    title: "Relevância cultural",
    description:
      "As marcas geram pertencimento e identificação genuína, traduzindo-se em demanda orgânica e recorrente.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
    title: "Estrutura criativa própria",
    description:
      "Do conceito ao ponto de venda, o GRUPO GOT controla toda a cadeia de criação, produção e posicionamento.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
    title: "Comunidade fiel e engajada",
    description:
      "Base de consumidores que se identificam com os valores e se tornam promotores espontâneos das marcas.",
  },
];

export default function Differentials() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;

      const cards = gridRef.current.querySelectorAll(".diff-card");
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        scale: 0.9,
        stagger: {
          each: 0.1,
          from: "center",
        },
        duration: 0.7,
        ease: "power3.out",
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
    <ParallaxSection number="04" bgColor="bg-got-white">
      <div id="diferenciais" className="px-6 py-24 lg:px-16 lg:py-32">
        <SectionLabel label="DIFERENCIAIS" className="mb-6" />
        <h2 className="mb-6 text-5xl font-black text-got-black lg:text-7xl">
          Por que o<br />
          <span className="text-got-accent">–</span>GRUPO GOT
        </h2>
        <p className="mb-16 max-w-lg text-base leading-relaxed text-got-gray">
          Diferenciais que fazem do nosso ecossistema uma referência no mercado de lifestyle urbano brasileiro.
        </p>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {differentials.map((item, i) => (
            <div
              key={i}
              className="diff-card group cursor-pointer rounded-3xl bg-got-black p-8 text-got-muted transition-all duration-500 hover:bg-got-accent hover:text-got-black"
            >
              <div className="mb-5 text-got-accent transition-colors duration-500 group-hover:text-got-black">
                {item.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-got-pure transition-colors duration-500 group-hover:text-got-black">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-got-light transition-colors duration-500 group-hover:text-got-black/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
