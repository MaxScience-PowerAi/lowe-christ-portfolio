import About from "@/pages/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Découvre Lowe Christ, AI engineer / data scientist camerounais basé à Douala: parcours, approche, projets et contact.",
  openGraph: {
    title: "À Propos — Lowe Christ",
    images: ["/images/lowe-christ.png"],
  },
};

export default function Page() {
  return <About />;
}

