import { create } from 'zustand';
import { Product, ProductListItem, PaginationData } from '@/types';

type ProductsStore = {
  products: ProductListItem[];
  currentProduct: Product | null;
  pagination: PaginationData | null;
  setProducts: (products: ProductListItem[], pagination: PaginationData) => void;
  setCurrentProduct: (product: Product | null) => void;
};

export const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  currentProduct: null,
  pagination: null,
  setProducts: (products, pagination) => set({ products, pagination }),
  setCurrentProduct: (product) => set({ currentProduct: product })
}));
