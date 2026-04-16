"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const allItems = [
  {
    category: "Coffee",
    name: "Caramel Macchiato",
    price: "$6.50",
    desc: "Espresso with vanilla-flavored syrup, milk and caramel drizzle.",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Coffee",
    name: "Ethiopian Pour Over",
    price: "$5.00",
    desc: "Single-origin pour over with bright floral and citrus notes.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Food",
    name: "Avocado Toast",
    price: "$12.00",
    desc: "Sourdough, smashed avocado, poached egg, chili flakes.",
    img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Food",
    name: "Truffle Pasta",
    price: "$18.50",
    desc: "Fresh linguine, wild mushrooms, creamy truffle sauce.",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Desserts",
    name: "Classic Tiramisu",
    price: "$8.00",
    desc: "Espresso-soaked ladyfingers, mascarpone, cocoa dusting.",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Desserts",
    name: "Berry Cheesecake",
    price: "$7.50",
    desc: "NY style cheesecake with mixed berry compote.",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
  },
];

const tabs = ["All", "Coffee", "Food", "Desserts"];

export function Menu() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? allItems : allItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-accent" />
            <h2 className="text-accent text-sm uppercase tracking-[0.3em] font-semibold">Our Menu</h2>
            <div className="h-[1px] w-8 bg-accent" />
          </div>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            A Symphony of <span className="italic font-light">Flavors</span>
          </h3>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative px-7 py-2.5 text-sm uppercase tracking-widest font-medium transition-all duration-300 rounded-full border ${
                active === tab
                  ? "bg-accent text-white border-accent shadow-lg shadow-accent/25"
                  : "border-muted/50 text-foreground/60 hover:border-accent/50 hover:text-accent"
              }`}
            >
              {tab}
              {active === tab && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-full bg-accent -z-10"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex flex-col bg-background border border-muted/20 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-accent/8 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Price badge — premium */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full shadow-xl">
                    <span className="text-[10px] text-white/60 uppercase tracking-widest">from</span>
                    <span className="text-white font-bold text-sm">{item.price}</span>
                  </div>

                  {/* Category tag */}
                  <div className="absolute bottom-4 left-4 bg-accent/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-medium">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h5 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {item.name}
                  </h5>
                  <p className="text-foreground/60 text-sm leading-relaxed flex-1">{item.desc}</p>

                  <div className="mt-5 pt-5 border-t border-muted/30 flex items-center justify-between">
                    <span className="text-xs text-foreground/40 uppercase tracking-widest">Order now</span>
                    <div className="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                      <svg className="w-4 h-4 text-accent group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
