import { clsx } from "clsx";
import { useLocation } from "react-router-dom";
import { sidebarIcons } from "./sidebarIcons";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <nav className="hidden sticky top-0 right-0 w-88 h-screen md:flex gap-5 flex-1">
      <div className="hidden lg:flex bg-primary flex-col gap-[36px] py-20">
        {sidebarIcons.map((icon, index) => (
          <SidebarItem
            key={index}
            path={icon.path}
            icon={icon.icon}
            className={clsx("px-[36px]", {
              "border-l-2 border-[#A9DFD8]":
                icon.path === "/"
                  ? pathname === icon.path
                  : pathname.startsWith(icon.path),
            })}
          />
        ))}
      </div>

      <div className="py-16 flex flex-col gap-[6px] bg-primary px-[20px]">
        {sidebarIcons.map((icon, index) => (
          <SidebarItem
            key={index}
            {...icon}
            className={clsx("flex items-center gap-2 px-4 py-2.5 rounded-md", {
              "bg-[#A9DFD8] rounded-md text-black":
                icon.path === "/"
                  ? pathname === icon.path
                  : pathname.startsWith(icon.path),
            })}
          />
        ))}
      </div>
    </nav>
  );
}
