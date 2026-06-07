'use client'

import SectionHeader from "@/components/SectionHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { useContent } from "@/components/LocaleProvider";

const inputClasses =
    "w-full border-b border-line bg-transparent py-4 text-foreground placeholder:text-muted/50 transition-colors duration-300 focus:border-accent focus:outline-none";

const ContactSection = () => {
    const { contact, site } = useContent();

    return (
        <section id="contact" className="py-28 md:py-40">
            <div className="mx-auto max-w-content px-6 lg:px-10">
                <SectionHeader
                    number="05"
                    label={contact.label}
                    title={
                        <>
                            {contact.titlePre}{" "}
                            <span className="italic text-accent">{contact.titleAccent}</span>
                        </>
                    }
                />

                <div className="grid gap-16 lg:grid-cols-12">
                    {/* Channels */}
                    <div className="lg:col-span-5">
                        <Reveal>
                            <a
                                href={`mailto:${site.email}`}
                                className="link-underline font-serif text-2xl text-foreground md:text-3xl"
                            >
                                {site.email}
                            </a>
                        </Reveal>

                        <Stagger className="mt-12 border-t border-line">
                            {contact.channels.map((channel) => (
                                <StaggerItem key={channel.label}>
                                    <a
                                        href={channel.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-baseline justify-between gap-4 border-b border-line py-5 transition-colors duration-300"
                                    >
                                        <span className="text-xs uppercase tracking-[0.2em] text-muted">
                                            {channel.label}
                                        </span>
                                        <span className="text-sm text-foreground transition-colors duration-300 group-hover:text-accent">
                                            {channel.value}
                                        </span>
                                    </a>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>

                    {/* Form */}
                    <Reveal delay={0.15} className="lg:col-span-7">
                        <form
                            action={`https://formsubmit.co/${site.email}`}
                            method="POST"
                            className="space-y-10"
                        >
                            <div className="grid gap-10 md:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted"
                                    >
                                        {contact.form.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        autoComplete="name"
                                        placeholder={contact.form.namePlaceholder}
                                        className={inputClasses}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted"
                                    >
                                        {contact.form.email}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        autoComplete="email"
                                        placeholder={contact.form.emailPlaceholder}
                                        className={inputClasses}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted"
                                >
                                    {contact.form.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder={contact.form.messagePlaceholder}
                                    className={`${inputClasses} resize-none`}
                                />
                            </div>

                            <button
                                type="submit"
                                className="group inline-flex items-center gap-3 border border-foreground/20 px-10 py-4 text-xs uppercase tracking-[0.2em] text-foreground transition-colors duration-500 hover:border-accent hover:text-accent"
                            >
                                {contact.form.submit}
                                <span className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
                                    →
                                </span>
                            </button>

                            <input
                                type="hidden"
                                name="_next"
                                value="https://sergio-picon.vercel.app/"
                            />
                            <input type="hidden" name="_captcha" value="false" />
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
