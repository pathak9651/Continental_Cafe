import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/Separator";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Menu } from "@/sections/Menu";
import { Gallery } from "@/sections/Gallery";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Services />
      <Separator />
      <Menu />
      <Separator />
      <Gallery />
      <Separator />
      <Testimonials />
      <Separator />
      <Contact />
      <Footer />
    </main>
  );
}

