// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1ea8Y3mobQYzyHP9_7g87lDRh0SYuvzw",
  authDomain: "phonebookbc14.firebaseapp.com",
  databaseURL: "https://phonebookbc14-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "phonebookbc14",
  storageBucket: "phonebookbc14.appspot.com",
  messagingSenderId: "151695674999",
  appId: "1:151695674999:web:e523133df33a0664cb4072"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const auth=getAuth();
