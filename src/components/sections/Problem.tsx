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
        <section id="problem" className="py-32 px-6 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-32"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-brand-charcoal mb-8">
                        The problem was never that you were too busy to find someone.
                    </h2>
                    <div className="h-[1px] w-24 bg-brand-rose/30 mb-8" />
                    <p className="text-3xl md:text-4xl font-display text-brand-gray/80 leading-snug italic">
                        &ldquo;The problem is that every app you tried was built for someone else&apos;s life.&rdquo;
                    </p>
                </motion.div>

                <div className="space-y-24 md:space-y-32">
                    {TRUTHS.map((truth, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className={`flex flex-col ${index % 2 === 0 ? "items-start text-left" : "items-end text-right md:text-left md:items-start"}`}
                        >
                            <div className="max-w-2xl">
                                <h3 className="text-sm uppercase tracking-widest font-bold text-brand-rose mb-4">
                                    {truth.title}
                                </h3>
                                <p className="text-xl md:text-2xl font-sans font-light leading-relaxed text-brand-charcoal">
                                    {truth.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-32 pt-20 border-t border-brand-charcoal/5 text-center"
                >
                    <p className="text-2xl md:text-3xl font-display font-normal text-brand-charcoal max-w-3xl mx-auto leading-relaxed">
                        Marshmellow was built on a different premise entirely. That the right person — for someone with your life — isn&apos;t the person who tolerates it. <span className="text-brand-rose">It&apos;s the person who already understands it.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
