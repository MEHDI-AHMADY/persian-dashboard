import { Link, useParams } from "react-router-dom";
import { sidebarIcons } from "../icons";

const style = `bg-[#A9DFD8] rounded-md`;

export default function Sidebar() {
  const { path } = useParams();

  return (
    <div className="sticky top-0 right-0 w-88 h-screen flex gap-5">
      <div className="bg-primary flex flex-col gap-[36px] py-20">
        {sidebarIcons.map((icon, index) => (
          <Link
            to={icon.path}
            key={index}
            className={`w-full px-[37px] ${
              path?.startsWith(icon.path) ? "border-l-4 border-[#A9DFD8]" : ""
            } ${index === 0 ? "border-l-2 border-[#A9DFD8]" : ""}`}
          >
            <icon.icon className="cursor-pointer" />
          </Link>
        ))}
      </div>

      <div className="py-16 flex flex-col gap-[7px] bg-primary px-[20px]">
        {sidebarIcons.map((icon, index) => (
          <Link
            to={icon.path}
            key={index}
            className={`flex items-center gap-3 px-4 py-2.5 ${
              path?.startsWith(icon.path) ? style : ""
            } ${index === 0 ? style : ""}`}
          >
            <icon.icon className="cursor-pointer" />
            <span>{icon.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
