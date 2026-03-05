"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Lock } from "lucide-react";

export function Verification() {
    return (
        <section id="verification" className="py-48 px-6 bg-[#121212] text-white overflow-hidden relative">
            {/* Background Grain/Noise Effect */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-48 flex flex-col lg:flex-row items-center gap-24 lg:gap-32"
                >
                    <div className="flex-1">
                        <span className="text-xs uppercase tracking-[0.4em] font-semibold text-brand-rose/60 block mb-8">The Trust</span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.9] tracking-tight mb-10">
                            In medicine, trust is not assumed. <br className="hidden lg:block" />
                            <span className="text-brand-rose italic font-serif opacity-90">It is verified.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/50 font-sans font-light leading-relaxed max-w-2xl">
                            We operate with the same rigor you apply to your practice. Every member, every credential, every specialty is confirmed before they see a single profile.
                        </p>
                    </div>

                    {/* Abstract Graphic Replacement for verification.png */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 relative aspect-square w-full max-w-lg lg:max-w-none flex items-center justify-center p-8 lg:p-12 border border-white/5 rounded-[4rem] bg-white/[0.02]"
                    >
                        <div className="absolute inset-0 bg-brand-rose/5 blur-[120px] rounded-full" />
                        <div className="relative z-10 w-full aspect-square border-2 border-brand-rose/20 rounded-full flex items-center justify-center motion-safe:animate-[spin_40s_linear_infinite]">
                            <div className="w-2/3 h-2/3 border border-brand-rose/10 rounded-full flex items-center justify-center motion-safe:animate-[spin_20s_linear_infinite_reverse]">
                                <ShieldCheck size={48} strokeWidth={1} className="text-brand-rose opacity-60" />
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[12rem] font-display font-bold text-white/5 select-none uppercase tracking-tighter">VERIFIED</span>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-48">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5"
                    >
                        <ShieldCheck className="text-brand-rose/60 mb-8" size={32} strokeWidth={1.5} />
                        <h3 className="text-2xl font-display font-medium mb-6">What is verified</h3>
                        <p className="text-lg font-sans font-light text-white/40 leading-relaxed">
                            Medical license, institutional email, and professional documentation. Every tier of membership is visible on the profile.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5"
                    >
                        <FileCheck className="text-brand-rose/60 mb-8" size={32} strokeWidth={1.5} />
                        <h3 className="text-2xl font-display font-medium mb-6">How it is verified</h3>
                        <p className="text-lg font-sans font-light text-white/40 leading-relaxed">
                            Cross-referenced with global registries (GMC, AMA) and institutional domain verification pipelines.
                        </p>
                    </motion.div>

                    {/* Given more visual weight */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="p-12 rounded-[3rem] bg-brand-rose text-white border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.4)] lg:scale-110 lg:translate-y-4"
                    >
                        <Lock className="text-white mb-8" size={40} strokeWidth={1.5} />
                        <h3 className="text-3xl font-display font-medium mb-8">What it means</h3>
                        <p className="text-xl font-sans font-normal text-white leading-relaxed">
                            The person across from you in this community is who they say they are. In a world of professional credibility, trust is the baseline.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative py-24 px-8 md:px-16 lg:px-24 rounded-[4rem] border border-white/10 bg-white/5 flex flex-col items-center text-center backdrop-blur-sm shadow-2xl"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-brand-rose flex items-center justify-center shadow-2xl shadow-brand-rose/40 text-white">
                        <Lock size={32} strokeWidth={1.5} />
                    </div>
                    <p className="text-3xl md:text-5xl font-display font-light text-white max-w-5xl italic leading-tight">
                        &ldquo;We have declined every request to share, sell, or monetize member verification data. <br className="hidden md:block" />
                        <span className="opacity-40">We will continue to decline every such request.</span>&rdquo;
                    </p>
                    <div className="mt-16 w-32 h-[1px] bg-brand-rose/30" />
                </motion.div>
            </div>

            {/* Symmetry Break - Far Bottom Right Accent */}
            <div className="absolute bottom-10 right-10 w-px h-24 bg-brand-rose/10 hidden xl:block" />
        </section>
    );
}
