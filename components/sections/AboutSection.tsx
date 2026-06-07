'use client'

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import SectionHeader from "@/components/SectionHeader";
import { Reveal, Stagger, StaggerItem, EASE } from "@/components/motion";
import { useContent } from "@/components/LocaleProvider";
import type { Stat } from "@/content/types";

// Animated counter driven by motion values — counts up once when in view
const Counter = ({ value, suffix }: Pick<Stat, "value" | "suffix">) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(count, value, { duration: 1.8, ease: EASE });
        return controls.stop;
    }, [isInView, count, value]);

    return (
        <span ref={ref} className="font-serif text-5xl text-foreground md:text-6xl">
            <motion.span>{rounded}</motion.span>
            {suffix && <span className="text-accent">{suffix}</span>}
        </span>
    );
};

const AboutSection = () => {
    const { about, site } = useContent();

    return (
        <section id="about" className="py-28 md:py-40">
            <div className="mx-auto max-w-content px-6 lg:px-10">
                <SectionHeader
                    number="01"
                    label={about.label}
                    title={
                        <>
                            {about.titlePre}{" "}
                            <span className="italic text-accent">{about.titleAccent}</span>
                        </>
                    }
                />

                <div className="grid gap-16 lg:grid-cols-12">
                    {/* Bio */}
                    <div className="space-y-6 lg:col-span-7">
                        {about.paragraphs.map((paragraph, index) => (
                            <Reveal key={index} delay={index * 0.1}>
                                <p className="text-base leading-relaxed text-muted md:text-lg">
                                    {paragraph}
                                </p>
                            </Reveal>
                        ))}

                        <Reveal delay={0.3}>
                            <div className="flex flex-wrap gap-2 pt-6">
                                {about.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="border border-line px-4 py-2 text-xs uppercase tracking-[0.15em] text-muted transition-colors duration-300 hover:border-accent/40 hover:text-foreground"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.35}>
                            <p className="pt-4 text-xs uppercase tracking-[0.2em] text-muted/70">
                                {site.languages}
                            </p>
                        </Reveal>
                    </div>

                    {/* Stats */}
                    <Stagger className="grid grid-cols-2 content-start gap-px bg-line lg:col-span-5 lg:self-start">
                        {about.stats.map((stat) => (
                            <StaggerItem
                                key={stat.label}
                                className="flex flex-col gap-3 bg-background p-8"
                            >
                                <Counter value={stat.value} suffix={stat.suffix} />
                                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                                    {stat.label}
                                </span>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
