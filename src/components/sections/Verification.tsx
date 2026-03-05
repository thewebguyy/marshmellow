"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Lock } from "lucide-react";

export function Verification() {
    return (
        <section id="verification" className="py-32 px-6 charcoal-gradient text-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight max-w-4xl">
                        In medicine, trust is not assumed. It is verified. We operate the same way.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="flex items-center space-x-4 mb-8">
                            <ShieldCheck className="text-brand-rose" size={28} />
                            <h3 className="text-xl font-display font-medium">What is verified</h3>
                        </div>
                        <p className="text-lg font-sans font-light text-white/70 leading-relaxed">
                            Medical license or registration status, institutional email affiliation, professional documentation for specialties and international practitioners. Every tier of membership corresponds to a tier of verification — and that tier is visible on the profile.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center space-x-4 mb-8">
                            <FileCheck className="text-brand-rose" size={28} />
                            <h3 className="text-xl font-display font-medium">How it is verified</h3>
                        </div>
                        <p className="text-lg font-sans font-light text-white/70 leading-relaxed">
                            Automated cross-reference with the AMA Physician Masterfile, the UK GMC register, and provincial medical colleges in Canada. Institutional email domain verification against a maintained database of accredited medical institutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center space-x-4 mb-8">
                            <Lock className="text-brand-rose" size={28} />
                            <h3 className="text-xl font-display font-medium">What it means</h3>
                        </div>
                        <p className="text-lg font-sans font-light text-white/70 leading-relaxed">
                            You are never matched with someone who has not been verified. The person across from you in this community is who they say they are. In a world where professional credibility is foundational to identity, the ability to trust that completely is the foundation.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative py-24 px-8 md:px-16 rounded-[40px] border border-white/10 bg-white/5 flex flex-col items-center text-center backdrop-blur-sm shadow-2xl"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-brand-rose flex items-center justify-center shadow-lg shadow-brand-rose/20">
                        <Lock size={24} className="text-white" />
                    </div>
                    <p className="text-2xl md:text-4xl font-display font-light text-white max-w-4xl italic leading-relaxed">
                        &ldquo;We have declined every request to share, sell, or monetize member verification data. We will continue to decline every such request.&rdquo;
                    </p>
                    <div className="mt-12 w-24 h-[1px] bg-brand-rose/40" />
                </motion.div>
            </div>
        </section>
    );
}
