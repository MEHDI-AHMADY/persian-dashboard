import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { cookie } from "@/services/hooks";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleLogOut = (label: string) => {
  if (label === "خروج") {
    cookie.remove("userToken");
  }
};

export const getUserToken = () => cookie.get("userToken");
