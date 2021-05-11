import React, { FC, ReactNode } from 'react';

type FormStepProps = {
  children: ReactNode;
  label: string;
};

const FormStep: FC<FormStepProps> = ({ children, ...props }: FormStepProps) => {
  return <>{children}</>;
};

export default FormStep;
