"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ParallaxSection from "@/components/ui/ParallaxSection";
import SectionLabel from "@/components/ui/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

export default function Brands() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!cardsRef.current) return;

      const cards = cardsRef.current.querySelectorAll(".brand-card");
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        scale: 0.95,
        rotation: -1,
        stagger: 0.25,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
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

        <h2 className="mb-4 text-5xl font-black text-got-black lg:text-7xl">
          Conheça nosso
          <br />
          <span className="text-got-accent">&ndash;</span>portfólio
        </h2>
        <p className="mb-16 max-w-lg text-base leading-relaxed text-got-gray">
          Duas marcas com identidade própria que cobrem todo o espectro do
          lifestyle urbano brasileiro.
        </p>

        {/* Brand cards */}
        <div ref={cardsRef} className="grid gap-6 lg:grid-cols-2">
          {/* THE OG */}
          <div className="brand-card group cursor-pointer overflow-hidden rounded-3xl bg-got-black transition-transform duration-500 hover:scale-[1.02]">
            {/* Logo area — white background so the logo renders correctly */}
            <div className="flex items-center justify-center bg-white p-8">
              <img
                src="/logos/logo-theog.png"
                alt="THE OG"
                className="h-20 object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10">
              <div className="mb-4 flex items-center gap-4">
                <span className="text-sm font-bold text-got-accent">2018</span>
                <span className="text-sm text-got-light">
                  Lifestyle &amp; Cultura
                </span>
              </div>

              <p className="mb-6 text-base leading-relaxed text-got-muted">
                Marca brasileira de lifestyle focada em originalidade, estética
                urbana e produtos com identidade forte.
              </p>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-got-accent">
                    Público
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-got-light">
                    Cultura urbana, streetwear, lifestyle — 20 a 50 anos
                  </p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-got-accent">
                    Diferencial
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-got-light">
                    Design marcante, qualidade acima da média, forte conexão
                    emocional
                  </p>
                </div>
              </div>

              <a
                href="https://theog.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-got-gray/30 px-6 py-3 text-sm text-got-pure transition hover:border-got-accent hover:text-got-accent"
              >
                Visitar theog.com.br &rarr;
              </a>
            </div>
          </div>

          {/* SESH */}
          <div className="brand-card group cursor-pointer overflow-hidden rounded-3xl bg-got-dark transition-transform duration-500 hover:scale-[1.02]">
            {/* Logo area — gradient dark background for the cyan logo */}
            <div
              className="flex items-center justify-center p-8"
              style={{
                background:
                  "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
              }}
            >
              <img
                src="/logos/logo-sesh.png"
                alt="SESH"
                className="h-20 object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10">
              <div className="mb-4 flex items-center gap-4">
                <span className="text-sm font-bold text-got-accent">2023</span>
                <span className="text-sm text-got-light">
                  Street &amp; Underground
                </span>
              </div>

              <p className="mb-6 text-base leading-relaxed text-got-muted">
                Marca inspirada no skate, hip hop, underground e cultura de rua.
              </p>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-got-accent">
                    Público
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-got-light">
                    Jovens conectados ao lifestyle street e cultura alternativa
                  </p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-got-accent">
                    Diferencial
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-got-light">
                    Liberdade de expressão, humor, caos criativo, autenticidade
                    sem tabu
                  </p>
                </div>
              </div>

              <a
                href="https://sesh.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-got-gray/30 px-6 py-3 text-sm text-got-pure transition hover:border-got-accent hover:text-got-accent"
              >
                Visitar sesh.com.br &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Complementarity note */}
        <p className="mx-auto mt-16 max-w-3xl text-center text-sm italic leading-relaxed text-got-gray">
          &ldquo;Enquanto a THE OG traduz a originalidade de forma estética e
          aspiracional, a SESH expressa o lado mais cru e underground da cultura
          de rua. Juntas, cobrem todo o espectro do lifestyle urbano
          brasileiro.&rdquo;
        </p>
      </div>
    </ParallaxSection>
  );
}
