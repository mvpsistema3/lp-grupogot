"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ParallaxSection from "@/components/ui/ParallaxSection";
import SectionLabel from "@/components/ui/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2018", title: "Fundação", text: "Fundação do ecossistema GRUPO GOT" },
  { year: "2018", title: "THE OG", text: "Nascimento da THE OG na cultura urbana" },
  { year: "2023", title: "SESH", text: "Criação da SESH no segmento street" },
  { year: "2024", title: "Comunidade", text: "Comunidade fiel com valores autênticos" },
  { year: "2025", title: "Expansão", text: "Expansão nacional: +5.000 PDVs" },
];

const pillars = [
  {
    title: "Propósito",
    text: "Transformar cultura, autenticidade e expressão em marcas que geram identificação real nas pessoas.",
  },
  {
    title: "Missão",
    text: "Desenvolver e fortalecer marcas autênticas que representem diferentes formas de viver a cultura urbana.",
  },
  {
    title: "Visão",
    text: "Ser reconhecido como um dos grupos de lifestyle e cultura urbana mais influentes do Brasil.",
  },
];

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll(".timeline-item");
        gsap.from(items, {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".pillar-card");
        gsap.from(cards, {
          opacity: 0,
          y: 50,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }
    },
    { dependencies: [] }
  );

  return (
    <ParallaxSection number="01" bgColor="bg-got-white">
      <div id="sobre" className="px-6 py-24 lg:px-16 lg:py-32">
        <SectionLabel label="SOBRE O GRUPO" className="mb-12" />

        {/* Hero split */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Left — headline */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-black leading-[1.05] text-got-black lg:text-7xl">
              Autenticidade
              <br />
              <span className="text-got-accent">–</span>Cultura
              <br />
              Expressão
            </h2>
          </div>

          {/* Right — copy */}
          <div className="lg:w-1/2">
            <SectionLabel label="NOSSA HISTÓRIA" className="mb-6" />

            <p className="mb-4 text-base leading-relaxed text-got-gray lg:text-lg">
              O GRUPO GOT nasceu do desejo de transformar cultura e autenticidade
              em marcas com identidade real. Desde 2018, construímos um
              ecossistema que conecta pessoas através de produtos, experiências e
              narrativas que representam diferentes formas de viver a cultura
              urbana.
            </p>

            <p className="mb-8 text-base leading-relaxed text-got-gray lg:text-lg">
              Como base criativa, estratégica e operacional, o grupo impulsiona
              cada marca com propósito, coragem e conexão genuína com a rua, a
              vivência e a criatividade.
            </p>

            <button className="rounded-full bg-got-black px-6 py-3 text-sm font-semibold text-got-pure transition-opacity hover:opacity-80">
              Conheça mais
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="mt-24">
          {/* Desktop — horizontal */}
          <div className="hidden lg:block">
            <div className="relative flex items-start justify-between">
              {/* connecting line */}
              <span className="absolute left-0 right-0 top-[7px] h-px bg-got-muted" />

              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="timeline-item relative flex w-1/5 flex-col items-start pr-6"
                >
                  <span className="relative z-10 mb-4 inline-block h-3.5 w-3.5 rounded-full border-2 border-got-accent bg-got-accent" />
                  <span className="mb-1 text-xs font-bold uppercase tracking-wider text-got-accent">
                    {m.year}
                  </span>
                  <span className="mb-1 text-sm font-bold text-got-black">
                    {m.title}
                  </span>
                  <span className="text-sm leading-snug text-got-gray">
                    {m.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile — vertical */}
          <div className="lg:hidden">
            <div className="relative border-l-2 border-got-muted pl-6">
              {milestones.map((m, i) => (
                <div key={i} className="timeline-item relative mb-8 last:mb-0">
                  <span className="absolute -left-[31px] top-0.5 inline-block h-3.5 w-3.5 rounded-full border-2 border-got-accent bg-got-accent" />
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-got-accent">
                    {m.year}
                  </span>
                  <span className="mb-1 block text-sm font-bold text-got-black">
                    {m.title}
                  </span>
                  <span className="block text-sm leading-snug text-got-gray">
                    {m.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillar cards */}
        <div
          ref={cardsRef}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pillars.map((p, i) => (
            <div
              key={i}
              className="pillar-card rounded-2xl border border-got-black/10 bg-got-black p-8 text-got-muted"
            >
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-got-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-4 text-xl font-black text-got-pure">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-got-light">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
