import { useEffect, useState } from 'react';
import { api } from '@/lib/axios';
import { useCategoriesStore } from '@/stores/categoriesStore';
import { Category } from '@/types';

export const useCategories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { categories, setCategories } = useCategoriesStore();

  useEffect(() => {
    // Prevent other calls being made while this is running
    console.log('useEffect');
    let isMounted = true;
    const fetchCategories = async () => {
      if (categories.length > 0 || isLoading) return;

      try {
        console.log('fetchCategories');
        setIsLoading(true);
        const { data } = await api.get<Category[]>('/products/categories');
        if (isMounted) {
          console.log('isMounted');

          setCategories(data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error instanceof Error ? error.message : 'Failed to fetch categories');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchCategories();
    return () => {
      isMounted = false;
    };
  }, []);

  return { categories, isLoading, error };
};
