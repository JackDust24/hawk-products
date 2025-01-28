import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '@/hooks/useProducts';
import { useProductsStore } from '@/stores/productsStore';
import { ProductDetails } from '../components/ProductDetails';

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const currentProduct = useProductsStore((state) => state.currentProduct);
  const { fetchProductById, isLoading } = useProducts();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      fetchProductById(id);
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

    // TODO: Implement cart functionality
    console.log('Adding to cart:', {
      productId: currentProduct.id,
      quantity,
      price: currentProduct.price,
      total: currentProduct.price * quantity
    });
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
    </div>
  );
};
