import { Button as ShadcnBtn } from "../../ui/button";
import { Loader2 } from "lucide-react";

type ButtonProps = {
  className?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  variant?:
    | "ghost"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "link"
    | null
    | undefined;
};

export default function Button({
  className,
  disabled = false,
  type = "button",
  onClick,
  children,
  variant = "ghost",
}: ButtonProps) {
  return (
    <ShadcnBtn
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`px-4 py-2 text-lg ${className} ${
        disabled ? "opacity-60" : "opacity-100"
      }`}
    >
      {children}
      {disabled && <Loader2 className="animate-spin" />}
    </ShadcnBtn>
  );
}
