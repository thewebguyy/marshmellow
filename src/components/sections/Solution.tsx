"use client";

import { motion } from "framer-motion";
import { Clock, Users, Target } from "lucide-react";

const PILLARS = [
    {
        icon: Clock,
        title: "The algorithm starts with your schedule, not your preferences.",
        content: "Your availability windows, your shift patterns, your rotation schedule — these are not filters applied after matching. They are the first layer of the algorithm. You are never shown someone whose life is structurally incompatible with yours, regardless of how attractive the profile is. Structural incompatibility is relationship architecture, and it cannot be overcome by chemistry alone. We've learned this from the couples who didn't make it."
    },
    {
        icon: Users,
        title: "Everyone you meet here has already passed the first test.",
        content: "The fundamental question of \"does this person understand my life\" — the question that ends so many relationships with non-medical partners — is answered before you see a single profile. They are in medicine. The vocabulary is shared. The context is given. You don't begin from zero."
    },
    {
        icon: Target,
        title: "Fewer matches, but actually better ones.",
        content: "You receive five curated matches per day, each with a plain-language explanation of why they were selected for you specifically. Not \"you're both doctors\" — that's trivial. But \"you're both emergency physicians with overlapping free windows on Tuesday and Thursday mornings, you're at similar career stages, and both of you wrote about needing a partner who doesn't take your silences personally.\" The matching isn't volume. It's precision."
    }
];

export function Solution() {
    return (
        <section id="solution" className="py-48 px-6 bg-brand-ivory section-bleed-ivory-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-xs uppercase tracking-[0.4em] font-semibold text-brand-rose/60 block mb-10">The Approach</span>
                            <h2 className="text-5xl md:text-7xl font-display font-medium text-brand-charcoal mb-10 leading-[0.95] tracking-tight">
                                Your time is the scarcest resource. <br className="hidden md:block" />
                                <span className="opacity-30">We treat it accordingly.</span>
                            </h2>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-7 pt-4">
                        <div className="space-y-16 md:space-y-24">
                            {PILLARS.map((pillar, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    className="flex flex-col md:flex-row items-start gap-8"
                                >
                                    <div className="w-16 h-16 shrink-0 rounded-[2rem] bg-brand-charcoal/5 flex items-center justify-center text-brand-rose border border-brand-rose/10">
                                        <pillar.icon size={28} strokeWidth={1} />
                                    </div>
                                    <div className="max-w-2xl">
                                        <h3 className="text-2xl md:text-3xl font-display font-medium text-brand-charcoal mb-6 leading-tight">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-xl font-sans font-light text-brand-gray leading-relaxed opacity-80">
                                            {pillar.content}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Symmetry Break - Left Edge Accent */}
            <div className="absolute top-1/2 left-0 w-24 h-px bg-brand-rose/10 hidden xl:block" />
        </section>
    );
}
