import { create } from 'zustand';

type FilteredStore = {
  filteredCategory: string;
  searchedTerm: string;
  setFilteredCategory: (category: string) => void;
  setSearchedTerm: (term: string) => void;
};

export const useFitleredStore = create<FilteredStore>((set) => ({
  filteredCategory: 'all',
  searchedTerm: '',
  setFilteredCategory: (category) => set({ filteredCategory: category }),
  setSearchedTerm: (term) => set({ searchedTerm: term })
}));
