import Image from "next/image";
import Link from "next/link";

import shipping from "@/public/shipping.svg";
import money from "@/public/dollar.svg";
import support from "@/public/support.svg";
import payment from "@/public/payment.svg";

import facebook from "@/public/facebook-1.svg";
import instagram from "@/public/instagram-1.svg";
import twitter from "@/public/twitter-1.svg";

export default function Footer() {
  return (
    <footer>
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 pb-20">
        <div>
          <Image
            src={shipping}
            alt="Free Shipping"
            width={40}
            height={40}
            className="aspect-square"
          />
          <h1 className="text-2xl font-semibold mt-4">Free Shipping</h1>
          <p className="lg:text-lg">Free shipping for order above $150</p>
        </div>
        <div>
          <Image
            src={money}
            alt="Money Guarantee"
            width={40}
            height={40}
            className="aspect-square"
          />
          <h1 className="text-2xl font-semibold mt-4">Money Guarantee</h1>
          <p className="lg:text-lg">Within 30 days for an exchange</p>
        </div>
        <div>
          <Image
            src={support}
            alt="Online Support"
            width={40}
            height={40}
            className="aspect-square"
          />
          <h1 className="text-2xl font-semibold mt-4">Online Support</h1>
          <p className="lg:text-lg">24 hours a day, 7 days a week</p>
        </div>
        <div>
          <Image
            src={payment}
            alt="Flexible Payment"
            width={40}
            height={40}
            className="aspect-square"
          />
          <h1 className="text-2xl font-semibold mt-4">Flexible Payment</h1>
          <p className="lg:text-lg">Pay with multiple credit cards</p>
        </div>
      </div>
      <div className="bg-black py-8">
        <div className="section-container px-6 flex flex-col gap-8 justify-center items-center md:flex-row md:items-center md:justify-between">
          <Link href="/" className="text-3xl sm:text-3xl font-bold text-white">
            ApexShop
          </Link>
          <p className="text-white tracking-normal">
            @2024 ApexShop All rights reserved.
          </p>
          <div className="flex items-center gap-16">
            <Link href="/">
              <Image
                src={facebook}
                alt="facebook logo"
                width={25}
                height={25}
              />
            </Link>
            <Link href="/">
              <Image
                src={instagram}
                alt="instagram logo"
                width={25}
                height={25}
              />
            </Link>
            <Link href="/">
              <Image src={twitter} alt="twitter logo" width={25} height={25} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
