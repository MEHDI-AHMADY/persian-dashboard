import axios from "axios";
import { cookie } from "../hooks";

export const AXIOS = axios.create({
  baseURL: "https://api.angoshtarbaz.com/",
});

AXIOS.interceptors.request.use(
  (config) => {
    const token = cookie.get("userToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    if (error?.response?.data?.errors) {
      return Promise.reject(error.response.data.errors);
    } else {
      return Promise.reject(error);
    }
  }
);

