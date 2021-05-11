import React, { FC } from 'react';
import { Grid, Typography, Paper, Link } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import { Link as RouterLink } from 'react-router-dom';
import Header from './../../components/header';
import useActualPage from './../../customHooks/useActualPage';
import styles from './styles';

const Error404Presentation: FC = () => {
  const classes = styles();
  const actualPage = useActualPage('/');
  console.log(actualPage);
  return (
    <>
      {/* <Header text='Nueva Comunidad' /> */}
      <div className={classes.root}>
        <Paper className={classes.Paper}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ErrorIcon color='primary' style={{ fontSize: 100 }} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h3'>Error 404</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h4'>La página que buscas no existe</Typography>
            </Grid>
            <Grid item xs={12}>
              <Link component={RouterLink} to={actualPage} variant='body2' color='primary'>
                Salir de aquí!
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default Error404Presentation;
