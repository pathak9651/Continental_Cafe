"use client";

import { motion } from "framer-motion";
import { FiCoffee, FiShoppingBag, FiTruck, FiWifi } from "react-icons/fi";

const services = [
  { icon: FiCoffee, title: "Dine-In", desc: "Experience our luxurious, warm, and cozy cafe ambiance crafted for every moment.", num: "01" },
  { icon: FiTruck, title: "Home Delivery", desc: "Enjoy our premium taste in the comfort of your home, delivered fresh.", num: "02" },
  { icon: FiShoppingBag, title: "Takeaway", desc: "Grab your favorite coffee and delights on the go without compromise.", num: "03" },
  { icon: FiWifi, title: "Free Wi-Fi", desc: "Stay seamlessly connected with high-speed internet while you relax.", num: "04" },
];

export function Services() {
  return (
    <section className="py-24 px-6 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-accent" />
            <h2 className="text-accent text-sm uppercase tracking-[0.3em] font-semibold">What We Offer</h2>
            <div className="h-[1px] w-8 bg-accent" />
          </div>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            At Your <span className="italic font-light">Service</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col p-8 rounded-2xl
                  bg-background/60 backdrop-blur-sm
                  border-l-2 border-t border-r border-b border-accent/10
                  border-l-accent/40
                  hover:border-l-accent hover:border-accent/20
                  hover:shadow-2xl hover:shadow-accent/8
                  transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                {/* Ghost number */}
                <span className="absolute top-4 right-5 text-7xl font-heading font-bold text-accent/5 group-hover:text-accent/10 transition-colors duration-500 leading-none select-none">
                  {service.num}
                </span>

                {/* Icon with glow */}
                <div className="relative mb-6 w-14 h-14 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500" />
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: "0 0 20px 4px rgba(111,78,55,0.3)" }} />
                  <Icon size={28} className="relative text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h4 className="text-lg font-heading font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-foreground/60 text-sm leading-relaxed">{service.desc}</p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
