import React, { FC } from 'react';
import { Paper, Typography, Grid, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { RouteList } from '../../routes';
import Footer from './../../components/footer';
import Header from './../../components/header';
import useActualPage from './../../customHooks/useActualPage';
import Styles from './styles';

const LandingAdministrador: FC = () => {
  const classes = Styles();
  const actualPage = useActualPage('/landingAdministrador');

  return (
    <div>
      <Header />
      <Grid container className={classes.Container} xs={12} spacing={4}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.Paper} elevation={3}>
            <Typography variant='h5'>Nueva Comunidad</Typography>
            <hr />
            <Link component={RouterLink} to={RouteList.Condominio} variant='body2' color='primary'>
              Entrar
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.Paper} elevation={3}>
            <Typography variant='h5'>Registro de Unidades</Typography>
            <hr />
            <Link component='button' variant='body2' color='primary'>
              Entrar
            </Link>
          </Paper>
        </Grid>
      </Grid>
      <Footer text={actualPage} />
    </div>
  );
};

export default LandingAdministrador;
