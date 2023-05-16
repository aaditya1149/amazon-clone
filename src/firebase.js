// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcX2H11RZIL7autyVDcAh9hMt8xFipWgQ",
  authDomain: "clone-2a9df.firebaseapp.com",
  projectId: "clone-2a9df",
  storageBucket: "clone-2a9df.appspot.com",
  messagingSenderId: "709935046131",
  appId: "1:709935046131:web:97796a1f3445ad40030686",
  measurementId: "G-1MMR0W8VQL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};