"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiInstagram, FiFacebook, FiTwitter, FiArrowRight } from "react-icons/fi";

const socials = [
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{ backgroundColor: "var(--foreground)" }}>
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 80%, var(--accent) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--gold) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-heading font-bold mb-5"
              style={{ color: "var(--background)" }}>
              Continental<span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "rgba(var(--background-rgb, 250,247,244), 0.55)" }}>
              Premium coffee and continental delights served in a luxurious, cozy environment. Experience the taste of luxury.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-accent hover:border-accent"
                  style={{ borderColor: "rgba(250,247,244,0.15)", color: "rgba(250,247,244,0.6)" }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] font-semibold mb-6"
              style={{ color: "var(--accent)" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-sm transition-colors duration-300 hover:text-white"
                    style={{ color: "rgba(250,247,244,0.5)" }}
                  >
                    <FiArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] font-semibold mb-2"
              style={{ color: "var(--accent)" }}>
              Newsletter
            </h3>
            <p className="text-sm mb-5" style={{ color: "rgba(250,247,244,0.5)" }}>
              Get exclusive offers and news delivered to your inbox.
            </p>
            <div className="flex gap-0 border border-white/10 rounded-none overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none"
                style={{ color: "rgba(250,247,244,0.8)" }}
              />
              <button
                className="px-5 py-3 bg-accent transition-all duration-300 hover:bg-accent/80 flex items-center justify-center"
                aria-label="Subscribe"
              >
                <FiArrowRight size={17} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full mb-8"
          style={{ background: "linear-gradient(to right, transparent, rgba(250,247,244,0.1), transparent)" }} />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ color: "rgba(250,247,244,0.3)" }}>
          <span>© {new Date().getFullYear()} Continental Cafee. All rights reserved.</span>
          <span className="tracking-widest uppercase">Crafted with passion</span>
        </div>
      </div>
    </footer>
  );
}
