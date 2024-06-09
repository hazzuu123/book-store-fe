import { httpClient } from "./http";

interface AddCartProps {
  bookId: number;
  quantity: number;
}
export const addCart = async (params: AddCartProps) => {
  const response = await httpClient.post("/carts", params);
  return response;
};
