import { CartItem } from '../components/CartItem';
import { Link } from 'react-router-dom';

export const CartPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Cart items will be mapped here */}
          <CartItem
            id={1}
            name="Test Product"
            price={99.99}
            quantity={1}
            image="/images/test.jpg"
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {/* Order summary content */}
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <Link to="/checkout" className="btn btn-primary">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};
