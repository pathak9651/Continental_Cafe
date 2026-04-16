"use client";

import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="bg-muted/10 py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-heading font-bold mb-4">
            Continental<span className="text-accent">.</span>
          </h2>
          <p className="text-foreground/70 max-w-sm mx-auto md:mx-0">
            Premium coffee and continental delights served in a luxurious, cozy environment. Experience the taste of luxury.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-xl font-heading font-semibold mb-2">Quick Links</h3>
          <Link href="#home" className="hover:text-accent transition-colors">Home</Link>
          <Link href="#about" className="hover:text-accent transition-colors">About Us</Link>
          <Link href="#menu" className="hover:text-accent transition-colors">Our Menu</Link>
          <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-xl font-heading font-semibold mb-2">Connect</h3>
          <p className="text-foreground/70">123 Luxury Avenue, Paris, TX</p>
          <p className="text-foreground/70">hello@continentalcafee.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 rounded-full bg-accent text-white hover:opacity-80 transition-opacity">
              <FiInstagram size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-accent text-white hover:opacity-80 transition-opacity">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-accent text-white hover:opacity-80 transition-opacity">
              <FiTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-muted/30 text-center text-foreground/60 text-sm">
        &copy; {new Date().getFullYear()} Continental Cafee. All rights reserved.
      </div>
    </footer>
  );
}
