import { useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { Pagination } from '@/components/shared/Pagination';
import { useProductsStore } from '@/stores/productsStore';
import { useProducts } from '@/hooks/useProducts';
import { ErrorFallback } from '@/components/ErrorFallback';

const ITEMS_PER_PAGE = 6;

export const ProductSection = () => {
  const { products, pagination } = useProductsStore();
  const { fetchProducts, isLoading, error } = useProducts();

  useEffect(() => {
    fetchProducts(1, ITEMS_PER_PAGE);
  }, []);

  if (error) {
    return <ErrorFallback message={error} onRetry={() => window.location.reload()} />;
  }

  if (isLoading || products.length === 0) {
    return (
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="text-center mb-6">
            <header>
              <h2 className="text-2xl font-bold">Featured Products</h2>
            </header>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
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

  const handlePageChange = (page: number) => {
    fetchProducts(page, ITEMS_PER_PAGE);
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
