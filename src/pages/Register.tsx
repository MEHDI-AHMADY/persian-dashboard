import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useRegister } from "../services/auth/hooks";
import { motion } from "framer-motion";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export type RegisterInputs = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const registerFormAnimation = {
  hidden: { opacity: 0, y: -170 },
  show: { opacity: 1, y: 0, transition: { duration: 1.6 } },
};

export default function Register() {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("این فیلد الزامیست")
      .min(3, "حداقل باید 3 کاراکتر داشته باشد!"),
    email: yup.string().email().required("این فیلد الزامیست"),
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
    formState: { errors },
  } = methods;

  const navigate = useNavigate();

  const { isPending, mutate } = useRegister({ navigate });

  const registerHandler = (data: RegisterInputs) => {
    mutate(data);
  };

  return (
    <div className="bg-primary flex items-center justify-center min-h-screen px-5">
      <FormProvider {...methods}>
        <motion.form
          initial="hidden"
          whileInView="show"
          variants={registerFormAnimation}
          onSubmit={handleSubmit(registerHandler)}
          className="bg-secondary p-5 h-fit rounded-md mt-4 flex flex-col min-w-[320px] sm:min-w-[440px]"
        >
          <span className="text-xl text-center w-full">ثبت نام</span>

          <Input
            name="fullName"
            placeholder="نام و نام خانوادگی"
          />
          {errors?.fullName && <p>{errors.fullName.message}</p>}

          <Input
            name="email"
            placeholder="ایمیل"
          />
          {errors?.email && <p>{errors.email.message}</p>}

          <Input
            name="password"
            type="password"
            placeholder="پسورد"
          />
          {errors?.password && <p>{errors.password.message}</p>}

          <Input
            name="confirmPassword"
            type="password"
            placeholder="تکرار پسورد"
          />
          {errors?.confirmPassword && <p>{errors.confirmPassword.message}</p>}

          <Button
            type="submit"
            disabled={isPending}
            className="bg-orange text-black rounded-sm mt-4"
          >
            {isPending ? "صبرکنید..." : "ثبت"}
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
        </motion.form>
      </FormProvider>
    </div>
  );
}
