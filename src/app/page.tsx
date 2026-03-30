import Home from "@/pages/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Portfolio de Lowe Christ (Douala, Cameroun). AI engineer / data scientist: IA, agents, web full-stack, data science.",
  openGraph: {
    title: "Lowe Christ — Accueil",
    description:
      "AI engineer / data scientist camerounais basé à Douala. Projets IA, web full-stack, data science.",
    images: ["/images/og-african-dev-placeholder.svg"],
  },
};

export default function Page() {
  return <Home />;
}

