import React, { FC, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Typography, MenuItem, Fab, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useFormContext } from 'react-hook-form';
import * as yup from 'yup';
import FormSelect from '../../components/FormSelect';
import Servicio from './servicio';
import Styles from './styles';

export type FormInputs = {
  tipoServicio: string;
};

const schema = yup.object().shape({
  tipoServicio: yup.string().required(),
});

const opciones = [
  'Guardianía',
  'Agua potable',
  'Mantenimiento cisterna',
  'Administración',
  'Conserje',
  'Mantenimiento asensores',
  'Electricidad',
  'Jardinería',
];

const FormRegistroServicios: FC = () => {
  const classes = Styles();
  const [servicio, setServicio] = useState<string>('');
  const [listaServicios, setListaServicios] = useState<string[]>([]);
  const { control } = useFormContext();

  const handleChangeServicio = (e: React.ChangeEvent<{ value: unknown }>) => {
    setServicio(opciones[e.target.value as number]);
  };

  const handleAgrearServicio = () => {
    setListaServicios([...listaServicios, servicio]);
  };

  const handleBorrarServicio = (serv: string) => {
    setListaServicios(
      listaServicios.filter((servicio) => {
        if (servicio !== serv) {
          return servicio;
        }
        return;
      })
    );
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h5'>Servicios</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormSelect
            className={classes.Select}
            name='tipoServicio'
            label='Servicio'
            control={control}
            defaultValue=''
            variant='standard'
            onChange={handleChangeServicio}
            //error={!!errors.pais?.message}
          >
            {opciones.map((opcion, index) => (
              <MenuItem key={index} value={index}>
                {opcion}
              </MenuItem>
            ))}
          </FormSelect>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Tooltip title='Agregar a la lista'>
            <Fab size='small' color='primary' onClick={handleAgrearServicio}>
              <AddIcon />
            </Fab>
          </Tooltip>
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
      </Grid>
      <br />
      <Grid item xs={12}>
        <ul className={classes.listaServicios}>
          {listaServicios.map((servicio, index) => (
            <Servicio
              key={index}
              index={index}
              servicio={servicio}
              handleBorrarServicio={handleBorrarServicio}
            />
          ))}
        </ul>
      </Grid>
    </form>
  );
};

export default FormRegistroServicios;
