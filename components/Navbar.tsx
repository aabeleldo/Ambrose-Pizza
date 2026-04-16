"use client";
import { useEffect, useState, useCallback } from "react";

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Order", href: "#order" },
  { label: "About", href: "#about" },
  { label: "Hours", href: "#hours" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll listener — fills in the navbar background after scrolling down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracker via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => { if (s) observer.observe(s); });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, []);

  return (
    <>
      {/* ── Main bar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-neutral-950/90 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          
            <a href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
          >
            <span className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform duration-200">
              A
            </span>
            <span className="text-white font-serif font-bold text-lg tracking-wide leading-none">
              Ambrose <span className="text-red-500">Pizza</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                
                  <a key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 group ${
                    isActive ? "text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {/* Active pill */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/10 border border-white/10" />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}

            {/* CTA */}
            
              <a href="#order"
              onClick={(e) => { e.preventDefault(); handleNavClick("#order"); }}
              className="ml-3 px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-full transition-all duration-200 shadow-lg shadow-red-900/40 hover:scale-105 hover:shadow-red-800/60"
            >
              Order Now
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] group"
          >
            <span
              className={`block h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
              }`}
            />
            <span
              className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
              }`}
            />
          </button>

        </div>
      </header>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Blurred translucent backdrop */}
        <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-xl" />

        {/* Subtle red glow top-left */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-700/20 rounded-full blur-3xl pointer-events-none" />
        {/* Subtle red glow bottom-right */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-900/20 rounded-full blur-3xl pointer-events-none" />

        {/* Links */}
        <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-2">

          {/* Brand mark in overlay */}
          <div
            className={`mb-8 text-center transition-all duration-500 delay-100 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-white/20 text-xs uppercase tracking-[0.4em] font-semibold">Ambrose Pizza</p>
          </div>

          {NAV_LINKS.map((link, i) => (
            
              <a key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`relative text-5xl font-bold font-serif text-white/80 hover:text-white transition-all duration-500 group ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : "0ms" }}
            >
              {/* Red underline swipe on hover */}
              <span className="absolute -bottom-1 left-0 h-[3px] w-0 bg-red-500 rounded-full transition-all duration-300 group-hover:w-full" />
              {link.label}
            </a>
          ))}

          {/* Mobile CTA */}
          
            <a href="#order"
            onClick={(e) => { e.preventDefault(); handleNavClick("#order"); }}
            className={`mt-10 px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full shadow-2xl shadow-red-900/60 transition-all duration-500 hover:scale-105 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: menuOpen ? `${150 + NAV_LINKS.length * 70}ms` : "0ms" }}
          >
            Order Now
          </a>

        </nav>
      </div>
    </>
  );
}