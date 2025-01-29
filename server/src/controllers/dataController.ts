import { Request, Response } from 'express';
import productsData from '../data/data.json';
import categoriesData from '../data/categories.json';
import { Product, ProductListItem, ProductCategory } from '../types/types';

const VALID_CATEGORIES = [
  'Kitchen Appliances',
  'Cleaning Appliances',
  'Climate Control',
] as const;

// Helper function to validate if a string is a valid ProductCategory
const isValidCategory = (category: string): category is ProductCategory => {
  return VALID_CATEGORIES.includes(category as ProductCategory);
};

export const getProducts = (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  // Default to 4 if not specified
  const limit = parseInt(req.query.limit as string) || 4;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  // Remove description from the response
  const productsToSend: ProductListItem[] = productsData.map(
    ({ description, ...rest }) => rest
  );

  productsToSend.forEach((product) => {
    if (!isValidCategory(product.category)) {
      console.warn(
        `Warning: Product "${product.name}" has unidentified category "${product.category}"`
      );
    }
  });

  const paginatedProducts = productsToSend.slice(startIndex, endIndex);
  const totalPages = Math.ceil(productsToSend.length / limit);

  res.json({
    products: paginatedProducts,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems: productsToSend.length,
      hasMore: page < totalPages,
      itemsPerPage: limit,
    },
  });
};

export const getCategories = (_req: Request, res: Response) => {
  categoriesData.forEach((category) => {
    if (!isValidCategory(category.name)) {
      console.warn(
        `Warning: Category "${category.name}" in categories.json does not match ProductCategory type`
      );
    }
  });
  res.json(categoriesData);
};

export const getProductById = (req: Request, res: Response) => {
  const { id } = req.params;
  const product: Product | undefined = productsData.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
};
