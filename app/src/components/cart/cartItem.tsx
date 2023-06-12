interface CartItemProps {
  name: string;
  price: number;
  count: number;
}

export default function CartItem({ name, price, count }: CartItemProps) {
  return (
    <div className="flex w-1/4 justify-between border-b-2 pt-2 pb-2">
      <p className="text-stone-100 text-xl font-semiBold">{name}</p>
      <p className="text-stone-100 text-xl">{price}원</p>
      <p className="text-stone-100 text-xl">{count}개</p>
    </div>
  );
}
