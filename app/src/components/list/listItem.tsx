"use client";

import Image from "next/image";
import { useState } from "react";
import { cartStore } from "../../store";
import SuperButton from "../common/superButton";

interface ListItemProps {
  id: number;
  name: string;
  company: string;
  price: number;
}

export default function ListItem({ id, name, company, price }: ListItemProps) {
  let [count, setCount] = useState(0);
  const { addCartItem } = cartStore();

  return (
    <div className="bg-white mt-10 w-1/4 p5-8 pb-5 pl-5 pr-5 rounded-md relative">
      <Image
        src={`/images/product_${id}.jpg`}
        alt={name}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
      />
      <div className="mt-2">
        <h2 className="text-2xl font-semibold">
          [{company}] {name}
        </h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-xl">{price}원</p>
          <div>
            <span className="text-xl mr-4">수량: {count}</span>
            <button
              onClick={() => {
                if (count > 0) setCount(count - 1);
              }}
              className="text-2xl rounded border-2 pl-2 pr-2 mr-1"
            >
              -
            </button>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
              className="text-2xl rounded border-2 pl-2 pr-2"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <SuperButton
        className="absolute right-2 top-2"
        text="장바구니"
        onClick={() => {
          addCartItem({
            id,
            name,
            price,
            count,
          });
        }}
      />
    </div>
  );
}
