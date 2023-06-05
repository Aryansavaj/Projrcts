import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  message: string;
};

const schema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Enter valid email address")
      .required("Email is required"),
    phone: yup
      .number()
      .typeError("Phone must be a number")
      .required("Phone number is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

type Props = {
  contactData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
    button: string;
  };
};

export default function ContactForm({ contactData }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="home-form" action="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              {contactData.firstName}
              {errors.firstName && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={contactData.firstName}
            className="input input-bordered"
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
            <span className="label-text">
              {contactData.lastName}
              {errors.lastName && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={contactData.lastName}
            className="input input-bordered"
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
            <span className="label-text">
              {contactData.email}
              {errors.email && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="email"
            placeholder={contactData.email}
            className="input input-bordered"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              {contactData.phoneNumber}
              {errors.phone && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={contactData.phoneNumber}
            className="input input-bordered"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">
            {contactData.message}{" "}
            {errors.message && <span className="text-red-400">*</span>}
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered text-base"
          rows={6}
          placeholder={contactData.message}
          {...register("message")}
        ></textarea>
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary mt-8 w-full shadow-btn">
        {contactData.button}
      </button>
    </form>
  );
}
