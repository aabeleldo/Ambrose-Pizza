"use client";
import { useEffect, useRef, useState } from "react";

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

interface HoursRow {
  day: string;
  hours: string;
  closed?: boolean;
}

const HOURS: HoursRow[] = [
  { day: "Monday",    hours: "11:00 AM – 8:00 PM" },
  { day: "Tuesday",   hours: "11:00 AM – 8:00 PM" },
  { day: "Wednesday", hours: "11:00 AM – 8:00 PM" },
  { day: "Thursday",  hours: "11:00 AM – 8:00 PM" },
  { day: "Friday",    hours: "11:00 AM – 8:00 PM" },
  { day: "Saturday",  hours: "2:00 PM – 8:00 PM" },
  { day: "Sunday",    hours: "", closed: true },
];

export default function HoursSection() {
  const today = new Date().toLocaleDateString("en-CA", { weekday: "long" });

  return (
    <section id="hours" className="bg-neutral-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <FadeIn className="text-center mb-4">
          <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-semibold">
            Find Us
          </p>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay="delay-100" className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">
            Hours & Location
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Hours */}
          <FadeIn delay="delay-300">
            <h3 className="text-white font-bold text-lg uppercase tracking-widest mb-6 border-b border-neutral-700 pb-3">
              Hours
            </h3>
            <ul className="space-y-3">
              {HOURS.map(({ day, hours, closed }) => {
                const isToday = day === today;
                return (
                  <li
                    key={day}
                    className={`flex justify-between items-center py-2 px-3 rounded-lg transition-colors ${
                      isToday ? "bg-red-950/50 border border-red-800/40" : ""
                    }`}
                  >
                    <span className={`text-sm font-medium ${isToday ? "text-red-400" : "text-neutral-300"}`}>
                      {day}
                      {isToday && (
                        <span className="ml-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-semibold">
                          Today
                        </span>
                      )}
                    </span>
                    <span className={`text-sm ${closed ? "text-neutral-600 italic" : isToday ? "text-white font-semibold" : "text-neutral-400"}`}>
                      {closed ? "Closed" : hours}
                    </span>
                  </li>
                );
              })}
            </ul>
          </FadeIn>

          {/* Location + Map */}
          <FadeIn delay="delay-[400ms]">
            <h3 className="text-white font-bold text-lg uppercase tracking-widest mb-6 border-b border-neutral-700 pb-3">
              Location
            </h3>

            <div className="mb-6">
              <p className="text-neutral-300 text-base leading-relaxed">
                1346 Townline Rd<br />
                Southwold, ON
              </p>
              <p className="text-neutral-500 text-sm mt-3">
                📞 <a href="tel:5198087799" className="hover:text-red-400 transition-colors">(519) 808-7799</a>
              </p>
              <p className="text-neutral-500 text-sm mt-1">
                ✉️ <a href="mailto:4ambrosepizza@gmail.com" className="hover:text-red-400 transition-colors">4ambrosepizza@gmail.com</a>
              </p>
              
                <a href="https://maps.google.com/?q=1346+Townline+Rd,+Southwold,+ON"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-red-500 hover:text-red-400 transition-colors underline underline-offset-4"
              >
                Get Directions →
              </a>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-neutral-700 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2927.5060467915755!2d-81.40675232452588!3d42.79879120727206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882e56ec9c2efac7%3A0x85c99fdf599d895d!2s1346%20Townline%20Rd%2C%20Southwold%2C%20ON%20N0L%200A8!5e0!3m2!1sen!2sca!4v1776332318911!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}