import { useEffect, useRef, useState } from 'react';
import { api } from '@/lib/axios';
import { useCategoriesStore } from '@/stores/categoriesStore';
import { Category } from '@/types';

export const useCategories = () => {
  const setCategories = useCategoriesStore((state) => state.setCategories);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const hasFetched = useRef(false); // Ref to track if fetch has been called

  useEffect(() => {
    const fetchCategories = async () => {
      if (hasFetched.current) return;
      hasFetched.current = true;

      try {
        const { data } = await api.get<Category[]>('/products/categories');
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        setError('Failed to connect to the server. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { error, loading };
};
