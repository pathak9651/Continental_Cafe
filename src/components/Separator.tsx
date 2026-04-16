"use client";
import { motion } from "framer-motion";

export function Separator() {
  return (
    <div className="w-full flex justify-center py-4 md:py-8 opacity-60">
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "70%", opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
    </div>
  );
}
