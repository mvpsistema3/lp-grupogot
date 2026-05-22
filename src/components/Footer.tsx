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
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="bg-got-black text-got-muted overflow-hidden">
      {/* Giant GOT Text */}
      <div className="relative py-12 lg:py-20">
        <div
          ref={giantTextRef}
          className="text-[12rem] lg:text-[20rem] font-black leading-none text-center text-got-accent select-none"
        >
          GOT
        </div>
      </div>

      {/* Contact Info */}
      <div className="relative px-6 py-16 lg:py-24 flex flex-col items-center text-center">
        <span className="absolute left-8 top-1/2 -translate-y-1/2 text-got-accent text-4xl lg:text-6xl font-light select-none hidden lg:block">
          +
        </span>
        <span className="absolute right-8 top-1/2 -translate-y-1/2 text-got-accent text-4xl lg:text-6xl font-light select-none hidden lg:block">
          +
        </span>

        <p className="text-4xl lg:text-6xl font-bold text-got-pure mb-4">
          +55 (21) XXXX-XXXX
        </p>
        <a
          href="mailto:comercial@grupogot.com.br"
          className="text-xl lg:text-2xl text-got-accent hover:underline"
        >
          comercial@grupogot.com.br
        </a>
      </div>

      {/* Separator */}
      <div className="border-t border-got-gray/20 mx-6 lg:mx-12" />

      {/* Bottom Section */}
      <div className="px-6 lg:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
        {/* Left */}
        <div className="space-y-3">
          <p className="text-got-pure font-bold text-lg">GRUPO GOT</p>
          <p className="text-got-light text-sm">
            Autenticidade // Cultura // Expressão
          </p>
          <p className="text-got-gray text-xs">
            © 2026 GRUPO GOT. Todos os direitos reservados.
          </p>
          <p className="text-got-gray text-xs">Tog Brasil LTDA</p>
        </div>

        {/* Center */}
        <div className="flex flex-col items-start lg:items-center space-y-2 text-sm">
          <a
            href="https://theog.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-got-light hover:text-got-accent transition-colors"
          >
            theog.com.br
          </a>
          <a
            href="https://sesh.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-got-light hover:text-got-accent transition-colors"
          >
            sesh.com.br
          </a>
          <Link
            href="/privacidade"
            className="text-got-light hover:text-got-accent transition-colors"
          >
            Política de Privacidade
          </Link>
          <Link
            href="/termos"
            className="text-got-light hover:text-got-accent transition-colors"
          >
            Termos de Uso
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-start lg:justify-end gap-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-got-light hover:text-got-accent transition-colors"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-got-light hover:text-got-accent transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-got-light hover:text-got-accent transition-colors"
            aria-label="X"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>

      {/* Legal Notices */}
      <div className="border-t border-got-gray/20 mx-6 lg:mx-12" />
      <div className="px-6 lg:px-12 py-6 space-y-1 text-center">
        <p className="uppercase text-xs text-got-gray">
          PROIBIDA A VENDA PARA MENORES DE 18 ANOS.
        </p>
        <p className="text-xs text-got-gray">
          De acordo com a Lei 9.294/96 e regulamentações ANVISA.
        </p>
      </div>
    </footer>
  );
}
