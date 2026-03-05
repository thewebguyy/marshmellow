"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
    {
        quote: "Finding someone who actually understands the post-on-call silence was the first time I felt like a whole person again.",
        name: "Elena",
        specialty: "Cardiology Fellow",
        city: "New York",
        stage: "3 years in practice"
    },
    {
        quote: "The Shift-Aware matching means I'm only seeing people who know exactly what my schedule looks like—because they're living it too.",
        name: "Marcus",
        specialty: "General Surgery Resident",
        city: "Boston",
        stage: "PGY-4"
    },
    {
        quote: "She didn't ask for an explanation. She just handed me a coffee and told me she'd already ordered for me. That's comprehension.",
        name: "David",
        specialty: "Pediatric Nurse Practitioner",
        city: "Toronto",
        stage: "8 years in practice"
    }
];

export function Testimonials() {
    return (
        <section className="py-48 px-6 bg-white overflow-hidden section-bleed-charcoal-white border-b border-brand-charcoal/5">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="text-center mb-32"
                >
                    <span className="text-xs uppercase tracking-[0.4em] font-semibold text-brand-rose/60 block mb-8">Honest Observations</span>
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-brand-charcoal leading-tight italic">
                        &ldquo;These are not success stories. They are honest ones.&rdquo;
                    </h2>
                </motion.div>

                <div className="space-y-48 md:space-y-64">
                    {TESTIMONIALS.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="relative flex flex-col items-center text-center px-4"
                        >
                            <blockquote className="text-3xl md:text-5xl lg:text-7xl font-serif font-light leading-[1.1] text-brand-charcoal text-balance mb-16 italic tracking-tight">
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>
                            <div className="flex flex-col items-center">
                                <span className="text-brand-rose font-display font-medium text-xl mb-2 uppercase tracking-widest">{t.name}</span>
                                <span className="text-brand-gray/50 font-sans text-sm tracking-wide lowercase italic">
                                    {t.specialty} • {t.city} • {t.stage}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-48 text-center"
                >
                    <p className="text-[10px] font-sans font-medium text-brand-gray/40 uppercase tracking-[0.3em]">
                        All members quoted have been independently verified. <br className="md:hidden" /> First names used with permission.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
