"use client";
import { useEffect, useRef, useState } from "react";

export default function OrderSection() {
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

  const TOAST_ORDER_URL = "https://www.toasttab.com/ambrose-pizza";

  return (
    <section id="order" className="bg-red-600 py-20 px-4">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-red-200 uppercase tracking-widest text-sm font-semibold mb-3">
          Hot & Fresh
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
          Ready to Order?
        </h2>

        <p className="text-red-100 text-lg mb-10 leading-relaxed">
          Order online for pickup — fresh out of the oven, ready when you are.
        </p>

        
          <a href={TOAST_ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-red-600 font-bold text-lg px-10 py-4 rounded-full hover:bg-red-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Order Pickup
        </a>

        <p className="text-red-200 text-sm mt-8">
          Powered by Toast — secure, fast checkout.
        </p>
      </div>
    </section>
  );
}