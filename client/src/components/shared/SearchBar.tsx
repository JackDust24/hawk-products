import { useState } from 'react';
import { useCategoriesStore } from '@/stores/categoriesStore';
import { Category } from '@/types';

export const SearchBar = () => {
  const [category, setCategory] = useState('all');
  const categories = useCategoriesStore((state) => state.categories);

  return (
    <div className="join">
      <select
        className="select select-bordered join-item focus:outline-none"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={categories.length === 0}>
        <option value="all">All Categories</option>
        {categories.map((cat: Category) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <input
        className="input input-bordered join-item flex-1 focus:outline-none"
        placeholder="Search products..."
      />

      <button className="btn btn-primary join-item">Search</button>
    </div>
  );
};
