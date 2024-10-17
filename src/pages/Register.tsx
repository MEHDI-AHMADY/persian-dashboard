import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useRegister } from "../services";
import {motion} from 'framer-motion'

export type RegisterInputs = {
  fullName: string;
  email: string;
  password: string | number;
  confirmPassword: string | number;
};

const registerFormAnimation = {
  hidden : {opacity : 0 , y : -170},
  show : {opacity : 1 , y : 0 , transition : {duration : 1.6}}
}

export default function Register() {
  const methods = useForm<RegisterInputs>();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const { isPending, mutate } = useRegister();

  const registerHandler = (data: RegisterInputs) => {
    mutate(data);
  };

  return (
    <div className="custom-bg flex items-center justify-center min-h-screen px-5">
      <FormProvider {...methods}>
        <motion.form
        initial="hidden"
        whileInView="show"
        variants={registerFormAnimation}
          onSubmit={handleSubmit(registerHandler)}
          className="bg-white p-5 h-fit rounded-md mt-4 flex flex-col min-w-[320px] sm:min-w-[440px]"
        >
          <span className="text-xl text-center w-full">ثبت نام</span>

          <Input
            name="fullName"
            validation={{
              required: "این فیلد اجباریست",
              minLength: {
                value: 3,
                message: "حداقل باید 3 کاراکتر داشته باشد",
              },
            }}
            placeholder="نام و نام خانوادگی"
            className="border-b border-gray-600 mt-5 bg-transparent"
          />
          {errors?.fullName && <p>{errors.fullName.message}</p>}

          <Input
            name="email"
            validation={{
              required: "این فیلد اجباریست",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "ایمیل معتبر نمی‌باشد",
              },
            }}
            placeholder="ایمیل"
            className="border-b border-gray-600 mt-5 bg-transparent"
          />
          {errors?.email && <p>{errors.email.message}</p>}

          <Input
            name="password"
            type="password"
            validation={{
              required: "این فیلد اجباریست",
              maxLength: {
                value: 6,
                message: "حداکثر باید 6 کاراکتر داشته باشد",
              },
            }}
            placeholder="رمز"
            className="border-b border-gray-600 mt-5 bg-transparent"
          />
          {errors?.password && <p>{errors.password.message}</p>}

          <Input
            name="confirmPassword"
            type="password"
            validation={{
              required: "این فیلد اجباریست",
              maxLength: {
                value: 6,
                message: "حداکثر باید 6 کاراکتر داشته باشد",
              },
            }}
            placeholder="تکرار رمز"
            className="border-b border-gray-600 mt-5 bg-transparent"
          />
          {errors?.confirmPassword && <p>{errors.confirmPassword.message}</p>}

          <Button
            type="submit"
            disabled={isPending}
            className="bg-blue-300 rounded-sm mt-4"
          >
            {isPending ? "صبر کنید" : "ثبت"}
          </Button>

          <p className="mt-6">
            اکانت دارید ؟
            <Link to="/login" className="bg-blue-200 p-1 rounded-sm font-bold mr-1">
              لاگین
            </Link>
          </p>
        </motion.form>
      </FormProvider>
    </div>
  );
}
