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
    <div className="mb-10">
      <div
        ref={ref}
        className={`transition-all duration-500 mb-3 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h3
          className="text-2xl text-red-700 mb-1"
          style={{ fontFamily: "'Georgia', serif", fontStyle: "italic", fontWeight: 700 }}
        >
          {category}
        </h3>
        <div className="h-px bg-red-100" />
      </div>
      <div>
        {items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}