import { useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { Pagination } from '@/components/shared/Pagination';
import { useProductsStore } from '@/stores/productsStore';
import { useProducts } from '@/hooks/useProducts';

const ITEMS_PER_PAGE = 6;

export const ProductSection = () => {
  const { products, pagination } = useProductsStore();
  const { fetchProducts, isLoading } = useProducts();

  useEffect(() => {
    fetchProducts(1, ITEMS_PER_PAGE);
  }, []);

  if (isLoading && products.length === 0) {
    return (
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((index) => (
              <div key={index} className="animate-pulse">
                <div className="h-64 bg-gray-200 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  console.log(products);
  const handlePageChange = (page: number) => {
    fetchProducts(page, ITEMS_PER_PAGE);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Our Products</h2>
        </header>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {pagination && (
          <div className="mt-8">
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </section>
  );
};
