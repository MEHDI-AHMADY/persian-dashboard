import { cookie } from "@/services/hooks";

export const handleLogOut = (label: string) => {
  if (label === "خروج") {
    cookie.remove("userToken");
  }
};

export const getUserToken = () => cookie.get("userToken");
