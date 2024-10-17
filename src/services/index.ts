import { useMutation } from "@tanstack/react-query";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginInputs } from "../pages/Login";
import { RegisterInputs } from "../pages/Register";
import { userLoginHandler, userRegisterHandler } from "./utils";

export const useLogin = ({ navigate }:{navigate : NavigateFunction}) => {
  return useMutation({
    mutationFn: (data: LoginInputs) => userLoginHandler(data),
    onError: () => toast.error("اشتباهی رخ داده لطفا بعدا امتحان کنید"),
    onSuccess: (data) => {
      localStorage.setItem("user", data);
      navigate("/")
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterInputs) => userRegisterHandler(data),
    onError : () => toast.error("اشتباهی رخ داده لطفا بعدا امتحان کنید"),
    onSuccess : (data) => {}
  });
};
