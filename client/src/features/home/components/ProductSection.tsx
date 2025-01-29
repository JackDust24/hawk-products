import { useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { Pagination } from '@/components/shared/Pagination';
import { useProductsStore } from '@/stores/productsStore';
import { useProducts } from '@/hooks/useProducts';
import { ErrorFallback } from '@/components/ErrorFallback';
import { DEFAULT_PAGE, ITEMS_PER_PAGE } from '@/constants';
import { SortProducts } from './Sort';
import { useFitleredStore } from '@/stores/filteredStore';

export const ProductSection = () => {
  const { products, pagination } = useProductsStore();
  const { fetchProducts, isLoading, error } = useProducts();
  const { filteredCategory, searchedTerm, sortBy, sortOrder } = useFitleredStore();

  useEffect(() => {
    fetchProducts(DEFAULT_PAGE, ITEMS_PER_PAGE, filteredCategory, searchedTerm, sortBy, sortOrder);
  }, [sortBy, sortOrder, filteredCategory, searchedTerm]);

  if (error) {
    return <ErrorFallback message={error} onRetry={() => window.location.reload()} />;
  }

  if (isLoading) {
    return (
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="text-center mb-6">
            <header>
              <h2 className="text-2xl font-bold">Featured Products</h2>
            </header>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse space-y-3 p-4 bg-white shadow-sm rounded-lg">
                {/* Image Skeleton */}
                <div className="h-56 bg-gray-200 rounded-lg"></div>

                {/* Title Skeleton */}
                <div className="h-5 w-3/4 bg-gray-200 rounded"></div>

                {/* Price & Button Skeleton */}
                <div className="flex justify-between items-center">
                  <div className="h-5 w-1/4 bg-gray-200 rounded"></div>
                  <div className="h-8 w-20 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="text-center mb-6">
            <header>
              <h2 className="text-2xl font-bold">Featured Products</h2>
            </header>
          </div>
          <div className="text-center text-xl text-red-500">No Products Found</div>
        </div>
      </section>
    );
  }

  const handlePageChange = (page: number) => {
    fetchProducts(page, ITEMS_PER_PAGE, filteredCategory, searchedTerm, sortBy, sortOrder);
  };

  return (
    <div className="space-y-6 py-6">
      <div className="text-center">
        <header>
          <h2 className="text-2xl font-bold">Featured Products</h2>
        </header>
      </div>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          {/* Sorting Component */}
          <div className="flex pb-2">
            <SortProducts />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {pagination && (
            <div className="mt-6">
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
