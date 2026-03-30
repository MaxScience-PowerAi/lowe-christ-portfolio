import NotFound from "@/pages/NotFound";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Page introuvable.",
};

export default function Page() {
  return <NotFound />;
}

