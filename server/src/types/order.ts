export type OrderItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
};

export type Order = {
  orderId: string;
  orderNumber: string;
  customerDetails: {
    name: string;
    email: string;
    address: string;
  };
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: string;
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
