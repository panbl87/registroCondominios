import React, { FC, ReactNode, useState, Children } from 'react';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import styles from './styles';

type FormStepperProps = {
  children: ReactNode;
};

const FormStepper: FC<FormStepperProps> = ({ children, ...props }: FormStepperProps) => {
  // const { handleSubmit } = useForm();
  const classes = styles();
  const childrenArray = Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const methods = useForm();
  const { watch } = methods;
  const [compiledData, setCompiledData] = useState({});
  const data = watch();

  const onSaveData = () => {
    if (step === childrenArray.length - 1) {
      console.log(compiledData);
    } else {
      setCompiledData({ ...compiledData, ...data });
      setStep((step) => step + 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSaveData)}>
        <Stepper alternativeLabel activeStep={step}>
          {childrenArray.map((child) => (
            // @ts-ignore
            <Step key={child.props.label}>
              {/* @ts-ignore */}
              <StepLabel>{child.props.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {currentChild}
        <div className={classes.buttonContainer}>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => setStep((step) => step - 1)}
            disabled={step === 0}
          >
            Anterior
          </Button>
          <Button variant='contained' color='primary' type='submit'>
            {step === childrenArray.length - 1 ? 'Registrar' : 'Siguiente'}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormStepper;
