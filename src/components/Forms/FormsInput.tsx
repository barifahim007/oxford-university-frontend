"use client";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  type?: string;
  placeholder?: string;
  label?: string;
  validation?: object;
  id?: string;
}

const FormsInput = ({
  name,
  type,
  size,
  value,
  placeholder,
  label,
  validation,
  id,
}: IInput) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            size={size}
            placeholder={placeholder}
            type={type}
            id={id}
            {...field}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default FormsInput;
