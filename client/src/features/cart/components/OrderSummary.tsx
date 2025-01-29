import { Link } from 'react-router-dom';
import { calculateOrderTotals } from '@/utils/pricing';
import { PriceLine } from '@/components/shared/PriceLine';

type OrderSummaryProps = {
  subtotal: number;
  className?: string;
};

export const OrderSummary = ({ subtotal, className = '' }: OrderSummaryProps) => {
  const { shipping, tax, total } = calculateOrderTotals(subtotal);

  return (
    <div className={`rounded-lg bg-gray-50 p-6 ${className}`}>
      <h2 className="text-lg font-medium">Order Summary</h2>
      <div className="mt-4 space-y-2">
        <PriceLine label="Subtotal" amount={subtotal} />
        <PriceLine label="Shipping" amount={shipping} />
        <PriceLine label="Tax" amount={tax} />
        <PriceLine label="Total" amount={total} isTotal className="text-base font-semibold" />
      </div>
      <Link
        to="/checkout"
        className="mt-6 block w-full rounded bg-primary p-4 text-sm font-medium text-white transition hover:opacity-90">
        Proceed to Checkout
      </Link>
    </div>
  );
};
