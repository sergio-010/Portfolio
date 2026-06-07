'use client'

import { Reveal } from "@/components/motion";

interface SectionHeaderProps {
    number: string;
    label: string;
    title: React.ReactNode;
}

// Editorial section heading: index number, small-caps label, serif title
const SectionHeader = ({ number, label, title }: SectionHeaderProps) => {
    return (
        <div className="mb-16 md:mb-24">
            <Reveal>
                <div className="section-label mb-6">
                    <span className="text-accent">{number}</span>
                    <span className="h-px w-10 self-center bg-line" aria-hidden />
                    <span>{label}</span>
                </div>
            </Reveal>
            <Reveal delay={0.1}>
                <h2 className="font-serif text-heading text-foreground">{title}</h2>
            </Reveal>
        </div>
    );
};

export default SectionHeader;
