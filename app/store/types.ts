interface ProductItem {
  id: number;
  name: string;
  price: number;
  company: String;
  tag: Array<String>;
}

interface ProductStore {
  productList: Array<ProductItem>;
}

export type { ProductStore };
