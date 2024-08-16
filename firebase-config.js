import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCxOGMrOfDUBn6UT8Cl3il-XX6Oa722R8",
  authDomain: "inscribe-9eeee.firebaseapp.com",
  projectId: "inscribe-9eeee",
  storageBucket: "inscribe-9eeee.appspot.com",
  messagingSenderId: "844597775903",
  appId: "1:844597775903:web:29a66f8eec6adcd3e6cf2a"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();

export { auth, firestore, provider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut };