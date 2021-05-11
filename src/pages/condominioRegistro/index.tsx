import React, { FC } from 'react';
import { saveDataService } from '../../domain/services/CondoService';
import CondoFirestore from '../../infrastructure/CondoFirestore';
import CondominioRegistro from './condominioRegistro';

const condominioRepository = new CondoFirestore();

const CondominioRegistroContainer: FC = () => {
  const saveData = saveDataService(condominioRepository);

  return <CondominioRegistro />;
};

export default CondominioRegistroContainer;
