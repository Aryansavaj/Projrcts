import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Title from "@/components/parts/Title";

type FormValues = {
  Current_password: string;
  New_password: string;
  Confirm_new_password: string;
  message: string;
};

const schema = yup
  .object({
    Current_password: yup.string().required("First name is required"),
    New_password: yup.string().required("Last name is required"),
    Confirm_new_password: yup
      .string()
      .required("Confirm_new_password name is required"),
  })
  .required();

type Props = {
  popup_pass: {
    Current_password: string;
    New_password: string;
    Confirm_new_password: string;
    button: string;
  };
  onClose: () => void;
};

export default function Popup_form({ popup_pass }: Props) {
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
      <div className="grid grid-cols-1 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              {popup_pass.Current_password}
              {errors.Current_password && (
                <span className="text-red-400">*</span>
              )}
            </span>
          </label>
          <input
            type="text"
            placeholder={popup_pass.Current_password}
            className="input bg-base-200"
            {...register("Current_password")}
          />
          {errors.Current_password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.Current_password.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              {popup_pass.New_password}
              {errors.New_password && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={popup_pass.New_password}
            className="input bg-base-200"
            {...register("New_password")}
          />
          {errors.New_password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.New_password.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              {popup_pass.Confirm_new_password}
              {errors.Confirm_new_password && (
                <span className="text-red-400">*</span>
              )}
            </span>
          </label>
          <input
            type="text"
            placeholder={popup_pass.Confirm_new_password}
            className="input bg-base-200"
            {...register("Confirm_new_password")}
          />
          {errors.Confirm_new_password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.Confirm_new_password.message}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
