import { IconType } from "react-icons";
import { Link } from "react-router-dom";

type SidebarItemProps = {
  icon: IconType;
  label?: string;
  path?: string;
  className?: string;
  onClick?: () => void;
};

export default function SidebarItem({
  icon: Icon,
  label,
  path,
  className,
  onClick,
}: SidebarItemProps) {
  return (
    <Link onClick={onClick} to={path || "#"} className={className}>
      <Icon className="cursor-pointer" />
      {label && <span>{label}</span>}
    </Link>
  );
}
