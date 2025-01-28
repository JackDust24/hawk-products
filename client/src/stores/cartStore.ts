import { create } from 'zustand';
import { Product } from '@/types';

const CART_STORAGE_KEY = 'shopping-cart';

type CartItem = {
  product: Product;
  quantity: number;
  cartItemId: string;
  total: number;
};

type CartStore = {
  items: Record<string, CartItem>;
  addItem: (product: Product, quantity: number, total: number) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  getTotalItems: () => number;
};

// Load initial state from localStorage
const getInitialState = () => {
  const storedCart = localStorage.getItem(CART_STORAGE_KEY);
  return storedCart ? JSON.parse(storedCart) : {};
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: getInitialState(),

  addItem: (product, quantity, total) => {
    set((state) => {
      const cartItemId = `${product.id}-${Date.now()}`;
      const newItems = {
        ...state.items,
        [cartItemId]: {
          product,
          quantity,
          cartItemId,
          total
        }
      };
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newItems));
      return { items: newItems };
    });
  },

  removeItem: (cartItemId) => {
    set((state) => {
      const newItems = { ...state.items };
      delete newItems[cartItemId];
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newItems));
      return { items: newItems };
    });
  },

  updateQuantity: (cartItemId, quantity) => {
    set((state) => {
      const item = state.items[cartItemId];
      const newItems = {
        ...state.items,
        [cartItemId]: {
          ...item,
          quantity,
          total: item.product.price * quantity
        }
      };
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newItems));
      return { items: newItems };
    });
  },

  getTotalItems: () => {
    const { items } = get();
    return Object.keys(items).length;
  }
}));
