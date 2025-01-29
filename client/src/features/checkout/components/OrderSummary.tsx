import { calculateOrderTotals } from '@/utils/pricing';
import { PriceLine } from '@/components/shared/PriceLine';
import { useCartStore } from '@/stores/cartStore';

export const OrderSummary = () => {
  const { items } = useCartStore();
  const subtotal = Object.values(items).reduce((sum, item) => sum + item.total, 0);
  const { shipping, tax, total } = calculateOrderTotals(subtotal);

  return (
    <div className="bg-white p-6 rounded-lg shadow h-fit">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      <div className="space-y-4 mb-6">
        {Object.values(items).map((item) => (
          <div key={item.cartItemId} className="flex justify-between text-sm">
            <div>
              <p className="font-medium">{item.product.name}</p>
              <p className="text-gray-500">Qty: {item.quantity}</p>
            </div>
            <p className="font-medium">${item.total.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2 border-t pt-4">
        <PriceLine label="Subtotal" amount={subtotal} />
        <PriceLine label="Shipping" amount={shipping} />
        <PriceLine label="Tax" amount={tax} />
        <PriceLine label="Total" amount={total} isTotal />
      </div>
    </div>
  );
};
