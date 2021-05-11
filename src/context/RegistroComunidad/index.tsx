import React, { FC, createContext, Dispatch, useReducer, ReactNode } from 'react';
import { FormInputs as AdministratorInputs } from '../../pages/condominioRegistro/formRegistroAdministrador';

type StateType = AdministratorInputs;

const initialState: StateType = {
  nombreAdministrador: undefined,
  emailAdministrador: undefined,
  telefonoAdministrador: undefined,
};

const Actions = {
  SET_ADMINISTRADOR: 'SET_ADMINISTRADOR',
};

type ActionType = {
  type: keyof typeof Actions;
  payload: StateType;
};

type ReducersType = (state: StateType, action: ActionType) => StateType;

const reducer: ReducersType = (state, { type, payload }) => {
  switch (type) {
    case 'SET_ADMINISTRADOR': {
      return { ...state, ...payload };
    }
    default: {
      return state;
    }
  }
};

const addAdminInfoAction = (dispatch: Dispatch<ActionType>) => (data: AdministratorInputs) => {
  console.log('la data -> ', data);
  dispatch({ type: 'SET_ADMINISTRADOR', payload: data });
};

type ActionsCreatorsType = {
  addAdminInfo: ReturnType<typeof addAdminInfoAction>;
};

type ContextType = StateType & ActionsCreatorsType;

type ContextProps = { children: ReactNode };

export const RegistroComunidadContext = createContext<ContextType>(initialState as ContextType);

const ContextProvider: FC<ContextProps> = (props: ContextProps) => {
  const [state, dispatch] = useReducer<ReducersType>(reducer, initialState);

  const addAdminInfo = addAdminInfoAction(dispatch);

  return (
    <RegistroComunidadContext.Provider value={{ ...state, addAdminInfo }}>
      {props.children}
    </RegistroComunidadContext.Provider>
  );
};

export default ContextProvider;
