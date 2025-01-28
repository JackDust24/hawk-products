import { create } from 'zustand';
import { Category } from '@/types';

type CategoriesStore = {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
};

export const useCategoriesStore = create<CategoriesStore>((set) => ({
  categories: [],
  setCategories: (categories) => set({ categories: categories.slice(0, 3) })
}));
