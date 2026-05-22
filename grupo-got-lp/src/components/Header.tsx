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
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-6 py-4">
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
          href="https://wa.me/5521992055840?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20marcas%20do%20GRUPO%20GOT."
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 hidden items-center gap-2 rounded-full bg-got-accent px-5 py-2 text-sm font-semibold text-got-black transition-opacity hover:opacity-90 md:inline-flex"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Fale com o Comercial
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="absolute right-6 cursor-pointer text-got-white md:hidden"
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
              href="https://wa.me/5521992055840?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20marcas%20do%20GRUPO%20GOT."
              target="_blank"
              rel="noopener noreferrer"
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
