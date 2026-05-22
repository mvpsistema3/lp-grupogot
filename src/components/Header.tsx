"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Marcas", href: "#marcas" },
  { label: "Números", href: "#numeros" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
  { label: "Trabalhe Conosco", href: "#trabalhe-conosco" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const item of NAV_ITEMS) {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-got-black/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <img
            src="/logos/logo-got.png"
            alt="GRUPO GOT"
            className="h-10 object-contain"
            style={{ mixBlendMode: 'lighten' }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-all ${
                activeSection === item.href
                  ? "border-got-pure bg-got-pure text-got-black"
                  : "border-got-gray/30 bg-transparent text-got-light hover:border-got-gray/60"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contato"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#contato");
          }}
          className="hidden shrink-0 rounded-full bg-got-accent px-5 py-2 text-sm font-semibold text-got-black transition-opacity hover:opacity-90 md:block"
        >
          Fale com o Comercial
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="cursor-pointer text-got-white md:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="border-t border-got-gray/20 bg-got-black/95 px-6 pb-6 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-2 pt-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`cursor-pointer rounded-full border px-4 py-2 text-left text-sm transition-all ${
                  activeSection === item.href
                    ? "border-got-pure bg-got-pure text-got-black"
                    : "border-got-gray/30 bg-transparent text-got-light"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contato");
              }}
              className="mt-2 rounded-full bg-got-accent px-5 py-2 text-center text-sm font-semibold text-got-black"
            >
              Fale com o Comercial
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
