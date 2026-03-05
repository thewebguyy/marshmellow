"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-16 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-brand-charcoal/5 py-4" : "bg-transparent py-8"
                }`}
        >
            <Link href="/" className="flex items-center space-x-2 group">
                <span className="text-2xl font-display font-medium tracking-[-0.05em] text-brand-charcoal uppercase group-hover:text-brand-rose transition-colors duration-500">
                    Marshmellow
                </span>
            </Link>

            <div className={`hidden md:flex items-center space-x-12 text-[10px] font-bold text-brand-charcoal/40 tracking-[0.3em] uppercase transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-80"}`}>
                <Link href="#problem" className="hover:text-brand-charcoal transition-colors">The Reality</Link>
                <Link href="#solution" className="hover:text-brand-charcoal transition-colors">The Approach</Link>
                <Link href="#features" className="hover:text-brand-charcoal transition-colors">The Platform</Link>
                <Link href="#verification" className="hover:text-brand-charcoal transition-colors">The Trust</Link>
            </div>

            <div className="flex items-center space-x-6">
                <Button variant={isScrolled ? "primary" : "outline"} size="sm" className="hidden sm:inline-flex border-brand-charcoal/10 px-8">
                    Apply for Access
                </Button>
                {/* Minimal Mobile Version - simple text trigger if needed, or just let users scroll */}
                <div className="w-8 h-px bg-brand-charcoal/20 md:hidden" />
            </div>
        </motion.nav>
    );
}
