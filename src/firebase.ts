import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Copy and paste this into your JavaScript code to initialize the Firebase SDK.
// You will also need to load the Firebase SDK.
// See https://firebase.google.com/docs/web/setup for more details.

firebase.initializeApp({
  projectId: 'web-admin-c2707',
  appId: '1:854137243639:web:2b865ba0c4c0deecde50f2',
  storageBucket: 'web-admin-c2707.appspot.com',
  locationId: 'us-central',
  apiKey: 'AIzaSyApwWLVLom96lJL2OnGH4JI_xB1BicJROc',
  authDomain: 'web-admin-c2707.firebaseapp.com',
  messagingSenderId: '854137243639',
});

const db = firebase.firestore();
const auth = firebase.auth;

// eslint-disable-next-line no-restricted-globals
if (location.hostname === 'localhost') {
  db.useEmulator('localhost', 8080);
  // @ts-ignore
  auth().useEmulator('http://localhost:9099/', { disableWarnings: true });
}

export default firebase;
export { db, auth };
