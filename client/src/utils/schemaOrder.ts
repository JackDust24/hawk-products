import { z } from 'zod';

export const checkoutFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .regex(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces'),
  email: z.string().email('Invalid email address').toLowerCase(),
  address: z
    .string()
    .min(5, 'Address must be at least 5 characters')
    .max(200, 'Address is too long')
    .regex(/^[a-zA-Z0-9\s,.-]*$/, 'Address contains invalid characters')
});

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>;
