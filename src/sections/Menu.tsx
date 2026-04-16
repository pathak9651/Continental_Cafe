"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Caramel Macchiato", price: "$6.50", desc: "Espresso with vanilla-flavored syrup, milk and caramel drizzle.", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop" },
      { name: "Ethiopian Pour Over", price: "$5.00", desc: "Single-origin pour over with bright floral notes.", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    category: "Continental Food",
    items: [
      { name: "Avocado Toast", price: "$12.00", desc: "Sourdough, smashed avocado, poached egg, chili flakes.", img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=800&auto=format&fit=crop" },
      { name: "Truffle Pasta", price: "$18.50", desc: "Fresh linguine, wild mushrooms, creamy truffle sauce.", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Classic Tiramisu", price: "$8.00", desc: "Espresso-soaked ladyfingers, mascarpone, cocoa.", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop" },
      { name: "Berry Cheesecake", price: "$7.50", desc: "NY style cheesecake with mixed berry compote.", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop" },
    ]
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-24 px-6 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-accent text-sm uppercase tracking-widest font-semibold mb-3">Our Menu</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            A Symphony of <span className="italic font-light">Flavors</span>
          </h3>
        </motion.div>

        <div className="space-y-16">
          {menuItems.map((category, idx) => (
            <div key={idx}>
              <h4 className="text-2xl font-heading font-semibold mb-8 pb-2 border-b border-muted/50 text-foreground">
                {category.category}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                {category.items.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex flex-col bg-background border border-muted/20 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-muted/10">
                      <Image 
                        src={item.img} 
                        alt={item.name} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-md px-4 py-1.5 rounded-full text-accent font-semibold text-sm shadow-lg border border-muted/20">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-background z-10 relative">
                      <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-muted/30 to-transparent -translate-y-1/2" />
                      
                      <div>
                        <h5 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">{item.name}</h5>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-6">{item.desc}</p>
                      </div>
                      <div className="pt-4 flex items-center">
                         <div className="h-[1px] bg-muted/40 flex-1 relative overflow-hidden group-hover:bg-accent/20 transition-colors duration-500">
                           <div className="absolute top-0 left-0 h-full w-full bg-accent/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                         </div>
                         <div className="w-1.5 h-1.5 rounded-full bg-accent/40 ml-2 group-hover:bg-accent group-hover:scale-150 transition-all duration-500" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
