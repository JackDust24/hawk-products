import { useFitleredStore } from '@/stores/filteredStore';

export const SortProducts = () => {
  const { sortBy, sortOrder, setSortBy, setSortOrder } = useFitleredStore();

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortOrder = e.target.value;
    setSortOrder(selectedSortOrder);
  };

  return (
    <div className="flex space-x-4">
      <div className="join-item">
        <label htmlFor="sortBy" className="mr-2">
          Sort by:
        </label>
        <select
          id="sortBy"
          className="select select-bordered"
          value={sortBy}
          onChange={handleSortByChange}>
          <option value="">Please select</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>

      <div className="join-item">
        <label htmlFor="sortOrder" className="mr-2">
          Order:
        </label>
        <select
          id="sortOrder"
          className="select select-bordered"
          value={sortOrder}
          onChange={handleSortOrderChange}
          disabled={!sortBy}>
          {/* Disable order if no sortBy */}
          <option value="ASC">Low to High</option>
          <option value="DESC">High to Low</option>
        </select>
      </div>
    </div>
  );
};
