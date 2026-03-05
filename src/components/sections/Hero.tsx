"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 hero-gradient overflow-hidden">
            {/* Amplified Rose Glow */}
            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-brand-rose/15 blur-[120px] rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none z-0" />
            <div className="absolute inset-0 rose-glow pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                {/* Text Content - Left Aligned on Desktop */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="w-full"
                    >
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-display font-medium leading-[0.9] tracking-[-0.05em] text-brand-charcoal">
                            Stop explaining. <br />
                            <span className="text-brand-rose italic font-serif text-[0.85em] tracking-tight block mt-4">Start being understood.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="mt-10 max-w-xl"
                    >
                        <p className="text-xl md:text-2xl text-brand-gray font-sans font-normal leading-relaxed">
                            A private, verified network for medical professionals who are ready to stop being a mystery to the person they come home to.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        className="mt-14 flex flex-col items-start space-y-4"
                    >
                        <Button size="xl" className="shadow-2xl shadow-brand-rose/25">
                            Apply for Early Access
                        </Button>
                        <p className="text-xs font-medium uppercase tracking-widest text-brand-charcoal/40 pl-2">
                            Credentialed & Verified Only
                        </p>
                    </motion.div>
                </div>

                {/* Imagery - Right Aligned on Desktop */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="relative z-10 w-full max-w-md mx-auto transform hover:rotate-2 transition-transform duration-700">
                        <div className="absolute -inset-4 bg-brand-rose/5 blur-2xl rounded-[3rem] pointer-events-none" />
                        <Image
                            src="/images/mockup.png"
                            alt="Marshmellow App Mockup"
                            width={800}
                            height={1200}
                            priority
                            className="relative z-10 w-full h-auto drop-shadow-[0_32px_64px_rgba(0,0,0,0.15)] rounded-[2.5rem]"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Proof Line - Elegant Footer of Hero */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                className="relative z-10 mt-24 lg:mt-32 pt-12 border-t border-brand-charcoal/10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0"
            >
                <p className="text-xs uppercase tracking-[0.3em] font-medium text-brand-charcoal/40 leading-relaxed max-w-lg">
                    Current Verified Presence: New York, London, Toronto, Chicago, Berlin, and San Francisco.
                </p>
                <div className="flex space-x-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="font-display font-bold text-lg tracking-tighter">NYPH</span>
                    <span className="font-display font-bold text-lg tracking-tighter">UHN</span>
                    <span className="font-display font-bold text-lg tracking-tighter">BWH</span>
                </div>
            </motion.div>

            {/* Symmetry Break - Subtle Floating Element */}
            <div className="absolute top-1/4 left-10 w-12 h-px bg-brand-rose/20 hidden xl:block" />
        </section>
    );
}
