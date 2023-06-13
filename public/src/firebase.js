// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpCCo6ws7DLhq0mzfBviWpiyGPLVysGwk",
  authDomain: "helperapp-1eb6d.firebaseapp.com",
  projectId: "helperapp-1eb6d",
  storageBucket: "helperapp-1eb6d.appspot.com",
  messagingSenderId: "945646308611",
  appId: "1:945646308611:web:4092572e4eb9d41fd62d36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

