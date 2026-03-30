import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "./providers";
import { CustomCursor } from "@/components/ui/CustomCursor";

import "../index.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lowe Christ - AI Builder & Full-Stack Developer",
    template: "%s | Lowe Christ",
  },
  description:
    "Portfolio de Lowe Christ, AI engineer / data scientist camerounais basé à Douala. Projets IA, web full-stack, data science et applications.",
  openGraph: {
    type: "website",
    title: "Lowe Christ - AI Builder & Full-Stack Developer",
    description:
      "AI engineer / data scientist camerounais basé à Douala. Projets IA, web full-stack, data science et applications.",
    images: ["/images/lowe-christ.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/lowe-christ.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <CustomCursor />
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main id="main-content" className="flex-1 pt-16" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
