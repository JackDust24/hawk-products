import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Pagination } from '../../../components/shared/Pagination';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const ProductSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Mock for now - this would come from API with proper pagination
  const products: Product[] = [
    {
      id: 1,
      name: 'MacBook Pro M3',
      price: 1299.99,
      image: '/images/test.jpg',
      category: 'Laptop'
    },
    {
      id: 2,
      name: 'Sony WH-1000XM4',
      price: 349.99,
      image: '/images/test.jpg',
      category: 'Accessories'
    }
    // Add more products...
  ];

  // Calculate pagination values
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // In real app, this would trigger an API call with the new page number
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Our Products</h2>
        </header>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};
