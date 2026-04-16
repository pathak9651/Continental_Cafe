"use client";

import { motion } from "framer-motion";
import { FiCoffee, FiShoppingBag, FiTruck, FiWifi } from "react-icons/fi";

const services = [
  { icon: FiCoffee, title: "Dine-In", desc: "Experience our luxurious, warm, and cozy cafe ambiance." },
  { icon: FiTruck, title: "Home Delivery", desc: "Enjoy our premium taste in the comfort of your home." },
  { icon: FiShoppingBag, title: "Takeaway", desc: "Grab your favorite coffee and delights on the go." },
  { icon: FiWifi, title: "Free Wi-Fi", desc: "Stay connected with high-speed internet while you relax." },
];

export function Services() {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.7, ease: "easeOut" }}
                className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-background/50 backdrop-blur-sm border border-accent/10 hover:border-accent/40 shadow-sm hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="mb-6 p-5 rounded-full border border-accent/20 bg-gradient-to-tr from-accent/5 to-transparent text-accent group-hover:from-accent group-hover:to-accent/80 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 shadow-inner">
                  <Icon size={36} />
                </div>
                <h4 className="text-xl font-heading font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">{service.title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">{service.desc}</p>
                
                {/* Decorative border line */}
                <div className="absolute inset-x-8 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
