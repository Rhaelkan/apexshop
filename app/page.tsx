import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Categories />
    </main>
  );
}
