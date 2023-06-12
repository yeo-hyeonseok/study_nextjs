"use client";

import { cartStore } from "../src/store";
import MainTitle from "../src/components/common/mainTitle";
import CartItem from "../src/components/cart/cartItem";

export default function Cart() {
  const { cartList } = cartStore();

  return (
    <div className="flex items-center justify-center flex-col pt-32 pb-32">
      <MainTitle text="장바구니" />
      {cartList.map((item, _) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          count={item.count}
        />
      ))}
    </div>
  );
}
