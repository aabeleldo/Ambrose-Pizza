"use client";
import { useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";
import { MenuSection } from "@/data/menuData";

export default function MenuCategory({ category, items }: MenuSection) {
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
    <div className="mb-12">
      <div
        ref={ref}
        className={`transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-1 font-serif">{category}</h3>
        <div className="w-12 h-1 bg-red-600 rounded mb-4" />
      </div>
      <div>
        {items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}