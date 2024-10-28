import { AXIOS } from "./axios/axiosInstance";
import { LoginInputs } from "../pages/Login";
import { RegisterInputs } from "../pages/Register";

export const userLoginHandler = async (data: LoginInputs) => {
  try {
    const response = await AXIOS.post("auth/login", data);
    return response.data;
  } catch (error: any) {
    throw new Error(error[0]);
  }
};

export const userRegisterHandler = async (data: RegisterInputs) => {
  try {
    const response = await AXIOS.post("auth/register", data);
    return response;
  } catch (error: any) {
    throw new Error(error[0]);
  }
};

export const getUserHandler = async () => {
  try {
    const response = await AXIOS.get("user/get");
    return response.data;
  } catch (error: any) {
    throw new Error(error[0]);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await AXIOS.get("user/getAll");
    return response.data;
  } catch (error: any) {
    throw new Error(error[0]);
  }
};
