import type { Metadata } from "next";
import BaseLayout from "@/components/BaseLayout";
import { en } from "@/content/en";

export const metadata: Metadata = {
  metadataBase: new URL("https://sergio-picon.vercel.app"),
  title: en.site.metaTitle,
  description: en.site.metaDescription,
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en" },
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseLayout dict={en}>{children}</BaseLayout>;
}
