"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Check } from "lucide-react";

export function Pricing() {
    const tiers = [
        {
            name: "Student",
            price: "$19",
            period: "monthly",
            desc: "A community investment with a twenty-year return.",
            features: ["Full schedule matching", "Institutional firewall", "Basic verification", "5 daily matches"],
            highlight: false
        },
        {
            name: "Plus",
            price: "$149",
            period: "annually",
            desc: "Serious people pay for things that respect their time.",
            features: ["Advanced shift integration", "Specialty networking", "Priority verification", "Shift-sync signals"],
            highlight: true
        },
        {
            name: "Premium",
            price: "$49",
            period: "monthly",
            desc: "Precision matching for established professionals.",
            features: ["All Plus features", "Institution-specific blocks", "Concierge support", "Custom availability"],
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="py-32 px-6 bg-brand-ivory">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-brand-charcoal mb-8">
                        Serious people pay for things that respect their time. This is one of those things.
                    </h2>
                    <p className="text-xl text-brand-gray font-sans font-light max-w-3xl mx-auto">
                        The incentive structures of free and paid are not the same. We are aligned with getting you to the right person quickly, not keeping you searching.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-10 rounded-[40px] flex flex-col ${tier.highlight
                                    ? "bg-white shadow-2xl shadow-brand-charcoal/5 ring-1 ring-brand-rose/20 scale-105 z-10"
                                    : "bg-white/40 border border-brand-charcoal/5"
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-rose text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                    Recommended
                                </div>
                            )}
                            <h3 className="text-2xl font-display font-medium text-brand-charcoal mb-2">{tier.name}</h3>
                            <div className="flex items-baseline space-x-1 mb-4">
                                <span className="text-4xl font-display font-bold">{tier.price}</span>
                                <span className="text-brand-gray/60 font-sans">/{tier.period}</span>
                            </div>
                            <p className="text-sm font-sans font-normal text-brand-gray mb-8">
                                {tier.desc}
                            </p>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-sm font-sans text-brand-charcoal/80">
                                        <Check size={16} className="text-brand-rose shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={tier.highlight ? "primary" : "outline"}
                                className="w-full"
                                size="lg"
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
                    className="mt-16 text-center"
                >
                    <p className="text-sm font-sans font-light text-brand-gray">
                        Cancel any time. No dark patterns. No confusing billing. Medicine has enough of those already.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
