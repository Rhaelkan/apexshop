import Image from "next/image";
import heroBg from "@/public/home-hero-2.webp";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="section-container max-sm:h-[394px] bg-apex-gray relative flex items-center">
      <div className="px-10 z-10 absolute lg:px-40">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl md:leading-snug lg:text-6xl lg:leading-normal lg:tracking-normal">
          Unleash <br className="sm:hidden" /> Innovation <br /> in Every Byte.
        </h1>
        <p className="mt-2 md:text-xl lg:text-2xl">
          Explore World of Most Popular Products
        </p>
        <div className="mt-10">
          <Link
            href="/products"
            className="bg-black px-6 py-3 text-white rounded-xl uppercase text-sm lg:text-base"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <Image
        src={heroBg}
        alt="hero-bg-image"
        width={5000}
        height={5000}
        priority
        className="object-cover h-full"
      />
    </div>
  );
}
