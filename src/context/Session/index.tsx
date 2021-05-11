import React, { FC, createContext, Dispatch, ReactNode, useReducer } from 'react';
import User from '../../domain/objects/User';
import {
  signIn as signInService,
  signOut as signOutService,
  getStoredUser as getStoredUserService,
} from '../../domain/services/UserService';
import UserFirestore from '../../infrastructure/UserFirestore';

// Initial State
type SessionStateType = {
  isLoading?: boolean;
  isAuthenticated?: boolean;
};

const initialState = {
  isLoading: false,
  isAuthenticated: true, // TODO: cambiar
};

// Actions
const Actions = {
  LOADING: 'LOADING',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  GET_CURRENT_USER: 'GET_CURRENT_USER',
};

type ActionsType = {
  type: keyof typeof Actions;
  payload: SessionStateType;
};

// Reducers
type ReducersType = (state: SessionStateType, action: ActionsType) => SessionStateType;

const reducer: ReducersType = (state, { type, payload }) => {
  switch (type) {
    case 'LOADING': {
      return { ...state, isLoading: payload.isLoading };
    }
    case 'SIGN_IN': {
      return { ...state, isAuthenticated: payload.isAuthenticated, isLoading: false };
    }
    case 'SIGN_OUT': {
      return { ...state, isAuthenticated: payload.isAuthenticated, isLoading: false };
    }
    case 'GET_CURRENT_USER': {
      return { ...state, isAuthenticated: payload.isAuthenticated, isLoading: false };
    }
    default: {
      return state;
    }
  }
};

// Action Creators
const userRepository = new UserFirestore();

const signInAction = (dispatch: Dispatch<ActionsType>) => async (
  username: string,
  password: string
) => {
  dispatch({ type: 'LOADING', payload: { isLoading: true } });
  try {
    const signIn = signInService(userRepository);
    const result = await signIn(username, password);
    if (!result) {
      dispatch({ type: 'LOADING', payload: { isLoading: false } });
    }
    // @ts-ignore
    dispatch({ type: 'SIGN_IN', payload: { isAuthenticated: true } });
  } catch (error) {
    console.error('Auth Duck signIn', error);
    dispatch({ type: 'LOADING', payload: { isLoading: false } });
  }
};

const signOutAction = (dispatch: Dispatch<ActionsType>) => async () => {
  try {
    const signOut = signOutService(userRepository);
    await signOut();
    dispatch({ type: 'SIGN_OUT', payload: { isAuthenticated: false } });
  } catch (error) {
    console.error('Auth Duck signOut', error);
    dispatch({ type: 'LOADING', payload: { isLoading: false } });
  }
};

const getCurrentUserAction = (dispatch: Dispatch<ActionsType>) => async (user: User) => {
  if (user) {
    const storedUser = getStoredUserService(user);
    if (storedUser) {
      dispatch({
        type: 'GET_CURRENT_USER',
        payload: {
          isAuthenticated: true,
        },
      });
    } else {
      dispatch({ type: 'LOADING', payload: { isLoading: false } });
    }
  } else {
    dispatch({ type: 'LOADING', payload: { isLoading: false } });
  }
};

type ActionsCreatorsType = {
  signIn: ReturnType<typeof signInAction>;
  signOut: ReturnType<typeof signOutAction>;
  getCurrentUser: ReturnType<typeof getCurrentUserAction>;
};

// Context
type SessionContextType = SessionStateType & ActionsCreatorsType;
type SessionContextProps = { children: ReactNode };

export const SessionContext = createContext<SessionContextType>(initialState as SessionContextType);

const SessionContextProvider: FC<SessionContextProps> = (props: SessionContextProps) => {
  const [state, dispatch] = useReducer<ReducersType>(reducer, initialState);

  const signIn = signInAction(dispatch);
  const signOut = signOutAction(dispatch);
  const getCurrentUser = getCurrentUserAction(dispatch);

  return (
    <SessionContext.Provider value={{ ...state, signIn, signOut, getCurrentUser }}>
      {props.children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
