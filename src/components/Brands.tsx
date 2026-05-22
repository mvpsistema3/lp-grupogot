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
        <div ref={cardsRef} className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
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

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://theog.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-got-gray/30 px-5 py-2.5 text-sm text-got-pure transition hover:border-got-accent hover:text-got-accent"
                >
                  theog.com.br &rarr;
                </a>
                <a
                  href="https://wa.me/5521992055840?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20marca%20THE%20OG."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-got-accent px-5 py-2.5 text-sm font-semibold text-got-black transition hover:scale-[1.02]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Quero distribuir
                </a>
              </div>
            </div>
          </div>

          {/* SESH */}
          <div className="brand-card group cursor-pointer overflow-hidden rounded-3xl bg-got-dark transition-transform duration-500 hover:scale-[1.02]">
            {/* Logo area — white background for the SESH logo */}
            <div className="flex items-center justify-center bg-white p-8">
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

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://sesh.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-got-gray/30 px-5 py-2.5 text-sm text-got-pure transition hover:border-got-accent hover:text-got-accent"
                >
                  sesh.com.br &rarr;
                </a>
                <a
                  href="https://wa.me/5521992055840?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20marca%20SESH."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-got-accent px-5 py-2.5 text-sm font-semibold text-got-black transition hover:scale-[1.02]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Quero distribuir
                </a>
              </div>
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
