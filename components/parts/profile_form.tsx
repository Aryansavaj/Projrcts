import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  firstName: string;
  lastName: string;
  mail: string;
  password: number;
  message: string;
};

const schema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    mail: yup.string().required("mail name is required"),
    password: yup
      .number()
      .typeError("zipcode must be a number")
      .required("zipcode number is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

type Props = {
  profile_pop: {
    firstName: string;
    lastName: string;
    mail: string;
    password: string;
    button: string;
  };
};

export default function ProfileForm({ profile_pop }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="" action="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text form-text-color">
              {profile_pop.firstName}
              {errors.firstName && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={profile_pop.firstName}
            className="input bg-base-200"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-red-400 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text form-text-color">
              {profile_pop.lastName}
              {errors.lastName && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={profile_pop.lastName}
            className="input bg-base-200"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-400 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text form-text-color">
              {profile_pop.mail}
              {errors.mail && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={profile_pop.mail}
            className="input bg-base-200"
            {...register("mail")}
          />
          {errors.mail && (
            <p className="text-red-400 text-sm mt-1">{errors.mail.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text form-text-color">
              {profile_pop.password}
              {errors.password && <span className="text-red-400">*</span>}
            </span>
          </label>
          <div className="relative">
                  <svg width="24" height="24" class="edit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z" fill="#0083FF"/>
                    <path d="M8.5 17.69C7.89 17.69 7.33 17.47 6.92 17.07C6.43 16.58 6.22 15.87 6.33 15.12L6.76 12.11C6.84 11.53 7.22 10.78 7.63 10.37L15.51 2.49C17.5 0.5 19.52 0.5 21.51 2.49C22.6 3.58 23.09 4.69 22.99 5.8C22.9 6.7 22.42 7.58 21.51 8.48L13.63 16.36C13.22 16.77 12.47 17.15 11.89 17.23L8.88 17.66C8.75 17.69 8.62 17.69 8.5 17.69ZM16.57 3.55L8.69 11.43C8.5 11.62 8.28 12.06 8.24 12.32L7.81 15.33C7.77 15.62 7.83 15.86 7.98 16.01C8.13 16.16 8.37 16.22 8.66 16.18L11.67 15.75C11.93 15.71 12.38 15.49 12.56 15.3L20.44 7.42C21.09 6.77 21.43 6.19 21.48 5.65C21.54 5 21.2 4.31 20.44 3.54C18.84 1.94 17.74 2.39 16.57 3.55Z" fill="#0083FF"/>
                    <path d="M19.85 9.83C19.78 9.83 19.71 9.82 19.65 9.8C17.02 9.06 14.93 6.97 14.19 4.34C14.08 3.94 14.31 3.53 14.71 3.41C15.11 3.3 15.52 3.53 15.63 3.93C16.23 6.06 17.92 7.75 20.05 8.35C20.45 8.46 20.68 8.88 20.57 9.28C20.48 9.62 20.18 9.83 19.85 9.83Z" fill="#0083FF"/>
                  </svg>
                  <input
                    type="text"
                    placeholder={profile_pop.password}
                    className="input bg-base-200"
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
          </div>
        </div>
      </div>
    </form>
  );
}
