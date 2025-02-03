import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './features/home/pages/HomePage';
import { ProductPage } from './features/product/pages/ProductPage';
import { CartPage } from './features/cart/pages/CartPage';
import { CheckoutPage } from './features/checkout/pages/CheckoutPage';
import { OrderConfirmation } from './features/checkout/pages/OrderConfirmation';
import NotFound from './NotFound';
import { useCategories } from '@/hooks/useCategories';
import { ErrorFallback } from '@/components/ErrorFallback';
import { Breadcrumbs } from './components/Breadcrumbs';
import 'daisyui/dist/full.css'; // Ensure DaisyUI styles are imported

export const App = () => {
  const { error, loading } = useCategories();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div
          aria-label="spinner"
          className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
      </div>
    );
  }

  if (error) {
    return <ErrorFallback message={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="w-full">
          <Breadcrumbs />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Navigate to="/" />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation/:orderNumber" element={<OrderConfirmation />} />
          <Route path="/order-confirmation" element={<Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
