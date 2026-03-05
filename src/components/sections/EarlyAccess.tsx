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
        <section id="early-access" className="py-32 px-6 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-ivory via-brand-rose/5 to-brand-rose/10 pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="bg-white/40 backdrop-blur-xl p-8 md:p-20 rounded-[48px] border border-white/60 shadow-2xl shadow-brand-rose/5">
                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-center"
                            >
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-brand-charcoal mb-8 leading-tight">
                                    The right person is already in this community. They&apos;re just waiting for the same thing you are.
                                </h2>
                                <p className="text-xl text-brand-gray font-sans font-light mb-16 leading-relaxed">
                                    Early access is open to verified medical professionals in select cities. Your verification begins the moment you apply — we don&apos;t waste your time with the process either.
                                </p>

                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-brand-gray/60 px-2">First Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-charcoal/5 focus:outline-none focus:ring-1 focus:ring-brand-rose/40 transition-all font-sans"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-brand-gray/60 px-2">Specialty or Role</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-charcoal/5 focus:outline-none focus:ring-1 focus:ring-brand-rose/40 transition-all font-sans"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-brand-gray/60 px-2">Institutional Email</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-charcoal/5 focus:outline-none focus:ring-1 focus:ring-brand-rose/40 transition-all font-sans"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-brand-gray/60 px-2">City</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-charcoal/5 focus:outline-none focus:ring-1 focus:ring-brand-rose/40 transition-all font-sans"
                                        />
                                    </div>
                                    <div className="md:col-span-2 mt-8">
                                        <Button type="submit" size="xl" className="w-full shadow-xl shadow-brand-rose/10">
                                            Apply for Early Access
                                        </Button>
                                    </div>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-center py-20"
                            >
                                <div className="w-20 h-20 bg-brand-rose/10 rounded-full flex items-center justify-center mx-auto mb-12">
                                    <div className="w-10 h-10 rounded-full bg-brand-rose" />
                                </div>
                                <h3 className="text-3xl md:text-5xl font-display font-medium text-brand-charcoal mb-8">You&apos;re on the list.</h3>
                                <p className="text-xl md:text-2xl text-brand-gray font-sans font-light leading-relaxed max-w-2xl mx-auto italic">
                                    &ldquo;Verification typically completes within a few hours for institutional emails. We&apos;ll reach out when Marshmellow opens in your city. In the meantime — you can rest. You&apos;ve already done the hard part of deciding.&rdquo;
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
