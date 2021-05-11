import React, { FC } from 'react';
import { Paper, Typography } from '@material-ui/core';
import FormStep from '../../components/FormStep';
import FormStepper from '../../components/FormStepper';
import Header from './../../components/header';
import useActualPage from './../../customHooks/useActualPage';
import FormRegistroAdministrador from './formRegistroAdministrador';
import FormRegistroCondominio from './formRegistroCondominio';
import FormRegistroServicios from './formRegistroServicios';
import styles from './styles';

const CondominioRegistroPresentation: FC = () => {
  const classes = styles();
  const actualPage = useActualPage('');
  console.log(actualPage);

  return (
    <>
      <Header text='Nueva Comunidad' />
      <div className={classes.root}>
        <Paper elevation={3} className={classes.Paper}>
          <FormStepper>
            <FormStep label='Administrador'>
              <FormRegistroAdministrador />
            </FormStep>
            <FormStep label='Comunidad'>
              <FormRegistroCondominio />
            </FormStep>
            <FormStep label='Servicios'>
              <FormRegistroServicios />
            </FormStep>
          </FormStepper>
        </Paper>
      </div>
    </>
  );
};

export default CondominioRegistroPresentation;
