import React from "react";
import { type FieldValues, type UseFormRegister } from "react-hook-form";

type InputProps = {
  title: string;
  placeholder: string;
  type: string;
  className: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: any;
};

const Input = ({
  title,
  placeholder,
  type,
  className,
  name,
  register,
  errors,
}: InputProps) => {
  const isErrorExist = Object.keys(errors ? errors : {}).length > 0;
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-medium text-gray-900">
        {title}
      </label>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          {...register(name)}
          className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm outline-0 "
        ></textarea>
      ) : (
        <input
          className="block w-full rounded-lg border border-gray-300  p-2.5 text-sm text-gray-900 shadow-sm outline-0"
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />
      )}
      {isErrorExist && (
        <div className="mt-2 text-red-600">{errors?.message}</div>
      )}
    </div>
  );
};

export default Input;
