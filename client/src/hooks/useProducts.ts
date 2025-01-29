import { useState } from 'react';
import { api } from '@/lib/axios';
import { useProductsStore } from '@/stores/productsStore';
import { ProductsResponse, Product } from '@/types';
import { DEFAULT_PAGE, ITEMS_PER_PAGE, DEFAULT_CATEGORY, DEFAULT_SEARCH_TERM } from '@/constants';

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setProducts, setCurrentProduct } = useProductsStore();

  const fetchProducts = async (
    page: number = DEFAULT_PAGE,
    limit: number = ITEMS_PER_PAGE,
    category: string = DEFAULT_CATEGORY,
    searchTerm: string = DEFAULT_SEARCH_TERM
  ) => {
    try {
      setIsLoading(true);
      let url = `/products/productslist?page=${page}&limit=${limit}&category=${category}&searchTerm=${searchTerm}`;

      const { data } = await api.get<ProductsResponse>(url);
      setProducts(data.products, data.pagination);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      setError('Failed to connect to the server. Please try again later.');
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
      console.error('Failed to fetch products:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch product');
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchProducts, fetchProductById, isLoading, error };
};
