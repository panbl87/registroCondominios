import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from '../pages/error404';
import Condominio from './../pages/condominioRegistro';
import LandingAdministrador from './../pages/landingAdministrador';
import SignIn from './../pages/signIn';
import ProtectedRoutes from './ProtectedRoutes';

export enum RouteList {
  LandingAdministrador = '/landingAdministrador',
  Condominio = '/condominioRegistro',
}

type RoutesProps = { isAuthenticated?: boolean };

const Routes: FC<RoutesProps> = ({ isAuthenticated }: RoutesProps) => (
  <Switch>
    <Route path='/' exact component={isAuthenticated ? LandingAdministrador : SignIn} />
    <ProtectedRoutes
      path={RouteList.Condominio}
      component={Condominio}
      isAuthenticated={isAuthenticated}
    />
    <Route component={Error404} />
  </Switch>
);

export default Routes;
