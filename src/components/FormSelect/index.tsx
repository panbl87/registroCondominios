import React, { FC, ReactNode } from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { Control, Controller } from 'react-hook-form';

type SelectProps = {
  className?: string;
  name: string;
  label: string;
  control: Control;
  defaultValue: string;
  variant?: 'filled' | 'outlined' | 'standard';
  children: ReactNode;
  onChange?: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode
  ) => void;
};

const FormSelect: FC<SelectProps> = ({
  className,
  name,
  label,
  control,
  defaultValue,
  variant,
  children,
  onChange,
}: SelectProps) => {
  const labelId = `${name}-label`;
  return (
    <Controller
      name={name}
      control={control}
      render={(field) => (
        <FormControl className={className} variant={variant || 'standard'}>
          <InputLabel id={labelId}>{label}</InputLabel>
          <Select labelId={labelId} id={name} label={label} onChange={onChange}>
            {children}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default FormSelect;
