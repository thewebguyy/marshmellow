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
        <section id="solution" className="py-32 px-6 bg-[#FAF9F6]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-brand-charcoal max-w-4xl mx-auto leading-tight">
                        Everything about this platform begins with one assumption: your time is the scarcest resource you have. We treat it accordingly.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                    {PILLARS.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="flex flex-col items-start"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-brand-rose/10 flex items-center justify-center text-brand-rose mb-8">
                                <pillar.icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-display font-medium text-brand-charcoal mb-6 leading-tight">
                                {pillar.title}
                            </h3>
                            <p className="text-lg font-sans font-light text-brand-gray leading-relaxed">
                                {pillar.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
