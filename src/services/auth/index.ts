import { useMutation, useQuery } from "@tanstack/react-query";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { LoginInputs } from "../../pages/Login";
import { RegisterInputs } from "../../pages/Register";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/Slices/userSlice";
import { getUserHandler, userLoginHandler, userRegisterHandler } from "./utils";

export const cookie = new Cookies(null, { path: "/" });

export const useLogin = ({ navigate }: { navigate: NavigateFunction }) => {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: (data: LoginInputs) => userLoginHandler(data),
    onError: (error: any) => {
      toast.error(error.message || "An unexpected Error occurred!");
    },
    onSuccess: (user) => {
      cookie.set("userToken", user.token);
      dispatch(setUser(user));
      navigate("/");
    },
  });
};

export const useRegister = ({ navigate }: { navigate: NavigateFunction }) => {
  return useMutation({
    mutationFn: (data: RegisterInputs) => userRegisterHandler(data),
    onError: (error: any) => {
      toast.error(error.message || "An unexpected error occurred!");
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
    queryFn: getUserHandler
  });
};
