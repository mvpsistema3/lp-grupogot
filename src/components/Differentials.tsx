"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Layers,
  MapPin,
  Users,
  Heart,
  Lightbulb,
  Shield,
} from "lucide-react";
import ParallaxSection from "@/components/ui/ParallaxSection";
import SectionLabel from "@/components/ui/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const differentials = [
  {
    icon: Layers,
    title: "Ecossistema com identidade real",
    description:
      "Não vendemos apenas produtos; construímos marcas com personalidade, cultura e propósito distintos.",
  },
  {
    icon: MapPin,
    title: "Cobertura nacional consolidada",
    description:
      "Presença em mais de 5.000 pontos de venda em todo o Brasil, com estrutura logística e comercial comprovada.",
  },
  {
    icon: Users,
    title: "Marcas complementares",
    description:
      "THE OG e SESH atendem vertentes distintas do lifestyle urbano, ampliando o alcance do distribuidor.",
  },
  {
    icon: Heart,
    title: "Relevância cultural",
    description:
      "As marcas geram pertencimento e identificação genuína, traduzindo-se em demanda orgânica e recorrente.",
  },
  {
    icon: Lightbulb,
    title: "Estrutura criativa própria",
    description:
      "Do conceito ao ponto de venda, o GRUPO GOT controla toda a cadeia de criação, produção e posicionamento.",
  },
  {
    icon: Shield,
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
        <h2 className="mb-16 text-4xl font-black text-got-black lg:text-6xl">
          Por que o GRUPO GOT
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {differentials.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="diff-card group rounded-2xl bg-got-black p-8 text-got-muted transition-all duration-500 hover:bg-got-accent hover:text-got-black"
              >
                <Icon
                  size={32}
                  className="mb-4 text-got-accent group-hover:text-got-black"
                />
                <h3 className="mb-2 text-lg font-bold text-got-pure group-hover:text-got-black">
                  {item.title}
                </h3>
                <p className="text-sm text-got-light group-hover:text-got-black/70">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </ParallaxSection>
  );
}
