import { useNavigate, useParams } from 'react-router-dom';

export const OrderConfirmation = () => {
  const { orderNumber } = useParams();
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto mt-12 text-center space-y-6">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Order Confirmed!</h1>
        <p className="text-gray-600">Thank you for your order. Your order number is:</p>
        <p className="text-xl font-semibold">{orderNumber}</p>
      </div>

      <button onClick={() => navigate('/')} className="btn btn-primary">
        Continue Shopping
      </button>
    </div>
  );
};
