import React, { FC, useContext } from 'react';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import RegistroComunidadProvider from './context/RegistroComunidad';
import { SessionContext } from './context/Session';
import Routes from './routes';

type ErrorBoundaryProps = {
  error: Error;
};

function ErrorFallback({ error }: ErrorBoundaryProps) {
  return (
    <div role='alert'>
      <p>Algo salió mal:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

const App: FC = () => {
  const { isAuthenticated } = useContext(SessionContext);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RegistroComunidadProvider>
        <BrowserRouter>
          <Routes isAuthenticated={isAuthenticated} />
        </BrowserRouter>
      </RegistroComunidadProvider>
    </ErrorBoundary>
  );
};

export default App;
