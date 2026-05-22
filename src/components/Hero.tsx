"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const watermarkBackRef = useRef<HTMLDivElement>(null);
  const watermarkFrontRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // --- Entrance animations (on load) ---
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        topTextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          socialsRef.current?.querySelectorAll(".social-icon") ?? [],
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          watermarkBackRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1 },
          "-=0.5"
        )
        .fromTo(
          watermarkFrontRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          subheadlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          badgesRef.current?.querySelectorAll(".badge-pill") ?? [],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          ctasRef.current?.querySelectorAll("button") ?? [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
          "-=0.3"
        );

      // --- Parallax on scroll ---
      if (watermarkBackRef.current) {
        gsap.to(watermarkBackRef.current, {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (watermarkFrontRef.current) {
        gsap.to(watermarkFrontRef.current, {
          y: -200,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-got-black"
    >
      {/* 1 - Background gradient layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(160deg, #0A0A0A 0%, #111111 40%, #0A0A0A 100%)",
        }}
      />
      {/* Subtle noise / dot pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F5F5F5 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* 2 - GOT watermark BEHIND content */}
      <div
        ref={watermarkBackRef}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <span
          className="got-watermark text-white"
          style={{ opacity: 0.08 }}
        >
          GOT
        </span>
      </div>

      {/* 3 - Main content layer */}
      <div
        ref={topTextRef}
        className="relative z-20 flex min-h-screen flex-col justify-between px-6 py-8 sm:px-12 sm:py-12"
      >
        {/* Top row */}
        <div className="flex items-start justify-between">
          <p className="text-xs tracking-widest text-got-light uppercase sm:text-sm">
            Autenticidade // Cultura // Express&atilde;o //
          </p>
          <div className="text-right text-xs tracking-widest text-got-light sm:text-sm">
            <p>Niter&oacute;i / RJ</p>
            <p>&copy; 2026</p>
          </div>
        </div>

        {/* Center spacer - watermark shows through */}
        <div className="flex-1" />

        {/* Bottom content */}
        <div className="flex flex-col gap-8">
          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="ml-auto max-w-md text-right text-base leading-relaxed text-got-muted sm:text-lg"
          >
            Transformamos cultura, autenticidade e express&atilde;o em marcas que
            geram identifica&ccedil;&atilde;o real nas pessoas.
          </p>

          {/* Badge pills */}
          <div
            ref={badgesRef}
            className="flex flex-wrap items-center justify-center gap-3 sm:justify-end"
          >
            <span className="badge-pill rounded-full border border-got-gray px-4 py-1.5 text-xs tracking-wide text-got-light">
              +5 anos
            </span>
            <span className="badge-pill rounded-full border border-got-gray px-4 py-1.5 text-xs tracking-wide text-got-light">
              +5.000 PDVs
            </span>
            <span className="badge-pill rounded-full border border-got-gray px-4 py-1.5 text-xs tracking-wide text-got-light">
              Nacional
            </span>
          </div>

          {/* CTAs */}
          <div
            ref={ctasRef}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <button
              type="button"
              className="cursor-pointer rounded-full bg-got-accent px-8 py-3 font-semibold text-got-black transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
            >
              Fale com nosso Comercial
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-full border border-got-gray px-8 py-3 text-got-muted transition-all duration-300 hover:border-got-light hover:text-got-pure"
            >
              Conhe&ccedil;a nossas marcas
            </button>
          </div>
        </div>
      </div>

      {/* 4 - GOT watermark IN FRONT (offset, different parallax) */}
      <div
        ref={watermarkFrontRef}
        className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
      >
        <span
          className="got-watermark text-white"
          style={{
            opacity: 0.05,
            transform: "translate(8%, 6%)",
          }}
        >
          GOT
        </span>
      </div>

      {/* 5 - Social sidebar */}
      <div
        ref={socialsRef}
        className="fixed left-4 top-1/2 z-30 -translate-y-1/2 sm:left-6"
      >
        <div className="flex flex-col gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="social-icon flex h-10 w-10 items-center justify-center rounded-full border border-got-gray text-got-light transition-all duration-300 hover:border-got-pure hover:text-got-pure"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="#"
            aria-label="X"
            className="social-icon flex h-10 w-10 items-center justify-center rounded-full border border-got-gray text-got-light transition-all duration-300 hover:border-got-pure hover:text-got-pure"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="social-icon flex h-10 w-10 items-center justify-center rounded-full border border-got-gray text-got-light transition-all duration-300 hover:border-got-pure hover:text-got-pure"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
