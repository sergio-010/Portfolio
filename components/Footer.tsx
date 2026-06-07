'use client'

import { useContent } from "@/components/LocaleProvider";

const Footer = () => {
    const { site, social } = useContent();

    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-10 text-xs uppercase tracking-[0.2em] text-muted sm:flex-row lg:px-10">
                <p>
                    © {new Date().getFullYear()} {site.name}
                </p>

                <div className="flex gap-6">
                    {social.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline transition-colors duration-300 hover:text-foreground"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <p>{site.location}</p>
            </div>
        </footer>
    );
};

export default Footer;
