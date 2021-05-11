import User from '../objects/User';

export default interface UserRepository {
  signIn: (username: User['email'], password: User['password']) => Promise<User>;
  signOut: () => Promise<boolean>;
}
