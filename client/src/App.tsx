import { useEffect } from 'react';
import { api } from '@/lib/axios';
import { useCategoriesStore } from '@/stores/categoriesStore';
import { Category } from '@/types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './features/home/pages/HomePage';
import { ProductPage } from './features/product/pages/ProductPage';
import { CartPage } from './features/cart/pages/CartPage';
import { CheckoutPage } from './features/checkout/pages/CheckoutPage';
import { OrderConfirmation } from './features/checkout/pages/OrderConfirmation';

export const App = () => {
  const setCategories = useCategoriesStore((state) => state.setCategories);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await api.get<Category[]>('/products/categories');
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation/:orderNumber" element={<OrderConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
