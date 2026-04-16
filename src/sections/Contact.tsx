"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

function FloatingInput({
  id,
  label,
  type = "text",
  placeholder,
  as = "input",
  rows,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  as?: "input" | "textarea";
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea
          id={id}
          rows={rows ?? 4}
          placeholder=" "
          onFocus={() => setFocused(true)}
          onBlur={(e) => { setFocused(false); setHasValue(e.target.value !== ""); }}
          onChange={(e) => setHasValue(e.target.value !== "")}
          className="peer w-full bg-transparent border-b-2 border-muted/40 focus:border-accent px-0 pt-6 pb-2 text-foreground focus:outline-none resize-none transition-colors duration-300 placeholder-transparent"
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder=" "
          onFocus={() => setFocused(true)}
          onBlur={(e) => { setFocused(false); setHasValue(e.target.value !== ""); }}
          onChange={(e) => setHasValue(e.target.value !== "")}
          className="peer w-full bg-transparent border-b-2 border-muted/40 focus:border-accent px-0 pt-6 pb-2 text-foreground focus:outline-none transition-colors duration-300 placeholder-transparent"
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-0 transition-all duration-300 pointer-events-none font-medium ${
          focused || hasValue
            ? "top-0 text-xs text-accent tracking-widest uppercase"
            : "top-6 text-foreground/50 text-sm"
        }`}
      >
        {label}
      </label>
      {/* Animated underline */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-400"
        style={{ width: focused ? "100%" : "0%" }}
      />
    </div>
  );
}

const hours = [
  { day: "Mon – Fri", time: "7:00 AM – 10:00 PM" },
  { day: "Saturday", time: "8:00 AM – 11:00 PM" },
  { day: "Sunday", time: "9:00 AM – 9:00 PM" },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-accent" />
            <h2 className="text-accent text-sm uppercase tracking-[0.3em] font-semibold">Reservations</h2>
            <div className="h-[1px] w-8 bg-accent" />
          </div>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Get In <span className="italic font-light">Touch</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <div className="space-y-7">
              {[
                { icon: FiMapPin, title: "Our Location", lines: ["123 Luxury Avenue, Suite 100", "Paris, TX 75460"] },
                { icon: FiPhone, title: "Phone Number", lines: ["+1 (555) 123-4567", "+1 (555) 987-6543"] },
                { icon: FiMail, title: "Email Address", lines: ["hello@continentalcafee.com", "reservations@continentalcafee.com"] },
              ].map(({ icon: Icon, title, lines }) => (
                <div key={title} className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 border border-accent/20 flex items-center justify-center text-accent transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">{title}</h4>
                    {lines.map((l) => (
                      <p key={l} className="text-foreground/65 text-sm leading-relaxed">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Opening Hours */}
            <div className="rounded-2xl border border-muted/30 bg-muted/10 p-6">
              <div className="flex items-center gap-3 mb-5">
                <FiClock className="text-accent" size={18} />
                <h4 className="font-heading font-bold text-lg">Opening Hours</h4>
              </div>
              <div className="space-y-3">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex items-center justify-between text-sm">
                    <span className="text-foreground/60 font-medium">{day}</span>
                    <span className="text-foreground font-semibold">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="w-full h-52 rounded-2xl overflow-hidden bg-muted/20 relative flex items-center justify-center group">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-55 transition-opacity grayscale"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop')" }}
              />
              <span className="relative z-10 bg-background/80 backdrop-blur px-6 py-2 rounded-full text-sm font-semibold tracking-widest uppercase border border-muted/30">
                View on Map
              </span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
            className="bg-background/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-muted/20 relative overflow-hidden"
          >
            {/* Glow on hover */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <h4 className="text-2xl font-heading font-bold mb-10 text-foreground relative z-10">
              Make a Reservation
            </h4>
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FloatingInput id="name" label="Full Name" placeholder="John Doe" />
                <FloatingInput id="email" label="Email Address" type="email" placeholder="john@example.com" />
              </div>
              <FloatingInput id="subject" label="Subject" placeholder="Table for two / Special Request" />
              <FloatingInput id="message" label="Message" as="textarea" rows={4} />

              <motion.button
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-shimmer w-full bg-accent text-white font-semibold py-4 tracking-widest uppercase text-sm shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-shadow"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
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
