import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ source, title, desc, price, href }) {
  return (
    <Link href={href} className="flex flex-col gap-2">
      <div>
        <Image
          src={source}
          alt="product image"
          width={5000}
          height={5000}
          priority
          className="object-cover aspect-square rounded-2xl"
        />
      </div>
      <div className="px-2">
        <h1 className="text-2xl font-semibold truncate capitalize">{title}</h1>
        <p className="truncate">{desc}</p>
        <p>${price}</p>
      </div>
    </Link>
  );
}
