"use client";
import { useState } from "react";
import MenuCategory from "./MenuCategory";
import { menuSections } from "@/data/menuData";

interface TabGroup {
  label: string;
  categories: string[];
}

const TAB_GROUPS: TabGroup[] = [
  { label: "Pizza", categories: ["International Pizzas", "Build Your Own Pizza", "Toppings"] },
  { label: "Sides & Sauces", categories: ["Dipping Sauces", "Sides"] },
  { label: "Breakfast & Lunch", categories: ["Breakfast & Lunch"] },
  { label: "Burgers & Sandwiches", categories: ["Burgers & Sandwiches"] },
  { label: "Sharables", categories: ["Sharables"] },
  { label: "Tacos", categories: ["Tacos"] },
  { label: "Others", categories: ["Others"] },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const visibleSections = menuSections.filter((s) =>
    TAB_GROUPS[activeTab].categories.includes(s.category)
  );

  return (
    <section id="menu" className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-red-600 uppercase tracking-widest text-sm font-semibold mb-2">
            What We Serve
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">Our Menu</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {TAB_GROUPS.map((group, i) => (
            <button
              key={group.label}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeTab === i
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-red-400 hover:text-red-600"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div>
          {visibleSections.map((section) => (
            <MenuCategory
              key={section.category}
              category={section.category}
              items={section.items}
            />
          ))}
        </div>

      </div>
    </section>
  );
}