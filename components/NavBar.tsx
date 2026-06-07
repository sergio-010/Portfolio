'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { EASE } from "@/components/motion";
import { useContent } from "@/components/LocaleProvider";
import ThemeToggle from "@/components/ThemeToggle";

const NavBar = () => {
    const { nav, site, switchTo } = useContent();
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const sections = nav.links.map((link) => link.href.replace("#", ""));

        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const scrollPosition = window.scrollY + 120;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (!element) continue;

                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [nav.links]);

    // Lock body scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.getElementById(href.replace("#", ""));
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMenuOpen(false);
    };

    const city = site.location.split("—")[0].trim();

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: EASE }}
                className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500
                          ${scrolled && !isMenuOpen
                        ? "border-b border-line bg-background/80 backdrop-blur-md"
                        : "border-b border-transparent bg-transparent"}`}
            >
                <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-10">
                    <a
                        href="#home"
                        onClick={(e) => handleClick(e, "#home")}
                        className="font-serif text-xl tracking-wide text-foreground"
                    >
                        Sergio Picón<span className="text-accent">.</span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden items-center gap-8 lg:flex">
                        <ul className="flex items-center gap-8">
                            {nav.links.map((link) => {
                                const isActive = activeSection === link.href.replace("#", "");

                                return (
                                    <li key={link.href} className="relative">
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleClick(e, link.href)}
                                            className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300
                                                      ${isActive ? "text-foreground" : "text-muted hover:text-foreground"}`}
                                        >
                                            {link.title}
                                        </a>
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-indicator"
                                                transition={{ duration: 0.5, ease: EASE }}
                                                className="absolute -bottom-2 left-0 h-px w-full bg-accent"
                                            />
                                        )}
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="flex items-center gap-4 border-l border-line pl-8">
                            <Link
                                href={switchTo.href}
                                aria-label={switchTo.ariaLabel}
                                className="text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-foreground"
                            >
                                {switchTo.label}
                            </Link>
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile: language + theme + menu button */}
                    <div className="flex items-center gap-3 lg:hidden">
                        <Link
                            href={switchTo.href}
                            aria-label={switchTo.ariaLabel}
                            className="text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-foreground"
                        >
                            {switchTo.label}
                        </Link>
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? nav.closeMenu : nav.openMenu}
                            aria-expanded={isMenuOpen}
                            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
                        >
                            <motion.span
                                animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                                className="h-px w-6 bg-foreground"
                            />
                            <motion.span
                                animate={isMenuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                                className="h-px w-6 bg-foreground"
                            />
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile full-screen menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="fixed inset-0 z-40 flex flex-col justify-center bg-background px-8 lg:hidden"
                    >
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
                            className="space-y-2"
                        >
                            {nav.links.map((link) => (
                                <motion.li
                                    key={link.href}
                                    variants={{
                                        hidden: { opacity: 0, y: 28 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                                    }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleClick(e, link.href)}
                                        className={`font-serif text-5xl transition-colors duration-300
                                                  ${activeSection === link.href.replace("#", "")
                                                ? "text-accent"
                                                : "text-foreground"}`}
                                    >
                                        {link.title}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="absolute bottom-10 left-8 text-xs uppercase tracking-[0.3em] text-muted"
                        >
                            {city} — {new Date().getFullYear()}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;
