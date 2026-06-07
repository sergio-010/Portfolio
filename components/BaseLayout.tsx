import { Inter, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "@/app/globals.css";
import NavBar from "@/components/NavBar";
import { MotionProvider } from "@/components/motion";
import { LocaleProvider } from "@/components/LocaleProvider";
import type { Dictionary } from "@/content/types";

const sans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const serif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    variable: "--font-serif",
});

// Shared by both locale root layouts — keeps html/body/providers in one place
export default function BaseLayout({
    dict,
    children,
}: {
    dict: Dictionary;
    children: React.ReactNode;
}) {
    return (
        // suppressHydrationWarning: next-themes mutates <html> class before hydration
        <html lang={dict.locale} className="scroll-smooth" suppressHydrationWarning>
            <body className={`${sans.variable} ${serif.variable} font-sans`}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                    <MotionProvider>
                        <LocaleProvider dict={dict}>
                            <NavBar />
                            {children}
                        </LocaleProvider>
                    </MotionProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
