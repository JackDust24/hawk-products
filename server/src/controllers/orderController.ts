import { Request, Response } from 'express';
import { z } from 'zod';
import { sanitizeFormInput, generateOrderNumber } from '../utils/order';
import { Order, CreateOrderInformation } from '../types/order';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

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

    // Create new order
    const newOrder: Order = {
      order_number: generateOrderNumber(),
      customer_name: sanitizeFormInput(orderData.customerDetails.name),
      customer_email: orderData.customerDetails.email.toLowerCase(),
      customer_address: sanitizeFormInput(orderData.customerDetails.address),
      items: orderData.items,
      total_amount: orderData.totalAmount,
      status: 'pending',
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('orders')
      .insert([newOrder])
      .select('*'); // Ensure we get the inserted data

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to create order in Supabase',
        error: error.message,
      });
    }

    // Ensure `data` is an array with at least one entry
    if (!Array.isArray(data) || data.length === 0) {
      console.error('Unexpected response from Supabase:', data);
      return res.status(500).json({
        success: false,
        message: 'Order creation failed, unexpected response from Supabase',
      });
    }

    res.status(201).json({
      success: true,
      orderNumber: newOrder.order_number,
      orderId: data[0].order_id,
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
