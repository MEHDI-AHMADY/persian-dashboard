import { useState } from "react";
import { Input as ShadcnInput } from "./ui/input";
import { UseFormRegister } from "react-hook-form";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { cn } from "@/lib/utils";
import Button from "./Button/CustomButton";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register?: UseFormRegister<any>;
  showPasswordToggle?: boolean;
  parentClasses?: string;
}

export default function Input({
  name,
  type,
  className,
  register,
  showPasswordToggle = false,
  parentClasses,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const inputProps = register ? register(name) : {};

  return (
    <div
      className={cn(
        "relative flex items-center justify-between",
        parentClasses,
      )}
    >
      <ShadcnInput
        type={inputType}
        className={cn(
          "w-full p-2 rounded-md focus:outline-none border-b border-gray-600 bg-transparent mt-5",
          className
        )}
        {...rest}
        {...inputProps}
      />

      {type === "password" && showPasswordToggle && (
        <Button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute left-0 top-[34%]"
        >
          {showPassword ? (
            <IoIosEyeOff className="h-4 w-4 text-gray-500" />
          ) : (
            <IoMdEye className="h-4 w-4 text-gray-500" />
          )}
        </Button>
      )}
    </div>
  );
}
