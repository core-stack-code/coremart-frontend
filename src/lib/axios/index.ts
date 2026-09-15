import axios, { type AxiosInstance } from 'axios';

const SERVR_HOST_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: SERVR_HOST_URL,
  withCredentials: true,
});

export default axiosInstance;