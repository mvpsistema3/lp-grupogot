"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function AgeGate() {
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified");
    if (verified === "true") {
      setVisible(false);
      return;
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    if (visible && overlayRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [visible]);

  const handleConfirm = () => {
    localStorage.setItem("ageVerified", "true");
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => setVisible(false),
      });
    }
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com";
  };

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-got-black px-6 text-center"
      style={{ zIndex: 9999, opacity: 0 }}
    >
      <div className="relative mb-10 flex flex-col items-center">
        <div className="absolute inset-0 -m-8 rounded-full bg-got-accent/5 blur-3xl" />
        <img
          src="/logos/logo-got.png"
          alt="GRUPO GOT"
          className="relative w-40"
          style={{ mixBlendMode: 'lighten' }}
        />
        <span className="relative mt-3 text-xs uppercase tracking-[0.5em] text-got-light">
          GRUPO GOT
        </span>
      </div>

      <p className="mb-3 max-w-md text-lg font-medium text-got-white">
        Este site é destinado a maiores de 18 anos.
      </p>

      <p className="mb-10 max-w-sm text-sm text-got-light">
        De acordo com a Lei 9.294/96, é proibida a venda para menores de 18
        anos.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          onClick={handleConfirm}
          className="cursor-pointer rounded-full bg-got-accent px-10 py-4 text-base font-bold text-got-black transition-opacity hover:opacity-90"
        >
          Sim, tenho 18 anos ou mais
        </button>

        <button
          onClick={handleDeny}
          className="cursor-pointer rounded-full border border-got-gray/40 bg-transparent px-6 py-2.5 text-xs text-got-light/70 transition-opacity hover:opacity-80"
        >
          Não
        </button>
      </div>
    </div>
  );
}
