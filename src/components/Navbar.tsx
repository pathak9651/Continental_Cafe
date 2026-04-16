"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "py-3 bg-background/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-accent/10"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex flex-col leading-none">
          <span
            className={clsx(
              "text-2xl font-bold font-heading tracking-wider transition-colors duration-300",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            Continental
            <span className="text-accent text-3xl leading-none">.</span>
          </span>
          <span className="h-[1px] w-0 group-hover:w-full bg-accent transition-all duration-500 mt-0.5" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "relative text-sm uppercase tracking-widest font-medium transition-colors duration-300 flex flex-col items-center gap-1",
                  scrolled
                    ? isActive ? "text-accent" : "text-foreground/70 hover:text-accent"
                    : isActive ? "text-white" : "text-white/70 hover:text-white"
                )}
              >
                {link.name}
                <span
                  className={clsx(
                    "w-1 h-1 rounded-full bg-accent transition-all duration-300",
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  )}
                />
              </Link>
            );
          })}

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className={clsx(
                "p-2 rounded-full transition-all duration-300 border",
                scrolled
                  ? "border-accent/20 hover:bg-accent/10 text-foreground"
                  : "border-white/30 hover:bg-white/10 text-white"
              )}
              aria-label="Toggle Theme"
            >
              {resolvedTheme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-3 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className={clsx(
                "p-2 rounded-full border transition-colors",
                scrolled ? "border-accent/20 text-foreground" : "border-white/30 text-white"
              )}
              aria-label="Toggle Theme"
            >
              {resolvedTheme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={clsx(
              "p-2 focus:outline-none transition-colors",
              scrolled ? "text-foreground" : "text-white"
            )}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-height Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 right-0 w-full md:hidden z-40 bg-background/98 backdrop-blur-xl flex flex-col"
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-muted/20">
              <span className="text-2xl font-heading font-bold">
                Continental<span className="text-accent">.</span>
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-foreground"
                aria-label="Close Menu"
              >
                <FiX size={26} />
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col justify-center flex-1 px-10 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 py-4 border-b border-muted/20 group"
                  >
                    <span className="text-xs text-accent font-mono tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-3xl font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer of drawer */}
            <div className="px-10 py-8 text-foreground/40 text-sm">
              © {new Date().getFullYear()} Continental Cafee
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
