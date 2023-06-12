import MainTitle from "../src/components/common/mainTitle";
import CartItem from "../src/components/cart/cartItem";

export default function Cart() {
  return (
    <div className="flex items-center justify-center flex-col pt-32 pb-32">
      <MainTitle text="장바구니" />
      <CartItem />
    </div>
  );
}
