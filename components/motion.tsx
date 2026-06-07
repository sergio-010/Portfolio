'use client'

import { MotionConfig, motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

// Shared easing — slow, elegant deceleration
export const EASE = [0.22, 1, 0.36, 1] as const;

export function MotionProvider({ children }: { children: ReactNode }) {
    // reducedMotion="user" disables transforms for users with
    // prefers-reduced-motion, keeping opacity fades only
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
}

// Fade-up reveal triggered once when scrolled into view
export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay, ease: EASE }}
        >
            {children}
        </motion.div>
    );
}

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: EASE },
    },
};

interface StaggerProps {
    children: ReactNode;
    className?: string;
}

// Container that staggers its <StaggerItem> children on scroll into view
export function Stagger({ children, className }: StaggerProps) {
    return (
        <motion.div
            className={className}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className }: StaggerProps) {
    return (
        <motion.div className={className} variants={staggerItem}>
            {children}
        </motion.div>
    );
}

interface LineRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

// Text line that slides up from behind an overflow mask (hero headlines)
export function LineReveal({ children, className, delay = 0 }: LineRevealProps) {
    return (
        // py/-my pair: expands the clip box so tall glyphs (accents, italics,
        // descenders) aren't cropped, while the negative margin cancels the
        // padding so surrounding layout stays identical.
        <span className="block overflow-hidden py-[0.15em] -my-[0.15em]">
            <motion.span
                className={`block ${className ?? ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay, ease: EASE }}
            >
                {children}
            </motion.span>
        </span>
    );
}
