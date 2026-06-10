"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  COMMERCIAL_WHATSAPP,
  COMMERCIAL_WHATSAPP_DISPLAY,
  waLink,
} from "@/lib/contacts";

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

        <a
          href={waLink(COMMERCIAL_WHATSAPP)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl lg:text-5xl font-bold text-got-pure tracking-tight mb-4 hover:text-got-accent transition-colors"
        >
          {COMMERCIAL_WHATSAPP_DISPLAY}
        </a>
        <a
          href={waLink(COMMERCIAL_WHATSAPP, "Olá, gostaria de saber mais sobre o GRUPO GOT.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-lg lg:text-2xl text-got-accent hover:underline underline-offset-4"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Fale pelo WhatsApp
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
            GRUPO GOT. Todos os direitos reservados.
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
