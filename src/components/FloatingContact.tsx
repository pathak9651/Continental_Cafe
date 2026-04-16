"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <motion.a
        href="tel:+15551234567"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-background text-foreground border border-muted/30 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Call Us"
      >
        <FiPhone size={24} className="text-accent" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow relative"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
        {/* Simple ping animation for emphasis */}
        <span className="absolute inset-0 rounded-full animate-ping bg-green-500 opacity-20 hover:opacity-0 transition-opacity"></span>
      </motion.a>
    </div>
  );
}
