import { useForm, FormProvider } from "react-hook-form";
import Button from "../components/common/Button/CustomButton";
import Input from "../components/common/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../services/hooks";
import { motion } from "framer-motion";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputError from "@/components/common/Input/InputError";
import AnimatedSvg from "@/components/AnimatedSvg/AnimatedSvg";
import { useDimensions } from "@/hooks/useDimensions";

export type LoginInputs = {
  email: string;
  password: string;
};

const loginFormAnimation = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: [-100, 50, 0], transition: { duration: 2 } },
};

export default function Login() {
  const { ref, dimensions } = useDimensions<HTMLFormElement>();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("این فیلد الزامیست")
      .email("ایمیل وارد شده معتبر نیست"),
    password: yup
      .string()
      .required("این فیلد الزامیست")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
        "باید حداقل یک عدد و یک حرف داشته باشد"
      )
      .max(6, "حداکثر 6 کاراکتر مجازست")
      .min(4, "حداقل 4 کاراکتر مجازست"),
  });

  const methods = useForm<LoginInputs>({ resolver: yupResolver(schema) });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const navigate = useNavigate();

  const { isPending, mutate } = useLogin({ navigate });

  const loginHandler = (data: LoginInputs) => {
    mutate(data);
  };

  return (
    <div className="bg-primary flex items-center justify-center min-h-screen px-5">
      <motion.div
        initial="hidden"
        animate="show"
        variants={loginFormAnimation}
        className="glassy-background relative min-w-[320px] sm:min-w-[440px]"
      >
        <FormProvider {...methods}>
          <form
            ref={ref}
            onSubmit={handleSubmit(loginHandler)}
            className="p-5 h-fit rounded-md flex flex-col "
          >
            <span className="text-xl text-center w-full">لاگین</span>
            <Input name="email" placeholder="ایمیل" register={register} />
            {errors?.email && <InputError message={errors?.email?.message} />}

            <Input
              name="password"
              placeholder="پسورد"
              type="password"
              register={register}
              showPasswordToggle
            />
            {errors?.password && (
              <InputError message={errors?.password?.message} />
            )}

            <Button
              type="submit"
              disabled={isPending}
              className="bg-orange text-primary rounded-sm mt-4 hover:bg-orange hover:opacity-90"
            >
              {isPending ? "صبرکنید" : "ثبت"}
            </Button>

            <p className="mt-6">
              اکانت ندارید؟
              <Link
                to="/register"
                className="bg-orange text-primary p-1 rounded-sm font-bold mr-1"
              >
                ثبت نام
              </Link>
            </p>
          </form>
        </FormProvider>
        <AnimatedSvg dimensions={dimensions} />
      </motion.div>
    </div>
  );
}
