import { useForm, FormProvider } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../services/auth/hooks";
import { motion } from "framer-motion";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export type LoginInputs = {
  email: string;
  password: string;
};

const loginFormAnimation = {
  hidden: { opacity: 0, y: 170 },
  show: { opacity: 1, y: 0, transition: { duration: 1.6 } },
};

export default function Login() {
  const schema = yup.object().shape({
    email: yup.string().required("این فیلد الزامیست").email(),
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
    formState: { errors },
  } = methods;

  const navigate = useNavigate();

  const { isPending, mutate } = useLogin({ navigate });

  const loginHandler = (data: LoginInputs) => {
    mutate(data);
  };

  return (
    <div className="bg-primary flex items-center justify-center min-h-screen px-5">
      <FormProvider {...methods}>
        <motion.form
          initial="hidden"
          animate="show"
          variants={loginFormAnimation}
          onSubmit={handleSubmit(loginHandler)}
          className="bg-secondary p-5 h-fit rounded-md mt-4 flex flex-col min-w-[320px] sm:min-w-[440px]"
        >
          <span className="text-xl text-center w-full">لاگین</span>
          <Input
            name="email"
            placeholder="ایمیل"
          />
          {errors?.email && <p>{errors?.email?.message}</p>}

          <Input
            name="password"
            placeholder="پسورد"
            type="password"
          />
          {errors?.password && <p>{errors.password.message}</p>}

          <Button
            type="submit"
            disabled={isPending}
            className="bg-orange text-primary rounded-sm mt-4"
          >
            {isPending ? "صبرکنید..." : "ثبت"}
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
        </motion.form>
      </FormProvider>
    </div>
  );
}
