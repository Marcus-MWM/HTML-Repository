// import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN2px-MFqjOSz3EJ7XbcI4D1_zMx0UYeQ",
  authDomain: "fir-fin-d5446.firebaseapp.com",
  projectId: "fir-fin-d5446",
  storageBucket: "fir-fin-d5446.appspot.com",
  messagingSenderId: "800334292763",
  appId: "1:800334292763:web:b09daf52d193714baa15be",
  measurementId: "G-KEVJJLB2CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);