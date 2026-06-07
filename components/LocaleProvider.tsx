'use client'

import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary } from "@/content/types";

const LocaleContext = createContext<Dictionary | null>(null);

export function LocaleProvider({
    dict,
    children,
}: {
    dict: Dictionary;
    children: ReactNode;
}) {
    return <LocaleContext.Provider value={dict}>{children}</LocaleContext.Provider>;
}

// Hook used by every section to read locale-aware content
export function useContent(): Dictionary {
    const dict = useContext(LocaleContext);
    if (!dict) {
        throw new Error("useContent must be used within a LocaleProvider");
    }
    return dict;
}
