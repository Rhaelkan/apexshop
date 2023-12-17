import Image from "next/image";

type ProductCardProps = {
  source: string;
  title: string;
  desc: string;
  price: number;
};

export default function ProductCard({
  source,
  title,
  desc,
  price,
}: ProductCardProps) {
  return (
    <div className="flex flex-col gap-2">
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
    </div>
  );
}
