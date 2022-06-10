import 'dotenv/config'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(process.env);
// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: process.env.API_KEY_FIREBASE,
  authDomain: "phonebookbc14.firebaseapp.com",
  projectId: "phonebookbc14",
  storageBucket: "phonebookbc14.appspot.com",
  messagingSenderId: "151695674999",
  appId: "1:151695674999:web:e523133df33a0664cb4072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);