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
    return (
        <section id="features" className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-charcoal mb-4">
                        Six things you won&apos;t find anywhere else.
                    </h2>
                    <p className="text-xl md:text-2xl font-sans font-light text-brand-gray">
                        Because no one else built them.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {FEATURES.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group p-8 rounded-3xl border border-brand-charcoal/5 hover:border-brand-rose/20 hover:bg-brand-rose/[0.01] transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand-charcoal/5 flex items-center justify-center text-brand-charcoal group-hover:bg-brand-rose/10 group-hover:text-brand-rose transition-colors mb-8">
                                <feature.icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-display font-medium text-brand-charcoal mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-base font-sans font-light text-brand-gray leading-relaxed">
                                {feature.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
