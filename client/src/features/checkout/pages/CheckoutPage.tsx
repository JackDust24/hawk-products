import { CheckoutForm } from '../components/CheckoutForm';

export const CheckoutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>
        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {/* Order summary content */}
        </div>
      </div>
    </div>
  );
};
