import { Link } from 'react-router-dom';

type OrderSummaryProps = {
  subtotal: number;
  className?: string;
};

export const OrderSummary = ({ subtotal, className = '' }: OrderSummaryProps) => {
  const shipping = 5.0;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  return (
    <div className={`rounded-lg bg-gray-50 p-6 ${className}`}>
      <h2 className="text-lg font-medium">Order Summary</h2>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-medium">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Shipping</p>
          <p className="font-medium">${shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Tax</p>
          <p className="font-medium">${tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-4">
          <p className="text-base font-medium">Total</p>
          <p className="text-base font-medium">${total.toFixed(2)}</p>
        </div>
      </div>
      <Link
        to="/checkout"
        className="mt-6 block w-full rounded bg-primary p-4 text-sm font-medium text-white transition hover:opacity-90">
        Proceed to Checkout
      </Link>
    </div>
  );
};
