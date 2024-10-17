type ButtonProps = {
  className?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  children: React.ReactNode;
};

export default function Button({
  className,
  disabled = false,
  type = "button",
  children,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`px-4 py-2 ${className} ${disabled ? "opacity-60" : "opacity-100"}`}
    >
      {children}
    </button>
  );
}
