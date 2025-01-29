import { create } from 'zustand';

type FilteredStore = {
  filteredCategory: string;
  searchedTerm: string;
  sortBy: string;
  sortOrder: string;
  setFilteredCategory: (category: string) => void;
  setSearchedTerm: (term: string) => void;
  setSortBy: (sortBy: string) => void;
  setSortOrder: (sortOrder: string) => void;
};

export const useFitleredStore = create<FilteredStore>((set) => ({
  filteredCategory: 'all',
  searchedTerm: '',
  sortBy: '',
  sortOrder: '',
  setFilteredCategory: (category) => set({ filteredCategory: category }),
  setSearchedTerm: (term) => set({ searchedTerm: term }),
  setSortBy: (sortBy) => set({ sortBy: sortBy }),
  setSortOrder: (sortOrder) => set({ sortOrder: sortOrder })
}));
