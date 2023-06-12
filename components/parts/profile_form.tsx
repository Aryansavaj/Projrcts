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
    </form>
  );
}
