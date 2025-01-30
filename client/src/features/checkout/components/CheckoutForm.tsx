import { useCheckoutValidation } from '../hooks/useCheckoutValidation';
import { useCheckoutSubmit } from '../hooks/useCheckoutSubmit';
import { Toast } from '@/components/shared/Toast';
import { FormInput } from './FormInput';

export const CheckoutForm = () => {
  const { errors, validateForm } = useCheckoutValidation();
  const { isSubmitting, toast, setToast, handleSubmit } = useCheckoutSubmit(validateForm);

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-6">
      <div className="space-y-4">
        <FormInput name="name" label="Full Name" error={errors.name} />
        <FormInput name="email" label="Email" type="email" error={errors.email} />
        <FormInput name="address" label="Address" error={errors.address} />
      </div>

      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
        {isSubmitting ? 'Placing Order...' : 'Place Order'}
      </button>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </form>
  );
};
