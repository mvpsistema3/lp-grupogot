"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ParallaxSection from "@/components/ui/ParallaxSection";
import SectionLabel from "@/components/ui/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_URL =
  "https://wa.me/5521992055840?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20trabalhar%20no%20GRUPO%20GOT.";

export default function CareersForm() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const items = sectionRef.current.querySelectorAll(".anim-career");
      gsap.from(items, {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <ParallaxSection number="06" bgColor="bg-got-dark">
      <div
        id="trabalhe-conosco"
        ref={sectionRef}
        className="px-6 py-28 lg:px-16 lg:py-40"
      >
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel label="TRABALHE CONOSCO" className="mb-6 justify-center" />

          <h2 className="anim-career mb-6 text-5xl font-black text-got-pure lg:text-7xl tracking-tight">
            Faça parte do
            <br />
            <span className="text-got-accent">–</span>GRUPO GOT
          </h2>

          <p className="anim-career mx-auto mb-4 max-w-xl text-lg italic leading-relaxed text-got-light">
            &ldquo;Se você vive cultura, respira criatividade e quer construir
            algo real, queremos conhecer você.&rdquo;
          </p>

          <p className="anim-career mx-auto mb-12 max-w-2xl text-base leading-relaxed text-got-light/70">
            Estamos sempre em busca de talentos nas áreas de Criação, Comercial,
            Operações e Marketing. Entre em contato pelo WhatsApp e conte-nos
            sobre o seu perfil.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="anim-career group inline-flex items-center gap-3 rounded-full border-2 border-got-accent px-10 py-5 text-lg font-bold text-got-accent transition-all duration-300 hover:bg-got-accent hover:text-got-black hover:scale-[1.03]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="shrink-0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quero fazer parte
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <div className="anim-career mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/5521992055840?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20%C3%A1rea%20de%20Cria%C3%A7%C3%A3o%20do%20GRUPO%20GOT."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-got-gray/30 px-5 py-2.5 text-sm text-got-light transition hover:border-got-accent hover:text-got-accent"
            >
              Criação
            </a>
            <a
              href="https://wa.me/5521992055840?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20%C3%A1rea%20Comercial%20do%20GRUPO%20GOT."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-got-gray/30 px-5 py-2.5 text-sm text-got-light transition hover:border-got-accent hover:text-got-accent"
            >
              Comercial
            </a>
            <a
              href="https://wa.me/5521992055840?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20%C3%A1rea%20de%20Opera%C3%A7%C3%B5es%20do%20GRUPO%20GOT."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-got-gray/30 px-5 py-2.5 text-sm text-got-light transition hover:border-got-accent hover:text-got-accent"
            >
              Operações
            </a>
            <a
              href="https://wa.me/5521992055840?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20%C3%A1rea%20de%20Marketing%20do%20GRUPO%20GOT."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-got-gray/30 px-5 py-2.5 text-sm text-got-light transition hover:border-got-accent hover:text-got-accent"
            >
              Marketing
            </a>
          </div>

          <p className="anim-career mt-8 text-xs text-got-gray/60">
            Atendimento de Seg a Sex, 9h às 18h
          </p>
        </div>
      </div>
    </ParallaxSection>
  );
}
