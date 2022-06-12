
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOjeZqYf6zOt_Ym67H_qJmShsoXImG4Zg",
  authDomain: "main-test-4261b.firebaseapp.com",
  projectId: "main-test-4261b",
  storageBucket: "main-test-4261b.appspot.com",
  messagingSenderId: "588872573738",
  appId: "1:588872573738:web:b9fc2f37d35e0b35843453"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export const firebase = {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
};