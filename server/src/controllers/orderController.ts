import { Request, Response } from 'express';
import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';
import { sanitizeFormInput, generateOrderNumber } from '../utils/order';
import { Order, CreateOrderInformation } from '../types/order';

const ORDERS_DIR = path.join(__dirname, '../../output');
const ORDERS_FILE = path.join(ORDERS_DIR, 'orders.json');

const orderItemSchema = z.object({
  productId: z.string(),
  name: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  total: z.number().positive(),
});

const createOrderSchema = z.object({
  customerDetails: z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    address: z.string().min(5).max(200),
  }),
  items: z.array(orderItemSchema).nonempty(),
  totalAmount: z.number().positive(),
});

export const createOrder = async (req: Request, res: Response) => {
  try {
    const validatedData = createOrderSchema.parse(req.body);
    const orderData: CreateOrderInformation = validatedData;

    // If directory already exists then recursive true will do nothing
    await fs.mkdir(ORDERS_DIR, { recursive: true });

    let orders: Order[] = [];
    try {
      const ordersFile = await fs.readFile(ORDERS_FILE, 'utf-8');
      orders = JSON.parse(ordersFile);
    } catch (error) {
      // Initialize the file with an empty array if it doesn't exist
      await fs.writeFile(ORDERS_FILE, JSON.stringify([], null, 2));
    }

    // Create new order
    const newOrder: Order = {
      orderId: crypto.randomUUID(),
      orderNumber: generateOrderNumber(),
      customerDetails: {
        name: sanitizeFormInput(orderData.customerDetails.name),
        email: orderData.customerDetails.email.toLowerCase(),
        address: sanitizeFormInput(orderData.customerDetails.address),
      },
      items: orderData.items,
      totalAmount: orderData.totalAmount,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    orders.push(newOrder);
    await fs.writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2));

    res.status(201).json({
      success: true,
      orderNumber: newOrder.orderNumber,
      orderId: newOrder.orderId,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Invalid order data',
        errors: error.errors,
      });
    }

    console.error('Error creating order:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
    });
  }
};
