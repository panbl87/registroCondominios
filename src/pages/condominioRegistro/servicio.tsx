import React, { FC } from 'react';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import styles from './styles';

type ServicioProps = {
  index: number;
  servicio: string;
  handleBorrarServicio(arg?: string): void;
};

export type FormInputs = {
  index: number;
  servicio: string;
};

const Servicio: FC<ServicioProps> = ({ servicio, handleBorrarServicio }: ServicioProps) => {
  const classes = styles();
  return (
    <div>
      <li className={classes.servicio}>
        <CheckCircleOutlineOutlinedIcon />
        <div className={classes.servicioTexto}>{servicio}</div>
        <div className={classes.servicioContenedorBotones}>
          <DeleteForeverOutlinedIcon onClick={() => handleBorrarServicio(servicio)} />
        </div>
      </li>
    </div>
  );
};

export default Servicio;
