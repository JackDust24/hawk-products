interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onDelete?: () => void;
}

export const CartItem = ({ name, price, quantity, image, onDelete }: CartItemProps) => {
  return (
    <div className="flex items-center gap-4 p-4 border-b">
      <img src={image} alt={name} className="h-16 w-16 object-cover rounded" />
      <div className="flex-1">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-sm text-gray-600">${price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="btn btn-sm">-</button>
        <span>{quantity}</span>
        <button className="btn btn-sm">+</button>
      </div>
      <button onClick={onDelete} className="btn btn-ghost btn-sm text-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
