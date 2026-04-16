"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-accent text-sm uppercase tracking-widest font-semibold mb-3">Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Moments at <span className="italic font-light">Continental</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-accent/20 bg-background/50 p-1.5 hover:border-accent/50 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center">
                  <motion.span 
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-white text-sm tracking-widest uppercase font-medium border border-white/50 py-3 px-6 rounded-full bg-black/20"
                  >
                    View Details
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
