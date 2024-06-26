import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Header from "@/components/Header";
import CoverParticles from "@/components/CoveParticles";


const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SergioDev",
  description: "Sergio Dev Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.png" />
      </head>
      <body className={urbanist.className}>
        <NavBar />
        <Header />
        <CoverParticles />
        {children}
      </body>
    </html>
  );
}
