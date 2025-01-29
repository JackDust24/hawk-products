import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

export const App = () => {
  const { error, loading } = useCategories();

  //TODO: Add a loading state
  if (loading) {
    return <div className="flex items-center justify-center h-screen text-lg">Loading...</div>;
  }

  if (error) {
    return <ErrorFallback message={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="w-full">
          <Breadcrumbs />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation/:orderNumber" element={<OrderConfirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
