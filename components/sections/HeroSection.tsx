'use client'

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { LineReveal, EASE } from "@/components/motion";
import { useContent } from "@/components/LocaleProvider";

// Curated subset of the full skills list — the headline tech, grouped.
const HERO_STACK = [
    "React / Next.js",
    "TypeScript",
    "NestJS / Node.js",
    "PostgreSQL / Prisma",
    "AWS",
];

// Live local clock for Colombia. Starts empty so server and first client
// render match (no hydration mismatch); the effect fills it in after mount.
function useLocalTime(intlLocale: string) {
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () =>
            setTime(
                new Intl.DateTimeFormat(intlLocale, {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "America/Bogota",
                }).format(new Date())
            );
        update();
        const id = setInterval(update, 60_000);
        return () => clearInterval(id);
    }, [intlLocale]);

    return time;
}

const HeroSection = () => {
    const { site, hero, social, intlLocale } = useContent();
    const { scrollYProgress } = useScroll();
    // Subtle parallax: content drifts up and fades as the user scrolls away
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -60]);
    const opacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
    const time = useLocalTime(intlLocale);
    const city = site.location.split("—")[0].trim();

    return (
        <section
            id="home"
            className="relative flex min-h-screen flex-col justify-center overflow-hidden"
        >
            <motion.div
                style={{ y, opacity }}
                className="mx-auto grid w-full max-w-content grid-cols-1 gap-16 px-6 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:gap-12 lg:px-10"
            >
                {/* Left: identity + intro + actions */}
                <div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: EASE }}
                        className="mb-8 text-xs uppercase tracking-[0.35em] text-muted"
                    >
                        {site.role}
                    </motion.p>

                    <h1 className="font-serif text-display text-foreground">
                        <LineReveal delay={0.35}>Sergio</LineReveal>
                        <LineReveal delay={0.5}>
                            <span className="italic text-accent">Picón</span>
                        </LineReveal>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: EASE }}
                        className="mt-10 max-w-xl text-base leading-relaxed text-muted md:text-lg"
                    >
                        {site.intro}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.95, ease: EASE }}
                        className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center"
                    >
                        <a
                            href="#portfolio"
                            className="group inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 text-xs uppercase tracking-[0.2em] text-foreground transition-colors duration-500 hover:border-accent hover:text-accent"
                        >
                            {hero.viewProjects}
                            <span className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                        <a
                            href={site.cvUrl}
                            download="Sergio-Picon-CV"
                            className="link-underline self-start text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-foreground sm:self-auto"
                        >
                            {hero.downloadCv}
                        </a>
                    </motion.div>
                </div>

                {/* Right: live signal panel — balances the composition with
                    information a recruiter actually wants at a glance. */}
                <motion.aside
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.1, ease: EASE }}
                    className="hidden flex-col gap-10 border-l border-line pl-10 lg:flex"
                >
                    <span className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                        </span>
                        {hero.available}
                    </span>

                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
                            {hero.locationLabel}
                        </span>
                        <span className="text-sm text-foreground">{city}</span>
                        {time && (
                            <span className="text-sm text-muted">
                                {time}{" "}
                                <span className="text-muted/60">{hero.localTime}</span>
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
                            {hero.mainStack}
                        </span>
                        <ul className="flex flex-col gap-2">
                            {HERO_STACK.map((item) => (
                                <li
                                    key={item}
                                    className="text-sm text-foreground/90"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.aside>
            </motion.div>

            {/* Bottom bar: socials + scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.3, ease: EASE }}
                className="absolute inset-x-0 bottom-0"
            >
                <div className="mx-auto flex max-w-content items-end justify-between px-6 pb-10 lg:px-10">
                    <div className="flex gap-6">
                        {social.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-underline text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-foreground"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
                            {hero.scroll}
                        </span>
                        <motion.span
                            animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                            className="h-12 w-px bg-accent/60"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
