import Portfolio from "@/pages/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Découvrez les projets de Lowe Christ en intelligence artificielle, développement web full-stack, data science et applications mobiles.",
  openGraph: {
    title: "Portfolio — Lowe Christ",
    images: ["/images/og-african-dev-placeholder.svg"],
  },
};

export default function Page() {
  return <Portfolio />;
}

