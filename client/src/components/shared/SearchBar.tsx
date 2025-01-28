import { useState } from 'react';

export const SearchBar = () => {
  const [category, setCategory] = useState('all');

  return (
    <div className="join">
      <select
        className="select select-bordered join-item"
        value={category}
        onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="laptops">Laptops</option>
        <option value="smartphones">Smartphones</option>
        <option value="cameras">Cameras</option>
      </select>

      <input className="input input-bordered join-item flex-1" placeholder="Search products..." />

      <button className="btn btn-primary join-item">Search</button>
    </div>
  );
};
