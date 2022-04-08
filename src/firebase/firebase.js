// import firebase from 'firebase';

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCglg2FlNituv_mTNBeOkbW_iWvq4JstVw",
//     authDomain: "student-account-49f41.firebaseapp.com",
//     projectId: "student-account-49f41",
//     storageBucket: "student-account-49f41.appspot.com",
//     messagingSenderId: "733651407729",
//     appId: "1:733651407729:web:f241296595b44408c81cd0",
//     measurementId: "G-8R0KE4000V",
//   };

//   firebase.initializeApp(firebaseConfig);
//   var auth = firebase.auth();
//   var provider = new firebase.auth.GoogleAuthProvider(); 
//   export {auth , provider};


// import "regenerator-runtime/runtime";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
// import React, { useState, useEffect } from 'react';
// // Authentication
// const firebaseConfig = {
//   apiKey: "AIzaSyCglg2FlNituv_mTNBeOkbW_iWvq4JstVw",
//   authDomain: "student-account-49f41.firebaseapp.com",
//   projectId: "student-account-49f41",
//   storageBucket: "student-account-49f41.appspot.com",
//   messagingSenderId: "733651407729",
//   appId: "1:733651407729:web:f241296595b44408c81cd0",
//   measurementId: "G-8R0KE4000V",
// }
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// export default getFirestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCglg2FlNituv_mTNBeOkbW_iWvq4JstVw",
  authDomain: "student-account-49f41.firebaseapp.com",
  projectId: "student-account-49f41",
  storageBucket: "student-account-49f41.appspot.com",
  messagingSenderId: "733651407729",
  appId: "1:733651407729:web:f241296595b44408c81cd0",
  measurementId: "G-8R0KE4000V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);