import { useState } from 'react';
import { api } from '@/lib/axios';
import { useProductsStore } from '@/stores/productsStore';
import { ProductsResponse, Product } from '@/types';

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setProducts, setCurrentProduct } = useProductsStore();

  const fetchProducts = async (page: number = 1, limit: number = 6) => {
    try {
      setIsLoading(true);
      const { data } = await api.get<ProductsResponse>(
        `/products/productslist?page=${page}&limit=${limit}`
      );
      setProducts(data.products, data.pagination);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch products');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchProductById = async (id: string) => {
    try {
      setIsLoading(true);
      const { data } = await api.get<Product>(`/products/product/${id}`);
      setCurrentProduct(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch product');
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchProducts, fetchProductById, isLoading, error };
};
