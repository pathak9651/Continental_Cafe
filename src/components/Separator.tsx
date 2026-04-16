"use client";
import { motion } from "framer-motion";

export function Separator() {
  return (
    <div className="w-full flex justify-center items-center py-6 md:py-10 opacity-70">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "120px", opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[1px] bg-gradient-to-r from-transparent to-accent/40"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-3 flex-shrink-0"
      >
        <div className="w-2 h-2 rotate-45 bg-accent/60" />
      </motion.div>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "120px", opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[1px] bg-gradient-to-l from-transparent to-accent/40"
      />
    </div>
  );
}
