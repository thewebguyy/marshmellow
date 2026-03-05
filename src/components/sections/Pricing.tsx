"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Check } from "lucide-react";

export function Pricing() {
    const tiers = [
        {
            name: "The Student",
            price: "$19",
            period: "monthly",
            desc: "A community investment with a twenty-year return.",
            features: ["Full schedule matching", "Institutional firewall", "Basic verification", "5 daily matches"]
        },
        {
            name: "The Plus",
            price: "$149",
            period: "annually",
            desc: "Serious people pay for things that respect their time.",
            features: ["Advanced shift integration", "Specialty networking", "Priority verification", "Shift-sync signals"],
            highlight: true
        },
        {
            name: "The Premium",
            price: "$49",
            period: "monthly",
            desc: "Precision matching for established professionals.",
            features: ["All Plus features", "Institution-specific blocks", "Concierge support", "Custom availability"]
        }
    ];

    return (
        <section id="pricing" className="py-48 px-6 bg-brand-ivory section-bleed-white-charcoal border-t border-brand-charcoal/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 items-end">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-xs uppercase tracking-[0.4em] font-semibold text-brand-rose/60 block mb-10">The Investment</span>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-brand-charcoal leading-[0.9] tracking-tight">
                                Serious people pay for <br className="hidden md:block" />
                                <span className="italic font-serif opacity-90">respect.</span>
                            </h2>
                        </motion.div>
                    </div>
                    <div className="lg:col-span-4 pb-4">
                        <p className="text-xl text-brand-gray font-sans font-light leading-relaxed">
                            The incentive structures of free and paid are not the same. We are aligned with getting you to the right person quickly.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.15 }}
                            className={`relative p-12 lg:p-14 rounded-[3.5rem] flex flex-col transition-all duration-700 hover:-translate-y-2 ${tier.highlight
                                ? "bg-white shadow-[0_64px_128px_-32px_rgba(0,0,0,0.1)] ring-1 ring-brand-charcoal/5 scale-105 z-10"
                                : "bg-white/30 border border-brand-charcoal/5"
                                }`}
                        >
                            <h3 className="text-2xl font-display font-medium text-brand-charcoal mb-4 uppercase tracking-tighter">{tier.name}</h3>
                            <div className="flex items-baseline space-x-1 mb-8">
                                <span className="text-5xl font-display font-bold tracking-tighter">{tier.price}</span>
                                <span className="text-brand-gray/40 font-sans text-sm tracking-widest uppercase italic">{tier.period}</span>
                            </div>
                            <p className="text-base font-sans font-normal text-brand-gray mb-12 leading-relaxed">
                                {tier.desc}
                            </p>

                            <ul className="space-y-6 mb-16 flex-grow">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start space-x-4 text-sm font-sans text-brand-charcoal/70">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-rose mt-1.5 shrink-0" />
                                        <span className="leading-tight">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={tier.highlight ? "primary" : "outline"}
                                className="w-full py-5 text-lg"
                            >
                                Apply for Access
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <p className="text-[10px] font-sans font-medium text-brand-gray/40 uppercase tracking-[0.3em]">
                        Cancel at any time. No dark patterns. <br className="md:hidden" /> No confusing billing algorithms.
                    </p>
                </motion.div>
            </div>

            {/* Symmetry Break - Offset Vertical Line */}
            <div className="absolute top-0 right-[15%] w-px h-64 bg-brand-rose/10 hidden xl:block" />
        </section>
    );
}
