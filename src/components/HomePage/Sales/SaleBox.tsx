import { IconType } from "react-icons";

type SaleBoxProps = {
  count: number;
  title: string;
  icon: IconType;
  color: string;
};

export default function SaleBox({
  count,
  title,
  icon: Icon,
  color,
}: SaleBoxProps) {


  return (
    <div className="flex flex-col gap-1 bg-secondary p-2 rounded-sm">
      <Icon className={`${color} text-xl`} />
      <span>{count.toLocaleString()}</span>
      <span className={`font-IranSansLight text-base ${color}`}>{title}</span>
    </div>
  );
}
