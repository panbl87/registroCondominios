import React, { FC } from 'react';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';

type ProtectedRoutesTypes = RouteProps & {
  isAuthenticated?: boolean;
  component: FC<unknown>;
};

const ProtectedRoutes: FC<ProtectedRoutesTypes> = ({
  isAuthenticated,
  component: Component,
  ...rest
}: ProtectedRoutesTypes) => {
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (isAuthenticated) {
          return <Component {...routeProps} />;
        }
        return <Redirect to={{ pathname: '/', state: { from: location } }} />;
      }}
    />
  );
};

export default ProtectedRoutes;
