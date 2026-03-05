import type { Metadata } from "next";
import { Inter, Outfit, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marshmellow | Elevated Connections for Medical Professionals",
  description: "A private, verified network for medical professionals. Built for those who understand that timing, comprehension, and shared experience are the foundations of real connection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${ebGaramond.variable} font-sans antialiased bg-brand-ivory text-brand-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
