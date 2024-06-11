import { OrderSheet, OrderItemDetail, Order } from "../models/order.model";
import { httpClient } from "./http";

export const order = async (orderData: OrderSheet) => {
  const response = await httpClient.post("/orders", orderData);
  return response.data;
};

export const fetchOrders = async () => {
  try {
    const response = await httpClient.get<Order[]>("/orders");
    return response.data;
  } catch (err: any) {
    return [];
  }
};

export const fetchOrder = async (orderId: number) => {
  const response = await httpClient.get<OrderItemDetail[]>(
    `/orders/${orderId}`
  );
  return response.data;
};
