import { useState } from 'react';
import { checkoutFormSchema, type CheckoutFormData } from '@/utils/schemaOrder';
import { sanitizeInput } from '@/utils/string';
import { z } from 'zod';

export const useCheckoutValidation = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData): CheckoutFormData | null => {
    try {
      const data = {
        name: sanitizeInput(formData.get('name') as string),
        email: sanitizeInput(formData.get('email') as string),
        address: sanitizeInput(formData.get('address') as string)
      };

      const validated = checkoutFormSchema.parse(data);
      setErrors({});
      return validated;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return null;
    }
  };

  return { errors, validateForm };
};
