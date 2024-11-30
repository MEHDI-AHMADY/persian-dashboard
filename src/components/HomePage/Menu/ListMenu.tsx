import SidebarItem from "../../share/Sidebar/SidebarItem";
import { sidebarIcons } from "../../share/Sidebar/sidebarIcons";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { handleLogOut } from "@/lib/utils";
import { clsx } from "clsx";

const menuItem = {
  hidden: { opacity: 0, x: 60 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.4 },
  }),
};

export default function ListMenu() {
  const { pathname } = useLocation();

  return (
    <ul className="flex flex-col gap-4">
      {sidebarIcons.map((icon, index) => (
        <motion.li
          initial="hidden"
          whileInView="show"
          variants={menuItem}
          key={index}
          custom={index}
        >
          <SidebarItem
            onClick={() => handleLogOut(icon.label)}
            icon={icon.icon}
            label={icon.label}
            path={icon.path}
            className={clsx("flex items-center gap-2 rounded-md p-2", {
              "bg-sidebarMainColor rounded-md text-black":
                icon.path === "/"
                  ? pathname === icon.path
                  : pathname.startsWith(icon.path),
              "hover:border-b":
                icon.path === "/"
                  ? pathname !== icon.path
                  : !pathname.startsWith(icon.path),
            })}
          />
        </motion.li>
      ))}
    </ul>
  );
}
