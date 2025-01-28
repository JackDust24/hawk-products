import { getImageUrl } from '@/utils/image';
import { QuantityInput } from '@/features/cart/components/QuantityInput';

type CartItemProps = {
  name: string;
  price: number;
  quantity: number;
  image: string;
  onDelete?: () => void;
  onQuantityChange: (quantity: number) => void;
  className?: string;
};

export const CartItem = ({
  name,
  price,
  quantity,
  image,
  onDelete,
  onQuantityChange,
  className = ''
}: CartItemProps) => {
  const total = price * quantity;

  return (
    <div className={`flex items-start gap-4 py-4 ${className}`}>
      <img alt={name} className="h-16 w-16 rounded object-cover" src={getImageUrl(image)} />

      <div className="flex flex-1 items-center justify-between">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">{name}</h3>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-600">${price}</p>
            <QuantityInput value={quantity} onChange={onQuantityChange} />
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <p className="text-sm font-medium">${total.toFixed(2)}</p>
          <button onClick={onDelete} className="text-sm text-red-500 hover:text-red-700">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
