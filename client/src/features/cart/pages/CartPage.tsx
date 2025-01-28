import { CartItem } from '../components/CartItem';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/stores/cartStore';
import { useState } from 'react';
import { OrderSummary } from '../components/OrderSummary';
import { Modal } from '@/components/shared/Modal';

export const CartPage = () => {
  const { items, removeItem, updateQuantity } = useCartStore();
  const cartItems = Object.values(items);
  const [itemToRemove, setItemToRemove] = useState<string | null>(null);

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.total || item.product.price * item.quantity);
  }, 0);

  const handleRemoveItem = (cartItemId: string) => {
    setItemToRemove(cartItemId);
  };

  const handleConfirmRemove = () => {
    if (itemToRemove) {
      removeItem(itemToRemove);
      setItemToRemove(null);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link to="/" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          {cartItems.map(({ product, quantity, cartItemId }) => (
            <CartItem
              key={cartItemId}
              id={product.id}
              name={product.name}
              price={product.price}
              quantity={quantity}
              image={product.image}
              onDelete={() => handleRemoveItem(cartItemId)}
              onQuantityChange={(newQuantity) => updateQuantity(cartItemId, newQuantity)}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            />
          ))}
        </div>

        <div className="md:max-w-md">
          <OrderSummary
            subtotal={subtotal}
            className="bg-white border border-gray-200 rounded-lg shadow-sm"
          />
        </div>
      </div>

      <Modal
        isOpen={itemToRemove !== null}
        onClose={() => setItemToRemove(null)}
        onConfirm={handleConfirmRemove}
        title="Remove Item"
        message="Are you sure you want to remove this item from your cart?"
        confirmText="Remove"
      />
    </div>
  );
};
