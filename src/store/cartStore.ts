// src/store/cartStore.ts
import { create } from "zustand";
import { Product } from "../types/Product";

interface CartState {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));
