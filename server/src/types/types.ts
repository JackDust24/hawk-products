export type ProductCategory =
  | 'Kitchen Appliances'
  | 'Cleaning Appliances'
  | 'Climate Control';

export type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
};

export type ProductListItem = Omit<Product, 'description'>;
