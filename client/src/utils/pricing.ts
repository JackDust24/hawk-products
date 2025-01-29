export const SHIPPING_COST = 5.0;
export const TAX_RATE = 0.1; // 10% tax rate

export const calculateOrderTotals = (subtotal: number) => {
  const shipping = SHIPPING_COST;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + shipping + tax;

  return {
    subtotal,
    shipping,
    tax,
    total
  };
};
