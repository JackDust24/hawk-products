import { Request, Response } from 'express';
import productsData from '../data/data.json';
import categoriesData from '../data/categories.json';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
}

export const getProducts = (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  // Default to 4 if not specified
  const limit = parseInt(req.query.limit as string) || 4;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  // Remove description from the response
  const productsToSend = productsData.map(({ description, ...rest }) => rest);

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
  res.json(categoriesData);
};

export const getProductById = (req: Request, res: Response) => {
  const { id } = req.params;
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
};
