import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface StoreState {
  isLoggedIn: boolean;
  storeLogin: (token: string) => void;
  storeLogout: () => void;
}
export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const useAuthStore = create<StoreState>()(
  devtools((set) => ({
    isLoggedIn: getToken() ? true : false, // 초기값
    storeLogin: (token: string) => {
      set({ isLoggedIn: true });
      setToken(token);
    },
    storeLogout: () => {
      set({ isLoggedIn: false });
      removeToken();
    },
  }))
);
