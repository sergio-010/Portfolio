'use client'

import SectionHeader from "@/components/SectionHeader";
import { Stagger, StaggerItem } from "@/components/motion";
import { useContent } from "@/components/LocaleProvider";

const EducationSection = () => {
    const { education } = useContent();

    return (
        <section id="education" className="py-28 md:py-40">
            <div className="mx-auto max-w-content px-6 lg:px-10">
                <SectionHeader
                    number="03"
                    label={education.label}
                    title={
                        <>
                            {education.titlePre}{" "}
                            <span className="italic text-accent">{education.titleAccent}</span>
                        </>
                    }
                />

                <Stagger className="grid gap-px bg-line md:grid-cols-2">
                    {education.items.map((item) => (
                        <StaggerItem
                            key={item.title}
                            className="group flex flex-col gap-4 bg-background p-8 md:p-12"
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-muted">
                                {item.period}
                            </p>
                            <h3 className="font-serif text-2xl text-foreground transition-colors duration-300 group-hover:text-accent md:text-3xl">
                                {item.title}
                            </h3>
                            <p className="text-sm uppercase tracking-[0.15em] text-accent/80">
                                {item.institution}
                            </p>
                            <p className="text-sm leading-relaxed text-muted md:text-base">
                                {item.description}
                            </p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
};

export default EducationSection;
