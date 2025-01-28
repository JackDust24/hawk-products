// Product types
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

export type ProductListItem = Omit<Product, 'description'>;

// Category types
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

// Pagination types
export type PaginationData = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasMore: boolean;
  itemsPerPage: number;
};

// API Response types
export type ProductsResponse = {
  products: ProductListItem[];
  pagination: PaginationData;
};

export type ProductResponse = {
  product: Product;
};

// Cart types
export type CartItem = {
  product: Product;
  quantity: number;
  total: number;
};

// Search types
export type SearchFilters = {
  category?: string;
  query?: string;
  page?: number;
  limit?: number;
};

// Store types
export type CategoriesState = {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  fetchCategories: () => Promise<void>;
};
