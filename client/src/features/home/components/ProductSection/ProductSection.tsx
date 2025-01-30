import React, { Suspense, useEffect, useState } from 'react';
import { useProductsStore } from '@/stores/productsStore';
import { useProducts } from '@/hooks/useProducts';
import { ErrorFallback } from '@/components/ErrorFallback';
import { DEFAULT_PAGE, ITEMS_PER_PAGE } from '@/constants';
import { useFitleredStore } from '@/stores/filteredStore';
import { SortProducts } from './components/Sort.tsx';

const LoadingState = React.lazy(() => import('./components/LoadingState'));
const ErrorState = React.lazy(() => import('./components/ErrorState'));
const ProductList = React.lazy(() => import('./components/ProductList.tsx'));
const PaginationComponent = React.lazy(() => import('./components/PaginationComponent.tsx'));

export const ProductSection = () => {
  const { products, pagination } = useProductsStore();
  const { fetchProducts, error } = useProducts();
  const { filteredCategory, searchedTerm } = useFitleredStore();

  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [fetchComplete, setFetchComplete] = useState(false);

  useEffect(() => {
    fetchProducts(
      DEFAULT_PAGE,
      ITEMS_PER_PAGE,
      filteredCategory,
      searchedTerm,
      sortBy,
      sortOrder
    ).finally(() => {
      setFetchComplete(true);
    });
  }, [sortBy, sortOrder, filteredCategory, searchedTerm]);

  if (error) {
    return (
      <Suspense fallback={<div>Loading Error...</div>}>
        <ErrorFallback message={error} onRetry={() => window.location.reload()} />
      </Suspense>
    );
  }

  if (fetchComplete && products.length === 0) {
    return (
      <Suspense fallback={<div>Loading Error...</div>}>
        <ErrorState
          message="No Products Found"
          onRetry={() =>
            fetchProducts(
              DEFAULT_PAGE,
              ITEMS_PER_PAGE,
              filteredCategory,
              searchedTerm,
              sortBy,
              sortOrder
            )
          }
        />
      </Suspense>
    );
  }

  const handlePageChange = (page: number) => {
    fetchProducts(page, ITEMS_PER_PAGE, filteredCategory, searchedTerm, sortBy, sortOrder);
  };

  return (
    <Suspense fallback={<LoadingState />}>
      <div className="space-y-6 py-6">
        <div className="text-center">
          <header>
            <h2 className="text-2xl font-bold">Featured Products</h2>
          </header>
        </div>

        <section className="bg-gray-50">
          <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <div className="flex pb-2">
              <SortProducts
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSortBy={setSortBy}
                onSortOrder={setSortOrder}
              />
            </div>
            <ProductList products={products} />
            {pagination && (
              <PaginationComponent
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </section>
      </div>
    </Suspense>
  );
};
