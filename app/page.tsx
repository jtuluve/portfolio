import type { Metadata } from "next";
import MinimalPortfolio from "./minimal-portfolio";

export const metadata: Metadata = {
  title: "Jnanesh | Minimal Portfolio",
  description: "A minimal text-only portfolio for Jnanesh.",
};

export default function HomePage() {
  return <MinimalPortfolio />;
}
