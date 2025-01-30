import { CartItem } from './CartItem';
import { ProductListItem } from '@/types';

type CartItemsProps = {
  items: Array<{ product: ProductListItem; quantity: number; cartItemId: string }>;
  onDelete: (cartItemId: string) => void;
  onQuantityChange: (cartItemId: string, newQuantity: number) => void;
};

export const CartItems = ({ items, onDelete, onQuantityChange }: CartItemsProps) => {
  return (
    <>
      {items.map(({ product, quantity, cartItemId }) => (
        <CartItem
          key={cartItemId}
          name={product.name}
          price={product.price}
          quantity={quantity}
          image={product.image}
          onDelete={() => onDelete(cartItemId)}
          onQuantityChange={(newQuantity) => onQuantityChange(cartItemId, newQuantity)}
          className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
        />
      ))}
    </>
  );
};
