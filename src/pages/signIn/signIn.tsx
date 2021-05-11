import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Paper, Typography, TextField, Button, Link } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import styles from './styles';

export type FormInputs = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(10).required(),
});

type SignInProps = {
  onLogin: (data: FormInputs) => void;
};

const SignInPresentation: FC<SignInProps> = ({ onLogin }: SignInProps) => {
  const classes = styles();
  const { control, handleSubmit, errors } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  return (
    <div className={classes.Container}>
      <Paper className={classes.Paper} elevation={3}>
        <form onSubmit={handleSubmit(onLogin)}>
          <Grid container direction='column' spacing={3}>
            <Grid item>
              <Typography>Inicia Sesión</Typography>
            </Grid>
            <Grid item>
              <Controller
                name='email'
                as={TextField}
                control={control}
                label='Correo electrónico'
                variant='outlined'
                fullWidth
                error={!!errors.email?.message}
                helperText={errors.email?.message}
                defaultValue=''
              />
            </Grid>
            <Grid item>
              <Controller
                type='password'
                name='password'
                as={TextField}
                control={control}
                label='Contraseña'
                variant='outlined'
                fullWidth
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                defaultValue=''
              />
            </Grid>
            <Grid item>
              <Link href='#'>Olvidé mi contraseña</Link>
            </Grid>
            <Grid item>
              <Button color='primary' variant='contained' fullWidth type='submit'>
                Inicia sesión
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default SignInPresentation;
