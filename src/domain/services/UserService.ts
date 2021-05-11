import { sign, verify } from 'jsonwebtoken';
import User from '../objects/User';
import UserRepository from '../repositories/UserRepository';

const storageKey = 'auth';

const generateToken = ({ uid, email, displayName, phoneNumber, photoUrl, role }: User) => {
  const token = sign({ uid, email, displayName, phoneNumber, photoUrl, role }, uid, {
    expiresIn: '2 days',
  });
  return token;
};

export const signIn = (repository: UserRepository) => async (
  username: User['email'],
  password: User['password']
): Promise<User> => {
  try {
    const result = await repository.signIn(username, password);
    const authToken = generateToken(result);
    localStorage.setItem(storageKey, authToken);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const signOut = (repository: UserRepository) => async (): Promise<boolean> => {
  try {
    const result = await repository.signOut();
    localStorage.removeItem(storageKey);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const getStoredUser = (user: User): User | null => {
  try {
    if (!user.uid) {
      return null;
    }
    const storedUser = localStorage.getItem(storageKey);
    if (!storedUser) {
      const authToken = generateToken(user);
      localStorage.setItem(storageKey, authToken);
      return user;
    }
    const decoded = verify(storedUser, user.uid);
    return decoded as User;
  } catch (error) {
    throw new Error(error);
  }
};
