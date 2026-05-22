"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ParallaxSection from "@/components/ui/ParallaxSection";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  {
    name: "THE OG",
    bg: "bg-got-black",
    logo: "/logos/logo-theog.png",
    est: "EST. 2018",
    description:
      "Marca brasileira de lifestyle focada em originalidade, estética urbana e produtos com identidade forte.",
    publico:
      "Cultura urbana, streetwear, lifestyle — 20 a 50 anos",
    diferencial:
      "Design marcante, qualidade acima da média, forte conexão emocional",
    url: "https://theog.com.br",
    urlLabel: "Visitar theog.com.br",
  },
  {
    name: "SESH",
    bg: "bg-got-dark",
    logo: "/logos/logo-sesh.png",
    est: "EST. 2023",
    description:
      "Marca inspirada no skate, hip hop, underground e cultura de rua.",
    publico:
      "Jovens conectados ao lifestyle street e cultura alternativa",
    diferencial:
      "Liberdade de expressão, humor, caos criativo, autenticidade sem tabu",
    url: "https://sesh.com.br",
    urlLabel: "Visitar sesh.com.br",
  },
];

export default function Brands() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!cardsRef.current) return;

      const cards = cardsRef.current.querySelectorAll(".brand-card");
      gsap.from(cards, {
        opacity: 0,
        scale: 0.95,
        rotation: -2,
        stagger: 0.2,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <ParallaxSection number="02" bgColor="bg-got-white">
      <div id="marcas" className="px-6 py-24 lg:px-16 lg:py-32">
        <SectionLabel label="NOSSAS MARCAS" className="mb-6" />

        <AnimatedText
          text="Conheça nosso portfólio"
          as="h2"
          className="mb-16 text-4xl font-black text-got-black lg:text-6xl"
        />

        {/* Brand cards */}
        <div
          ref={cardsRef}
          className="grid gap-8 lg:grid-cols-2"
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`brand-card rounded-2xl ${brand.bg} p-8 text-got-muted lg:p-12`}
            >
              <img
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                className="mb-6 h-16 object-contain"
              />

              <span className="mb-6 inline-block rounded-full border border-got-gray/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-got-light">
                {brand.est}
              </span>

              <p className="mb-6 text-base leading-relaxed text-got-muted lg:text-lg">
                {brand.description}
              </p>

              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-got-accent">
                  Público
                </span>
                <p className="mt-1 text-sm leading-relaxed text-got-light">
                  {brand.publico}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-got-accent">
                  Diferencial
                </span>
                <p className="mt-1 text-sm leading-relaxed text-got-light">
                  {brand.diferencial}
                </p>
              </div>

              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-got-gray/40 px-5 py-2.5 text-sm font-semibold text-got-pure transition-colors hover:border-got-accent hover:text-got-accent"
              >
                {brand.urlLabel} &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* Complementarity note */}
        <p className="mx-auto mt-14 max-w-3xl text-center text-sm italic leading-relaxed text-got-gray">
          Enquanto a THE OG traduz a originalidade de forma estética e
          aspiracional, a SESH expressa o lado mais cru e underground da cultura
          de rua. Juntas, cobrem todo o espectro do lifestyle urbano brasileiro.
        </p>
      </div>
    </ParallaxSection>
  );
}
