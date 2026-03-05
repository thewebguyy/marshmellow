"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

export function EarlyAccess() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="early-access" className="py-48 px-6 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-xs uppercase tracking-[0.4em] font-semibold text-brand-rose/60 block mb-10">Application</span>
                        <h2 className="text-5xl md:text-7xl font-display font-medium text-brand-charcoal mb-10 leading-[0.9] tracking-tight">
                            The right person is <br className="hidden md:block" />
                            already here.
                        </h2>
                        <p className="text-2xl text-brand-gray font-sans font-light leading-relaxed max-w-xl">
                            Verified access is opening in select cities. Your path to being understood begins the moment you apply.
                        </p>
                    </motion.div>
                </div>

                <div className="lg:col-span-6">
                    <div className="bg-[#121212] p-10 md:p-16 rounded-[4rem] border border-white/10 shadow-[0_48px_96px_-24px_rgba(0,0,0,0.5)]">
                        <AnimatePresence mode="wait">
                            {!submitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 px-2">First Name</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-brand-rose/40 focus:bg-white/10 transition-all font-sans"
                                                placeholder="Elena"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 px-2">Specialty or Role</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-brand-rose/40 focus:bg-white/10 transition-all font-sans"
                                                placeholder="Cardiology Fellow"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 px-2">Institutional Email</label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-brand-rose/40 focus:bg-white/10 transition-all font-sans"
                                                placeholder="elena@hospital.org"
                                            />
                                        </div>
                                        <div className="mt-8">
                                            <Button type="submit" size="xl" className="w-full py-6 text-xl tracking-tight shadow-2xl shadow-brand-rose/20">
                                                Apply for Early Access
                                            </Button>
                                        </div>
                                        <p className="text-[10px] text-white/30 text-center uppercase tracking-widest font-medium">
                                            Credential Verification Pipeline Ready
                                        </p>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-center py-10"
                                >
                                    <div className="w-24 h-24 bg-brand-rose/10 rounded-full flex items-center justify-center mx-auto mb-12 relative">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                                            className="w-12 h-12 rounded-full bg-brand-rose flex items-center justify-center text-white"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </motion.div>
                                        <div className="absolute inset-0 border border-brand-rose/20 rounded-full animate-ping opacity-20" />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-10 tracking-tight leading-none">You&apos;re on the list.</h3>
                                    <p className="text-xl md:text-2xl text-white/50 font-sans font-light leading-relaxed max-w-md mx-auto italic">
                                        &ldquo;Verification begins now. You can rest. You&apos;ve already done the hard part of deciding.&rdquo;
                                    </p>
                                    <div className="mt-16 w-20 h-px bg-brand-rose/30 mx-auto" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Symmetry Break - Subtle Floating Dot */}
            <div className="absolute top-1/2 left-20 w-1.5 h-1.5 rounded-full bg-brand-rose/40 animate-pulse hidden xl:block" />
        </section>
    );
}
