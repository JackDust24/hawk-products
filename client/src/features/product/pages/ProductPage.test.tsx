import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ProductPage } from './ProductPage';
import { useProductsStore } from '@/stores/productsStore';
import { useCartStore } from '@/stores/cartStore';
import { useProducts } from '@/hooks/useProducts';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

vi.mock('@/stores/productsStore', () => ({
  useProductsStore: vi.fn()
}));

vi.mock('@/stores/cartStore', () => ({
  useCartStore: vi.fn(() => ({
    addItem: vi.fn()
  }))
}));

vi.mock('@/hooks/useProducts', () => ({
  useProducts: vi.fn()
}));

describe('ProductPage', () => {
  const mockSetCurrentProduct = vi.fn();
  const mockAddItem = vi.fn();
  const mockFetchProductById = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useProductsStore).mockImplementation((selector) => {
      const state = {
        currentProduct: {
          id: '1',
          name: 'Test Product',
          price: 100,
          image: 'image1.jpg',
          description: 'Test Description',
          category: 'Electronics'
        },
        setCurrentProduct: mockSetCurrentProduct,
        products: [],
        pagination: null,
        setProducts: vi.fn(),
        setPagination: vi.fn()
      };
      return selector(state);
    });

    vi.mocked(useCartStore).mockReturnValue({
      addItem: mockAddItem
    });

    vi.mocked(useProducts).mockReturnValue({
      fetchProductById: mockFetchProductById,
      isLoading: false,
      fetchProducts: vi.fn(),
      error: null
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the product details and adds item to cart', async () => {
    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <Routes>
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Add to Cart - $100.00'));

    await waitFor(() =>
      expect(mockAddItem).toHaveBeenCalledWith(
        {
          id: '1',
          name: 'Test Product',
          price: 100,
          category: 'Electronics',
          description: 'Test Description',
          image: 'image1.jpg'
        },
        1,
        100
      )
    );

    expect(screen.getByText('1 item added to cart')).toBeInTheDocument();
  });

  it('displays "Product not found" when currentProduct is null', () => {
    vi.mocked(useProductsStore).mockImplementation((selector) => {
      const state = {
        currentProduct: null,
        setCurrentProduct: mockSetCurrentProduct,
        products: [],
        pagination: null,
        setProducts: vi.fn(),
        setPagination: vi.fn()
      };
      return selector(state);
    });

    render(
      <MemoryRouter initialEntries={['/product/2']}>
        <Routes>
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Product not found')).toBeInTheDocument();
  });
});
