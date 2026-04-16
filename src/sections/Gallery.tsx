"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  { src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop", label: "Pour Over", span: true },
  { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop", label: "Latte Art" },
  { src: "https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=800&auto=format&fit=crop", label: "Interior" },
  { src: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=800&auto=format&fit=crop", label: "Brunch" },
  { src: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop", label: "Pastries" },
  { src: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop", label: "Coffee Beans" },
];

export function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const prev = () =>
    setLightboxIdx((i) => (i === null ? 0 : i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setLightboxIdx((i) => (i === null ? 0 : i === images.length - 1 ? 0 : i + 1));

  return (
    <section id="gallery" className="py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-accent" />
            <h2 className="text-accent text-sm uppercase tracking-[0.3em] font-semibold">Gallery</h2>
            <div className="h-[1px] w-8 bg-accent" />
          </div>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Moments at <span className="italic font-light">Continental</span>
          </h3>
        </motion.div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[220px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setLightboxIdx(idx)}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer
                border border-accent/15 hover:border-accent/40 transition-all duration-500
                hover:shadow-2xl hover:shadow-accent/10
                ${img.span ? "col-span-2 lg:col-span-1 row-span-2" : ""}
              `}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                style={{ transform: undefined }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex flex-col items-center justify-end p-5 backdrop-blur-[0px] group-hover:backdrop-blur-[2px]">
                <motion.div
                  initial={false}
                  className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center gap-2"
                >
                  <span className="text-white text-[10px] uppercase tracking-[0.3em] font-medium">{img.label}</span>
                  <div className="w-12 h-[1px] bg-white/40" />
                  <span className="text-white/70 text-xs uppercase tracking-widest">View</span>
                </motion.div>
              </div>

              {/* Label tag */}
              <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-medium border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxIdx(null)}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
              onClick={() => setLightboxIdx(null)}
              aria-label="Close lightbox"
            >
              <FiX size={24} />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
              {lightboxIdx + 1} / {images.length}
            </div>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIdx}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[lightboxIdx].src}
                  alt={images[lightboxIdx].label}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white font-heading font-medium text-lg">{images[lightboxIdx].label}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
              aria-label="Previous"
            >
              <FiChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
              aria-label="Next"
            >
              <FiChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
