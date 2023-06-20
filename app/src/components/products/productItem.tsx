"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductItemProps {
  id?: number;
  className?: string;
  name: string;
  company: string;
  price: number;
}

export default function ProductItem({
  id,
  className,
  name,
  company,
  price,
}: ProductItemProps) {
  let [count, setCount] = useState(0);

  return (
    <div
      className={`w-1/4 p5-8 pb-5 pl-5 pr-5 border-2 border-stone-100 ${className}`}
    >
      <Image
        src={`/images/product_${id}.png`}
        alt={name}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
      />
      <div className="mt-2">
        <h2 className="text-2xl font-semibold text-stone-100">
          [{company}] {name}
        </h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-xl text-stone-100">{price}원</p>
          <div>
            <span className="text-xl mr-4 text-stone-100">수량: {count}</span>
            <button
              onClick={() => {
                if (count > 0) setCount(count - 1);
              }}
              className="text-2xl border-2 pl-2 pr-2 mr-1 text-stone-100"
            >
              -
            </button>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
              className="text-2xl border-2 pl-2 pr-2 text-stone-100"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
