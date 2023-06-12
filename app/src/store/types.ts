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

interface CartItem {
  id: number;
  name: string;
  price: number;
  count: number;
}

interface CartStore {
  cartList: Array<CartItem>;
  addCartItem: (item: CartItem) => void;
}

export type { ProductStore, CartStore, CartItem };
