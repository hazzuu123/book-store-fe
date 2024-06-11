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
      // 네트워크 에러
      if (!error.response) {
        alert("Network Error: Please check your internet connection.");
        return Promise.reject(new Error("Network Error"));
      }
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

// 공통 요청 부분
type requestMethod = "get" | "post" | "put" | "delete";

export const requestHandler = async <T, U>(
  method: requestMethod,
  url: string,
  payload?: T
): Promise<U> => {
  let response;

  switch (method) {
    case "post":
      response = await httpClient.post(url, payload);
      break;
    case "get":
      response = await httpClient.get(url);
      break;
    case "put":
      response = await httpClient.put(url, payload);
      break;
    case "delete":
      response = await httpClient.delete(url);
      break;
  }

  return response.data;
};
