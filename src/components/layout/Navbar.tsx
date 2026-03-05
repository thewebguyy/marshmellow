"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-sm"
        >
            <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-display font-medium tracking-tight text-brand-charcoal">
                    Marshmellow
                </span>
            </Link>

            <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-brand-charcoal/60 tracking-wide uppercase">
                <Link href="#problem" className="hover:text-brand-charcoal transition-colors">The Reality</Link>
                <Link href="#solution" className="hover:text-brand-charcoal transition-colors">The Approach</Link>
                <Link href="#features" className="hover:text-brand-charcoal transition-colors">The Platform</Link>
                <Link href="#verification" className="hover:text-brand-charcoal transition-colors">The Trust</Link>
            </div>

            <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="hidden sm:inline-flex border-brand-charcoal/20">
                    Apply for Access
                </Button>
                {/* Mobile Burger/Menu could go here, but per audit, we might want a floating bar instead */}
            </div>
        </motion.nav>
    );
}
