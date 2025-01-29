import { useState } from 'react';
import { useCartStore } from '@/stores/cartStore';
import { api } from '@/lib/axios';
import { useNavigate } from 'react-router-dom';
import { type CheckoutFormData } from '@/utils/schemaOrder';

export const useCheckoutSubmit = (
  validateForm: (formData: FormData) => CheckoutFormData | null
) => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'error' | 'success' } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    const formData = new FormData(e.currentTarget);
    const validatedData = validateForm(formData);

    if (!validatedData) {
      setIsSubmitting(false);
      return;
    }

    const orderItems = Object.values(items).map(({ product, quantity, total }) => ({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      total
    }));

    const totalAmount = Object.values(items).reduce((sum, item) => sum + item.total, 0);

    try {
      const { data } = await api.post('/orders', {
        customerDetails: validatedData,
        items: orderItems,
        totalAmount
      });

      clearCart();
      navigate(`/order-confirmation/${data.orderNumber}`);
    } catch (error) {
      setToast({
        message: 'Failed to place order. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, toast, setToast, handleSubmit };
};
