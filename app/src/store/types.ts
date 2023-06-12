interface ProductItem {
  id: number;
  name: string;
  price: number;
  company: string;
  tag: Array<string>;
}

interface ProductStore {
  productList: Array<ProductItem>;
}

export type { ProductStore };
