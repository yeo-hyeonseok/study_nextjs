import Image from "next/image";
import SuperButton from "../common/superButton";

interface ListItemProps {
  id: number;
  name: string;
  company: string;
  price: number;
}

export default function ListItem({ id, name, company, price }: ListItemProps) {
  return (
    <div className="bg-white mt-10 w-1/4 p5-8 pb-5 pl-5 pr-5 rounded-md">
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
          <SuperButton text="장바구니" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
