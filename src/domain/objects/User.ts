export default interface User {
  uid: string;
  email: string;
  password: string;
  displayName: string | null;
  phoneNumber: string | null;
  photoUrl: string | null;
  role: string | null;
}
