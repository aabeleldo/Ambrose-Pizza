"use client";
import { useEffect, useRef, useState } from "react";
import { MenuItem as MenuItemType } from "@/data/menuData";

export default function MenuItem({ name, price, description, sizes }: MenuItemType) {
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
      className={`py-3 border-b border-red-100 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <div className="flex justify-between items-baseline gap-4">
        <p className="font-semibold text-gray-900 text-[15px] leading-snug">{name}</p>
        {price && !sizes && (
          <span className="text-red-600 font-bold text-[15px] whitespace-nowrap">{price}</span>
        )}
      </div>

      {description && (
        <p className="text-sm text-gray-400 mt-0.5 leading-relaxed">{description}</p>
      )}

      {sizes && (
        <div className="flex gap-3 mt-1.5 flex-wrap">
          {sizes.map((s) => (
            <span key={s.size} className="text-sm text-gray-500">
              <span className="text-gray-400">{s.size} </span>
              <span className="text-red-600 font-bold">{s.price}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}