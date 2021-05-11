import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Typography, TextField } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
import * as yup from 'yup';

export type FormInputs = {
  nombreAdministrador?: string;
  emailAdministrador?: string;
  telefonoAdministrador?: string;
};

const schema = yup.object().shape({
  nombreAdministrador: yup.string().required(),
  emailAdministrador: yup.string().email().required(),
  telefonoAdministrador: yup.number().required(),
});

const FormRegistroAdministrador: FC = () => {
  const { control, errors } = useFormContext();

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h5'>Datos personales</Typography>
        </Grid>
        <Grid item xs={12}>
          <Controller
            required
            name='nombreAdministrador'
            as={TextField}
            control={control}
            label='Nombre Completo'
            variant='standard'
            fullWidth
            error={!!errors.nombreAdministrador?.message}
            helperText={errors.nombreAdministrador?.message}
            defaultValue=''
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            required
            name='emailAdministrador'
            as={TextField}
            control={control}
            label='Correo electrónico'
            variant='standard'
            fullWidth
            error={!!errors.emailAdministrador?.message}
            helperText={errors.emailAdministrador?.message}
            defaultValue=''
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            required
            name='telefonoAdministrador'
            as={TextField}
            control={control}
            label='Teléfono'
            variant='standard'
            fullWidth
            error={!!errors.telefonoAdministrador?.message}
            helperText={errors.telefonoAdministrador?.message}
            defaultValue=''
          />
        </Grid>
      </Grid>
      <br />
    </form>
  );
};

export default FormRegistroAdministrador;
