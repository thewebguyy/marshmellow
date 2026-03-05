"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 hero-gradient overflow-hidden">
            {/* Subtle Rose Glow */}
            <div className="absolute inset-0 rose-glow pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="max-w-5xl"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.05] tracking-tight text-brand-charcoal text-balance">
                        You&apos;ve never had to explain your life to a patient. You shouldn&apos;t have to explain it to a partner.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="mt-8 max-w-2xl"
                >
                    <p className="text-xl md:text-2xl text-brand-gray font-sans font-normal leading-relaxed text-balance">
                        Marshmellow is a private, verified network for medical professionals who are ready to stop being a mystery to the person they come home to.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    className="mt-10 max-w-xl"
                >
                    <p className="text-base text-brand-gray/80 italic font-normal leading-relaxed">
                        Most of your colleagues have quietly given up on mainstream dating apps. Not because they stopped wanting connection. Because the apps stopped making sense for the life they actually live.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                    className="mt-12 flex flex-col items-center space-y-4"
                >
                    <Button size="xl" className="shadow-lg shadow-brand-rose/20">
                        Apply for Early Access
                    </Button>
                    <div className="flex flex-col items-center space-y-1">
                        <p className="text-sm font-light text-brand-charcoal/60">
                            Every member is credentialed and verified.
                        </p>
                        <p className="text-sm font-light text-brand-charcoal/60">
                            Your profile is never visible to colleagues unless you choose otherwise.
                        </p>
                    </div>
                </motion.div>

                {/* Proof Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                    className="mt-20 pt-10 border-t border-brand-charcoal/5 w-full flex justify-center"
                >
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-brand-gray/50">
                        Trusted by verified physicians, surgeons, residents, and nurses across New York, London, Toronto, Chicago, and Boston.
                    </p>
                </motion.div>
            </div>

            {/* Visual Element - Suggestion of depth */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[30%] bg-white/30 blur-3xl -rotate-1 transform-gpu pointer-events-none" />
        </section>
    );
}
