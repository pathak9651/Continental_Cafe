"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Premium Dishes", value: "40+" },
    { label: "Happy Customers", value: "12k+" },
  ];

  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Images Grid */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative grid grid-cols-2 gap-4 h-[500px]"
        >
          <div className="relative h-full w-full col-span-1 rounded-3xl overflow-hidden shadow-2xl mt-8 border border-accent/20 p-2 bg-background/50">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=800&auto=format&fit=crop" 
                alt="Pouring coffee" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
          <div className="relative h-full w-full col-span-1 rounded-3xl overflow-hidden shadow-2xl -mt-8 border border-accent/20 p-2 bg-background/50">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop" 
                alt="Cafe interior" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-accent text-sm uppercase tracking-widest font-semibold mb-3">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              A Legacy of <span className="italic font-light">Taste & Elegance</span>
            </h3>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-foreground/70 text-lg mb-6 leading-relaxed">
            Founded with a passion for exceptional coffee and exquisite culinary experiences, Continental Cafee is more than just a destination—it's a retreat. Every cup we brew and every dish we serve is crafted with the finest ingredients, bringing the sophisticated essence of continental dining right to your table.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-foreground/70 text-lg mb-10 leading-relaxed">
            Immerse yourself in our cozy, modern aesthetic, designed carefully to provide a luxurious escape from the everyday hustle.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-muted/30 relative">
            {/* Ambient border top glow */}
            <div className="absolute top-[-1px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-50" />
            
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 + 0.5, duration: 0.5 }}
              >
                <p className="text-3xl font-heading font-bold text-accent mb-1 drop-shadow-sm">{stat.value}</p>
                <p className="text-xs text-foreground/60 tracking-widest uppercase font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
