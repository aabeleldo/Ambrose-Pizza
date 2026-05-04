"use client";
import { useEffect, useState, useCallback } from "react";

const DEALS = [
  {
    tag: "Deal 1",
    title: "Pizza & Wing Deal",
    description: "1 Pizza with 2 Toppings + 1 lb of Wings",
    prices: [
      { size: "Small", price: "$20" },
      { size: "Medium", price: "$24" },
      { size: "Large", price: "$28" },
      { size: "XL", price: "$30" },
    ],
    image: "/deal-1.png",
    bg: "bg-red-600",
    tagBg: "bg-red-800",
    titleColor: "text-white",
    descColor: "text-red-100",
    priceColor: "text-white",
    sizeColor: "text-red-200",
    btnBg: "bg-white hover:bg-gray-100",
    btnText: "text-red-600",
  },
  {
    tag: "Most Popular",
    title: "The Bundle",
    description: "2 Pizzas, 2 Toppings, 1 lb Wings, 2 Dipping Sauces & 2 Pops",
    prices: [
      { size: "Small", price: "$35" },
      { size: "Medium", price: "$40" },
      { size: "Large", price: "$45" },
      { size: "XL", price: "$50" },
    ],
    image: "/deal-2.png",
    bg: "bg-red-600",
    tagBg: "bg-red-800",
    titleColor: "text-white",
    descColor: "text-red-100",
    priceColor: "text-white",
    sizeColor: "text-red-200",
    btnBg: "bg-white hover:bg-gray-100",
    btnText: "text-red-600",
  },
  {
    tag: "Best Value",
    title: "Pizza Deal",
    description: "2 XL Pizzas, 2 Toppings, 4 Dipping Sauces & 4 Pops",
    prices: [
      { size: "", price: "$45" },
    ],
    image: "/deal-3.png",
    bg: "bg-red-600",
    tagBg: "bg-red-800",
    titleColor: "text-white",
    descColor: "text-red-100",
    priceColor: "text-white",
    sizeColor: "text-red-200",
    btnBg: "bg-white hover:bg-gray-100",
    btnText: "text-red-600",
  },
];

export default function HeroSection() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  }, [animating]);

  const prev = () => goTo((current - 1 + DEALS.length) % DEALS.length);
  const next = () => goTo((current + 1) % DEALS.length);

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % DEALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, goTo]);

  const deal = DEALS[current];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-950 py-24 px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/60 via-neutral-950 to-neutral-950" />
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">

        {/* Logo */}
        <div className={`flex justify-center mb-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <img
            src="/ambrose-logo-white.png"
            alt="Ambrose Pizza & Wings"
            className="w-40 md:w-52 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Eyebrow */}
        <p className={`text-red-400 uppercase tracking-[0.3em] text-xs font-semibold mb-6 transition-all duration-700 delay-100 ${loaded ? "opacity-100" : "opacity-0"}`}>
          Today's Deals
        </p>

        {/* Card */}
        <div className={`w-full transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div
            className={`${deal.bg} rounded-3xl overflow-hidden shadow-2xl shadow-black/60 transition-all duration-300 ${
              animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <div className="flex flex-col md:flex-row min-h-[360px]">

              {/* Left — image */}
              <div className="md:w-1/2 flex items-center justify-center p-8">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full max-h-64 object-contain drop-shadow-xl"
                />
              </div>

              {/* Right — info */}
              <div className="md:w-1/2 flex flex-col justify-center px-8 pb-10 md:py-10 gap-4">

                {/* Tag */}
                <span className={`self-start ${deal.tagBg} text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest`}>
                  {deal.tag}
                </span>

                {/* Title */}
                <h2 className={`${deal.titleColor} font-black text-4xl md:text-5xl leading-tight`} style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {deal.title}
                </h2>

                {/* Divider */}
                <div className="h-px bg-white/20" />

                {/* Description */}
                <p className={`${deal.descColor} text-base leading-relaxed`}>
                  {deal.description}
                </p>

                {/* Price */}
                {deal.prices.length === 1 ? (
                  <p className={`${deal.priceColor} font-black text-6xl leading-none`} style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {deal.prices[0].price}
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-4">
                    {deal.prices.map((p) => (
                      <div key={p.size} className="flex flex-col">
                        <span className={`${deal.sizeColor} text-xs uppercase tracking-widest`}>{p.size}</span>
                        <span className={`${deal.priceColor} font-black text-3xl leading-tight`} style={{ fontFamily: "'Oswald', sans-serif" }}>
                          {p.price}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Order button */}
                
                  <a href="#order"
                  className={`self-start ${deal.btnBg} ${deal.btnText} font-bold px-7 py-3 rounded-full text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105 shadow-lg mt-2`}
                >
                  Order Now
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-6 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white text-xl hover:bg-white/10 transition-all duration-200"
          >
            ‹
          </button>

          <div className="flex gap-2">
            {DEALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "bg-red-500 w-6 h-2" : "bg-white/30 w-2 h-2"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white text-xl hover:bg-white/10 transition-all duration-200"
          >
            ›
          </button>
        </div>

        {/* View menu */}
        
          <a href="#menu"
          className={`mt-6 border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-200 hover:bg-white/10 text-center ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          View Full Menu
        </a>

      </div>
    </section>
  );
}