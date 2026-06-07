import type { Metadata } from "next";
import BaseLayout from "@/components/BaseLayout";
import { es } from "@/content/es";

export const metadata: Metadata = {
  metadataBase: new URL("https://sergio-picon.vercel.app"),
  title: es.site.metaTitle,
  description: es.site.metaDescription,
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/en" },
  },
};

export default function SpanishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseLayout dict={es}>{children}</BaseLayout>;
}
