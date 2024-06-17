import { Order, OrderItemDetail, OrderSheet } from "../models/order.model";
import { requestHandler } from "./http";

// // 기존
// export const order = async (orderData: OrderSheet) => {
//   const response = await httpClient.post("/orders", orderData);
//   return response.data;
// };

export const order = async (orderData: OrderSheet) => {
  return await requestHandler<any, OrderSheet>("post", "/orders", orderData);
};

export const fetchOrders = async () => {
  try {
    return await requestHandler<Order[]>("get", "/orders");
  } catch (err: any) {
    return [];
  }
};

export const fetchOrder = async (orderId: number) => {
  // return response.data;
  return await requestHandler<OrderItemDetail[]>("get", `/orders/${orderId}`);
};
