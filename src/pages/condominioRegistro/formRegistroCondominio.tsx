import React, { FC, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';
import axios from 'axios';
import { useFormContext, Controller } from 'react-hook-form';
import * as yup from 'yup';
import FormSelect from '../../components/FormSelect';
import Styles from './styles';

const countries = ['Chile', 'Ecuador', 'Perú'];

export type FormInputs = {
  nombreCondominio: string;
  rucCondominio: string;
  emailCondominio: string;
  tipoCondominio: string;
  cantidadCopropietarios: number;
  paisCondominio: string;
  provinciaCondominio: string;
  ciudadCondominio: string;
  direccionCondominio: string;
};

const schema = yup.object().shape({
  nombreCondominio: yup.string().required(),
  rucCondominio: yup.string().min(1).max(10).required(),
  emailCondominio: yup.string().email().required(),
  tipoCondominio: yup.string().required(),
  cantidadCopropietarios: yup.number().min(1).required(),
  paisCondominio: yup.string(),
  provinciaCondominio: yup.string(),
  ciudadCondominio: yup.string(),
  direccionCondominio: yup.string().required(),
});

async function getRegions(countryName: string): Promise<string[]> {
  try {
    const baseUrl = 'https://api-cities-haitity.herokuapp.com/' + countryName + '/regiones';
    const response = await axios.get(baseUrl);
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getCities(countryName: string, regionName: string): Promise<string[]> {
  try {
    const baseUrl =
      'https://api-cities-haitity.herokuapp.com/' + countryName + '/region/' + regionName;
    const response = await axios.get(baseUrl);
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const FormRegistroCondominio: FC = () => {
  const [country, setCountry] = useState<string>('');
  const [regions, setRegions] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);

  const handleChangeCountry = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountry(countries[event.target.value as number]);
    getRegions(countries[event.target.value as number].toLowerCase()).then((res) => {
      setRegions(res);
    });
  };

  const handleChangeRegion = (event: React.ChangeEvent<{ value: unknown }>) => {
    getCities(country.toLowerCase(), regions[event.target.value as number].region).then((res) => {
      setCities(res);
    });
  };

  const classes = Styles();
  const { control, errors } = useFormContext();

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h5'>Datos generales</Typography>
        </Grid>
        <Grid item xs={12}>
          <Controller
            required
            name='nombreCondominio'
            as={TextField}
            control={control}
            label='Nombre'
            variant='standard'
            fullWidth
            error={!!errors.nombreCondominio?.message}
            helperText={errors.nombreCondominio?.message}
            defaultValue=''
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            required
            name='rucCondominio'
            as={TextField}
            control={control}
            label='RUC'
            variant='standard'
            fullWidth
            error={!!errors.rucCondominio?.message}
            helperText={errors.rucCondominio?.message}
            defaultValue=''
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            required
            name='emailCondominio'
            as={TextField}
            control={control}
            label='Correo electrónico'
            variant='standard'
            fullWidth
            error={!!errors.emailCondominio?.message}
            helperText={errors.emailCondominio?.message}
            defaultValue=''
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormSelect
            className={classes.Select}
            name='tipoCondominio'
            label='Tipo'
            control={control}
            defaultValue=''
            variant='standard'
            //error={!!errors.tipoCondominio?.message}
          >
            <MenuItem value={1}>Departamentos</MenuItem>
            <MenuItem value={2}>Casas</MenuItem>
            <MenuItem value={3}>Mixto (casas + departamentos)</MenuItem>
          </FormSelect>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            required
            name='cantidadCopropietarios'
            as={TextField}
            control={control}
            label='No. de Copropietarios'
            variant='standard'
            type='number'
            fullWidth
            error={!!errors.cantidadCopropietarios?.message}
            helperText={errors.cantidadCopropietarios?.message}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2} className={classes.selectGridContainer}>
        <Grid item xs={12}>
          <Typography variant='h5'>Documentación legal</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            accept='image/*'
            className={classes.input}
            id='contained-button-file'
            multiple
            type='file'
          />
          <label htmlFor='contained-button-file'>
            <Button variant='contained' color='primary' component='span' fullWidth>
              Declaratoria de propiedad horizontal
            </Button>
          </label>
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            accept='image/*'
            className={classes.input}
            id='contained-button-file'
            multiple
            type='file'
          />
          <label htmlFor='contained-button-file'>
            <Button variant='contained' color='primary' component='span' fullWidth>
              Reglamento interno
            </Button>
          </label>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2} className={classes.selectGridContainer}>
        <Grid item xs={12}>
          <Typography variant='h5'>Ubicación</Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.selectGridItem}>
          <FormSelect
            className={classes.Select}
            name='paisCondominio'
            label='Pais'
            control={control}
            defaultValue=''
            variant='standard'
            onChange={handleChangeCountry}
            //error={!!errors.pais?.message}
          >
            {countries.map((country, index) => (
              <MenuItem key={index} value={index}>
                {country}
              </MenuItem>
            ))}
          </FormSelect>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.selectGridItem}>
          <FormSelect
            className={classes.Select}
            name='provinciaCondominio'
            label='Provincia'
            control={control}
            defaultValue=''
            variant='standard'
            onChange={handleChangeRegion}
            //error={!!errors.provincia?.message}
          >
            {regions.map((region, index) => (
              <MenuItem key={index} value={index}>
                {region.region}
              </MenuItem>
            ))}
          </FormSelect>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.selectGridItem}>
          <FormSelect
            className={classes.Select}
            name='ciudadCondominio'
            label='Ciudad'
            control={control}
            defaultValue=''
            variant='standard'
            //error={!!errors.ciudad?.message}
          >
            {cities.map((city, index) => (
              <MenuItem key={index} value={index}>
                {city}
              </MenuItem>
            ))}
          </FormSelect>
        </Grid>
        <Grid item xs={12}>
          <Controller
            required
            name='direccionCondominio'
            as={TextField}
            control={control}
            label='Dirección'
            variant='standard'
            fullWidth
            error={!!errors.direccionCondominio?.message}
            defaultValue=''
          />
        </Grid>
      </Grid>
      <br />
    </form>
  );
};

export default FormRegistroCondominio;
