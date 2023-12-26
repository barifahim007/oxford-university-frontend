import React, { ReactElement, ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type defaultConfig = {
  defaultValues?: Record<string, any>;
};
type formHandeler = {
  children?: ReactElement | ReactNode;
  submitHandeler: SubmitHandler<any>;
} & defaultConfig;

const Forms = ({ children, submitHandeler, defaultValues }: formHandeler) => {
  // validateing default values
  const formConfig: defaultConfig = {};
  if (!!formConfig) formConfig["defaultValues"] = defaultValues;

  const methods = useForm<formHandeler>(formConfig);

  const { handleSubmit, reset } = methods;
  const onSubmit = (data: any) => {
    submitHandeler(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Forms;
