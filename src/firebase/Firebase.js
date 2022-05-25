// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FacebookAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKba_bNm1Gt9qB6ERmMg4JSXYdaH2u7bk",
  authDomain: "app-ptwheater.firebaseapp.com",
  projectId: "app-ptwheater",
  storageBucket: "app-ptwheater.appspot.com",
  messagingSenderId: "400943170841",
  appId: "1:400943170841:web:08811f5ca6f49b22baf188"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const DB = getFirestore();
const facebook = new FacebookAuthProvider();

export { app, google, DB, facebook}