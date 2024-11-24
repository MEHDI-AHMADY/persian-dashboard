import SidebarItem from "../../share/Sidebar/SidebarItem";
import { sidebarIcons } from "../../share/Sidebar/sidebarIcons";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { handleLogOut } from "@/lib/utils";

const menuItem = {
  hidden: { opacity: 0, x: 60 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.4 },
  }),
};

export default function ListMenu() {
  const { pathParam } = useParams();

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
            className={`flex items-center gap-2 rounded-md p-2 ${
              index === 0 || pathParam?.startsWith(icon.path)
                ? "bg-[#A9DFD8] rounded-md text-black"
                : "hover:border-b"
            }`}
          />
        </motion.li>
      ))}
    </ul>
  );
}
