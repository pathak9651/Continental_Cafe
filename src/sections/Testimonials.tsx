"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Food Blogger",
    content: "The ambiance is stunning, but the coffee is what keeps me coming back. The single-origin pour over is an absolute delight. Highly recommended for any coffee enthusiast!",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Local Guide",
    content: "A hidden gem. The truffle pasta rivaled some of the best Italian places in the city. The staff is incredibly attentive and the vibe is impeccably cozy.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "Designer",
    content: "Visually breathtaking. Every corner of Continental Cafee is photogenic. Add to that their decadent berry cheesecake, and you have the perfect afternoon retreat.",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=256&auto=format&fit=crop"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-muted/5 z-0" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-accent text-sm uppercase tracking-widest font-semibold mb-3">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            What Our <span className="italic font-light">Guests Say</span>
          </h3>
        </motion.div>

        <div className="relative h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-background/40 backdrop-blur-xl border border-muted/20 p-8 md:p-12 rounded-3xl shadow-lg"
            >
              <div className="mb-6 relative w-20 h-20 rounded-full overflow-hidden border-4 border-accent/20">
                <Image 
                  src={testimonials[currentIndex].img} 
                  alt={testimonials[currentIndex].name} 
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <p className="text-lg md:text-xl italic text-foreground/80 mb-6 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
              <div>
                <h4 className="font-heading font-bold text-lg text-foreground">{testimonials[currentIndex].name}</h4>
                <span className="text-sm text-accent uppercase tracking-widest">{testimonials[currentIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 p-3 bg-background shadow-md rounded-full text-foreground hover:text-accent hover:bg-muted/10 transition-all z-20"
            aria-label="Previous Testimonial"
          >
            <FiChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 p-3 bg-background shadow-md rounded-full text-foreground hover:text-accent hover:bg-muted/10 transition-all z-20"
            aria-label="Next Testimonial"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-accent" : "bg-muted/40"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
