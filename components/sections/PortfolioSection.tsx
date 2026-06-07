'use client'

import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/motion";
import { useContent } from "@/components/LocaleProvider";

const PortfolioSection = () => {
    const { portfolio } = useContent();

    return (
        <section id="portfolio" className="py-28 md:py-40">
            <div className="mx-auto max-w-content px-6 lg:px-10">
                <SectionHeader
                    number="04"
                    label={portfolio.label}
                    title={
                        <>
                            {portfolio.titlePre}{" "}
                            <span className="italic text-accent">{portfolio.titleAccent}</span>
                        </>
                    }
                />

                <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
                    {portfolio.projects.map((project, index) => (
                        <Reveal
                            key={project.id}
                            delay={(index % 2) * 0.12}
                            className={index % 2 === 1 ? "md:mt-24" : ""}
                        >
                            <article className="group">
                                <a
                                    href={project.urlDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block overflow-hidden border border-line"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                                        />
                                        {/* Subtle darkening lifts on hover */}
                                        <div className="absolute inset-0 bg-background/30 transition-opacity duration-700 group-hover:opacity-0" />
                                    </div>
                                </a>

                                <div className="mt-6 flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-serif text-2xl text-foreground transition-colors duration-300 group-hover:text-accent">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-muted">
                                            {project.description}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                                            {project.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-xs uppercase tracking-[0.15em] text-muted/70"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex shrink-0 flex-col items-end gap-2 pt-1">
                                        <a
                                            href={project.urlDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link-underline text-xs uppercase tracking-[0.2em] text-foreground"
                                        >
                                            {portfolio.demoLabel}
                                        </a>
                                        <a
                                            href={project.urlGithub}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link-underline text-xs uppercase tracking-[0.2em] text-muted hover:text-foreground"
                                        >
                                            {portfolio.githubLabel}
                                        </a>
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

export default PortfolioSection;
