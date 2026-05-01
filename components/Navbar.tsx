"use client";
import { useEffect, useState, useCallback, useRef } from "react";

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
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracker
  useEffect(() => {
    const handleScroll = () => {
      const offsets = NAV_LINKS.map((l) => {
        const el = document.querySelector(l.href);
        if (!el) return { href: l.href, top: Infinity };
        return { href: l.href, top: Math.abs(el.getBoundingClientRect().top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.href);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Move pill to active link
  useEffect(() => {
    const activeIndex = NAV_LINKS.findIndex((l) => l.href === activeSection);
    const activeEl = linkRefs.current[activeIndex];
    const navEl = navRef.current;

    if (activeEl && navEl) {
      const navRect = navEl.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      setPillStyle({
        left: elRect.left - navRect.left,
        width: elRect.width,
        opacity: 1,
      });
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection]);

  // Lock body scroll when mobile menu open
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

          {/* Logo — fades in once scrolled */}
          
            <a href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center group"
          >
            <img
              src="/ambrose-logo-white.png"
              alt="Ambrose Pizza & Wings"
              className={`h-12 w-auto object-contain group-hover:scale-105 transition-all duration-500 ${
                scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
          </a>

          {/* Desktop links */}
          <nav ref={navRef} className="hidden md:flex items-center gap-1 relative">

            {/* Sliding pill */}
            <span
              className="absolute top-1/2 -translate-y-1/2 h-9 rounded-full bg-white/10 border border-white/10 pointer-events-none transition-all duration-300 ease-in-out"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                opacity: pillStyle.opacity,
              }}
            />

            {NAV_LINKS.map((link, i) => {
              const isActive = activeSection === link.href;
              return (
                
                  <a key={link.href}
                  href={link.href}
                  ref={(el) => { linkRefs.current[i] = el; }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                    isActive ? "text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.label}
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
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
          >
            <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`} />
            <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4"}`} />
            <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"}`} />
          </button>

        </div>
      </header>

      {/* ── Mobile overlay ── */}
      <div className="fixed inset-0 z-40 md:hidden pointer-events-none">

        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-neutral-950/80 backdrop-blur-xl transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Glows */}
        <div className={`absolute -top-32 -left-32 w-96 h-96 bg-red-700/20 rounded-full blur-3xl transition-opacity duration-500 ${menuOpen ? "opacity-100" : "opacity-0"}`} />
        <div className={`absolute -bottom-32 -right-32 w-96 h-96 bg-red-900/20 rounded-full blur-3xl transition-opacity duration-500 ${menuOpen ? "opacity-100" : "opacity-0"}`} />

        {/* Links */}
        <nav
          className={`relative z-10 flex flex-col items-center justify-center h-full gap-2 transition-opacity duration-500 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Logo in mobile overlay */}
          <div
            className={`mb-8 transition-all duration-500 delay-100 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <img
              src="/ambrose-logo-white.png"
              alt="Ambrose Pizza & Wings"
              className="h-16 w-auto object-contain"
            />
          </div>

          {NAV_LINKS.map((link, i) => (
            
              <a key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`relative text-5xl font-bold font-serif text-white/80 hover:text-white transition-all duration-500 group ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : "0ms" }}
            >
              <span className="absolute -bottom-1 left-0 h-[3px] w-0 bg-red-500 rounded-full transition-all duration-300 group-hover:w-full" />
              {link.label}
            </a>
          ))}

          
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