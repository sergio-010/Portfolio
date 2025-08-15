import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "Sergio Picon - Frontend Developer",
  description: "Frontend Developer specializing in React and Next.js. Creating modern and dynamic web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="favi.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
