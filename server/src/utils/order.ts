import sanitize from 'sanitize-filename';

export const sanitizeFormInput = (str: string): string => {
  return sanitize(str.trim());
};

export const generateOrderNumber = (): string => {
  const timestamp = Date.now().toString();
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');
  return `ORD-${timestamp}-${random}`;
};
