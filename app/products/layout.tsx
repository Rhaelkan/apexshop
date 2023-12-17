import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ApexShop | Shop",
  description: "E-commerce app with Next.js",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
