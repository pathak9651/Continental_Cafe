import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingContact } from "@/components/FloatingContact";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Continental Cafee | Experience the Taste of Luxury",
  description: "Premium Coffee & Continental Delights. A luxurious, modern, and cozy café experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          {children}
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}
