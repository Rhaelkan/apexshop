import React from "react";

export default function CountDown() {
  return (
    <div className="px-6 section-container pb-24">
      <div className="md:w-1/2">
        <h1 className="text-2xl font-medium lg:text-4xl">Deals of the Month</h1>
        <p className="mt-7 max-w-3xl lg:text-lg">
          Get ready for a shopping experience like never before with our Deals
          of the Month! Every purchase comes with exclusive perks and offers,
          making this month a celebration of savvy choices and amazing deals.
          Don't miss out! 🎁🛒
        </p>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 mt-8 gap-8 md:w-1/2">
        <div className="p-6 flex flex-col gap-3 justify-center items-center border rounded-2xl">
          <h1 className="text-3xl font-bold">2</h1>
          <h1>Days</h1>
        </div>
        <div className="p-6 flex flex-col gap-3 justify-center items-center border rounded-2xl">
          <h1 className="text-3xl font-bold">13</h1>
          <h1>Hours</h1>
        </div>
        <div className="p-6 flex flex-col gap-3 justify-center items-center border rounded-2xl">
          <h1 className="text-3xl font-bold">37</h1>
          <h1>Minutes</h1>
        </div>
        <div className="p-6 flex flex-col gap-3 justify-center items-center border rounded-2xl">
          <h1 className="text-3xl font-bold">46</h1>
          <h1>Seconds</h1>
        </div>
      </div>
    </div>
  );
}
