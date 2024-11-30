import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/Button/CustomButton";
import Input from "../components/common/Input/Input";
import { useRegister } from "../services/hooks";
import { motion } from "framer-motion";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputError from "@/components/common/Input/InputError";
import AnimatedSvg from "@/components/share/AnimatedSvg/AnimatedSvg";
import { useDimensions } from "@/hooks/useDimensions";

export type RegisterInputs = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const registerFormAnimation = {
  hidden: { opacity: 0, y: -300 },
  show: { opacity: [0.4 , 0.7 , 1], y: [100 , -50 , 0], transition: { duration: 2} },
};

export default function Register() {
  const {ref , dimensions} = useDimensions<HTMLFormElement>();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("این فیلد الزامیست")
      .min(3, "حداقل باید 3 کاراکتر داشته باشد!"),
    email: yup.string().required("این فیلد الزامیست").email("ایمیل وارد شده معتبر نیست"),
    password: yup
      .string()
      .required("این فیلد الزامیست")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
        "باید حداقل یک عدد و یک حرف داشته باشد"
      )
      .max(6, "حداکثر 6 کاراکتر مجازست")
      .min(4, "حداقل 4 کاراکتر مجازست"),
    confirmPassword: yup
      .string()
      .required("این فیلد الزامیست")
      .oneOf([yup.ref("password")], "پسورد ها یکی نیستند"),
  });

  const methods = useForm<RegisterInputs>({ resolver: yupResolver(schema) });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const navigate = useNavigate();

  const { isPending, mutate } = useRegister({ navigate });

  const registerHandler = (data: RegisterInputs) => {
    mutate(data);
  };

  return (
    <div className="bg-primary flex items-center justify-center min-h-screen px-5">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={registerFormAnimation}
        className="glassy-background relative min-w-[320px] sm:min-w-[440px] min-h-[400px]"
      >
        <form
        ref={ref}
          onSubmit={handleSubmit(registerHandler)}
          className="w-full z-10 p-5 h-fit rounded-md flex flex-col"
        >
          <span className="text-xl text-center w-full">ثبت نام</span>

          <Input
            name="fullName"
            placeholder="نام و نام خانوادگی"
            register={register}
          />
          {errors?.fullName && <InputError message={errors?.fullName?.message} />}

          <Input name="email" placeholder="ایمیل" register={register} />
          {errors?.email && <InputError message={errors?.email?.message} />}

          <Input
            name="password"
            type="password"
            placeholder="پسورد"
            register={register}
            showPasswordToggle
          />
          {errors?.password && <InputError message={errors?.password?.message} />}

          <Input
            name="confirmPassword"
            type="password"
            placeholder="تکرار پسورد"
            register={register}
            showPasswordToggle
          />
          {errors?.confirmPassword && (
            <InputError message={errors?.confirmPassword?.message} />
          )}

          <Button
            type="submit"
            disabled={isPending}
            className="bg-orange text-black rounded-sm mt-4 hover:bg-orange hover:opacity-90"
          >
            {isPending ? "صبرکنید" : "ثبت"}
          </Button>

          <p className="mt-6">
            اکانت دارید؟
            <Link
              to="/login"
              className="bg-orange text-black p-1 rounded-sm font-bold mr-1"
            >
              لاگین
            </Link>
          </p>
        </form>
        <AnimatedSvg dimensions={dimensions}/>
      </motion.div>
    </div>
  );
}
