import { useForm, FormProvider } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../services";
import {motion} from 'framer-motion'

export type LoginInputs = {
  email: string;
  password: string | number;
};

const loginFormAnimation = {
  hidden : {opacity : 0 , y : 170},
  show : {opacity : 1 , y : 0 , transition : {duration : 1.6}}
}

export default function Login() {
  const methods = useForm<LoginInputs>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const navigate = useNavigate()

  const { isPending, mutate } = useLogin({navigate});

  const loginHandler = (data: LoginInputs) => {
    mutate(data);
  };

  return (
    <div className="custom-bg flex items-center justify-center min-h-screen px-5">
      <FormProvider {...methods}>
        <motion.form
        initial="hidden"
        animate="show"
        variants={loginFormAnimation}
          onSubmit={handleSubmit(loginHandler)}
          className="bg-white p-5 h-fit rounded-md mt-4 flex flex-col min-w-[320px] sm:min-w-[440px]"
        >
          <span className="text-xl text-center w-full">لاگین</span>
          <Input
            name="email"
            validation={{
              required: "این فیلد اجباریست",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "ایمیل معتبر نمی‌باشد",
              },
            }}
            className="border-b border-gray-600 mt-5"
            placeholder="ایمیل"
          />
          {errors?.email && <p>{errors?.email?.message}</p>}

          <Input
            name="password"
            validation={{
              required: "این فیلد اجباریست",
              maxLength: {
                value: 6,
                message: "حداکثر باید 6 کاراکتر داشته باشد",
              },
            }}
            placeholder="رمز"
            className="border-b border-gray-600 mt-5"
          />
          {errors?.password && <p>{errors.password.message}</p>}

          <Button
            type="submit"
            disabled={isPending}
            className="bg-blue-300 rounded-sm mt-4"
          >
            {isPending ? "صبر کنید" : "ثبت"}
          </Button>

          <p className="mt-6">
            اکانت ندارید ؟
            <Link to="/register" className="bg-blue-200 p-1 rounded-sm font-bold mr-1">
              ثبت نام
            </Link>
          </p>
        </motion.form>
      </FormProvider>
    </div>
  );
}
