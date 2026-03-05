"use client";

import { motion } from "framer-motion";
import {
    CalendarClock,
    MessageSquareOff,
    ArrowRightLeft,
    ShieldAlert,
    Zap,
    BadgeCheck
} from "lucide-react";

const FEATURES = [
    {
        icon: CalendarClock,
        title: "Shift-Aware Matching",
        content: "The app knows you're on call. It knows when your rotation ends. Matches are surfaced during your identified free windows — and suppressed when you're post-call and running at the cognitive edge. You are never served high-effort prompts at 6am after a 28-hour shift. The platform respects that timing in a relationship, as in medicine, changes everything."
    },
    {
        icon: MessageSquareOff,
        title: "The Waiting Room",
        content: "No expiry timers. No \"your match is about to disappear\" manipulation. Our messaging environment is built on the premise that silence between two busy people is not disinterest — it's life. A quiet indicator tells you when your match is typically available, based on their real patterns. Not online/offline. Available."
    },
    {
        icon: ArrowRightLeft,
        title: "Night Shift Compatibility Score",
        content: "Displayed clearly on every profile: how well your schedule patterns align. Green means your free windows overlap. Red means you'll be ships in the night, regardless of everything else. This single metric has saved more people from beautiful-but-impossible relationships than any other feature we've built."
    },
    {
        icon: ShieldAlert,
        title: "The Institution Firewall",
        content: "Your profile is never visible to members verified at your institution. The professional world of medicine is small, interconnected, and reputation-dependent in ways most people outside it don't appreciate. Your personal life and your professional life remain as separated as you keep them — by default, always."
    },
    {
        icon: Zap,
        title: "The \"I'm Free\" Signal",
        content: "One tap. No message required. A quiet notification to your top five matches that you have a two-hour window right now. No vulnerability of asking. No awkwardness of suggesting and being declined. Just a green light, on your terms, when you're ready. The people who see it can choose to respond or not. It is the lowest-friction, highest-dignity way of opening a door that has ever existed on a dating platform."
    },
    {
        icon: BadgeCheck,
        title: "Verified Professional Identity",
        content: "Every member's credentials are confirmed before their profile goes live. Not by an automated checkbox — by a verification pipeline that cross-references medical license registries, institutional databases, and professional documents. The trust badge on a profile isn't a self-reported designation. It's an earned one. In a community that has spent years earning credentials, that distinction matters."
    }
];

export function Features() {
    const featuredFeatures = FEATURES.slice(0, 2);
    const regularFeatures = FEATURES.slice(2);

    return (
        <section id="features" className="py-48 px-6 bg-white section-bleed-ivory-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-32 max-w-2xl"
                >
                    <span className="text-xs uppercase tracking-[0.4em] font-semibold text-brand-rose/60 block mb-6">The Platform</span>
                    <h2 className="text-5xl md:text-7xl font-display font-medium text-brand-charcoal mb-8 leading-tight">
                        Six things you won&apos;t find anywhere else.
                    </h2>
                    <p className="text-xl md:text-2xl font-sans font-light text-brand-gray leading-relaxed">
                        Features engineered for the reality of clinical life. Not for engagement metrics.
                    </p>
                </motion.div>

                {/* Asymmetric Editorial Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
                    {featuredFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.2 }}
                            className="group relative p-12 md:p-16 rounded-[3rem] border border-brand-charcoal/5 hover:border-brand-rose/30 hover:bg-brand-rose/[0.02] transition-all duration-700 overflow-hidden col-span-1"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-rose/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-brand-charcoal/5 flex items-center justify-center text-brand-charcoal group-hover:bg-brand-rose/20 group-hover:text-brand-rose transition-all duration-500 mb-12 group-hover:scale-110">
                                    <feature.icon size={32} strokeWidth={1} />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-display font-medium text-brand-charcoal mb-8">
                                    {feature.title}
                                </h3>
                                <p className="text-xl font-sans font-light text-brand-gray leading-relaxed max-w-xl">
                                    {feature.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                    {regularFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                            className="group p-10 md:p-12 rounded-[2.5rem] border border-brand-charcoal/5 hover:border-brand-rose/20 hover:bg-brand-rose/[0.015] transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand-charcoal/5 flex items-center justify-center text-brand-charcoal group-hover:bg-brand-rose/10 group-hover:text-brand-rose transition-colors mb-8">
                                <feature.icon size={22} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-display font-medium text-brand-charcoal mb-6">
                                {feature.title}
                            </h3>
                            <p className="text-lg font-sans font-light text-brand-gray leading-relaxed">
                                {feature.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
