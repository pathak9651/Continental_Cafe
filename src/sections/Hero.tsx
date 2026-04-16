"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const words = ["Experience", "the", "Taste", "of", "Luxury"];

export function Hero() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!videoRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 10;
      videoRef.current.style.transform = `translate(${xPos}px, ${yPos}px) scale(1.08)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={videoRef}
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out scale-105"
        style={{
          backgroundImage: "url('https://images.loungebuddy.com/loungebuddy/image/upload/c_fit,h_2000,w_2000/k1cjjvymonnweteigolr.jpg')",
        }}
      />

      {/* Layered overlay for depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Grain texture */}
      <div className="absolute inset-0 z-[3] grain" />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{ boxShadow: "inset 0 0 200px rgba(0,0,0,0.6)" }}
      />

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: -3 }}
        transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
        className="floating-badge absolute top-32 right-8 md:right-20 z-10 w-24 h-24 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center text-white text-center select-none"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/70">Est.</span>
        <span className="text-xl font-heading font-bold leading-none">2009</span>
        <span className="text-[9px] uppercase tracking-widest text-white/60 mt-1">Paris, TX</span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/60" />
          <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-light">Premium · Artisan · Continental</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/60" />
        </motion.div>

        {/* Word-by-word animated heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-2 leading-tight overflow-hidden">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-4 ${i === 4 ? "shimmer-text" : ""}`}
              initial={{ opacity: 0, y: 60, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {i === words.length - 1 ? <em>{word}</em> : word}
            </motion.span>
          ))}
        </h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4 my-8"
        >
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#C9A84C]" />
          <div className="w-2 h-2 rotate-45 bg-[#C9A84C]" />
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#C9A84C]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/80 mb-12 font-light max-w-xl tracking-wide"
        >
          Premium Coffee &amp; Continental Delights served in an ambiance designed to inspire your senses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <a
            href="#menu"
            className="btn-shimmer relative px-10 py-4 bg-accent text-white font-semibold tracking-widest uppercase text-sm hover:bg-accent/90 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-accent/30 hover:shadow-accent/50"
            style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
          >
            Explore Menu
          </a>
          <a
            href="#contact"
            className="px-10 py-4 bg-transparent border border-white/60 text-white font-semibold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
          >
            Visit Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-3 text-white/60">Scroll</span>
        <div className="w-[1px] h-14 bg-white/20 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/0 via-white to-white/0 origin-top"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
