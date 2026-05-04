"use client";
import { useState } from "react";
import MenuCategory from "./MenuCategory";
import { menuSections } from "@/data/menuData";

interface CategoryCard {
  label: string;
  image: string;
  categories: string[];
  imageScale?: string;
}

const CATEGORY_CARDS: CategoryCard[] = [
  { label: "Pizza", image: "/pizza.png", categories: ["International Pizzas", "Build Your Own Pizza", "Toppings"] },
  { label: "Burgers & Sandwiches", image: "/burger.png", categories: ["Burgers & Sandwiches"], imageScale: "scale-100" },
  { label: "Tacos", image: "/taco.png", categories: ["Tacos"] },
  { label: "Sharables", image: "/nacho.png", categories: ["Sharables"] },
  { label: "Breakfast & Lunch", image: "/breakfast.png", categories: ["Breakfast & Lunch"], imageScale: "scale-110" },
  { label: "Sides & Sauces", image: "/fries.png", categories: ["Dipping Sauces", "Sides"], imageScale: "scale-110" },
  { label: "Others", image: "/panzeroti.png", categories: ["Others"] },
];

export default function MenuSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (i: number) => {
    setActiveCard(i);
    setTimeout(() => {
      document.getElementById("menu-items")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const visibleSections = activeCard !== null
    ? menuSections.filter((s) => CATEGORY_CARDS[activeCard].categories.includes(s.category))
    : [];

  return (
    <section id="menu" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-red-500 uppercase tracking-widest text-xs font-semibold mb-2">
            What We Serve
          </p>
          <h2
            className="text-5xl text-gray-900 mb-1"
            style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
          >
            Our Menu
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-12 bg-red-200" />
            <span className="text-red-400 text-xs">✦</span>
            <div className="h-px w-12 bg-red-200" />
          </div>
          <div className="mt-4 text-sm text-gray-400 space-y-0.5">
            <p className="font-semibold text-gray-600">📞 519-808-7779</p>
            <p>1346 Townline Road, Southwold, Ontario N0L 2G0</p>
            <p className="text-red-500 font-semibold uppercase tracking-wide text-xs mt-1">Pick-Up Only</p>
            <p className="text-xs">Mon–Fri 11am–8pm · Sat 3pm–8pm · Closed Sunday</p>
          </div>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {CATEGORY_CARDS.map((card, i) => (
            <button
              key={card.label}
              onClick={() => handleCardClick(i)}
              className={`group relative rounded-2xl overflow-hidden border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                activeCard === i
                  ? "border-red-600 shadow-lg shadow-red-100"
                  : "border-gray-100 hover:border-red-300"
              }`}
            >
              {/* Image */}
              <div className="bg-white h-36 flex items-center justify-center overflow-hidden p-4 transition-transform duration-300 group-hover:scale-110">
  <img
    src={card.image}
    alt={card.label}
    className={`w-full h-full object-contain ${card.imageScale ?? "scale-195"}`}
  />
</div>
                


              {/* Label */}
              <div className={`py-3 px-2 text-center transition-colors duration-200 ${
                activeCard === i ? "bg-red-600" : "bg-white"
              }`}>
                <p className={`font-bold text-sm uppercase tracking-wide ${
                  activeCard === i ? "text-white" : "text-gray-800"
                }`}>
                  {card.label}
                </p>
              </div>

              {/* Active indicator */}
              {activeCard === i && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-600" />
              )}
            </button>
          ))}
        </div>

        {/* Menu items */}
        {activeCard !== null && (
          <div id="menu-items" className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-red-100" />
              <h3
                className="text-2xl text-red-700 px-2"
                style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
              >
                {CATEGORY_CARDS[activeCard].label}
              </h3>
              <div className="h-px flex-1 bg-red-100" />
            </div>

            {visibleSections.map((section) => (
              <MenuCategory
                key={section.category}
                category={section.category}
                items={section.items}
              />
            ))}

            <p className="text-center text-xs text-gray-400 mt-10">
              All burgers & sandwiches come with fries. Substitute: onion rings +$1.50, garden/caesar salad +$2, potato wedges or loaded taters +$5.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}