import { AiFillHome } from "react-icons/ai";
import { FaUserAlt , FaShoppingCart } from "react-icons/fa";
import { FaBagShopping , FaMessage } from "react-icons/fa6";
import { TbReport } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";

export const sidebarIcons = [
    { icon: AiFillHome, label: "داشبورد", path:"/" },
    { icon: FaUserAlt, label: "کاربران" , path:"/users"},
    { icon: FaShoppingCart, label: "سبد خرید" , path:"/cart"},
    { icon: FaBagShopping, label: "سفارشات" , path:"/orders"},
    { icon: TbReport, label: "گزارشات" , path:"/gozareshat"},
    { icon: FaMessage, label: "وبلاگ" , path: "/blogs"},
    { icon: IoSettings, label: "تنظیمات" , path:"/settings"},
    { icon: IoLogOut, label: "خروج" , path:"/login"}
];

