"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
    {
        quote: "I used to feel like I was living two completely separate lives. There was the version of me in the hospital who made split-second decisions and handled the weight of people's lives, and then there was the version of me on dating apps who felt like she had to apologize for being busy. Finding someone who actually understands the post-on-call silence was the first time I felt like a whole person again.",
        name: "Elena",
        specialty: "Cardiology Fellow",
        city: "New York",
        stage: "3 years in practice"
    },
    {
        quote: "Dating as a surgical resident is practically a joke on mainstream apps. You match, you don't reply for 24 hours because you're literally in scrubs the whole time, and by the time you check your phone, they've unmatched or decided you're disinterested. Marshmellow changed that. The Shift-Aware matching means I'm only seeing people who know exactly what my schedule looks like—because they're living it too.",
        name: "Marcus",
        specialty: "General Surgery Resident",
        city: "Boston",
        stage: "PGY-4"
    },
    {
        quote: "The Institution Firewall was the deciding factor for me. The medical community in this city is tiny, and the last thing I wanted was to stumble across my attending or a colleague while looking for a partner. Being able to browse with that layer of professional safety made me realize how much I had been holding back on other platforms. It's a level of respect for our profession that no other app has.",
        name: "Sarah",
        specialty: "Emergency Medicine Physician",
        city: "London",
        stage: "Consultant"
    },
    {
        quote: "It's the comprehension that matters most. You don't have to explain the jargon, but more importantly, you don't have to explain the emotional residue of a bad day. My partner and I met on Marshmellow, and on our third date, I had to stay late for a code. When I finally showed up, she didn't ask for an explanation. She just handed me a coffee and told me she'd already ordered for me. That's comprehension.",
        name: "David",
        specialty: "Pediatric Nurse Practitioner",
        city: "Toronto",
        stage: "8 years in practice"
    }
];

export function Testimonials() {
    return (
        <section className="py-32 px-6 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-brand-rose/20 text-brand-rose text-xs font-bold uppercase tracking-widest mb-8">
                        Testimonials
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-medium text-brand-charcoal italic">
                        &ldquo;These are not success stories. They are honest ones.&rdquo;
                    </h2>
                </motion.div>

                <div className="space-y-32">
                    {TESTIMONIALS.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative flex flex-col items-center text-center px-4"
                        >
                            <div className="w-24 h-[1px] bg-brand-charcoal/5 mb-16" />
                            <blockquote className="text-2xl md:text-4xl font-serif font-light leading-relaxed text-brand-charcoal text-balance mb-12 italic">
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>
                            <div className="flex flex-col items-center">
                                <span className="text-brand-rose font-display font-medium text-lg mb-1">{t.name}</span>
                                <span className="text-brand-gray/60 font-sans text-sm tracking-wide lowercase italic">
                                    {t.specialty} • {t.city} • {t.stage}
                                </span>
                            </div>
                            <div className="w-24 h-[1px] bg-brand-charcoal/5 mt-16" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <p className="text-xs font-sans font-light text-brand-gray/60 uppercase tracking-[0.2em]">
                        All members quoted have been independently verified. First names used with permission.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
