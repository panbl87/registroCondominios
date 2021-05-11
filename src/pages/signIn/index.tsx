import React, { FC, useContext, useEffect } from 'react';
import { SessionContext } from '../../context/Session';
import { auth } from '../../firebase';
import SignIn, { FormInputs } from './signIn';

const SignInContainer: FC = () => {
  const { signIn, isLoading, getCurrentUser } = useContext(SessionContext);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      const idTokenResult = await auth().currentUser?.getIdTokenResult();
      const formattedUser = {
        uid: user ? user.uid : '',
        email: user && user.email ? user.email : '',
        displayName: user ? user.displayName : '',
        phoneNumber: user ? user.phoneNumber : '',
        photoUrl: user ? user.photoURL : '',
        role: idTokenResult?.claims.role,
        password: '',
      };
      getCurrentUser(formattedUser);
      return () => unsubscribe();
    });
  }, []);

  const handleLogin = (data: FormInputs) => {
    signIn(data.email, data.password);
  };

  return <SignIn onLogin={handleLogin} />;
};

export default SignInContainer;
