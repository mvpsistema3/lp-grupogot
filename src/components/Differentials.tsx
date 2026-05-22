"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const differentials = [
  {
    title: "Ecossistema com identidade real",
    description:
      "Não vendemos apenas produtos; construímos marcas com personalidade, cultura e propósito distintos.",
  },
  {
    title: "Cobertura nacional consolidada",
    description:
      "Presença em mais de 5.000 pontos de venda em todo o Brasil, com estrutura logística e comercial comprovada.",
  },
  {
    title: "Marcas complementares",
    description:
      "THE OG e SESH atendem vertentes distintas do lifestyle urbano, ampliando o alcance do distribuidor.",
  },
  {
    title: "Relevância cultural",
    description:
      "As marcas geram pertencimento e identificação genuína, traduzindo-se em demanda orgânica e recorrente.",
  },
  {
    title: "Estrutura criativa própria",
    description:
      "Do conceito ao ponto de venda, o GRUPO GOT controla toda a cadeia de criação, produção e posicionamento.",
  },
  {
    title: "Comunidade fiel e engajada",
    description:
      "Base de consumidores que se identificam com os valores e se tornam promotores espontâneos das marcas.",
  },
];

export default function Differentials() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current!.querySelectorAll(".diff-card");
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="diferenciais" className="relative overflow-hidden bg-got-white">
      <span className="section-number text-got-black">04</span>
      <div className="relative z-10 px-6 py-24 lg:px-16 lg:py-32">
        <div className="mb-6 flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-got-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-got-light">
            DIFERENCIAIS
          </span>
        </div>

        <h2 className="mb-6 text-5xl font-black text-got-black lg:text-7xl">
          Por que o<br />
          <span className="text-got-accent">–</span>GRUPO GOT
        </h2>
        <p className="mb-16 max-w-lg text-base leading-relaxed text-got-gray">
          Diferenciais que fazem do nosso ecossistema uma referência no mercado
          de lifestyle urbano brasileiro.
        </p>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {differentials.map((item, i) => (
            <div
              key={i}
              className="diff-card group cursor-pointer rounded-3xl bg-got-black p-8 transition-all duration-500 hover:bg-got-accent"
            >
              <span className="mb-4 block text-3xl font-black text-got-accent transition-colors duration-500 group-hover:text-got-black">
                {String(i + 1).padStart(2, "0")}
              </span>
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
    </section>
  );
}
