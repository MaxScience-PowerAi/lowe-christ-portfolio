import Contact from "@/pages/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacte Lowe Christ (Douala, Cameroun) pour un projet IA, une application web, une automatisation ou du support technique.",
  openGraph: {
    title: "Contact — Lowe Christ",
    images: ["/images/og-african-dev-placeholder.svg"],
  },
};

export default function Page() {
  return <Contact />;
}

