"use client";

import { motion } from "framer-motion";

const TRUTHS = [
    {
        title: "On time",
        content: "Residency trains you to function at the edge of human capacity. You've worked 30-hour shifts, delivered a baby and then a death notification in the same hour, made life-altering decisions while running on coffee and willpower. And then you opened a dating app and were punished for not responding within the hour. The algorithm demoted your profile. Your match expired. The app, which does not know you were in an OR, treated your absence as disinterest."
    },
    {
        title: "On comprehension",
        content: "The relationships that broke down did not break down because of incompatibility in the ways compatibility tests measure. They broke down on a Tuesday when you cancelled dinner for the third time and couldn't explain why you were still sitting in your car outside the hospital at 9pm, unable to go inside or drive away. Someone who has been in medicine would have driven to you with food and sat in silence. Someone who hasn't been in medicine wondered if you were pulling away."
    },
    {
        title: "On identity",
        content: "Your career is not what you do. For most people in medicine, it is foundational to who you are — the calling that shaped your twenties, the reason you spent your formative years studying while your peers were building other kinds of lives. Dating someone who treats it as an inconvenience to be managed is a particular kind of loneliness."
    },
    {
        title: "On the apps themselves",
        content: "The existing platforms are engineered for engagement, not for relationships. Their incentive is your continued presence on the app, which means their success is measured by how long it takes you to find someone — not how quickly. You are not their customer. You are their product."
    }
];

export function Problem() {
    return (
        <section id="problem" className="relative py-48 px-6 bg-brand-ivory overflow-hidden">
            {/* Subtle Texture/Luminosity Shift */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.15]" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-48"
                >
                    <span className="text-xs uppercase tracking-[0.4em] font-semibold text-brand-rose/60 block mb-12">The Reality</span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.95] tracking-tight text-brand-charcoal mb-12 max-w-4xl">
                        The problem was never that you were too busy to find someone.
                    </h2>
                    <p className="text-3xl md:text-5xl font-serif text-brand-gray/90 leading-tight italic max-w-3xl">
                        &ldquo;The problem is that every app you tried was built for someone else&apos;s life.&rdquo;
                    </p>
                </motion.div>

                <div className="space-y-48 md:space-y-64">
                    {TRUTHS.map((truth, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 * index }}
                            className="flex flex-col items-start text-left"
                        >
                            <div className="text-editorial">
                                <span className="inline-block px-3 py-1 bg-brand-rose/5 border border-brand-rose/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-brand-rose mb-8">
                                    0{index + 1} — {truth.title}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-display font-medium text-brand-charcoal mb-8 leading-tight">
                                    {truth.title}
                                </h3>
                                <p className="text-xl md:text-2xl font-sans font-light leading-relaxed text-brand-charcoal/80">
                                    {truth.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* The Emotional Peak - Isolated and Scaled */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 2 }}
                    className="mt-64 pt-32 text-left"
                >
                    <div className="max-w-4xl">
                        <p className="text-3xl md:text-5xl lg:text-6xl font-display font-normal text-brand-charcoal leading-[1.1] tracking-tight">
                            Marshmellow was built on a different premise entirely. That the right person — for someone with your life — isn&apos;t the person who <span className="italic font-serif opacity-60">tolerates</span> it.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                            className="mt-12 overflow-hidden"
                        >
                            <span className="block text-4xl md:text-7xl lg:text-8xl font-display font-medium text-brand-rose leading-[0.9] tracking-tight py-4 border-l-4 border-brand-rose/30 pl-8 md:pl-12">
                                It&apos;s the person who <br className="hidden md:block" />
                                already understands it.
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Symmetry Break - Offset Divider */}
            <div className="absolute right-0 top-1/2 w-32 h-[1px] bg-brand-rose/20 -translate-y-1/2 hidden xl:block" />
        </section>
    );
}
