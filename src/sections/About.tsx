"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="count-up">
      {count}{suffix}
    </span>
  );
}

export function About() {
  const stats = [
    { label: "Years Experience", value: 15, suffix: "+" },
    { label: "Premium Dishes", value: 40, suffix: "+" },
    { label: "Happy Customers", value: 12, suffix: "k+" },
  ];

  return (
    <section id="about" className="py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Images Grid */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative grid grid-cols-2 gap-4 h-[520px]"
        >
          <div className="relative h-full w-full col-span-1 rounded-3xl overflow-hidden shadow-2xl shadow-black/10 mt-10 border border-accent/20 p-2 bg-background/50">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=800&auto=format&fit=crop"
                alt="Pouring coffee"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
          <div className="relative h-full w-full col-span-1 rounded-3xl overflow-hidden shadow-2xl shadow-black/10 -mt-10 border border-accent/20 p-2 bg-background/50">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
                alt="Cafe interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Stamp Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-accent border-4 border-white/20 flex flex-col items-center justify-center text-white text-center shadow-2xl z-10 select-none"
            style={{ rotate: 12 }}
          >
            <span className="text-[9px] uppercase tracking-widest text-white/70">Since</span>
            <span className="text-2xl font-heading font-bold leading-none">2009</span>
            <span className="text-[8px] uppercase tracking-widest text-white/70 mt-0.5">Artisan</span>
          </motion.div>

          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative quote mark */}
          <div
            className="font-heading text-[10rem] leading-none text-accent/8 absolute -ml-6 -mt-8 select-none pointer-events-none"
            aria-hidden
          >
            &ldquo;
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-accent" />
              <h2 className="text-accent text-sm uppercase tracking-[0.3em] font-semibold">Our Story</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground leading-tight">
              A Legacy of <span className="italic font-light">Taste &amp; Elegance</span>
            </h3>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-foreground/65 text-lg mb-5 leading-relaxed">
            Founded with a passion for exceptional coffee and exquisite culinary experiences, Continental Cafee is more than just a destination—it&apos;s a retreat. Every cup we brew and every dish we serve is crafted with the finest ingredients.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-foreground/65 text-lg mb-12 leading-relaxed">
            Immerse yourself in our cozy, modern aesthetic, designed carefully to provide a luxurious escape from the everyday hustle.
          </motion.p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-muted/30 relative">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 + 0.3, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-3xl lg:text-4xl font-heading font-bold text-accent mb-1">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-foreground/50 tracking-[0.2em] uppercase font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
