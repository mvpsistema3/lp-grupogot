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
  const heroImageRef = useRef<HTMLDivElement>(null);
  const glassCardsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Hero image placeholder scales in
      tl.fromTo(
        heroImageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.2 }
      );

      // 2. Watermark back fades in
      tl.fromTo(
        watermarkBackRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.9"
      );

      // 3. Watermark front fades in
      tl.fromTo(
        watermarkFrontRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.6"
      );

      // 4. Glass tooltip cards stagger in
      const cards = glassCardsRef.current?.querySelectorAll(".glass-tooltip");
      if (cards && cards.length > 0) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 30, rotation: 0 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 },
          "-=0.4"
        );
      }

      // 5. Top text fades in
      tl.fromTo(
        topTextRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );

      // 6. Bottom badges and CTAs stagger up
      const bottomItems = bottomRef.current?.querySelectorAll(".anim-item");
      if (bottomItems && bottomItems.length > 0) {
        tl.fromTo(
          bottomItems,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
          "-=0.2"
        );
      }

      // 7. Social icons stagger from left
      const icons = socialsRef.current?.querySelectorAll(".social-icon");
      if (icons && icons.length > 0) {
        tl.fromTo(
          icons,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.1 },
          "-=0.3"
        );
      }

      // --- Social sidebar: turn green + show brand names on scroll ---
      const socialIcons = socialsRef.current?.querySelectorAll(".social-icon");
      const socialLabels = socialsRef.current?.querySelectorAll(".social-label");
      if (socialIcons && socialIcons.length > 0) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress > 0.05) {
              socialIcons.forEach((icon) => {
                (icon as HTMLElement).style.borderColor = "rgba(200,255,0,0.5)";
                (icon as HTMLElement).style.color = "var(--color-got-accent)";
              });
              socialLabels?.forEach((label) => {
                (label as HTMLElement).style.opacity = "1";
                (label as HTMLElement).style.maxWidth = "80px";
              });
            } else {
              socialIcons.forEach((icon) => {
                (icon as HTMLElement).style.borderColor = "";
                (icon as HTMLElement).style.color = "";
              });
              socialLabels?.forEach((label) => {
                (label as HTMLElement).style.opacity = "0";
                (label as HTMLElement).style.maxWidth = "0";
              });
            }
          },
        });
      }

      // --- ScrollTrigger parallax ---
      if (watermarkBackRef.current) {
        gsap.to(watermarkBackRef.current, {
          y: -80,
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
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (glassCardsRef.current) {
        gsap.to(glassCardsRef.current, {
          y: -60,
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
      {/* ===== 1. BACKGROUND ===== */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(160deg, #0A0A0A 0%, #111111 40%, #0A0A0A 100%)",
        }}
      />
      {/* Fine grain noise texture */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
      {/* Blurred accent circle */}
      <div
        className="absolute left-1/2 top-1/3 z-[2] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.03]"
        style={{
          background: "var(--color-got-accent)",
          filter: "blur(200px)",
        }}
      />

      {/* ===== 2. LOGO WATERMARK BACK LAYER ===== */}
      <div
        ref={watermarkBackRef}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <img
          src="/logos/logo-got.png"
          alt=""
          aria-hidden="true"
          className="w-[80vw] max-w-[800px] select-none"
          style={{
            opacity: 0.12,
            mixBlendMode: "lighten",
          }}
          draggable={false}
        />
      </div>

      {/* ===== 3. HERO IMAGE PLACEHOLDER ===== */}
      <div
        ref={heroImageRef}
        className="absolute inset-0 z-[15] flex items-center justify-center px-6"
      >
        <div className="relative w-full max-w-4xl">
          {/* 16:9 aspect ratio container */}
          <div
            className="relative overflow-hidden rounded-3xl border border-got-gray/10"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Dark gradient fill */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0d0d0d 100%)",
              }}
            />
            {/* Smoke/wave CSS pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 50%, rgba(200,255,0,0.04) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(255,255,255,0.02) 0%, transparent 50%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.01) 120deg, transparent 240deg, rgba(200,255,0,0.02) 360deg)",
              }}
            />
            {/* Glass overlay with text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-12 py-8 backdrop-blur-sm">
                <p className="text-center text-2xl font-bold tracking-[0.2em] text-white/20 uppercase sm:text-4xl">
                  GRUPO GOT
                </p>
              </div>
            </div>
          </div>

          {/* Glassmorphism tooltip cards */}
          <div ref={glassCardsRef}>
            <div
              className="glass-tooltip absolute -left-4 top-8 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-md sm:-left-12 sm:top-12"
              style={{ transform: "rotate(-2deg)" }}
            >
              <p className="text-[10px] font-medium tracking-wider text-got-light/90 uppercase sm:text-xs">
                THE OG &mdash; Est. 2018
              </p>
              <p className="mt-0.5 text-[10px] text-got-light/50 sm:text-[11px]">
                Lifestyle &amp; Cultura
              </p>
            </div>
            <div
              className="glass-tooltip absolute -right-4 bottom-8 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-md sm:-right-12 sm:bottom-12"
              style={{ transform: "rotate(1.5deg)" }}
            >
              <p className="text-[10px] font-medium tracking-wider text-got-light/90 uppercase sm:text-xs">
                SESH &mdash; Est. 2023
              </p>
              <p className="mt-0.5 text-[10px] text-got-light/50 sm:text-[11px]">
                Street &amp; Underground
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 4. LOGO WATERMARK FRONT LAYER ===== */}
      <div
        ref={watermarkFrontRef}
        className="pointer-events-none absolute inset-0 z-[25] flex items-center justify-center"
      >
        <img
          src="/logos/logo-got.png"
          alt=""
          aria-hidden="true"
          className="w-[80vw] max-w-[800px] select-none"
          style={{
            opacity: 0.06,
            mixBlendMode: "lighten",
          }}
          draggable={false}
        />
      </div>

      {/* ===== 5. CONTENT OVERLAY ===== */}
      <div className="relative z-30 flex min-h-screen flex-col justify-between px-6 py-8 sm:px-12 sm:py-12">
        {/* Top section */}
        <div ref={topTextRef} className="flex items-start justify-between">
          <p className="text-[10px] tracking-[0.3em] text-got-light/70 uppercase sm:text-xs">
            Autenticidade // Cultura // Express&atilde;o //
          </p>
          <p className="text-[10px] text-got-light/50 sm:text-xs">
            GRUPO GOT
          </p>
          <div className="text-right text-[10px] text-got-light/70 sm:text-xs">
            <p>Niter&oacute;i / RJ</p>
            <p className="mt-0.5 text-got-light/50">
              R. Visconde do Rio Branco
            </p>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom section */}
        <div ref={bottomRef} className="flex flex-col items-center gap-6">
          {/* Headline */}
          <p className="anim-item max-w-lg text-center text-base leading-relaxed text-got-muted">
            Cultura, originalidade e express&atilde;o transformadas em marcas que
            conectam pessoas.
          </p>

          {/* Badges row */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="anim-item rounded-full border border-got-gray/20 px-4 py-2 text-xs text-got-light">
              +5 anos
            </span>
            <span className="anim-item rounded-full border border-got-gray/20 px-4 py-2 text-xs text-got-light">
              +5.000 PDVs
            </span>
            <span className="anim-item rounded-full border border-got-gray/20 px-4 py-2 text-xs text-got-light">
              Nacional
            </span>
          </div>

          {/* CTAs row */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5521992055840?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20marcas%20do%20GRUPO%20GOT."
              target="_blank"
              rel="noopener noreferrer"
              className="anim-item inline-flex items-center justify-center gap-2 rounded-full bg-got-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-got-black transition-transform hover:scale-[1.02]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Fale com nosso Comercial
            </a>
            <a
              href="#marcas"
              onClick={(e) => { e.preventDefault(); document.getElementById('marcas')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="anim-item inline-flex items-center justify-center rounded-full border border-got-gray/30 px-8 py-3.5 text-sm text-got-muted transition-colors hover:border-got-light cursor-pointer"
            >
              Conhe&ccedil;a nossas marcas
            </a>
          </div>
        </div>
      </div>

      {/* ===== 6. SOCIAL SIDEBAR ===== */}
      <div
        ref={socialsRef}
        className="social-sidebar absolute left-6 top-1/2 z-30 hidden -translate-y-1/2 lg:flex lg:flex-col lg:gap-3"
      >
        <a
          href="https://www.instagram.com/the_og.br/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="THE OG Instagram"
          className="social-icon group/social flex items-center gap-2 rounded-full border border-got-gray/30 text-got-light/60 transition-all duration-500 hover:border-got-accent/60 hover:text-got-accent h-10 px-3"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span className="social-label overflow-hidden whitespace-nowrap text-[10px] font-bold uppercase tracking-wider opacity-0 max-w-0 transition-all duration-500">THE OG</span>
        </a>
        <a
          href="https://www.instagram.com/sesh_oficial/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SESH Instagram"
          className="social-icon group/social flex items-center gap-2 rounded-full border border-got-gray/30 text-got-light/60 transition-all duration-500 hover:border-got-accent/60 hover:text-got-accent h-10 px-3"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span className="social-label overflow-hidden whitespace-nowrap text-[10px] font-bold uppercase tracking-wider opacity-0 max-w-0 transition-all duration-500">SESH</span>
        </a>
      </div>
    </section>
  );
}
