"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const brands = {
  sesh: {
    name: "SESH",
    year: "2023",
    category: "Street & Underground",
    description:
      "Marca inspirada no skate, hip hop, underground e cultura de rua.",
    publico: "Jovens conectados ao lifestyle street e cultura alternativa",
    diferencial:
      "Liberdade de expressão, humor, caos criativo, autenticidade sem tabu",
    site: "https://sesh.com.br",
    siteLabel: "sesh.com.br",
    whatsapp:
      "https://wa.me/5521992055840?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20marca%20SESH.",
    logo: "/logos/logo-sesh.png",
    photo: "/photos/foto-sesh.png",
  },
  theog: {
    name: "THE OG",
    year: "2018",
    category: "Lifestyle & Cultura",
    description:
      "Marca brasileira de lifestyle focada em originalidade, estética urbana e produtos com identidade forte.",
    publico: "Cultura urbana, streetwear, lifestyle — 20 a 50 anos",
    diferencial:
      "Design marcante, qualidade acima da média, forte conexão emocional",
    site: "https://theog.com.br",
    siteLabel: "theog.com.br",
    whatsapp:
      "https://wa.me/5521992055840?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20marca%20THE%20OG.",
    logo: "/logos/logo-theog.png",
    photo: "/photos/foto-theog.jpg",
  },
};

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Brands() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      // Phase 1: Title + subtitle fade in and settle (0 → 0.15)
      tl.from(".brands-heading", {
        autoAlpha: 0,
        y: 60,
        duration: 0.15,
        ease: "power2.out",
      });

      // Phase 2: SESH content slides in from right + photo appears (0.15 → 0.35)
      tl.from(
        ".brand-content",
        {
          autoAlpha: 0,
          x: 80,
          duration: 0.15,
          ease: "power2.out",
        },
        0.15
      );
      tl.from(
        ".photo-container",
        {
          autoAlpha: 0,
          scale: 0.85,
          duration: 0.15,
          ease: "power2.out",
        },
        0.18
      );

      // Phase 3: Pause zone — user sees SESH (0.35 → 0.45)
      tl.to({}, { duration: 0.1 });

      // Phase 4: Photo flips + info swaps (0.45 → 0.65)
      // Fade out SESH info
      tl.to(
        ".info-sesh",
        {
          autoAlpha: 0,
          x: -30,
          duration: 0.08,
          ease: "power2.in",
        },
        0.45
      );

      // Flip the photo card — first half (show edge)
      tl.to(
        ".photo-flipper",
        {
          rotateY: 90,
          duration: 0.1,
          ease: "power2.in",
        },
        0.45
      );

      // Swap visible face at midpoint
      tl.set(".face-sesh", { autoAlpha: 0 }, 0.55);
      tl.set(".face-theog", { autoAlpha: 1 }, 0.55);

      // Complete flip
      tl.to(
        ".photo-flipper",
        {
          rotateY: 180,
          duration: 0.1,
          ease: "power2.out",
        },
        0.55
      );

      // Fade in THE OG info
      tl.fromTo(
        ".info-theog",
        {
          autoAlpha: 0,
          x: 30,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.08,
          ease: "power2.out",
        },
        0.57
      );

      // Phase 5: Pause zone — user sees THE OG (0.65 → 0.85)
      tl.to({}, { duration: 0.2 });

      // Phase 6: Everything fades out to transition to next section (0.85 → 1)
      tl.to(".brands-inner", {
        autoAlpha: 0,
        y: -40,
        duration: 0.15,
        ease: "power2.in",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="marcas"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-got-white"
    >
      <span className="section-number text-got-black">02</span>

      <div className="brands-inner relative z-10 flex h-full items-center px-6 lg:px-16">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left column — Title (centered horizontally in its column, left vertically) */}
          <div className="brands-heading flex flex-col justify-center lg:col-span-4">
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-got-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-got-light">
                NOSSAS MARCAS
              </span>
            </div>
            <h2 className="mb-4 text-5xl font-black text-got-black lg:text-7xl">
              Conheça nosso
              <br />
              <span className="text-got-accent">&ndash;</span>portfólio
            </h2>
            <p className="max-w-md text-base leading-relaxed text-got-gray">
              Duas marcas com identidade própria que cobrem todo o espectro do
              lifestyle urbano brasileiro.
            </p>
          </div>

          {/* Center column — Photo with flip */}
          <div className="photo-container flex items-center justify-center lg:col-span-4">
            <div
              className="photo-flipper relative h-[420px] w-[320px] lg:h-[500px] lg:w-[380px]"
              style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
            >
              {/* SESH face */}
              <div
                className="face-sesh absolute inset-0 overflow-hidden rounded-3xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={brands.sesh.photo}
                  alt="SESH"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <img
                    src={brands.sesh.logo}
                    alt="SESH logo"
                    className="h-10 object-contain brightness-0 invert"
                  />
                </div>
              </div>

              {/* THE OG face (initially hidden) */}
              <div
                className="face-theog absolute inset-0 overflow-hidden rounded-3xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  opacity: 0,
                  visibility: "hidden",
                }}
              >
                <img
                  src={brands.theog.photo}
                  alt="THE OG"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <img
                    src={brands.theog.logo}
                    alt="THE OG logo"
                    className="h-10 object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Brand info (swaps between SESH and THE OG) */}
          <div className="brand-content relative flex items-center lg:col-span-4">
            {/* SESH info */}
            <div className="info-sesh absolute inset-0 flex flex-col justify-center">
              <BrandInfo brand={brands.sesh} />
            </div>

            {/* THE OG info */}
            <div
              className="info-theog absolute inset-0 flex flex-col justify-center"
              style={{ opacity: 0, visibility: "hidden" }}
            >
              <BrandInfo brand={brands.theog} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandInfo({
  brand,
}: {
  brand: (typeof brands)[keyof typeof brands];
}) {
  return (
    <div className="rounded-3xl bg-got-black p-8 lg:p-10">
      <div className="mb-4 flex items-center gap-4">
        <span className="text-sm font-bold text-got-accent">{brand.year}</span>
        <span className="text-sm text-got-light">{brand.category}</span>
      </div>

      <h3 className="mb-3 text-2xl font-black text-got-pure">{brand.name}</h3>

      <p className="mb-6 text-base leading-relaxed text-got-muted">
        {brand.description}
      </p>

      <div className="mb-6 grid grid-cols-2 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-got-accent">
            Público
          </span>
          <p className="mt-1 text-sm leading-relaxed text-got-light">
            {brand.publico}
          </p>
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-got-accent">
            Diferencial
          </span>
          <p className="mt-1 text-sm leading-relaxed text-got-light">
            {brand.diferencial}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={brand.site}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-got-gray/30 px-5 py-2.5 text-sm text-got-pure transition hover:border-got-accent hover:text-got-accent"
        >
          {brand.siteLabel} &rarr;
        </a>
        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-got-accent px-5 py-2.5 text-sm font-semibold text-got-black transition hover:scale-[1.02]"
        >
          <WhatsAppIcon />
          Quero distribuir
        </a>
      </div>
    </div>
  );
}
