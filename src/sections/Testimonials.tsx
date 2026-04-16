"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Food Blogger",
    rating: 5,
    content: "The ambiance is stunning, but the coffee is what keeps me coming back. The single-origin pour over is an absolute delight. Highly recommended for any coffee enthusiast!",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Local Guide",
    rating: 5,
    content: "A hidden gem. The truffle pasta rivaled some of the best Italian places in the city. The staff is incredibly attentive and the vibe is impeccably cozy.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "Designer",
    rating: 5,
    content: "Visually breathtaking. Every corner of Continental Cafee is photogenic. Add to that their decadent berry cheesecake, and you have the perfect afternoon retreat.",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=256&auto=format&fit=crop",
  },
];

const AUTO_PLAY_DURATION = 5000;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-gold fill-current" : "text-white/20 fill-current"}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const go = useCallback((idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  }, []);

  const prev = useCallback(() => go(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1), [currentIndex, go]);
  const next = useCallback(() => go(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1), [currentIndex, go]);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + 100 / (AUTO_PLAY_DURATION / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [currentIndex, next]);

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-foreground/[0.03] z-0" />
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, var(--accent) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-accent" />
            <h2 className="text-accent text-sm uppercase tracking-[0.3em] font-semibold">Testimonials</h2>
            <div className="h-[1px] w-8 bg-accent" />
          </div>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            What Our <span className="italic font-light">Guests Say</span>
          </h3>
        </motion.div>

        {/* Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 60, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -60, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden p-10 md:p-14
                bg-foreground text-background
                shadow-2xl shadow-black/30"
            >
              {/* Decorative quote */}
              <div
                className="absolute top-6 right-8 font-heading text-[8rem] leading-none text-white/5 select-none pointer-events-none"
                aria-hidden
              >
                &rdquo;
              </div>

              {/* Avatar */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-accent/40 mx-auto mb-5 shadow-xl">
                <Image
                  src={testimonials[currentIndex].img}
                  alt={testimonials[currentIndex].name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <StarRating count={testimonials[currentIndex].rating} />

              <p className="text-lg md:text-xl italic text-background/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>

              <div>
                <h4 className="font-heading font-bold text-xl text-background">{testimonials[currentIndex].name}</h4>
                <span className="text-sm text-accent uppercase tracking-[0.2em]">{testimonials[currentIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 p-3 bg-background border border-muted/30 shadow-md rounded-full text-foreground hover:text-accent hover:border-accent/40 transition-all z-20"
            aria-label="Previous"
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 p-3 bg-background border border-muted/30 shadow-md rounded-full text-foreground hover:text-accent hover:border-accent/40 transition-all z-20"
            aria-label="Next"
          >
            <FiChevronRight size={22} />
          </button>
        </div>

        {/* Progress bars (dotted indicators with progress) */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => go(idx)}
              className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
              style={{ width: idx === currentIndex ? "48px" : "16px" }}
              aria-label={`Go to testimonial ${idx + 1}`}
            >
              <div className="absolute inset-0 bg-muted/40 rounded-full" />
              {idx === currentIndex && (
                <motion.div
                  className="absolute inset-y-0 left-0 bg-accent rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
