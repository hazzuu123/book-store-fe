import { User } from "../models/user.model";
import { httpClient } from "./http";

export const signup = async (userData: User) => {
  const response = await httpClient.post("/users/join", userData);
  return response.data;
};

interface LoginResponse {
  token: string;
}
export const login = async (userData: User) => {
  const response = await httpClient.post<LoginResponse>(
    "/users/login",
    userData
  );
  return response.data;
};

export const resetRequest = async (data: User) => {
  const response = await httpClient.post("/users/check-email", data);
  return response.data;
};

export const resetPassword = async (data: User) => {
  console.log(data);
  const response = await httpClient.put("/users/reset-password", data);
  return response.data;
};
