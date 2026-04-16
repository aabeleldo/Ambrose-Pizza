"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">

      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" />

      {/* Red gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/60 via-neutral-950/70 to-neutral-950" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Eyebrow */}
        <p
          className={`text-red-500 uppercase tracking-[0.3em] text-xs font-semibold mb-6 transition-all duration-700 delay-100 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Authentic • Homemade • Fresh
        </p>

        {/* Main heading */}
        <h1
          className={`text-6xl md:text-8xl font-bold text-white font-serif leading-tight mb-4 transition-all duration-700 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Ambrose
          <span className="block text-red-500">Pizza</span>
        </h1>

        {/* Divider */}
        <div
          className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="h-px w-16 bg-red-700" />
          <span className="text-red-500 text-lg">✦</span>
          <div className="h-px w-16 bg-red-700" />
        </div>

        {/* Subheading */}
        <p
          className={`text-neutral-300 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-[400ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Made from scratch, baked to perfection. Pickup, delivery, or dine in — we've got you covered.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          
            <a href="#order"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-200 shadow-lg shadow-red-900/40 hover:shadow-red-800/60 hover:scale-105"
          >
            Order Now
          </a>
          
            <a href="#menu"
            className="border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-200 hover:bg-white/10"
          >
            View Menu
          </a>
        </div>
      </div>

    </section>
  );
}