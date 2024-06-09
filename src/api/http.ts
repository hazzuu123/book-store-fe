import axios, { AxiosRequestConfig } from "axios";
import { getToken, removeToken } from "../store/authStore";

const BASE_URL = "http://localhost:8000";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosIntance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "content-type": "application/json",
      Authorization: getToken() ? getToken() : "",
    },
    withCredentials: true,
    ...config,
  });

  axiosIntance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = getToken() ? getToken() : "";
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosIntance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        removeToken();
        window.location.href = "/login";
        return;
      }

      return Promise.reject(error);
      // 로그인 만료 처리
    }
  );

  return axiosIntance;
};

export const httpClient = createClient();
