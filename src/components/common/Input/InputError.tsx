type InputErrorProps = {
  message: string | undefined;
};

export default function InputError({ message } : InputErrorProps) {
  return <p className="font-thin mt-1 text-orange text-sm">{message}</p>;
}
