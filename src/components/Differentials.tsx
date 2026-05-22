"use client";

import { useRef, useEffect, useState } from "react";

const differentials = [
  {
    title: "Ecossistema de marcas com identidade real",
    description:
      "Não vendemos apenas produtos; construímos marcas com personalidade, cultura e propósito distintos. Cada marca do grupo carrega verdade, identidade e essência própria.",
  },
  {
    title: "Cobertura nacional consolidada",
    description:
      "Presença em mais de 5.000 pontos de venda em todo o Brasil, com estrutura logística e comercial comprovada. Atuação em todos os 27 estados do território nacional.",
  },
  {
    title: "Marcas complementares para diferentes públicos",
    description:
      "THE OG e SESH atendem vertentes distintas do lifestyle urbano, ampliando o alcance do distribuidor. Juntas, cobrem todo o espectro da cultura urbana brasileira.",
  },
  {
    title: "Relevância cultural, não apenas comercial",
    description:
      "As marcas geram pertencimento e identificação genuína, traduzindo-se em demanda orgânica e recorrente. Relações construídas através da rua, da vivência e da criatividade.",
  },
  {
    title: "Estrutura criativa e estratégica própria",
    description:
      "Do conceito ao ponto de venda, o GRUPO GOT controla toda a cadeia de criação, produção e posicionamento. Inovação e a força de sair do padrão para construir algo único.",
  },
  {
    title: "Comunidade fiel e engajada",
    description:
      "Base de consumidores que se identificam com os valores e se tornam promotores espontâneos das marcas. Mais de 5 anos construindo conexões reais com pessoas e cultura.",
  },
];

export default function Differentials() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      className="relative overflow-hidden bg-got-white"
    >
      <span className="section-number text-got-black">04</span>
      <div className="relative z-10 px-6 py-24 lg:px-16 lg:py-32">
        <div className="mb-6 flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-got-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-got-light">
            DIFERENCIAIS
          </span>
        </div>

        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-5xl font-black text-got-black lg:text-7xl">
            Por que o<br />
            <span className="text-got-accent">–</span>GRUPO GOT
          </h2>
          <p className="max-w-md text-base leading-relaxed text-got-gray lg:text-right">
            Mais de 5 anos transformando cultura e autenticidade em marcas que
            geram identificação real. Conheça os diferenciais que fazem do nosso
            ecossistema uma referência no lifestyle urbano brasileiro.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, i) => (
            <div
              key={i}
              className="group cursor-pointer rounded-3xl bg-got-black p-8 transition-all duration-500 hover:bg-got-accent"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
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
