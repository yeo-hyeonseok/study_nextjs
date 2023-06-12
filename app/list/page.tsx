"use client";

import { productStore } from "../src/store";
import MainTitle from "../src/components/common/mainTitle";
import ListItem from "../src/components/list/listItem";

export default function List() {
  var { productList } = productStore();

  return (
    <div className="flex items-center justify-center flex-col pt-32 pb-32">
      <MainTitle text="상품 목록" />
      {productList.map((product, _) => (
        <ListItem
          key={product.id}
          id={product.id}
          name={product.name}
          company={product.company}
          price={product.price}
        />
      ))}
    </div>
  );
}
