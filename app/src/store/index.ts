import { create } from "zustand";
import { ProductStore, CartStore, CartItem } from "./types";

export const productStore = create<ProductStore>(() => ({
  productList: [
    {
      id: 1,
      name: "신라면",
      price: 1200,
      company: "농심",
      tag: ["food", "noodle"],
    },
    {
      id: 2,
      name: "진라면",
      price: 1300,
      company: "오뚜기",
      tag: ["food", "noodle"],
    },
    {
      id: 3,
      name: "안성탕면",
      price: 1100,
      company: "농심",
      tag: ["food", "noodle"],
    },
  ],
}));
