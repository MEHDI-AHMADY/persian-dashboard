import { useFormContext } from "react-hook-form";

type InputProps = {
  name: string;
  type?: string;
  validation?: {};
  className?: string;
  placeholder?: string;
};

export default function Input({
  name,
  type = "text",
  validation = {},
  className,
  placeholder,
  ...rest
}: InputProps) {
  const { register } = useFormContext();

  return (
    <input
    {...register(name , validation)}
    type={type}
    className={`p-2 rounded-md focus:outline-none ${className}`}
    placeholder={placeholder}
    />
  );
}
