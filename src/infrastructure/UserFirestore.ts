import User from '../domain/objects/User';
import UserRepository from '../domain/repositories/UserRepository';
import { auth } from '../firebase';

export default class UserFirestore implements UserRepository {
  public async signIn(username: User['email'], password: User['password']): Promise<User> {
    try {
      const { user } = await auth().signInWithEmailAndPassword(username, password);
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
      return formattedUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async signOut(): Promise<boolean> {
    try {
      await auth().signOut();
      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
}
