import { useDebounce } from '@/hooks/useDebounce';
import { Product } from '@/types';
import { getImageUrl } from '@/utils/image';

type ProductDetailsProps = {
  product: Product;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onAddToCart: () => void;
};

export const ProductDetails = ({
  product: { name, price, description, image },
  quantity,
  onIncrement,
  onDecrement,
  onAddToCart
}: ProductDetailsProps) => {
  const onDebounceAdd = useDebounce(onAddToCart, 400);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img
          src={getImageUrl(image)}
          alt={name}
          className="w-full h-96 object-cover rounded-lg"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder.jpg';
          }}
        />
      </div>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-2xl font-semibold">${price}</p>
        <p className="text-gray-600">{description}</p>

        <div className="pt-6">
          <label className="text-sm font-medium text-gray-700">Quantity</label>
          <div className="flex items-center space-x-4 mt-2">
            <button
              onClick={onDecrement}
              disabled={quantity <= 1}
              className="btn btn-square btn-sm">
              -
            </button>
            <span className="text-lg font-medium w-8 text-center">{quantity}</span>
            <button
              onClick={onIncrement}
              disabled={quantity >= 5}
              className="btn btn-square btn-sm">
              +
            </button>
          </div>
        </div>

        <div className="pt-6">
          <button onClick={onDebounceAdd} className="btn btn-primary w-full">
            Add to Cart - ${(price * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};
