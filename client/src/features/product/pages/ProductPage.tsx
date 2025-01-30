import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '@/hooks/useProducts';
import { useProductsStore } from '@/stores/productsStore';
import { ProductDetails } from '../components/ProductDetails';
import { useCartStore } from '@/stores/cartStore';
import { Toast } from '@/components/shared/Toast';

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const currentProduct = useProductsStore((state) => state.currentProduct);
  const { addItem } = useCartStore();
  const [showToast, setShowToast] = useState(false);

  const { fetchProductById, isLoading } = useProducts();
  const [quantity, setQuantity] = useState(1);
  const [isProductFetched, setIsProductFetched] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    if (id && !isProductFetched) {
      fetchProductById(id);
      setIsProductFetched(true);
    }
    // Cleanup on unmount
    return () => {
      useProductsStore.getState().setCurrentProduct(null);
    };
  }, [id]);

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, 5));
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleAddToCart = () => {
    if (!currentProduct) return;

    addItem(currentProduct, quantity, currentProduct.price * quantity);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails
        product={currentProduct}
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onAddToCart={handleAddToCart}
      />

      {showToast && (
        <Toast
          message={`${quantity} ${quantity === 1 ? 'item' : 'items'} added to cart`}
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};
