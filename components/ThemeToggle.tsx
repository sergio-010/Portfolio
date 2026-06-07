'use client'

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { EASE } from "@/components/motion";
import { useContent } from "@/components/LocaleProvider";

const ThemeToggle = () => {
    const { ui } = useContent();
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Theme is only known on the client — render a placeholder until mounted
    // so server and first client render match (no hydration mismatch)
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <span className="block h-9 w-9" aria-hidden />;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? ui.toLightMode : ui.toDarkMode}
            className="flex h-9 w-9 items-center justify-center text-muted transition-colors duration-300 hover:text-foreground"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={isDark ? "sun" : "moon"}
                    initial={{ opacity: 0, rotate: -40, scale: 0.6 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 40, scale: 0.6 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="flex"
                >
                    {isDark ? (
                        <Sun size={16} strokeWidth={1.5} />
                    ) : (
                        <Moon size={16} strokeWidth={1.5} />
                    )}
                </motion.span>
            </AnimatePresence>
        </button>
    );
};

export default ThemeToggle;
