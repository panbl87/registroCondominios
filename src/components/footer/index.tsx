import React, { useContext, FC } from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { SessionContext } from '../../context/Session';

type FooterProps = {
  text?: string;
};

const FooterPresentation: FC<FooterProps> = (props: FooterProps) => {
  return (
    <div>
      <AppBar position='static' color='primary'>
        <Container maxWidth='sm'>
          <Toolbar>
            <Typography variant='body1' color='inherit'>
              Página cargada: {props.text}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default FooterPresentation;
