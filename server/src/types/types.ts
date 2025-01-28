export type ProductCategory =
  | 'Kitchen Appliances'
  | 'Cleaning Appliances'
  | 'Climate Control';

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  category: ProductCategory;
}
