"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const giantTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!giantTextRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { scale: 0.3 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: giantTextRef.current,
            start: "top bottom",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="bg-got-black text-got-muted overflow-hidden">
      {/* DRAMATIC GOT - Giant accent text that scales up on scroll */}
      <div className="relative py-20 lg:py-32 flex items-center justify-center">
        {/* Glow behind */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-got-accent/5 rounded-full blur-[120px]" />
        </div>
        <div ref={giantTextRef} className="relative">
          <span className="block text-[10rem] md:text-[16rem] lg:text-[22rem] font-black leading-[0.8] text-got-accent select-none tracking-tighter">
            GOT
          </span>
          <span className="block text-center text-xs uppercase tracking-[0.5em] text-got-light mt-4">
            GRUPO
          </span>
        </div>
      </div>

      {/* Contact section */}
      <div className="relative px-6 py-20 lg:py-28 flex flex-col items-center text-center">
        {/* Decorative + */}
        <span className="absolute left-8 top-1/2 -translate-y-1/2 text-got-accent/30 text-5xl font-light select-none hidden lg:block">
          +
        </span>
        <span className="absolute right-8 top-1/2 -translate-y-1/2 text-got-accent/30 text-5xl font-light select-none hidden lg:block">
          +
        </span>

        <p className="text-3xl lg:text-5xl font-bold text-got-pure tracking-tight mb-4">
          +55 (21) XXXX-XXXX
        </p>
        <a
          href="mailto:comercial@grupogot.com.br"
          className="text-lg lg:text-2xl text-got-accent hover:underline underline-offset-4"
        >
          comercial@grupogot.com.br
        </a>
      </div>

      {/* Separator */}
      <div className="border-t border-got-gray/10 mx-8 lg:mx-16" />

      {/* Bottom 3-col */}
      <div className="px-8 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Brand info */}
        <div className="space-y-2">
          <img
            src="/logos/logo-got.png"
            alt="GRUPO GOT"
            className="h-10 object-contain mb-3"
            style={{ mixBlendMode: "lighten" }}
          />
          <p className="text-xs uppercase tracking-[0.3em] text-got-light/60">
            Autenticidade // Cultura // Expressão
          </p>
          <p className="text-xs text-got-gray/60 mt-4">
            © 2026 GRUPO GOT. Todos os direitos reservados.
          </p>
          <p className="text-xs text-got-gray/60">Tog Brasil LTDA</p>
        </div>

        {/* Center: Links */}
        <div className="flex flex-col items-start lg:items-center gap-2.5 text-sm">
          <a
            href="https://theog.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-got-light/70 hover:text-got-accent transition-colors"
          >
            theog.com.br
          </a>
          <a
            href="https://sesh.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-got-light/70 hover:text-got-accent transition-colors"
          >
            sesh.com.br
          </a>
          <Link
            href="/privacidade"
            className="text-got-light/70 hover:text-got-accent transition-colors"
          >
            Política de Privacidade
          </Link>
          <Link
            href="/termos"
            className="text-got-light/70 hover:text-got-accent transition-colors"
          >
            Termos de Uso
          </Link>
        </div>

        {/* Right: Social (Instagram only) */}
        <div className="flex flex-col items-start lg:items-end gap-3">
          <a
            href="https://www.instagram.com/the_og.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-got-light/50 hover:text-got-accent transition-colors text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            @the_og.br
          </a>
          <a
            href="https://www.instagram.com/sesh_oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-got-light/50 hover:text-got-accent transition-colors text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            @sesh_oficial
          </a>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-got-gray/10 mx-8 lg:mx-16" />
      <div className="px-8 lg:px-16 py-6 text-center space-y-1">
        <p className="uppercase text-[10px] tracking-[0.2em] text-got-gray/50 font-medium">
          PROIBIDA A VENDA PARA MENORES DE 18 ANOS.
        </p>
        <p className="text-[10px] text-got-gray/40">
          De acordo com a Lei 9.294/96 e regulamentações ANVISA.
        </p>
      </div>
    </footer>
  );
}
