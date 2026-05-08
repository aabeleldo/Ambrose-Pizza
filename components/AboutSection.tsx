"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface FadeInProps {
  children: React.ReactNode;
  delay?: string;
  className?: string;
}

function FadeIn({ children, delay = "delay-0", className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${delay} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="bg-neutral-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <FadeIn className="text-center mb-4">
          <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-semibold">
            Our Story
          </p>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay="delay-100" className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">
            Bold Flavours, Diverse Menu
          </h2>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay="delay-200" className="flex justify-center mb-14">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-red-700" />
            <span className="text-red-500">✦</span>
            <div className="h-px w-12 bg-red-700" />
          </div>
        </FadeIn>

        {/* Two column: text + image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn delay="delay-300">
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              Ambrose Pizza & Wings is your go-to spot on the reserve for bold flavours
              and a menu that keeps things exciting. From authentic New York–style pizza
              and saucy wings to Indian fried tacos, juicy burgers, and classic hotdogs —
              there's something here for everyone.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              We also offer a variety of tacos inspired by flavours from around the world,
              bringing global street food favourites right to the community.
            </p>
          </FadeIn>

          <FadeIn delay="delay-[400ms]">
            <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-800">
  <Image
    src="/about-pizza.jpg"
    alt="New York-style pizza at Ambrose Pizza & Wings"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover object-center"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
</div>
          </FadeIn>
        </div>

        {/* Second row: image + text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn delay="delay-300" className="order-2 md:order-1">
            <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-800">
  <Image
    src="/about-food.jpg"
    alt="Comfort food spread at Ambrose Pizza & Wings"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover object-center"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
</div>
          </FadeIn>

          <FadeIn delay="delay-[400ms]" className="order-1 md:order-2">
            <p className="text-neutral-400 text-lg leading-relaxed">
              At Ambrose Pizza & Wings, it's all about great taste, comfort food, and a
              menu that never gets old. Whether you're craving a classic slice, a basket
              of wings, or something a little different — we've got you covered, hot and
              ready to go.
            </p>
          </FadeIn>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { value: "NY-Style", label: "Authentic Pizza", sub: "Hand-stretched dough, bold toppings" },
            { value: "World", label: "Inspired Tacos", sub: "Global street food on the reserve" },
            { value: "Wings+", label: "So Much More", sub: "Burgers, hotdogs, fried tacos & more" },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={`delay-[${(i + 4) * 100}ms]`}>
              <div className="text-center border border-neutral-800 rounded-2xl p-8 hover:border-red-800 transition-colors duration-300">
                <p className="text-4xl font-bold text-red-500 font-serif mb-1">{stat.value}</p>
                <p className="text-white font-semibold text-sm uppercase tracking-wide mb-1">{stat.label}</p>
                <p className="text-neutral-500 text-sm">{stat.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}