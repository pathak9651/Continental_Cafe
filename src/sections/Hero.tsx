"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.loungebuddy.com/loungebuddy/image/upload/c_fit,h_2000,w_2000/k1cjjvymonnweteigolr.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight"
        >
          Experience the <br className="hidden md:block" />
          <span className="text-accent italic">Taste of Luxury</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/90 mb-10 font-light max-w-2xl"
        >
          Premium Coffee & Continental Delights served in an ambiance designed to inspire your senses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#menu"
            className="px-8 py-4 bg-accent text-white font-medium hover:bg-accent/90 transition-all rounded-sm hover:-translate-y-1 shadow-lg hover:shadow-accent/40"
          >
            Explore Menu
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 bg-transparent border border-white text-white font-medium hover:bg-white hover:text-black transition-all rounded-sm hover:-translate-y-1"
          >
            Visit Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-white origin-top"
            animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
