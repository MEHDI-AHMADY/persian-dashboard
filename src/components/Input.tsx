import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

type InputProps = {
  name: string;
  type?: string;
  className?: string;
  placeholder?: string;
};

export default function Input({
  name,
  type = "text",
  className,
  placeholder,
  ...rest
}: InputProps) {
  const { register } = useFormContext();

  const [isTypePassword, setIsTypePassword] = useState<boolean>(true);

  if (type === "password") {
    return (
      <div className="relative flex items-center justify-between border-b border-gray-600 rounded-md mt-5">
        <input
          {...register(name)}
          type={isTypePassword ? type : "text"}
          className={`p-2 rounded-md focus:outline-none bg-transparent w-full ${className}`}
          placeholder={placeholder}
        />
        {isTypePassword ? (
          <IoMdEye
            className="text-xl cursor-pointer"
            onClick={() => setIsTypePassword(false)}
          />
        ) : (
          <IoIosEyeOff
            className="text-xl cursor-pointer"
            onClick={() => setIsTypePassword(true)}
          />
        )}
      </div>
    );
  }

  return (
    <input
      {...register(name)}
      type={type}
      className={`p-2 rounded-md focus:outline-none border-b border-gray-600 bg-transparent mt-5 ${className}`}
      placeholder={placeholder}
    />
  );
}
