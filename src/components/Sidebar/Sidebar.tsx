import { useParams } from "react-router-dom";
import { sidebarIcons } from "./sidebarIcons";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const { pathParam } = useParams();

  return (
    <nav className="hidden sticky top-0 right-0 w-88 h-screen md:flex gap-5 flex-1">
      <div className="hidden lg:flex bg-primary flex-col gap-[36px] py-20">
        {sidebarIcons.map((icon, index) => (
          <SidebarItem
            key={index}
            path={icon.path}
            icon={icon.icon}
            className={`px-[36px] ${
              pathParam?.startsWith(icon.path) || index === 0
                ? "border-l-2 border-[#A9DFD8]"
                : ""
            }`}
          />
        ))}
      </div>

      <div className="py-16 flex flex-col gap-[6px] bg-primary px-[20px]">
        {sidebarIcons.map((icon, index) => (
          <SidebarItem
            key={index}
            {...icon}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-md ${
              index === 0 || pathParam?.startsWith(icon.path) ? "bg-[#A9DFD8] rounded-md text-black" : "hover:border-b"
            }`}
          />
        ))}
      </div>
    </nav>
  );
}
