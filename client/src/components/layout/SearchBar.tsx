import { useEffect, useState } from 'react';
import { useCategoriesStore } from '@/stores/categoriesStore';
import { Category } from '@/types';
import { useProducts } from '@/hooks/useProducts';
import { DEFAULT_PAGE, ITEMS_PER_PAGE } from '@/constants';
import { useFitleredStore } from '@/stores/filteredStore';
import { X } from 'lucide-react';

export const SearchBar = () => {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = useCategoriesStore((state) => state.categories);
  const { setFilteredCategory, setSearchedTerm } = useFitleredStore();
  const { fetchProducts } = useProducts();

  // Find the name of the selected category
  const getCategoryName = (categoryId: string) => {
    const selectedCategory = categories.find((cat) => cat.id === categoryId);
    return selectedCategory ? selectedCategory.name : 'all';
  };

  const clearSearch = () => {
    const categoryName = getCategoryName(category);
    fetchProducts(DEFAULT_PAGE, ITEMS_PER_PAGE, categoryName, '');
    setSearchedTerm('');
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _searchTerm = e.target.value;
    setSearchTerm(_searchTerm);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryId = e.target.value;
    setCategory(selectedCategoryId);

    const categoryName = getCategoryName(selectedCategoryId);
    fetchProducts(DEFAULT_PAGE, ITEMS_PER_PAGE, categoryName, searchTerm);
    setFilteredCategory(categoryName);
  };

  const handleSearch = () => {
    const categoryName = getCategoryName(category);
    fetchProducts(DEFAULT_PAGE, ITEMS_PER_PAGE, categoryName, searchTerm);
    setSearchedTerm(searchTerm);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    clearSearch();
  };

  useEffect(() => {
    // If the search term is cleared by backspace, fetch with an empty term
    if (searchTerm === '') {
      clearSearch();
    }
  }, [searchTerm]);

  return (
    <div className="join">
      <select
        className="select select-bordered join-item focus:outline-none"
        value={category}
        onChange={handleCategoryChange}
        disabled={categories.length === 0}>
        <option value="all">All Categories</option>
        {categories.map((cat: Category) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <div className="relative">
        <input
          className="input input-bordered join-item flex-1 focus:outline-none pr-10"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchInput}
        />
        {/* Clear Icon */}
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            aria-label="Clear search">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <button onClick={handleSearch} className="btn btn-primary join-item">
        Search
      </button>
    </div>
  );
};
