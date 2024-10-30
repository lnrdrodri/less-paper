import axios from "axios";
import { localstorageKeys } from "../config/localstorageKeys";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use(config => {
  const token = localStorage.getItem(localstorageKeys.TOKEN);
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

httpClient.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem(localstorageKeys.TOKEN);
    window.location = '/login';
  }
});