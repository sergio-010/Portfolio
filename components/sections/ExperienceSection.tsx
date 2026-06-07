'use client'

import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/motion";
import { useContent } from "@/components/LocaleProvider";

const ExperienceSection = () => {
    const { experience } = useContent();

    return (
        <section id="experience" className="py-28 md:py-40">
            <div className="mx-auto max-w-content px-6 lg:px-10">
                <SectionHeader
                    number="02"
                    label={experience.label}
                    title={
                        <>
                            {experience.titlePre}{" "}
                            <span className="italic text-accent">{experience.titleAccent}</span>
                        </>
                    }
                />

                <div className="border-t border-line">
                    {experience.items.map((job, index) => (
                        <Reveal key={`${job.company}-${job.period}`} delay={index * 0.08}>
                            <article className="group grid gap-4 border-b border-line py-10 transition-colors duration-500 md:grid-cols-12 md:gap-8 md:py-12">
                                <div className="md:col-span-3">
                                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                                        {job.period}
                                    </p>
                                </div>

                                <div className="md:col-span-9">
                                    <h3 className="font-serif text-2xl text-foreground transition-colors duration-300 group-hover:text-accent md:text-3xl">
                                        {job.role}
                                    </h3>
                                    <p className="mt-1 text-sm uppercase tracking-[0.15em] text-accent/80">
                                        {job.company}
                                    </p>
                                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                                        {job.description}
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                                        {job.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs uppercase tracking-[0.15em] text-muted/70"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
