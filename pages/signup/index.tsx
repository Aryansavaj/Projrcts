import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Layout from "@/components/BlankLayout";

import en from "@/locales/en";
import sv from "@/locales/sv";

type FormValues = {
  fullName: string;
  email: string;
  password: string;
};

const schema = yup
  .object({
    fullname: yup.string().required("Full Name is required"),
    email: yup
      .string()
      .email("Enter valid email address")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export default function SignUp() {
  const router = useRouter();
  const [hidePass, setHidePass] = useState<boolean>(true);
  const { locale } = router;
  const t = locale === "en" ? en : sv;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const togglePassword = () => {
    setHidePass(!hidePass);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <Layout headTitle={t.signUpData.pageTitle}>
      <section className="relative min-h-screen flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-6/12 mb-6 lg:mb-0 lg:px-36 md:px-20 xs:px-10 my-12 xs:my-8">
          <h2 className="text-[2.75rem] lg:text-5xl font-bold lg:mb-16">
            {t.signUpData.title}
            {` `}
            <span className="text-blue-500">{t.signUpData.free}</span>
            {` `}
            {t.signUpData.trial}
          </h2>
          <div className="w-full flex justify-center align-middle">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="auth-form"
              action=""
            >
              <div className="w-full ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">{t.signUpData.fullname}</span>
                  </label>
                  <input
                    type="email"
                    placeholder={t.signUpData.fullname}
                    className="input input-bordered w-full"
                    {...register("fullName")}
                  />
                </div>
                <div className="form-control mt-2">
                  <label className="label">
                    <span className="label-text">
                      {t.signUpData.email}
                      {errors.email && <span className="text-red-400">*</span>}
                    </span>
                  </label>
                  <label className="relative w-full block -top-8">
                    <Image
                      src="/icons/message.svg"
                      className="formIcon"
                      width="31"
                      height="31"
                      alt="Email"
                    />
                    <input
                      type="email"
                      placeholder={t.signUpData.email}
                      className="input input-bordered pl-12 w-full"
                      {...register("email")}
                    />
                  </label>
                </div>
                <div className="form-control relative -top-5">
                  <label className="label">
                    <span className="label-text">
                      {t.signUpData.password}
                      {errors.password && (
                        <span className="text-red-400">*</span>
                      )}
                    </span>
                  </label>
                  <label className="relative w-full block -top-8">
                    <Image
                      src="/icons/lock.svg"
                      className="formIcon"
                      width="30"
                      height="30"
                      alt="Password"
                    />
                    <input
                      type={hidePass ? "password" : "text"}
                      placeholder={t.signUpData.password}
                      className="input input-bordered w-full pl-12"
                      {...register("password")}
                    />
                    <Image
                      src={hidePass ? "/icons/eye-slash.svg" : "/icons/eye.svg"}
                      width="28"
                      height="28"
                      alt="show/hide"
                      className="maskIcon cursor-pointer"
                      onClick={togglePassword}
                    />
                  </label>
                </div>
              </div>
              <div className="relative -top-5">
                <button
                  type="submit"
                  className="btn btn-primary mt-0 h-14 w-full shadow-btn"
                  style={{
                    boxShadow: "0px 24px 30px rgba(0, 131, 255, 0.19)",
                  }}
                >
                  {t.signUpData.buttonSubmit}
                </button>
              </div>
            </form>
          </div>
          <div className="w-full mt-2 flex justify-start">
            <div className="w-40 text-gray-500 font-medium text-sm">
              {t.signUpData.signUpWith}
            </div>
            <div
              className="w-full relative"
              style={{ borderTop: "1.5px solid #ccc", top: "10px" }}
            />
          </div>
          <div className="w-full flex justify-between mt-8 xs:mt-5 xs:hidden md:flex sm:flex lg:flex">
            <button
              type="button"
              className="btn mr-2 h-10 w-1/3 bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-200"
            >
              <div className="flex justify-center w-full">
                <Image
                  src="/icons/google.svg"
                  className="relative"
                  width="32"
                  height="32"
                  alt="Google"
                  priority
                />
                <div className="ml-1 text-black font-semibold font-sans relative top-1 xs:text-sm xs:top-1.5">
                  Google
                </div>
              </div>
            </button>
            <button
              type="button"
              className="btn mr-2 h-10 w-1/3 bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-200"
            >
              <div className="flex justify-center w-full">
                <Image
                  src="/icons/facebook.svg"
                  className="relative"
                  width="32"
                  height="32"
                  alt="Facebook"
                  priority
                />
                <div className="ml-1 text-black font-semibold font-sans relative top-1 xs:text-sm xs:top-1.5">
                  Facebook
                </div>
              </div>
            </button>
            <button
              type="button"
              className="btn h-10 w-1/3 bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-200"
            >
              <div className="flex justify-center w-full">
                <Image
                  src="/icons/apple.svg"
                  className="relative"
                  width="28"
                  height="28"
                  alt="Apple"
                  priority
                />
                <div
                  className="ml-1 text-black font-semibold font-sans relative top-1 xs:text-sm xs:top-1.5"
                  style={{ top: "5px" }}
                >
                  Apple
                </div>
              </div>
            </button>
          </div>
          <div className="w-full flex justify-between mt-8 xs:mt-5 xs:flex md:hidden sm:hidden lg:hidden">
            <button
              type="button"
              className="btn mr-1 h-10 w-1/3 bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-200"
            >
              <div className="flex justify-center w-full">
                <Image
                  src="/icons/google.svg"
                  className="relative"
                  width="26"
                  height="26"
                  alt="Google"
                  priority
                />
                <div
                  className="ml-1 text-black font-semibold font-sans relative top-1 xs:text-sm"
                  style={{ top: "3px" }}
                >
                  Google
                </div>
              </div>
            </button>
            <button
              type="button"
              className="btn mr-1 h-10 w-1/3 bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-200"
            >
              <div className="flex justify-center w-full">
                <Image
                  src="/icons/facebook.svg"
                  className="relative"
                  width="26"
                  height="26"
                  alt="Facebook"
                  priority
                />
                <div
                  className="ml-1 text-black font-semibold font-sans relative top-1 xs:text-sm"
                  style={{ top: "3px" }}
                >
                  Facebook
                </div>
              </div>
            </button>
            <button
              type="button"
              className="btn h-10 w-1/3 bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-200"
            >
              <div className="flex justify-center w-full">
                <Image
                  src="/icons/apple.svg"
                  className="relative"
                  width="22"
                  height="22"
                  alt="Apple"
                  priority
                />
                <div
                  className="ml-1 text-black font-semibold font-sans relative xs:text-sm"
                  style={{ top: "3px" }}
                >
                  Apple
                </div>
              </div>
            </button>
          </div>
          <div className="w-full flex justify-center mt-6 text-sm font-medium">
            <div className="flex justify-start">
              <div className="text-gray-500">
                {t.signUpData.haveAccount}
                <Link
                  href="/signin"
                  className="text-blue-500 hover:text-blue-700 ml-2"
                >
                  {t.signInData.title}
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-16 text-sm font-medium">
            <div className="block text-center w-full">
              <div className="text-gray-500">{t.signUpData.bySign}</div>
              <div className="flex justify-center">
                <Link href="#" className="text-blue-500 hover:text-blue-700">
                  {t.signUpData.privacy}
                </Link>
                <div className="text-gray-500 mx-1">and</div>
                <Link href="#" className="text-blue-500 hover:text-blue-700">
                  {t.signUpData.terms}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full lg:w-6/12 relative lg:flex md:flex sm:hidden xs:hidden"
          style={{ backgroundColor: "#0083FF" }}
        >
          <Image
            src="/graphics/donut.png"
            width="120"
            height="120"
            alt="donut"
            priority
            className="mt-4 absolute -left-12"
          />
          <Image
            src="/icons/logo.svg"
            width="50"
            height="50"
            alt="logo"
            className="mt-4 absolute right-12 top-8"
          />
          <div className="flex flex-column w-full h-full justify-center mt-6 align-middle items-center">
            <div className="block">
              <div
                className="relative top-12 left-36"
                style={{
                  background: "rgb(2 131 255)",
                  height: "20px",
                  width: "300px",
                }}
              />
              <Image
                src="/graphics/signup-man.svg"
                className="mt-10"
                width="645"
                height="532"
                alt="SiginUp"
                priority
              />
            </div>
          </div>
          <Image
            src="/graphics/donut.png"
            width="220"
            height="220"
            alt="donut"
            priority
            className="absolute -bottom-20 -right-20"
          />
        </div>
      </section>
    </Layout>
  );
}
