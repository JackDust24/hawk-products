export type OrderItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
};

export type Order = {
  order_number: string;
  customer_name: string;
  customer_email: string;
  customer_address: string;
  items: OrderItem[];
  total_amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  created_at: string;
};

export type CreateOrderInformation = {
  customerDetails: {
    name: string;
    email: string;
    address: string;
  };
  items: OrderItem[];
  totalAmount: number;
};
