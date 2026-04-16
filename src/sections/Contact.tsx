"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-accent text-sm uppercase tracking-widest font-semibold mb-3">Reservations</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Get In <span className="italic font-light">Touch</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-full text-accent mt-1">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-1">Our Location</h4>
                  <p className="text-foreground/70 leading-relaxed">
                    123 Luxury Avenue, Suite 100<br/>Paris, TX 75460
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-full text-accent mt-1">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-1">Phone Number</h4>
                  <p className="text-foreground/70 leading-relaxed">
                    +1 (555) 123-4567<br/>+1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-full text-accent mt-1">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-1">Email Address</h4>
                  <p className="text-foreground/70 leading-relaxed">
                    hello@continentalcafee.com<br/>reservations@continentalcafee.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 rounded-2xl overflow-hidden bg-muted/20 relative flex items-center justify-center group">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity grayscale"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop')" }}
              />
              <span className="relative z-10 bg-background/80 backdrop-blur px-6 py-2 rounded-full text-sm font-semibold tracking-widest uppercase border border-muted/30">View on Map</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 dark:shadow-white/5 border border-accent/20 relative overflow-hidden group"
          >
            {/* Animated form border glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl pointer-events-none" />

            <h4 className="text-2xl font-heading font-bold mb-6 text-foreground relative z-10">Make a Reservation</h4>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-background border border-muted/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-foreground shadow-sm hover:border-accent/40 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-background border border-muted/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-foreground shadow-sm hover:border-accent/40 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-background border border-muted/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-foreground shadow-sm hover:border-accent/40 transition-all duration-300"
                  placeholder="Table for two / Special Request"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-background border border-muted/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-foreground shadow-sm hover:border-accent/40 transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-accent text-white font-semibold py-4 rounded-xl hover:bg-opacity-90 transition-all border border-accent shadow-lg shadow-accent/20"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
