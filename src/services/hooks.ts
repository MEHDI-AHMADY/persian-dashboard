import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { NavigateFunction } from "react-router-dom";
import Cookies from "universal-cookie";
import { LoginInputs } from "../pages/Login";
import { RegisterInputs } from "../pages/Register";
import {
  getAllUsers,
  getUserHandler,
  userLoginHandler,
  userRegisterHandler,
} from "./api";

export const cookie = new Cookies(null, { path: "/" });

export const useLogin = ({ navigate }: { navigate: NavigateFunction }) => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: LoginInputs) => userLoginHandler(data),
    onError: (error: any) => {
      toast({
        title: "وای!",
        description: error.message || "خطایی رخ داده بعدا امتحان کنید", 
        variant: "destructive",
      });
    },
    onSuccess: (user) => {
      cookie.set("userToken", user.token, { path: "/" });
      navigate("/");
    },
  });
};

export const useRegister = ({ navigate }: { navigate: NavigateFunction }) => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: RegisterInputs) => userRegisterHandler(data),
    onError: (error: any) => {
      toast({
        title: "وای!",
        description: error.message || "خطایی رخ داده بعدا امتحان کنید",
        variant: "destructive",
      });
    },
    onSuccess() {
      navigate("/");
    },
  });
};

export const useGetUser = () => {
  const userToken = cookie.get("userToken");

  return useQuery({
    queryKey: ["getUser", userToken],
    queryFn: getUserHandler,
    enabled: !!userToken,
  });
};

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["getAllUsers"],
    queryFn: getAllUsers,
  });
};
